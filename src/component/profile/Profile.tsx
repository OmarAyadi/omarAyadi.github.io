import React from 'react';

import './styles/profile.scss'
import {User_Profile_Data} from "../../data";

type ProfileProps = {}

function Profile(props: ProfileProps) {

    const {name, job } = User_Profile_Data
    return (
        <>
            <div className="profile">
                <div className="profile__name">{name}</div>
                <div className="profile__job">{job}</div>
                <div className="profile__logo"></div>
            </div>

        </>
    );
}

export default Profile;