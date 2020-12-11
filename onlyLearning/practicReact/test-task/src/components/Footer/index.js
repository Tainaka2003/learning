import React, {Component} from "react";
import './styles.css';


function Footer() {
    return (
        <div className={"footer"}>
            <p className={"footerText"}>
                This email was sent to you as a registered member of prfctfit.com. To update your emails preferences <a href="#" className={"footerAnchor"}>click here</a>. <br/> Use of the service and website is subject to our Terms of Use and Privacy Statement. <br/><br/> © 2020 PRFCT FIT. All rights reserved
            </p>
        </div>
    )
}

export default Footer;