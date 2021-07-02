import React from "react";

function Footer(){
    var d = new Date();
    var n = d.getFullYear();
    return (<footer>
    <p>&copy; Devanshi Patel {n}</p>
    </footer>
    );
}

export default Footer;