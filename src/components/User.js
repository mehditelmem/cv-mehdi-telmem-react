import React from "react";
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User(){
    return (
        <div className="user">
            <img src="./images/avatar.jpg" 
            alt=""
            style={{ width: '200px', height: '200px' }}
            className="user_avatar"
            />
            <h1 className="user_name">Mehdi Telmem</h1>
            <p className="user_profession"> data analyste</p>
            <div className="user_infos">
                <p className="user_info"> <HomeIcon /> 15 rue lavoisier 59100 Roubaix</p>
                <p className="user_info"><PhoneIcon /><a href="tel:+33745579152">07 45 57 91 52</a></p>
                <p className="user_info"><MailIcon /><a href="mailto:mitelmem@gmail.com">mitelmem@gmail.com</a></p>
                <p className="user_info"><EventIcon /> Date de Naissance : 13 mars 1997</p>
                <p className="user_info"><LocationOnIcon /> Lieu de Naissance : Maroc</p>
            </div>
        </div>
    )
}

export default User;