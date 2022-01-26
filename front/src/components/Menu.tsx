import "../style/components/Menu.scss";
import home from "../assets/home.svg";
import camera from "../assets/camera.svg";
import { useNavigate } from "react-router-dom"
function MenuHome (){
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
                <div className="image-container">
                    <img src={home} alt="home"  onClick={()=>{ navigate("/") }} />
                    <p onClick={()=>{ navigate("/") }}>Home</p>
                </div>
                <div className="image-container">
                    <img src={camera} alt="home"  onClick={()=>{ navigate("/portfolio") }} />
                    <p onClick={()=>{ navigate("/portfolio") }}>Portfolio</p>
                </div>
                
            </div>
        </div>
    )
}

export {MenuHome}