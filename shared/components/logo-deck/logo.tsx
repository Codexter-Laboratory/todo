import React from 'react';
import style from "./style.module.scss"

export interface Props {
    shape: number; // 1: square - 2: rectangle
    source: string;
}

const Logo = (props: Props) => {
    return (
        <div>
            {
                props.shape == 1 ? <img className={style.container__squared} src={props.source}/>
                    : <img className={style.container__rectangle} src={props.source}/>
            }
        </div>
    )
}

export default Logo;
