import "./GradeBox.css"
import {Link} from "react-router-dom";

function GradeBox(props){
    return (
        <div className="d-flex align-items-center justify-content-between grade-box my-2">
            <p style={{background: props.color}} className="title-grade">
                { props.titleGrade }
            </p>
            <div className="d-flex flex-column col-8 px-2">
                <p className="bold-text">
                    { props.moreTitle }
                </p>
                <p className="small-text text-muted">
                    { props.descGrade }
                </p>
            </div>
            <Link to={props.link} style={{background: props.color}} className="btn grade mx-3">
                { props.skillCount } سوال
            </Link>
        </div>
    )
}

export default GradeBox;