import gab from "../assets/gab.jpg"
import "../style/components/Photos.scss"
function Photos (){
    return(
        <div className="content-wrapper">
            <div className="profile-container">
                <img src={gab} alt="Gabriel LEAL"/>
                <h1>Gabriel LEAL</h1>
            </div>

        </div>
    );
}

export {Photos}