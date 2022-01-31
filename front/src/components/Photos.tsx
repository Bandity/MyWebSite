import gab from "../assets/gab.jpg";
import gab1 from "../assets/gab1.jpg";
import gab2 from "../assets/gab2.jpg";
import gab3 from "../assets/gab3.jpg";
import gab4 from "../assets/gab4.jpg";
import gab5 from "../assets/gab5.jpg";
import gab6 from "../assets/gab6.jpg";
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
                        <img src={gab1} alt="Gabriel Leal" onClick={() => { window.open("https://www.instagram.com/p/CZVJ_EQIAYy/")}} />
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
                    <h1>Photo Feed</h1>
                    <div className="images-wrapper">
                        <img src={gab} alt="Instagram" onClick={() => { window.open("https://www.instagram.com/p/CZCbu6eIuZG/")}}/>
                        <img src={gab2} alt="Instagram" onClick={() => { window.open("https://www.instagram.com/p/CZVJ_EQIAYy/")}} />
                        <img src={gab3} alt="Instagram" onClick={() => { window.open("https://www.instagram.com/p/CZCbu6eIuZG/")}} />
                        <img src={gab4} alt="Instagram" onClick={() => { window.open("https://www.instagram.com/p/CYEsbS6oozD/")}}/>
                        <img src={gab1} alt="Instagram" onClick={() => { window.open("https://www.instagram.com/p/CZVJ_EQIAYy/")}}/>
                        <img src={gab5} alt="Instagram" onClick={() => { window.open("https://www.instagram.com/p/CYEsbS6oozD/")}}/>
                        <img src={gab6} alt="Instagram" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Photos }