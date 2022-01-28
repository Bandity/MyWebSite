import gab from "../assets/gab.jpg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tiktok.svg";
import twitch from "../assets/twitch.svg";
import "../style/components/Photos.scss"
function Photos() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="profile-container">
                    <div className="profile-photo">
                        <img src={gab} alt="Gabriel Leal" />
                    </div>
                    <h1>Gabriel Leal</h1>
                    <div className="social-wrapper">
                        <div className="socials">
                            <img src={insta} alt="Instagram" onClick={() => { window.open("https://www.instagram.com/bandiity_", "_blank") }} />
                            <img src={twitter} alt="Twitter" onClick={() => { window.open("https://twitter.com/bandity_", "_blank") }} />
                            <img src={tiktok} alt="Tiktok" onClick={() => { window.open("https://www.tiktok.com/@bandiity_", "_blank") }} />
                            <img src={twitch} alt="Facebook" onClick={() => { window.open("https://www.twitch.tv/bandity", "_blank") }} />
                        </div>
                    </div>
                </div>
                <div className="main">
                    <h1>Instagram</h1>
                    <div className="images-wrapper">
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
                        <img src={gab} alt="Instagram" />
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
        </div>
    );
}

export { Photos }