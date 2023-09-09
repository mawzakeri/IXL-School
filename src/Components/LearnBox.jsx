import "./LearnBox.css"


function LearnBox(props){
    return (
        <div className={`learn-box`} style={{border: `1px solid ${props.color}`}}>
            <div className="content d-flex flex-column align-items-center h-100 position-relative">
                <span className="mark-session" style={{background: props.color}}>
                    { props.markText }
                </span>
                <span className="faker-mark"></span>
                <p style={{color: props.color}} className="title">
                    { props.title }
                </p>
                <p className="desc text-muted">
                        در این قسمت میتوانید تمام آموزش هارو مشاهده کنید .
                </p>
                <div className="border-light"></div>
                <div className="d-flex flex-column col-12">
                    {
                        props.desc.map(item => {
                            return (
                                <div className="d-flex col-12 align-items-center justify-content-between">
                                    <p className="mb-0">
                                        { item.title }
                                    </p>
                                    <a className="link-color" href={item.link}>
                                        { item.linkText }>>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LearnBox;