import "./Membership.css"

function Membership() {
    return (
        <div>
            <section className="members-section bg-img-section header-section">

                <img className="members-bg-img-btm no-negative-bottom lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/index-2018/f1-1920.jpg" />

                <div className="members-content">
                    <h1 className="text-center">
                        IXL یک آموزش شخصی
                    </h1>
                    <h3 className="text-center" >
                        ریاضی
                        <span className="circle-separator"></span>
                        زبان انگلیسی ، هنر
                        <span className="circle-separator"></span>
                        علم
                        <span className="circle-separator"></span>
                        آموزش مخصوص
                        <span className="circle-separator"></span>
                        اسپانیایی
                        <span className="vertical-separator"></span>
                    </h3>
                    <div className="fta-card-container">
                        <div className="fta-card family-card">
                            <a className="fta-bg-lk" href="/membership/family/subscribe">Join now</a>
                            <h2 className="fta-title">
                                کاربران عادی
                            </h2>
                            <div className="fta-icon-container">
                                <img className="fta-icon fta-family-icon lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/index-2018/family-icon-desktop-1x.png" />
                            </div>
                            <div className="fta-btn-container two-btn-container">
                                <a className="cta-btn cta-style-hollow-crisp-green-tall" href="#">همین الان عضو شوید</a>
                            </div>
                        </div>
                        <div className="fta-card teacher-card">
                            <a className="fta-bg-lk" href="#">جزئیات</a>
                            <h2 className="fta-title">
                                مخصوص همکلاسی ها
                            </h2>
                            <div className="fta-icon-container">
                                <img className="fta-icon fta-teacher-icon lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/index-2018/teacher-icon-desktop-1x.png" />

                            </div>
                            {/*                            <div className="fta-btn-container three-btn-container tallest-btn-container">


                                <a className="cta-btn cta-style-solid-teal" href="/membership/teachers/trial">Start a
                                    trial</a>
                                <a className="cta-btn cta-style-solid-teal" href="/membership/quote?from=teacher">Get a
                                    quote</a>


                                <a className="cta-btn cta-style-border-teal" href="/membership/teachers">Learn more</a>



                            </div>*/}
                        </div>
                        <div className="fta-card admin-card">
                            <a className="fta-bg-lk" href="#">جزئیات</a>
                            <h2 className="fta-title">
                                مخصوص مدارس
                            </h2>
                            <div className="fta-icon-container">
                                <img className="fta-icon fta-admin-icon lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/index-2018/admin-icon-desktop-1x.png" />
                            </div>
                            {/*                        <div className="fta-btn-container two-btn-container ">
                                <a className="cta-btn cta-style-solid-blue" href="#">Get a quote</a>
                                <a className="cta-btn cta-style-border-blue" href="#">Learn more</a>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
            <section className="membership-awards-recognition members-section bg-img-section" id="yui_3_18_1_1_1693839576772_119">
                <img className="members-bg-img lazyloaded img-adwa" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/index-2018/awards-1920-1x.jpg" />

                <div className="members-content" id="yui_3_18_1_1_1693839576772_118">
                    <h1 className="text-center blue-text">جوایز و تقدیر</h1>
                    <ul className="memb-awards-container" id="yui_3_18_1_1_1693839576772_117">
                        <li className="memb-award-container codie-2022 codie">
                            <img className="awards-codie-2022 lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/codie-2022-large-1x.png" />
                        </li>
                        <li className="memb-award-container codie-2021 codie">
                            <img className="awards-codie-2021 lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/codie-2021-large-1x.png" />
                        </li>
                        <li className="memb-award-container codie-2020 codie">
                            <img className="awards-codie-2020 lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/codie-2020-large-1x.png" />
                        </li>
                        <li className="memb-award-container codie-2018 codie">
                            <img className="awards-codie-2018 lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/codie-2018-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container tech-learning-remote">
                            <img className="awards-tech-learning-remote lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/tech-learning-remote-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container new-product">
                            <img className="awards-new-product lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/new-product-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container moms-choice">
                            <img className="awards-moms-choice lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/moms-choice-large-1x.png" />
                        </li>
                        <li className="memb-award-container cool-tech">
                            <img className="awards-cool-tech lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/cool-tech-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container tech-learning-2021">
                            <img className="awards-tech-learning-2021 lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/tech-learning-2021-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container smart-media">
                                <img className="awards-smart-media lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/smart-media-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container hth">
                            <img className="awards-hth lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/hth-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container breakthrough">
                            <img className="awards-breakthrough lazyloaded"  src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/breakthrough-large-1x.png" />
                        </li>
                        <li className="memb-award-container empty-spacer"></li>
                        <li className="memb-award-container tech-edvocate-2022">
                            <img className="awards-tech-edvocate-2022 lazyloaded" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/common/members-awards/tech-edvocate-2022-large-1x.png" />
                        </li>
                    </ul>
                </div>
            </section>
            <section className="membership-personal-quote members-section bg-img-section">
                <img className="members-bg-img-top lazyloaded footer-memb-img" src="http://ixl.com/dv3/tVZLZFodHYlmtqavy1ihJT5gziY/yui3/members/assets/index-2018/personal-quote-1920-1x.jpg" />
                <div className="members-content">
                    <div className="personal-quote-text">
                        <span className="personal-quote-quotation-mark open">“</span>
                        معلم قدیمی کلاس سوم من گفت که فرزندش IXL را دوست دارد و به من گفت که باید آن را امتحان کنم، بنابراین مادرم برای من ثبت نام کرد و من آن را دوست دارم!
                        <span className="personal-quote-quotation-mark close">”</span>
                    </div>
                    <div className="personal-quote-reference">
                        آنا دانش آموز کلاس چهارم
                        اویدو، فلوریدا
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Membership;