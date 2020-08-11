import React from 'react';
import style from './style.module.scss'
const Footer = () => {
    return (
        <footer>
                <div className={style.Customer}>
                    {/*style={{position:"absolute", bottom: "25px", left:"10px"}}>*/}
                    <h4>Customers</h4>
                </div>

                <div className={style.dash1}>
                    {/*style={{position:"absolute", bottom: "25px", left:"100px"}}>*/}
                    <h4>|</h4>
                </div>

                <div className={style.Story}>
                    {/*style={{position:"absolute", bottom: "25px", left:"130px"}}>*/}
                    <h4>Our Story</h4>
                </div>

                <div className={style.dash2}>
                    {/*style={{position:"absolute", bottom: "25px", left:"230px"}}>*/}
                    <h4>|</h4>
                </div>

                <div className={style.Press}>
                    {/*style={{position:"absolute", bottom: "25px", left:"280px"}}>*/}
                    <h4>Press</h4>
                </div>

                <div className={style.dash3}>
                    {/*style={{position:"absolute", bottom: "25px", left:"360px"}}>*/}
                    <h4>|</h4>
                </div>

                <div className={style.Privacy}>
                    {/*style={{position:"absolute", bottom: "25px", left:"410px"}}>*/}
                    <h4>Privacy Policy</h4>
                </div>

                <div className={style.dash4}>
                    {/*style={{position:"absolute", bottom: "25px", left:"550px"}}>*/}
                    <h4>|</h4>
                </div>
                <div className={style.Careers}>
                    {/*style={{position:"absolute", bottom: "25px", left:"600px"}}>*/}
                    <h4>Careers</h4>
                </div>

                <div className={style.PP}>
                    {/*style={{position:"absolute", bottom: "15px", left:"10px"}}>*/}
                    @ 2020 PotPay
                </div>

        </footer>
    );
}

export default Footer;