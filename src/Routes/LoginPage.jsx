import "./LoginPage.css";
import {useState} from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage(){

    const [username , setUsername] = useState(null)
    const [email , setEmail] = useState(null)
    const [password , setPassword] = useState(null)

    function registerUser(){
        axios
            .post('http://localhost:1337/api/auth/local/register', {
                username,
                email ,
                password,
            })
            .then(response => {
                localStorage.setItem("user_id" , response.data.user.id);
                toast.success("با موفقیت ثبت نام شدی");
                return ;
            })
            .catch(error => {
                toast.error("کاربری با این مشخصات وجود ندارد");
                return ;
            });
    }

    function setInput(e , name){
        if(name == 'username')
            setUsername(e.target.value);
        else if(name == 'email')
            setEmail(e.target.value);
        else
            setPassword(e.target.value)
    }

    return (
        <div className="main-wrapper-login">
            <div className="container">

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

                <div className="d-flex flex-column border-red overflow-hidden">
                    <div className="form-box d-flex flex-column">
                        <h2 className="white-text mb-4">
                            ixl رو رایگان شروع کن
                        </h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="d-flex align-items-center mx-2">
                                <img className="img-icon" src="http://ixl.com//dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/educators/icon-loved-by-millions.svg" alt=""/>
                                <div className="d-flex flex-column">
                                    <p className="white-text">
                                        فضایی دوستانه
                                    </p>
                                    <p className="white-text">
                                        با 14 میلیون دانش آموز
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mx-2">
                                <img className="img-icon" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/educators/icon-loved-by-millions.svg" alt=""/>
                                <div className="d-flex flex-column">
                                    <p className="white-text">
                                        مطابق استاندارد های جهانی
                                    </p>
                                    <p className="white-text">
                                        تمامی کلاس ها و امتخان ها
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mx-2">
                                <img className="img-icon" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/educators/icon-boost-achievement.svg" alt=""/>
                                <div className="d-flex flex-column">
                                    <p className="white-text">
                                        توانایی جست و جوی قدرتمند
                                    </p>
                                    <p className="white-text">
                                        در بین سوالات دانش آموزان
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center white-back p-5">
                        <h2 className="h2-contact-info h2-trailing-line col-12 mb-3">
                            <p>اطلاعات اولیه شما</p>
                        </h2>
                        <div className="d-flex flex-column align-items-center justify-content-center col-12">
                            <div className="d-flex align-items-center my-2 col-12">
                                <label className="input-label mx-2 col-1">
                                    نام کاربری :
                                </label>
                                <input onChange={e => setInput(e , 'username')} type="text" className="custom-input col-5"/>
                            </div>
                            <div className="d-flex align-items-center my-2 col-12">
                                <label className="input-label mx-2 col-1">
                                    ایمیل :
                                </label>
                                <input onChange={e => setInput(e , 'email')} type="text" className="custom-input col-5"/>
                            </div>
                            <div className="d-flex align-items-center my-2 col-12">
                                <label className="input-label mx-2 col-1">
                                    رمزعبور :
                                </label>
                                <input onChange={e => setInput(e , 'password')} type="text" className="custom-input col-5"/>
                            </div>
                        </div>
                        <button onClick={registerUser} className="btn submit-color col-2 align-items-start">
                            ارسال اطلاعات
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoginPage;