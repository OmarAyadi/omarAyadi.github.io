import React from 'react';
import {User_Profile_Data} from "../../data";
import {TypedText} from "../text";
import {HoverButton} from "../button";
import {MovingBoat} from "../animation";

import './profile.scss'
import {Layout} from "../screen";


function Profile() {

    const {name, job, subJob, email} = User_Profile_Data

    return (
        <Layout>
            <div className="profile">
                <div className="profile_content">
                    <div className="profile_content_info">
                        <div className="profile_name">
                            {name}
                        </div>
                        <div className="profile_job">
                            <TypedText text={`${job}, ${subJob}`}/>
                        </div>
                    </div>
                    <div className="profile_about">
                        <HoverButton
                            onClick={
                                () => {
                                    window.location.href = `mailto:${email}`;
                                }
                            }
                            text="LEARN MORE"
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