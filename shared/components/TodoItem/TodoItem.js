import styles from "./Todo.module.css";
import Image from "next/image";
import clear from "../../../public/assets/icon-cross.svg";
import check from "../../../public/assets/icon-check.svg";
import {useEffect, useState} from "react";
import Checkbox from "../Checkbox/Checkbox";

const TodoItem = (props) => {
    const [isSelected, setSelected] = useState(false)
    const [showClear, setShowClear] = useState(false)
    const [selectedTodoList, setSelectedTodoList] = useState([])

    let todoList = props.todoList
    let completed = props.todo.completed


    const onTodoClick = () => {
        setSelected(!isSelected)
        props.setTodo(todoList.map((td, index) => {
            if (props.todo.text === td.text) {
                return {
                    ...td,
                    completed: !completed,
                }
            } else return td;
        }))
    }

    const onClearClick = () => {
        props.setTodo(props.todoList.filter(td => td !== props.todo))
    }
    return (
        <div key={props.key} className={styles.todoList} style={{backgroundColor: props.bgColor}}
             onMouseEnter={() => setShowClear(true)}
             onMouseLeave={() => setShowClear(false)}>
            <Checkbox onClick={onTodoClick}
                      isSelected={isSelected} completed={completed}/>
            <p>{isSelected && completed ? <s>{props.todo.text}</s> : props.todo.text}</p>
            {
                showClear &&
                <span>
                    <Image src={clear} className={styles.crossImg} role={"button"} layout={'fixed'}
                           alt={""} width={15} height={15} onClick={onClearClick}/>
                </span>
            }
        </div>
    )
}

export default TodoItem
