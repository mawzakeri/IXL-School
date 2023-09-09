/*import "UserHistory.css";*/


import LinearProgress from '@mui/material/LinearProgress';
import {useEffect, useState} from "react";
import axios from "axios";


function UserHistory(){

    const [userData , setData] = useState([]);
    const [timeSpent , setTimeSpent] = useState(0);
    const [dates , setDates] = useState([]);
    const [detailCourse , setDetailCourse] = useState({})
    const [data , setDataAn] = useState([]);
    const [allLengthQuiz , setAllLengthQuiz] = useState(0);


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
        let timeCourse = {
            hundred: {status: []} ,
            three: {status: []}
        }
        let negetiveLength = 0;
        let minusLength = 0;

        response.data.data.attributes.times_quiz.forEach(item => {
            totalTime += item.time
            unStableDate.push(item.date);
            if(item.quizes.quiz_title == "تمرین با اعداد حدود 100"){
                item.quizes.status.forEach(status => {
                    if(status)
                        negetiveLength += 1
                    else
                        minusLength += 1

                    console.log(status , negetiveLength , minusLength)
                })
                timeCourse.hundred = {
                    quiz_title: item.quizes.quiz_title ,
                    courseTitle: item.quizes.courseTitle ,
                    status : [...timeCourse?.hundred?.status , ...item.quizes.status] ,
                    rangeOfInCorrect: !isNaN(timeCourse.hundred?.rangeOfInCorrect) ? timeCourse.hundred?.rangeOfInCorrect + minusLength : minusLength,
                    rangeOfCorrect: !isNaN(timeCourse.hundred?.rangeOfCorrect) ? timeCourse.hundred?.rangeOfCorrect + negetiveLength : negetiveLength ,
                    time: item.time
                }
                negetiveLength = 0
                minusLength = 0
            }
            else{

                item.quizes.status.forEach(status => {
                    if(status)
                        negetiveLength += 1
                    else
                        minusLength += 1
                })

                timeCourse.three = {
                    quiz_title: item.quizes.quiz_title ,
                    courseTitle: item.quizes.courseTitle ,
                    status : [...timeCourse?.three?.status , ...item.quizes.status] ,
                    rangeOfInCorrect: !isNaN(timeCourse.hundred?.rangeOfInCorrect) ? timeCourse.hundred?.rangeOfInCorrect + minusLength : minusLength,
                    rangeOfCorrect: !isNaN(timeCourse.hundred?.rangeOfCorrect) ? timeCourse.hundred?.rangeOfCorrect + negetiveLength : negetiveLength ,
                    time: item.time
                }
                negetiveLength = 0
                minusLength = 0
            }

            unStableLength += item.quizes.status.length

        })
        unStableDate = [...new Set(unStableDate)];

        console.log(unStableDate,totalTime,timeCourse)

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
        <div className="d-flex flex-column history-wrapper py-3">
            <h2 className="text-muted">
                تاریخچه و پیشرفت دانش آموز :
            </h2>

            <div className="d-flex flex-column math-bar py-3">

                <div className="d-flex justify-content-between align-items-center bg-info p-3 my-2">
                    <div className="col-6 d-flex justify-content-start align-items-center">
                        <p className="white-text mb-0">
                            مهارت
                        </p>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-start ">
                        <p className="white-text px-1 col-2"> مدت تمرین </p>
                        <p className="white-text px-1 col-2"> تعداد سوالات </p>
                        <p className="white-text px-1 col-7"> نمره </p>
                    </div>
                </div>
                {
                    detailCourse?.hundred?.quiz_title ?
                        <div className="d-flex flex-column col-12 p-3">
                            <div className="col-12 d-flex">
                                <div className="col-6">
                                    <p className="">
                                        {

                                            detailCourse?.hundred?.quiz_title ? detailCourse?.hundred?.quiz_title : '*'

                                        }
                                    </p>
                                </div>
                                <div className="col-6 d-flex">
                                    <p className="px-1 col-2">
                                        {timeSpent == 0 ? '*' : `${timeSpent > 500 ? `${timeSpent / 60 / 60}ساعت ` : `${timeSpent / 60} دقیقه `}`}
                                    </p>
                                    <p className="px-1 col-2">
                                        {detailCourse?.hundred?.status.length}
                                        سوال
                                    </p>
                                    <div className="px-1 d-flex col-7">
                                        <p className="col-2 px-1">
                                            {Math.floor(((detailCourse?.hundred?.rangeOfCorrect / (detailCourse?.hundred?.rangeOfInCorrect + detailCourse?.hundred?.rangeOfCorrect)) * 100))}
                                            درصد
                                        </p>
                                        <div className="progress col-10">
                                            <div className="progress-bar progress-bar bg-success"
                                                 style={{width: (detailCourse?.hundred?.rangeOfCorrect / (detailCourse?.hundred?.rangeOfInCorrect + detailCourse?.hundred?.rangeOfCorrect)) * 100}}
                                                 role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                 aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>-</div>
                }
                {
                    detailCourse?.three?.quiz_title ?
                    <div className="d-flex flex-column col-12 p-3">
                        <div className="col-12 d-flex">
                            <div className="col-6">
                                <p className="">
                                    {

                                        detailCourse?.three?.quiz_title ? detailCourse?.three?.quiz_title : '*'

                                    }
                                </p>
                            </div>
                            <div className="col-6 d-flex">
                                <p className="px-1 col-2">
                                    {timeSpent == 0 ? '*' : `${timeSpent > 500 ? `${timeSpent / 60 / 60}ساعت ` : `${timeSpent / 60} دقیقه `}`}
                                </p>
                                <p className="px-1 col-2">
                                    { detailCourse?.three?.status.length }
                                    سوال
                                </p>
                                <div className="px-1 col-7">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar bg-success" style={{width: (detailCourse?.three?.rangeOfCorrect / detailCourse?.three?.rangeOfInCorrect) * 100 }} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        :
                        <div>
                            -
                        </div>
                }

            </div>

        </div>
    )
}

export default UserHistory;