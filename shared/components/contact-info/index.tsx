import React from "react";
import style from "./style.module.scss";

const Contact = () => {

    return (
        <div className={style.contact_container}>
            <ul className={style.contact_list}>
                <li className={style.title}>Get in Touch</li>
                <li className={style.content}>
                    <img className={style.icon} src='assets/mobile-icon.svg' alt="img"/>
                    <p>+961 81 284 021</p>
                </li>
                <li className={style.content}>
                    <img className={style.icon} src='assets/email-icon.svg' alt="img"/>
                    <p>example@example.com</p>
                </li>
                <li className={style.content}>
                    <img className={style.icon} src='assets/pin-icon.svg' alt="img"/>
                    <p>Bechara el Khoury, Beirut Digital District,1288 BDD,
                    Beirut - Lebanon</p>
                </li>
                <li className={style.content}>
                    <img className={style.icon_container} src='assets/linkedin-icon.svg'/>
                    <p>/PotPay</p>
                </li>
            </ul>
        </div>
    )

}

export default Contact;