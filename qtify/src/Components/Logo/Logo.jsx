import React from "react"
import LogoImage from "../../Assests/Qtify-Logo.png"
import styles from "./Logo.module.css";

function Logo(){
    return(
        <div className={styles.Logo}>
             <img src={LogoImage} alt="Logo" width={67}/>
        </div>
    )
}

export default Logo;