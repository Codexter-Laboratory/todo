import styles from "./checkbox.module.css";
import Image from "next/image";
import check from "../../../public/assets/icon-check.svg";

const Checkbox = (props) => {
    return (
        <div className={styles.borderWrapper}>
            <div className={styles.checkbox} onClick={props.onClick}
                 style={
                     {
                         background: props.isSelected && props.completed ? 'linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%))' : 'hsl(235, 24%, 19%)',
                         border: props.isSelected && props.completed ? "none" : '1px solid hsl(234, 11%, 52%)'
                     }
                 }>
                {
                    props.isSelected && props.completed &&
                    <div style={{background: 'none'}}>
                        <Image className={styles.checkImg} role={"button"} layout={'fixed'}
                               alt={""} src={check} width={15} height={15}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Checkbox
