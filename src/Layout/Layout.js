
import "./Layout.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout(props){

    const [username , setUsername] = useState(null);
    const [password , setPassword] = useState(null);

    function loginUser(){
        axios
            .post('http://localhost:1337/api/auth/local', {
                identifier: username,
                password,
            })
            .then(response => {
                localStorage.setItem("user_id" , response.data.user.id);
                toast.success("با موفقیت وارد شدی");
                return ;
            })
            .catch(error => {
                toast.error("کاربری با این مشخصات وجود ندارد");
                return ;
            });
    }

    function setInputValue(e , name) {
        if(name == 'username')
            setUsername(e.target.value);
        else
            setPassword(e.target.value)
    }

    return (
        <div dir="rtl" className="d-flex flex-column col-12">
                <div className="d-flex align-items-center justify-content-between px-4 py-1">
                    <div className="d-flex align-items-center col-5">
                        <div className="d-flex logo-wrapper">
                            <img src="/main-page/logo.png" alt=""/>
                        </div>
                        <input type="text" className="form-control mx-1 med-input underline-input" placeholder="جست و جو ..."/>
                    </div>
                    <div className="d-flex align-items-center col-5 flex-wrap">
                        <button onClick={loginUser} className="btn submit-color">
                            ورود
                        </button>
                        <input type="text" onChange={e => setInputValue(e , 'username')} name="" id="" className="form-control small-input mx-1" placeholder="نام کاربری"/>
                        <input type="text" onChange={e => setInputValue(e , 'password')} name="" id="" className="form-control small-input mx-1" placeholder="رمز عبور"/>
                        <div className="d-flex align-items-center">
                            <p className="mb-0 white-space-none">
                                مرا به خاطر بسپار
                            </p>
                            <input type="checkbox" name="" id=""/>
                        </div>
                    </div>
                </div>
                <nav className="d-flex align-items-center justify-content-center px-4 py-3 ">

                    <ul className="menu-navbar d-flex align-items-center col-6 justify-content-start">
                        <Link to="/math-category">
                            <li className="submenu-parent">
                                آموزش ها
                                <ul className="sub-menu">
                                    <Link to="/math-category">
                                        <li>
                                            <svg className="mx-1" aria-hidden="true" className="subcategory-icon" width="21" height="19"
                                                 viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M9.34502 17.8062C9.94256 17.6134 19.0496 14.5511 19.0496 14.5511C19.0496 14.5511 11.359 10.3532 11.261 10.3829C9.40807 10.9511 1.27571 12.8535 1.08301 12.8535L9.34502 17.8062Z"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M9.5407 0.326042L9.81481 0.00167847L10.0583 0.348429C10.0597 0.350447 10.0612 0.352482 10.0626 0.354534L20.1478 14.7174L9.47294 18.146C9.46815 18.1476 9.4633 18.1492 9.45841 18.1506L9.3256 18.1933L9.20427 18.1223C9.20063 18.1203 9.19703 18.1182 9.19348 18.116L0.118164 12.808L0.341253 12.5123L0.735778 11.9893L1.77593 10.6107L4.93261 6.4271C7.80505 2.62064 9.34189 0.585122 9.52164 0.350451C9.52762 0.342011 9.53398 0.333866 9.5407 0.326042ZM9.43622 1.55449C8.67112 2.56733 7.23777 4.46612 5.46051 6.82129L2.30186 11.0075L1.26172 12.3861L1.18249 12.4911L9.21415 10.5749L9.43622 1.55449ZM9.19738 11.2562L1.7911 13.0233L9.04936 17.2685L9.19738 11.2562ZM9.70566 17.3793L9.86029 11.098L11.3929 10.7324L18.5818 14.5284L9.70566 17.3793ZM9.87707 10.4167L10.0565 3.12804C10.109 3.14776 10.1672 3.15433 10.2265 3.14441C10.4059 3.11439 10.527 2.94459 10.497 2.76515L10.3552 1.91772L18.7489 13.8716L11.7358 10.1684L11.5517 9.0681C11.5217 8.88867 11.3519 8.76755 11.1724 8.79758C10.993 8.8276 10.8719 8.9974 10.9019 9.17684L11.0621 10.134L9.87707 10.4167ZM11.3408 7.80751L11.1298 6.54692C11.0998 6.36749 10.93 6.24637 10.7506 6.2764C10.5711 6.30642 10.45 6.47622 10.48 6.65566L10.691 7.91625C10.721 8.09568 10.8908 8.2168 11.0702 8.18677C11.2497 8.15675 11.3708 7.98695 11.3408 7.80751ZM10.7079 4.02574L10.9189 5.28633C10.9489 5.46577 10.8278 5.63557 10.6484 5.66559C10.4689 5.69562 10.2991 5.5745 10.2691 5.39507L10.0582 4.13448C10.0281 3.95504 10.1492 3.78524 10.3287 3.75521C10.5081 3.72519 10.6779 3.84631 10.7079 4.02574Z"></path>
                                            </svg>
                                            <span>
                                            ریاضی
                                        </span>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                        </Link>
                        {
                            localStorage.getItem("user_id") ?
                                <Link to="/history">
                                    <li>
                                        تاریخچه
                                    </li>
                                </Link>
                                :
                                <Link to="/Login">
                                    <li>تاریخچه</li>
                                </Link>
                        }
                        {
                            localStorage.getItem("user_id") ?
                                <Link to="/analyze">
                                    <li>آنالیز</li>
                                </Link>
                                :
                                <Link to="/Login">
                                    <li>آنالیز</li>
                                </Link>
                        }
                    </ul>
                    <ul className="menu-navbar d-flex align-items-center col-6 justify-content-end">
                        <Link to="/Login">
                            <li>ثبت نام</li>
                        </Link>
                    </ul>

                </nav>
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
            <main>
                { props.children }
            </main>
            <footer className="d-flex flex-column col-12 align-items-center">
                <div className="d-flex col-12 py-3">
                    <div className="footer-blurb-container p-2">
                        <img alt="IXL" className="footer-ixl-logo mb-2" src="/main-page/logo.png"/>

                            <p className="footer-blurb-text">
                                IXL is personalized learning. With a comprehensive K-12 curriculum, individualized
                                guidance, and real-time analytics, IXL meets the unique needs of each learner.
                            </p>

                            <div className="footer-questions-answered">
                                <span id="questionsReceivedCount" className="questions-answered-number">
                                    130,749,437,269
                                </span>
                                <span className="questions-answered-text"> questions answered</span>
                                !
                            </div>

                            <a href="/membership"
                               className="info-cta-btn info-cta-33-15 info-cta-green footer-blurb-button"
                               data-ga-click-event-name="footer" data-ga-click-event-detail="/membership">Join now</a>

                    </div>
                    <ul className="footer-submenu d-flex flex-wrap col-12 col-lg-9 p-2">
                        <li className="footer-submenu-item footer-submenu-offer col-12 col-md-6 col-lg-3">
                                <label htmlFor="dropdown-what-we-offer"><h2 className="footer-submenu-header">
                                    What we offer
                                </h2></label>
                                <ul className="footer-dropdown">



                                    <li><a href="/membership/family/pricing" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/membership/family/pricing">For families</a></li>


                                    <li><a href="/membership/teachers" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/membership/teachers">For classrooms</a></li>
                                    <li><a href="/membership/administrators" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/membership/administrators">For
                                        schools districts</a></li>


                                    <li><a href="/?notHs=true" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/?notHs=true">For
                                        K-12</a></li>


                                    <li><a href="/high-school" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/high-school">For
                                        high schools</a></li>


                                    <li><a href="/math" className="footer-submenu-lk " data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/math">Math</a></li>


                                    <li><a href="/ela" className="footer-submenu-lk " data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/ela">Language arts</a></li>


                                    <li><a href="/science" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/science">Science</a></li>


                                    <li><a href="/social-studies" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/social-studies">Social studies</a></li>


                                    <li><a href="/spanish" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/spanish">Spanish</a></li>


                                    <li><a href="/recommendations" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/recommendations">Recommendations</a></li>


                                    <li><a href="/diagnostic" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/diagnostic">Diagnostic</a></li>


                                    <li><a href="/awards" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/awards">Awards</a></li>


                                    <li><a href="/analytics" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/analytics">Analytics</a></li>


                                    <li><a href="/standards/" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/standards/">Standards</a></li>
                                    <li>
                                        <a href="/apps" className="footer-submenu-lk " data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/apps">Mobile apps</a>
                                    </li>



                                </ul>
                        </li>
                        <li className="footer-submenu-item footer-submenu-resources col-12 col-md-6 col-lg-3">
                                <label htmlFor="dropdown-resources">
                                    <h2 className="footer-submenu-header">
                                        Resources
                                    </h2>
                                </label>
                                <ul className="footer-dropdown">


                                    <li><a href="/help-center" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/help-center">Help
                                        center</a></li>


                                    <li><a href="/userguides" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/userguides">User
                                        guides</a></li>


                                    <li><a href="/feedback" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/feedback">Tell
                                        us what you think</a></li>


                                    <li><a href="https://blog.ixl.com" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="https://blog.ixl.com">Blog</a></li>


                                    <li><a href="/testimonials" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/testimonials">Testimonials</a></li>


                                    <li><a href="/case-studies" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/case-studies">Case
                                        studies</a></li>


                                    <li><a href="/membership/teachers/research" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/membership/teachers/research">Research</a></li>


                                    <li><a href="/resources/ixl-live" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/resources/ixl-live">IXL Live</a></li>


                                    <li><a href="/membership/administrators/professional-learning"
                                           className="footer-submenu-lk " data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/membership/administrators/professional-learning">Professional
                                        learning</a></li>


                                    <li><a href="/help" className="footer-submenu-lk " data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/help">Help</a></li>


                                    <li><a href="/contact" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/contact">Contact
                                        us</a></li>

                                </ul>
                                <div className="social-lks">
                                    <a className="social-lk" href="https://www.facebook.com/IXL" target="_blank"><img
                                        alt="Facebook" className="footer-social-icon"
                                        src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/facebook-icon.svg"/></a>

                                    <a className="social-lk" href="https://twitter.com/IXLLearning" target="_blank"><img
                                        alt="Twitter" className="footer-social-icon"
                                        src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/twitter-icon.svg"/></a>

                                    <a className="social-lk" href="https://www.pinterest.com/IXL/" target="_blank"><img
                                        alt="Pinterest" className="footer-social-icon"
                                        src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/pinterest-icon.svg"/></a>

                                    <a className="social-lk" href="https://www.instagram.com/ixl/" target="_blank"><img
                                        alt="Instagram" className="footer-social-icon"
                                        src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/instagram-icon.svg"/></a>


                                    <a className="social-lk" href="https://www.youtube.com/ixl/" target="_blank">
                                        <img
                                        alt="Youtube" className="footer-social-icon"
                                        src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/youtube-icon.svg"/>
                                    </a>

                                </div>
                        </li>
                        <li className="footer-submenu-item footer-submenu-about col-12 col-md-6 col-lg-3">
                                <label htmlFor="dropdown-about"><h2 className="footer-submenu-header">
                                    About
                                </h2></label>
                                <ul className="footer-dropdown">


                                    <li><a target="_blank" href="/company" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/company">Company</a></li>


                                    <li><a href="/press/news" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer" data-ga-click-event-detail="/press/news">Press
                                        room</a></li>


                                    <li><a target="_blank" href="/company/careers" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/company/careers">Careers</a></li>


                                    <li><a href="/termsofservice" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/termsofservice">Terms of service</a></li>


                                    <li><a href="/privacypolicy" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/privacypolicy"><b>Privacy policy</b></a></li>

                                </ul>
                        </li>
                        <li className="footer-submenu-item footer-submenu-international col-12 col-md-6 col-lg-3">
                                <label htmlFor="dropdown-international"><h2 className="footer-submenu-header">
                                    International
                                </h2></label>
                                <ul className="footer-dropdown">


                                    <li><a href="https://www.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="1">United States</a></li>


                                    <li><a href="https://au.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="5">Australia</a></li>


                                    <li><a href="https://br.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="15">Brasil</a></li>


                                    <li><a href="https://ca.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="2">Canada</a></li>


                                    <li><a href="https://es.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="13">España</a></li>


                                    <li><a href="https://fr.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="12">France</a></li>


                                    <li><a href="https://in.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="10">India</a></li>


                                    <li><a href="https://ie.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="4">Ireland</a></li>


                                    <li><a href="https://la.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="17">Latinoamérica</a></li>


                                    <li><a href="https://nz.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="6">New Zealand</a></li>


                                    <li><a href="https://za.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="7">South Africa</a></li>


                                    <li><a href="https://uk.ixl.com" className="footer-submenu-lk switchLk"
                                           data-edition="3">United Kingdom</a></li>


                                    <li><a href="/international" className="footer-submenu-lk "
                                           data-ga-click-event-name="footer"
                                           data-ga-click-event-detail="/international">All editions</a></li>

                                </ul>
                        </li>
                    </ul>
                </div>
                <ul className="home-page-footer__family-brands col-12 col-lg-9 d-flex flex-wrap">

                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.rosettastone.com/" className="family-brands__link">
                            <div className="family-brands__logo-container rosetta">
                                <img alt="" className="family-brands__logo rosetta" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/rosetta-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/rosetta-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/rosetta-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                Immersive learning<br/>for 25 languages
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.wyzant.com/" className="family-brands__link">
                            <div className="family-brands__logo-container wyzant">
                                <img alt="" className="family-brands__logo wyzant" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/wyzant-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/wyzant-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/wyzant-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                Trusted tutors<br/>for 300+ subjects
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.education.com/" className="family-brands__link">
                            <div className="family-brands__logo-container education">
                                <img alt="" className="family-brands__logo education" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/education-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/education-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/education-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                35,000 worksheets, games,<br/>and lesson plans
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.teacherspayteachers.com/" className="family-brands__link">
                            <div className="family-brands__logo-container tpt">
                                <img alt="" className="family-brands__logo tpt" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/tpt-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/tpt-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/tpt-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                Marketplace for millions of<br/>educator-created resources
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.vocabulary.com/" className="family-brands__link">
                            <div className="family-brands__logo-container vocab">
                                <img alt="" className="family-brands__logo vocab" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/vocab-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/vocab-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/vocab-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                Adaptive learning for<br/>English vocabulary
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.abcya.com/" className="family-brands__link">
                            <div className="family-brands__logo-container abcya">
                                <img alt="" className="family-brands__logo abcya" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/abcya-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/abcya-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/abcya-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                Fun educational<br/>games for kids
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.spanishdict.com/" className="family-brands__link">
                            <div className="family-brands__logo-container spanish">
                                <img alt="" className="family-brands__logo spanish" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/spanish-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/spanish-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/spanish-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                Spanish-English dictionary,<br/>translator, and learning
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://www.ingles.com/" className="family-brands__link">
                            <div className="family-brands__logo-container ingles">
                                <img alt="" className="family-brands__logo ingles" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/ingles-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/ingles-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/ingles-logo-1x.png"/>
                            </div>
                            <p className="family-brands__description">
                                English-Spanish dictionary,<br/>translator, and learning
                            </p>
                        </a>
                    </li>
                    <li className="family-brands__item family-brands__brand col-12 col-md-4 py-2">
                        <a href="https://emmersion.ai/" className="family-brands__link">
                            <div className="family-brands__logo-container emmersion">
                                <img alt="" className="family-brands__logo emmersion" srcSet="
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/emmersion-logo-1x.png 1x,
            http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/emmersion-logo-2x.png 2x"
                                     src="http://ixl.com/dv3/3kvX4XVkF_u7-p3VXiXGDJfdrf4/yui3/home-page/assets/home-2019/family-brands/emmersion-logo-1x.png" />
                            </div>
                            <p className="family-brands__description">
                                Fast and accurate<br/>language certification
                            </p>
                        </a>
                    </li>

                </ul>
            </footer>

        </div>
    )
}

export default Layout