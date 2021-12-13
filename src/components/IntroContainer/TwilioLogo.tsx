import React, {SVGProps} from "react";
import logo from "../../images/koitechs.png";

export default function TwilioLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <div style={{position: "absolute", top: 0, left: 0, width: "50px"}}>
            <img style={{width: "50px", borderRadius: "50%"}} src={logo} alt="logo"/>
        </div>
    );
}
