import React from "react";
import style from "./style.module.scss";

export interface Props{
    image: string;
}

const Image = (props : Props) => {

    return (
        <div>
            <img className={style.profiles} src={props.image}/>
        </div>
    )

}

export default Image;