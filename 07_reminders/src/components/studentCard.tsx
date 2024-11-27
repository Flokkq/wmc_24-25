import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

interface StudentCardProps {
    type: string;
    info:string

}

function StudentCard({ type, info }: StudentCardProps) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className="card mt-5">
            <div className="card-header">
                <div>{type}</div>
            </div>
            <div className="card-body">
                {showInfo && <div className="mt-3 mb-3">{info}</div>}
                <button className="btn btn-outline-secondary" onClick={()=> setShowInfo(!showInfo)

                }>click me for vite infos</button>


            </div>
        </div>
    );
}

export default StudentCard;