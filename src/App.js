import logo from './logo.svg';
import './App.css';
import LearnBox from "./Components/LearnBox";
import DetailBox from "./Components/DetailBox";

function App() {
  return (
    <div className="d-flex flex-column">
        <header>
            <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                <h1 className="w-100 text-center mt-5">
                    ixl پلتفورم آموزش شخصی
                </h1>
                <div className="d-flex align-items-center position-relative h-50 w-100">
                    <div className="content ">
                        <div className="clouds cloud-one">
                            <img src="/main-page/cloud1.svg" alt=""/>
                            <div className="content d-flex flex-column px-3">
                                <p className="mb-0 title-cloud">
                                    یادگیری و تمرین عمیق
                                </p>
                                <ul className="d-flex flex-wrap align-items-end justify-content-center mt-2 column-gap-5">
                                    <li className="style-desc">یادگیری عمیق</li>
                                    <li className="style-desc">پیشرفته</li>
                                    <li className="style-desc">با تکنولوژی</li>
                                    <li className="style-desc">کارایی آسان</li>
                                </ul>
                                <i className="fas fa-angle-down icon-med mt-3"></i>
                            </div>
                        </div>
                        <div className="clouds cloud-two">
                            <img src="/main-page/cloud2.svg" alt=""/>
                            <div className="content d-flex flex-column px-3">
                                <p className="mb-0 title-cloud">
                                    یادگیری و تمرین عمیق
                                </p>
                                <ul className="d-flex flex-wrap align-items-end justify-content-center mt-2 column-gap-5">
                                    <li className="style-desc">یادگیری عمیق</li>
                                    <li className="style-desc">پیشرفته</li>
                                    <li className="style-desc">با تکنولوژی</li>
                                    <li className="style-desc">کارایی آسان</li>
                                </ul>
                                <i className="fas fa-angle-down icon-med mt-3"></i>
                            </div>
                        </div>
                        <div className="clouds cloud-three">
                            <img src="/main-page/cloud3.svg" alt=""/>
                            <div className="content d-flex flex-column px-3">
                                <p className="mb-0 title-cloud">
                                    یادگیری و تمرین عمیق
                                </p>
                                <ul className="d-flex flex-wrap align-items-end justify-content-center mt-2 column-gap-5">
                                    <li className="style-desc">یادگیری عمیق</li>
                                    <li className="style-desc">پیشرفته</li>
                                    <li className="style-desc">با تکنولوژی</li>
                                    <li className="style-desc">کارایی آسان</li>
                                </ul>
                                <i className="fas fa-angle-down icon-med mt-3"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/Login" className="btn submit-color mxw mb-2">
                    عضویت به عنوان یک کاربر
                </a>

            </div>

            <div className="alert-box info-color d-flex align-items-center justify-content-center">
                <p className="mb-0 d-flex align-items-center">
                    در سامانه عضو شوید و از مدرن ترین امکانات در جهت پیشرفت استفاده کنید :
                    <a href="#" className="mx-3">
                        برای مبتدی ها
                        <i className="fas fa-angle-left"></i>
                    </a>
                    <a href="#" className="mx-3">
                        برای خانواده ها
                        <i className="fas fa-angle-left"></i>
                    </a>
                </p>
            </div>
        </header>
        <section className="learning d-flex flex-column align-items-center justify-content-center">
            <div className="box-header__learning my-2 d-flex align-items-center justify-content-between position-relative">
                <img className="img-header__leaning position-absolute" src="/main-page/ad.webp" alt=""/>
                <div className="faker-symbol"></div>
                <div className="content d-flex flex-column align-itemns-center justify-content-center">
                    <h2 className="blue-text">
                        توسعه صنعت آموزش
                    </h2>
                    <p className=""> ما تمام سعی مان را در این سامانه انجام میدهیم... </p>
                </div>
                <div className="d-flex align-items-center come-text">
                    <p className="blue-text">
                        مشاهده جزئیات
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center col-12">
                <div className="px-2">
                    <LearnBox color="red" title="درجه اول" markText="الف" desc={[{title: 'ریاضی' , link: '/math/pre' , linkText: 'مشاهده'}]}/>
                </div>
                <div className="px-2">
                    <LearnBox color="lightblue" title="درجه ب" markText="ب" desc={[{title: 'ریاضی' , link: '/math/two' , linkText: 'مشاهده'}]}/>
                </div>
            </div>
        </section>
        <section className="detail-skill d-flex flex-column align-items-center col-12 py-3">
            <div className="d-flex flex-column">
                <p className="title-blue mb-2">
                    آموزش در سطح بالا
                </p>
                <p className="text-muted mb-3">
                    لورم ا.یپسوم فلان فلان
                </p>
            </div>
            <div className="d-flex flex-column align-items-center col-12">
                <div className="d-flex col-12 justify-content-evenly align-items-center my-3">
                    <div className="icon-box d-flex flex-column align-item-center">
                        <div className="icon-box__img orange">
                            <img src="/main-page/state-icon.svg" alt="" className=""/>
                        </div>
                        <div className="d-flex flex-column icon-box__content align-items-center">
                            <p className="mb-0 title orange-text">
                                سلام
                            </p>
                        </div>
                    </div>
                    <div className="icon-box d-flex flex-column align-item-center">
                        <div className="icon-box__img green">
                            <img src="/main-page/book-icon.svg" alt="" className=""/>
                        </div>
                        <div className="d-flex flex-column icon-box__content align-items-center">
                            <p className="mb-0 title green-text">
                                سلام
                            </p>
                        </div>
                    </div>
                    <div className="icon-box d-flex flex-column align-item-center">
                        <div className="icon-box__img purple">
                            <img src="/main-page/quiz-icon.svg" alt="" className=""/>
                        </div>
                        <div className="d-flex flex-column icon-box__content align-items-center">
                            <p className="mb-0 title purple-text">
                                سلام
                            </p>
                        </div>
                    </div>
                </div>
                <a href="/Login" className="btn submit-color mxw mb-2 mt-4">
                    مهارت شخصی خودت رو پیدا کن
                </a>
            </div>
            <div className="d-flex flex-column align-items-center col-12 box-feature">
                <h2 className="white-text">
                    کشف کنید که چگونه IXL از موفقیت برای هر یادگیرنده پشتیبانی می کند
                </h2>
                <p className="my-2 white-text">
                    IXL به معلمان هر آنچه را که برای شخصی سازی آموزش نیاز دارند، می دهد
                </p>
                <div className="d-flex align-items-center justify-content-center flex-wrap my-3">
                    <DetailBox icon="/main-page/curriculum-icon.svg" color="#00aeef" title="برنامه درسی جامع"  desc="محتوایی را برای پشتیبانی از تقریباً هر درسی، با بیش از 9000 مهارت در پنج موضوع پیدا کنید." textLink="مزوز مهارت ها"/>
                    <DetailBox icon="/main-page/diagnostic-icon.svg" color="#54a229" title="به موقع"  desc="مشخص کنید که دانش‌آموزان شما چه می‌دانند و دقیقاً چه کاری باید انجام دهند تا به آنها کمک کند&nbsp;بهتر شوند." textLink="یادبگیر این چطور کار میکنه"/>
                    <DetailBox icon="/main-page/personalized-icon.svg" color="#7a67d7" title="راهنمای شخصی"  desc="توصیه های مهارتی را ببینید که به هر دانش آموز کمک می کند شکاف های دانش را پر کند و از جایی که هستند رشد کند." textLink="پیشنهاد هارو مشاهده کن"/>
                    <DetailBox icon="/main-page/analytics-icon.svg" color="#f5a623" title="آنالیز لحظه ای"  desc="بینش‌های بی‌درنگ دریافت کنید که به شما کمک می‌کند هر روز تصمیم‌های آموزشی مؤثری بگیرید." textLink="پیشرفت هات رو ببین"/>
                </div>
                <button className="btn submit-color my-3">
                    عضو شوید
                </button>

                <div className="border-white col-9 my-4"></div>

                <h2 className="white-text">
                    تاثیر IXL بر یادگیری دانش آموزان را ببینید!
                </h2>

                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-4 p-3">
                        <img src="/main-page/user1.jpg" alt=""/>
                        <p className="bold-text title white-text">
                            ثابت شده است
                        </p>
                        <p className="white-text">
                            تحقیقات بارها و بارها نشان داده است که IXL نتایج واقعی ایجاد می کند.
                        </p>
                        <button className="btn-transparently">
                            مشاهده تحقیقات
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-4 p-3">
                        <img src="/main-page/user2.jpg" alt=""/>
                        <p className="bold-text title white-text">
                            ثابت شده است
                        </p>
                        <p className="white-text">
                            تحقیقات بارها و بارها نشان داده است که IXL نتایج واقعی ایجاد می کند.
                        </p>
                        <button className="btn-transparently">
                            مشاهده تحقیقات
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-4 p-3">
                        <img src="/main-page/user3.jpg" alt=""/>
                        <p className="bold-text title white-text">
                            ثابت شده است
                        </p>
                        <p className="white-text">
                            تحقیقات بارها و بارها نشان داده است که IXL نتایج واقعی ایجاد می کند.
                        </p>
                        <button className="btn-transparently">
                            مشاهده تحقیقات
                        </button>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-center align-items-center helper-box">
                <div className="helper-content">
                    <p className="bold-text blue-text">
                        sdfhsdf
                    </p>
                    <p className="desc text-muted my-3">
                        I am a special education teacher at two elementary schools. I work with students who are behind grade level or struggle with foundational skills. I like the differences in approaches to math IXL offers because it meets a lot of different learning styles.
                    </p>
                    <p className="text-muted my-3">
                        Maurice Falls, special education teacher
                        Charlotte, North Carolina
                    </p>
                    <a className="blue-text" href="#">
                        Read More >
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
