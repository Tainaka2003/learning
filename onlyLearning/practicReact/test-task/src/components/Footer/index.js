import React from "react";
import './styles.css';


function Footer() {
    return (
        <div className={"footer"}>
            <p className={"footerText"}>
                This email was sent to you as a registered member of prfctfit.com. To update your emails preferences <a href="#" className={"footerAnchor"}>click here</a>.
            </p>
            <p className={"footerText"}>
                Use of the service and website is subject to our <a href="#" className={"footerAnchor"}>Terms of Use</a> and <a href="#" className={"footerAnchor"}>Privacy Statement</a>.
            </p>
            <p className={"footerText"}>
                © 2020 PRFCT FIT. All rights reserved
            </p>
        </div>
    )
}

export default Footer;