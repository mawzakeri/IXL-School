import GradeBox from "../Components/GradeBox";


function MathCategory(){
    return (
        <div className="d-flex flex-column wrapper-math col-12">
            <div className="d-flex flex-column header-grade align-items-center justify-content-center col-12">
                <div className="d-flex flex-column align-items-center justify-content-center col-7">
                    <p className="blue-text bold-text mb-3">
                        ریاضی در IXL
                    </p>
                    <p className="small-text text-muted">
                        در ریاضیات تسلط و اعتماد به نفس پیدا کنید! IXL به دانش‌آموزان کمک می‌کند تا مهارت‌های ضروری را با سرعت خود از طریق سؤالات سرگرم‌کننده و تعاملی، پشتیبانی ساخته شده و جوایز انگیزشی تسلط دهند.
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column grade-wrapper align-items-center col-12">
                <img src="/Leasons/sub-header.webp" alt="" className="img-soul right"/>
                <img src="/Leasons/inner.webp" alt="" className="img-soul left"/>
                <div className="col-10 d-flex flex-column align-items-center">
                    <GradeBox color="#fd9726" link="/math-grades/pre" moreTitle="درجه اول" titleGrade="الف" descGrade="شامل :
آموزش شمارش - تا 3 شمارش برچسب - تا 5|بالا و پایین|طبقه بندی و مرتب سازی بر اساس شکل|شکل الگوها" skillCount="2"/>
                    <GradeBox color="#2acfd3" link="/math-grades/second" moreTitle="درجه ب" titleGrade="ب" descGrade="شامل :
جمع و تفریق اعداد - تا 100|اندازه گیری با استفاده از خط کش اینچ|تشخیص یک رقم تا صدها" skillCount="2"/>
                </div>
            </div>
            <img src="/Leasons/footer.webp" alt="" className="img-soul footer"/>
        </div>
    )
}

export default MathCategory;