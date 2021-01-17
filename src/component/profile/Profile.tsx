import React from 'react';
import {User_Profile_Data} from "../../data";
import {ConsoleText} from "../text";
import {HoverButton} from "../button";
import {MovingBoat} from "../animation";

import './profile.scss'
import {Layout} from "../screen";


function Profile() {

    const {name, job} = User_Profile_Data
    return (
        <Layout>
            <div className="profile">
                <div className="profile_content">
                    <div className="profile_name">
                        <ConsoleText name={name}/>
                    </div>
                    <div className="profile_job">
                        {job}
                    </div>
                    <div className="profile_about">
                        <HoverButton
                            link="/"
                            text="About Me"
                        />
                    </div>
                </div>

                <div className="profile_animation">
                    <MovingBoat/>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;