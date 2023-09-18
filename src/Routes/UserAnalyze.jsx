import "./UserAnalyze.css";

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import axios from "axios";
import {useEffect, useState} from "react";

function UserAnalyze(){

    const chartSetting = {
        yAxis: [
            {
                label: 'دقیقه',
            },
        ],
        width: 500,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'rotate(-90deg) translate(0px, -20px)',
            },
        },
    };

    const [dataset , setAnalyze] = useState([{
        date: '1402' ,
        time: 20
    }])
    const [userData , setData] = useState([]);
    const [timeSpent , setTimeSpent] = useState(0);
    const [dates , setDates] = useState([]);
    const [detailCourse , setDetailCourse] = useState({})
    const [data , setDataAn] = useState([]);
    const [allLengthQuiz , setAllLengthQuiz] = useState(0);

    const valueFormatter = (value) => `${value}mm`;


    const size = {
        width: 400,
        height: 200,
    };

    useEffect( () => {
        if (localStorage.getItem("user_id")) {
             axios
                .get(`http://localhost:1337/api/users-courses/${localStorage.getItem("user_id")}`)
                .then(response => {
                    setData(response.data.data.attributes);
                    setupData(response);
                })
                .catch(error => {
                    console.log(error)
                });
        }


    } , [])

    function setupData(response){
        let unStableDate = [];
        let unStableLength = 0;
        let totalTime = 0;
        let arrayMountAnalyze = [];
        let result = {};
        let lastAnalyze = [];
        let timeCourse = {
            hundred: {status: []} ,
            three: {status: []}
        }

        response.data.data.attributes.times_quiz.forEach(item => {
            totalTime += item.time
            unStableDate.push(item.date);
            if(item.quizes.quiz_title == "تمرین با اعداد حدود 100"){
                timeCourse.hundred = {
                    quiz_title: item.quizes.quiz_title ,
                    courseTitle: item.quizes.courseTitle ,
                    status : [...timeCourse?.hundred?.status , ...item.quizes.status] ,
                    time: item.time
                }
                arrayMountAnalyze.push({date: item.date, time: item.time})
            }
            else{
                timeCourse.three = {
                    quiz_title: item.quizes.quiz_title ,
                    courseTitle: item.quizes.courseTitle ,
                    status : [...timeCourse?.three?.status , ...item.quizes.status] ,
                    time: item.time
                }
                arrayMountAnalyze.push({date: item.date, time: item.time})
            }
            unStableLength += item.quizes.status.length
        })

        arrayMountAnalyze.forEach(item => {
            const date = item.date;
            const time = parseInt(item.time);

            if (result[date]) {
                result[date] += time;
            } else {
                result[date] = time;
            }
        });

        for(let i in result){
            lastAnalyze.push({
                date : i ,
                time: +result[i] / 60
            })
        }


        console.log(result)

        unStableDate = [...new Set(unStableDate)];

        setAnalyze(lastAnalyze);

        setAllLengthQuiz(unStableLength)
        setDates(unStableDate);
        setTimeSpent(totalTime);
        setDetailCourse(timeCourse);

    }

    useEffect(() => {
        console.log(dates , timeSpent , detailCourse );
        let unStable = [
            { value: detailCourse.hundred?.status.length , label: detailCourse.hundred?.courseTitle } ,
            { value: detailCourse.three?.status.length , label: `${detailCourse.three?.courseTitle ? detailCourse.three?.courseTitle : 'اعداد حدود 3'}` }
        ]

        setDataAn(unStable)

        console.log(data)

    } , [dates , timeSpent , detailCourse])

    return (
        <div className="d-flex flex-column user-analyze-wrapper">
            <div className="d-flex flex-column my-3 px-2">
                <p className="mb-0 text-muted">
                     نمودار پیشرفت در 30 روز گذشته .
                </p>
                <div className="d-flex align-items-center justify-content-evenly">
                    <div className="d-flex">
                        <ModeEditIcon  sx={{color: "#8bc34a"}}/>
                        <div className="content-chart">
                            <p className="mb-0 text-muted">
                                پاسخ داده شده
                            </p>
                            <p className="bold-text">
                                { allLengthQuiz }
                            </p>
                            <p className="mb-0 text-muted">
                                سوالات
                            </p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <TimerOutlinedIcon sx={{color: "#2979ff"}} />
                        <div className="content-chart">
                            <p className="mb-0 text-muted">
                                زمان
                            </p>
                            <p className="bold-text">
                                {`${timeSpent > 1000 ? `${Math.floor(timeSpent / 60 / 60)}ساعت ` : `${Math.floor(timeSpent / 60)} دقیقه `}`}
                            </p>
                            <p className="mb-0 text-muted">
                                تمرین
                            </p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <ExtensionOutlinedIcon sx={{color: "#f50057"}} />
                        <div className="content-chart">
                            <p className="mb-0 text-muted">
                                مهارت های جدید
                            </p>
                            <p className="bold-text">
                                { detailCourse.three?.quiz_title && detailCourse.hundred?.quiz_title ? '2' :  detailCourse.hundred?.quiz_title ? '1' : detailCourse.three?.quiz_title ? '1' : '0'}
                            </p>
                            <p className="mb-0 text-muted">
                                مهارت
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between p-2">
                <BarChart
                    dataset={dataset}
                    xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
                    series={[
                        { dataKey: 'time', label: 'تمرین', valueFormatter } ,
                    ]}
                    {...chartSetting}
                />

                <PieChart
                    series={[
                        {
                            arcLabel: (item) => `${item.label} (${item.value})`,
                            arcLabelMinAngle: 45,
                            data,
                            innerRadius: 30,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: -90,
                            endAngle: 180,
                            cx: 150,
                            cy: 95,
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontWeight: 'bold',
                        },
                    }}
                    {...size}
                />
            </div>
        </div>
    )

}

export default UserAnalyze;