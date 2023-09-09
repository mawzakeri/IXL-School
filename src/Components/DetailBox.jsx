
import "./DetailBox.css";

function DetailBox(props){
    return (

        <div className="px-2 col-6 col-lg-3">
            <div className="d-flex flex-column detail-box align-items-center justify-content-center">
                <img src={props.icon} className="icon my-3"/>
                <p className="bold-tex my-3" style={{color: props.color}}>
                    {props.title}
                </p>
                <p className="desc text-muted my-3 text-center">
                    {props.desc}
                </p>
                <a href={props.link} style={{color: props.color}} className="my-3">
                    {`${props.textLink} >>`}
                </a>
            </div>
        </div>

    )
}

export default DetailBox;