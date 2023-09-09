import "./MathGrades.css";

import {Link, useParams} from "react-router-dom";

function MathGrades(props){

    const params = useParams();
    return (
        <div className="d-flex flex-wrap wrapper-grades col-12">

            <div className="grades-content my-4 col-12 d-flex-flex-column position-relative">
                <div className="grades-list d-flex flex-column position-absolute">
                    <Link to="/math-grades/pre">
                        <div className={`grade-list__box blue d-flex align-items-center justify-content-center ${params.id == 'pre' ? 'active' : ''}`}>
                            <p className="mb-0">
                                الف
                            </p>
                        </div>
                    </Link>
                    <Link to="/math-grades/second">
                        <div className={`grade-list__box red d-flex align-items-center justify-content-center ${params.id == 'second' ? 'active' : ''}`}>
                            <p className="mb-0">
                                ب
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="grades-box-records col-12">
                    <div className="d-flex flex-column grades-records-content col-12">
                        {
                            params.id == 'pre' ?
                                    <div>
                                        <div className="grades-records-header d-flex flex-column col-12">
                                            <h2 className="blue-text">
                                                سطح مبتدی ( الف )
                                            </h2>
                                            <p className="text-muted">
                                                IXL بیش از 100 مهارت، درس و بازی ریاضی قبل از K را برای کشف و یادگیری ارائه می دهد! مطمئن نیستم از کجا شروع کنم؟ برای یافتن مهارتی که جالب به نظر می رسد، به دیوار توصیه های شخصی خود بروید، یا طرح مهارتی را انتخاب کنید که با کتاب درسی، استانداردهای ایالتی یا آزمون استاندارد شما مطابقت دارد.
                                            </p>
                                        </div>
                                        <div className="d-flex flex-wrap col-12">

                                            <ul className="grades-parent-list my-3">
                                                <Link to="/up-to-three">
                                                    <li className="header">
                                                        الف.
                                                        <span className="green-text">
                                                    اعداد حدود 3
                                                        </span>
                                                    </li>
                                                </Link>

                                            </ul>

                                        </div>
                                    </div>

                            : ''
                        }
                        {
                            params.id == 'second' ?
                                <div>
                                    <div className="grades-records-header d-flex flex-column col-12">
                                        <h2 className="blue-text">
                                            سطح دوم ( ب )
                                        </h2>
                                        <p className="text-muted">
                                            IXL صدها مهارت، درس و بازی ریاضی کلاس دوم را برای کشف و یادگیری ارائه می دهد! مطمئن نیستم از کجا شروع کنم؟ برای یافتن مهارتی که جالب به نظر می رسد، به دیوار توصیه های شخصی خود بروید، یا طرح مهارتی را انتخاب کنید که با کتاب درسی، استانداردهای ایالتی یا آزمون استاندارد شما مطابقت دارد.
                                        </p>
                                    </div>
                                    <div className="d-flex flex-wrap col-12">

                                        <ul className="grades-parent-list my-3">

                                            <Link to="/up-to-100">
                                                <li className="header">
                                                    الف.
                                                    <span className="green-text">
                                                        تمرین با اعداد حدود 100
                                                    </span>
                                                </li>
                                            </Link>

                                        </ul>

                                    </div>
                                </div>

                                : ''
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MathGrades;