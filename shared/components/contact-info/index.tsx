import React from "react";
import style from "./style.module.scss";

const Contact = () => {

    return(
        <div className={style.contact_container}>
            <ul className={style.contact_list}>
            <li className={style.title}>Get in Touch</li>

            <li className={style.content}>
                <img src='assets/mobile-icon.svg' alt="img" />
                  +961 81 284 021</li>
            <li className={style.content}>
                <img src='assets/email-icon.svg' alt="img" />
                example@example.com</li>
            <li className={style.content}>
                <img src='assets/pin-icon.svg' alt="img" />
                Bechara el Khoury, Beirut Digital District,1288 BDD,
                Beirut - Lebanon</li>
            <li className={style.content}>
                <img src='assets/linkedin-icon.svg'/>
                /PotPay</li>
            </ul>
        </div>
    )

}

export default Contact;