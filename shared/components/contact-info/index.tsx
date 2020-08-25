import React from "react";
import style from "./style.module.scss";

const Contact = () => {
    return (
        <div className={style.contact_container}>
            <ul className={style.contact_list}>
                <li className={style.title}>Get in Touch</li>
                <li className={style.content}>
                    <img className={style.icon} src='/icons/mobile-icon.svg' alt='mobile'/>
                    <p className={style.form_list_text}>+961 81 284 021</p>
                </li>
                <li className={style.content}>
                    <img className={style.icon} src='/icons/email-icon.svg' alt='email'/>
                    <p className={style.form_list_text}>example@example.com</p>
                </li>
                <li className={style.content}>
                    <img className={style.icon} src='/icons/pin-icon.svg' alt='pin'/>
                    <p className={style.form_list_text}>Bechara el Khoury, Beirut Digital District,1288 BDD,
                    Beirut - Lebanon</p>
                </li>
                <li className={style.content}>
                    <img className={style.icon_container} src='/icons/linkedin-icon.svg' alt='linkedin'/>
                    <p className={style.form_list_text}>/PotPay</p>
                </li>
            </ul>
        </div>
    )

}

export default Contact;
