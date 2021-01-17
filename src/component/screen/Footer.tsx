import React from 'react';
import './styles/footer.scss'
import {Social_Media_Info} from "../../data";
import {MediaButton} from "../index";

function Footer() {


    return (
        <div className="footer">
            {
                Social_Media_Info.map(
                    ({title, path, icon, cName}, index) => (
                        <div key={index} onClick={() => window.open(path)}>
                            <MediaButton
                                Icon={icon}
                                text={title}
                                cName={cName}
                            />
                        </div>
                    )
                )
            }
        </div>
    );
}

export default Footer;