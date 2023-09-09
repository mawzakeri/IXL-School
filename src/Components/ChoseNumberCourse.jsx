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
    const [numberAwnserArray , setNumberAwnserArray] = useState({
        one: false ,
        two: false ,
        three: false
    })
    const [time , setTime] = useState(0);

    const handleCellClick = (number) => {
        setSelectedNumber(number);
        console.log(number);
        // ارسال عدد به کد های JS اینجا انجام شود
        // مثلا با استفاده از یک تابع callback به پدر یا انجام کارهای دیگر
    };

    function checkAwnser() {

        console.log(numberAwnserArray)

        if (numberAwnserArray.one == '3' && numberAwnserArray.two == "3" && !numberAwnserArray.three) {
            console.log("sad")
            setAlertStatus(true);
            setCorrectStatus(false);
            setTimeout(() => {
                setAlertStatus(false)
            }, 3000)
            setArrayAwnser(old => [...old, true])
        }
        else {
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

    function selectChoose(target , objName , value){
        if(target.nodeName == "IMG"){
            const myTarget = target.parentElement.parentElement;

            if(myTarget.dataset.active == "true") {
                myTarget.dataset.active = false
                myTarget.classList.remove("active");
                const unStable = numberAwnserArray;
                unStable[objName] = false
                setNumberAwnserArray(unStable)
            }
            else{
                myTarget.dataset.active = true
                myTarget.classList.add("active");
                const unStable = numberAwnserArray;
                unStable[objName] = value
                setNumberAwnserArray(unStable)
            }

        }
        else if(target.className.includes("check-box")){
            const myTarget = target.parentElement;
            if(myTarget.dataset.active == "true") {
                myTarget.dataset.active = false
                myTarget.classList.remove("active");
                const unStable = numberAwnserArray;
                unStable[objName] = false
                setNumberAwnserArray(unStable)
            }
            else{
                myTarget.dataset.active = true
                myTarget.classList.add("active");
                const unStable = numberAwnserArray;
                unStable[objName] = value
                setNumberAwnserArray(unStable)
            }


        }
        else{

            if(target.dataset.active == "true"){
                target.dataset.active = false
                target.classList.remove("active")
                const unStable = numberAwnserArray;
                unStable[objName] = false
                setNumberAwnserArray(unStable)
            }
            else{
                target.dataset.active = true
                target.classList.add("active")
                const unStable = numberAwnserArray;
                unStable[objName] = value
                setNumberAwnserArray(unStable)
            }

        }

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
                همه 3 هارو انتخاب کن .
            </p>
            <div className="d-flex gap-2">
                <div onClick={e => selectChoose(e.target , "one" , "3")} data-active="false" className="number-box">
                    3
                    <div className="check-box">
                        <img src="https://www.ixl.com/qgen_res/math/svg/check_mark.svg" alt=""/>
                    </div>
                </div>
                <div onClick={e => selectChoose(e.target , "two" , "3")} data-active="false" className="number-box">
                    3
                    <div className="check-box">
                        <img src="https://www.ixl.com/qgen_res/math/svg/check_mark.svg" alt=""/>
                    </div>
                </div>
                <div onClick={e => selectChoose(e.target , "three" , "1")} data-active="false" className="number-box">
                    1
                    <div className="check-box">
                        <img src="https://www.ixl.com/qgen_res/math/svg/check_mark.svg" alt=""/>
                    </div>
                </div>
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
                        <div className="d-flex flex-column">
                            <div className="d-flex gap-2">
                                <div className="number-box active">
                                    3
                                    <div className="check-box">
                                        <img src="https://www.ixl.com/qgen_res/math/svg/check_mark.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="number-box active">
                                    3
                                    <div className="check-box">
                                        <img src="https://www.ixl.com/qgen_res/math/svg/check_mark.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="number-box">
                                    1
                                    <div className="check-box">
                                        <img src="https://www.ixl.com/qgen_res/math/svg/check_mark.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''
            }

        </div>
    );
}

export default TableComponent;
