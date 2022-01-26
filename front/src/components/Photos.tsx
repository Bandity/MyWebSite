import gab from "../assets/gab.jpg"
import insta from "../assets/insta.svg"
import twitter from "../assets/twitter.svg"
import "../style/components/Photos.scss"
function Photos (){
    return(
        <div>
        <div className="content-wrapper">
            <div className="profile-container">
                <img src={gab} alt="Gabriel LEAL" />
                <h1>Gabriel LEAL</h1>
                <div className="social-wrapper">
                    <div className="social">
                        <img src={insta} alt="Instagram" onClick={()=>{ window.open("https://www.instagram.com/bandiity_", "_blank") }}/>
                        <img src={twitter} alt="Twitter"  onClick={()=>{ window.open("https://twitter.com/bandity_", "_blank") }}/>
                    </div>
                </div>
            </div>
            <div className="main">
                <h1>Instagram</h1>
                <img src={gab} alt="Instagram" />
                <img src={gab} alt="Instagram" />
                    <img src={gab} alt="Instagram" />
                    <img src={gab} alt="Instagram" />
                    <img src={gab} alt="Instagram" />
                    <img src={gab} alt="Instagram" />
                    <img src={gab} alt="Instagram" />
                    <img src={gab} alt="Instagram" />
            </div>
        </div>
        </div>
    );
}

export {Photos}