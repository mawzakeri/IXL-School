import React, {useEffect, useState} from 'react';
import axios from "axios";
import jalaliMoment from 'jalali-moment';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TableComponent() {

    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedNumberIncorrect, setSelectedNumberIncorrect] = useState(80);
    const [alertStatus, setAlertStatus] = useState(false);
    const [alertRedStatus, setAlertRedStatus] = useState(false);
    const [correctStatus, setCorrectStatus] = useState(false);
    const [arrayAwnser, setArrayAwnser] = useState([]);
    const [shamsiDateNow, setShamsiDateNow] = useState();
    const [dataOld, setDataOld] = useState({});
    const [time , setTime] = useState(0);

    const handleCellClick = (number) => {
        setSelectedNumber(number);
        console.log(number);
        // ارسال عدد به کد های JS اینجا انجام شود
        // مثلا با استفاده از یک تابع callback به پدر یا انجام کارهای دیگر
    };

    function renderTableWithCorrect() {
        const table = [];

        for (let row = 1; row <= 10; row++) {
            const rowCells = [];

            for (let col = 1; col <= 10; col++) {
                const number = (row - 1) * 10 + col;
                const cellStyle = {
                    backgroundColor: selectedNumberIncorrect === number ? 'lightblue' : 'transparent',
                };

                rowCells.push(
                    <div
                        key={number}
                        className={`cell-size`}
                        style={cellStyle}
                    >
                        {number}
                    </div>
                );
            }

            table.push(
                <div key={row} className="d-flex row-border">
                    {rowCells}
                </div>
            );
        }

        return table;
    }

    const renderTable = () => {
        const table = [];

        for (let row = 1; row <= 10; row++) {
            const rowCells = [];

            for (let col = 1; col <= 10; col++) {
                const number = (row - 1) * 10 + col;
                const cellStyle = {
                    backgroundColor: selectedNumber === number ? 'lightblue' : 'transparent',
                };

                rowCells.push(
                    <div
                        key={number}
                        className="cell-size"
                        style={cellStyle}
                        onClick={() => handleCellClick(number)}
                    >
                        {number}
                    </div>
                );
            }

            table.push(
                <div key={row} className="d-flex row-border">
                    {rowCells}
                </div>
            );
        }

        return table;
    };

    function checkAwnser() {
        if (selectedNumber == '80') {
            setAlertStatus(true);
            setCorrectStatus(false);
            setTimeout(() => {
                setAlertStatus(false)
            }, 3000)
            setArrayAwnser(old => [...old, true])
        } else {
            setAlertRedStatus(true);
            setCorrectStatus(true);
            setTimeout(() => {
                setAlertRedStatus(false)
            }, 3000)
            setArrayAwnser(old => [...old, false])
        }

        const miladiDate = new Date();
        const shamsiDate = jalaliMoment(miladiDate).format('jYYYY/jMM/jDD');
        setShamsiDateNow(shamsiDate);
        const currentHour = miladiDate.getHours(); // ساعت فعلی (0 تا 23)
        const currentMinute = miladiDate.getMinutes(); // دقیقه فعلی

    }

    useEffect(() => {

        setInterval(() => {
            setTime((prev) => prev + 1)
        } , 1000)

        getUserCourse()

    }, []);


    function submitAnalyze() {
        if (dataOld && localStorage.getItem("user_id")) {
            axios
                .put(`http://localhost:1337/api/users-courses/${localStorage.getItem("user_course_id")}`, {

                    data:{
                        times_quiz: [
                            ...dataOld.times_quiz,
                            {
                                time,
                                date: shamsiDateNow,
                                quizes: {
                                    status: arrayAwnser,
                                    quiz_title: 'تمرین با اعداد حدود 100',
                                    courseTitle: 'ریاضی مبتدی'
                                }
                            }
                        ],
                        user_id: localStorage.getItem("user_id")
                    }

                })
                .then(response => {
                    console.log(response);
                    toast.success("آنالیز این درس با موفقیت ثبت شد .")
                })
                .catch(error => {
                    return;
                });
        }
    }

    function getUserCourse() {
        if (localStorage.getItem("user_id")) {
            axios
                .get(`http://localhost:1337/api/users-courses/${localStorage.getItem("user_id")}`)
                .then(response => {
                    console.log(response);
                    setDataOld(response.data.data.attributes)
                    localStorage.setItem("user_course_id", response.data.data.id)
                })
                .catch(error => {
                    axios
                        .post(`http://localhost:1337/api/users-courses/`, {
                            data: {
                                times_quiz: [],
                                user_id: localStorage.getItem("user_id")
                            }
                        })
                        .then(response => {
                            console.log(response.data.data.id);
                            setDataOld(response.data.data.attributes);
                            localStorage.setItem("user_course_id", response.data.data.id);
                        })
                        .catch(error => {
                            return;
                        });
                    return;
                });
        } else {
            toast.error("برای ثبت آنالیز ابتدا وارد حساب کاربری خود شوید .");
            return;
        }
        setTimeout(() => {
            console.log(dataOld)
        }, 500)
    }

    function sendDataToServer() {
        axios
            .post('http://localhost:1337/api/auth/local/register', {
                username: 'asd',
                email: 'asdfasd',
                password: '52sd4f65s',
            })
            .then(response => {
                console.log(response)
                return;
            })
            .catch(error => {
                return;
            });
    }

    return (
        <div className="d-flex flex-column">

            <button onClick={submitAnalyze} className="btn submit-color btn-f">
                ثبت آنالیز
            </button>

            <div className={`position-absolute alert-early ${alertStatus ? 'active' : ''}`}>
                آفرین درست جواب دادی
            </div>
            <div className={`position-absolute alert-early red ${alertRedStatus ? 'active' : ''}`}>
                جوابت اشتباه بود !
            </div>
            <p className="my-3">
                یک عدد مشخص کن که 1 کم تر از 81 باشه
            </p>
            <div className="d-flex flex-column border-wrapper">
                {renderTable()}
            </div>
            <button onClick={checkAwnser} className="btn submit-color my-3 col-2">
                ثبت پاسخ
            </button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {
                correctStatus ?
                    <div className="d-flex flex-column">
                        <p className="mb-3">
                            جواب صحیح :
                        </p>
                        <div className="d-flex flex-column border-wrapper">
                            {renderTableWithCorrect()}
                        </div>
                    </div>
                    : ''
            }

        </div>
    );
}

export default TableComponent;
