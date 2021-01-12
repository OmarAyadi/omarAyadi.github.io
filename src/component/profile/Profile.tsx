import React from 'react';
import './profile.css'
import {User_Profile_Data} from "../../data";


function Profile() {
    const {
        name,
        work,
        profileLogo,
        additionalPicture,
    } = User_Profile_Data

    return (
        <div className="profile">
            <div className="profile-content">
                Hi. I’m
                <span className="profile-name"> {name}</span><br/>
                <span className="profile-work">{work}</span><br/>
            </div>
            <img src={profileLogo} alt="profile" className="profile-logo"/>
            <img src={additionalPicture} alt="additional" className="profile-add-picture"/>
        </div>
    );
}

export default Profile;