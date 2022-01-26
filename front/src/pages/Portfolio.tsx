import {MenuHome} from '../components/Menu'
import gab from "../assets/gab.jpg"
import "../style/Portfolio.scss"
function Portfolio (){
    return (
        <div>
            <MenuHome/>
            <div className="content">
                    <img src={gab} alt="Me"/>
                    <img src={gab} alt="Me"/>
                    <img src={gab} alt="Me"/>

                    <img src={gab} alt="Me"/>
                    <img src={gab} alt="Me"/>
                    <img src={gab} alt="Me"/>

            </div>
        </div>
    )
}
export {Portfolio} 