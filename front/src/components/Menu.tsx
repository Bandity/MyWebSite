import "../style/Menu.scss";
import { useNavigate } from "react-router-dom"
function MenuHome (){
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
                <p onClick={()=>{ navigate("/") }}>Home</p>
                <p onClick={()=>{ navigate("/portfolio") }}>Portfolio</p>
            </div>
        </div>
    )
}

export {MenuHome}