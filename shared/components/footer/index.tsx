import React from 'react';
import style from './style.module.scss';
const Footer = () => {
    return (
        <footer className={style.footerDiv}>
                <div className={style.Footer}>
                    <h4>Customers</h4>
                </div>

                <div className={style.dash1}>
                    <h4>|</h4>
                </div>

                <div className={style.Footer}>
                    <h4>Our Story</h4>
                </div>

                <div className={style.dash2}>
                    <h4>|</h4>
                </div>

                <div className={style.Footer}>
                    <h4>Press</h4>
                </div>

                <div className={style.dash3}>
                    <h4>|</h4>
                </div>

                <div className={style.Footer}>
                    <h4>Privacy Policy</h4>
                </div>

                <div className={style.dash4}>
                    <h4>|</h4>
                </div>
                <div className={style.Footer}>
                    <h4>Careers</h4>
                </div>

                <div className={style.PP}>
                    @ 2020 PotPay
                </div>
            </footer>
    );
}

export default Footer;
