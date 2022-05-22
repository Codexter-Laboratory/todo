import Image from 'next/image'
import styles from '../styles/Home.module.css'
import moon from '../public/assets/icon-moon.svg'
import sun from '../public/assets/icon-sun.svg'
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import TodoItem from "../shared/components/TodoItem/TodoItem";
import Checkbox from "../shared/components/Checkbox/Checkbox";
import {ReactSortable} from "react-sortablejs";

const Home = () => {
    const {theme, resolvedTheme, setTheme} = useTheme()
    const [bgImage, setBgImage] = useState('')
    const [bgColor, setBgColor] = useState('hsl(235, 24%, 19%)')
    const [textInput, setTextInput] = useState('')
    const [todoList, setTodoList] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [activeButton, setActiveButton] = useState({all: true, active: false, comp: false})
    const [placeholder, setPlaceholder] = useState("Add to list")

    useEffect(() => {
        setTheme('system')
        console.log(resolvedTheme)
    }, [])

    useEffect(() => {
        if (resolvedTheme === 'dark') {
            setBgImage('/assets/bg-desktop-dark.jpg')
            setBgColor('hsl(235, 24%, 19%)')
        } else {
            setBgImage('/assets/bg-desktop-light.jpg')
            setBgColor('white')
        }
    }, [resolvedTheme])

    useEffect(() => {
        setFilteredData(todoList)
    }, [todoList])

    const onThemeClick = () => {
        if (resolvedTheme === 'light') {
            setTheme('dark')
            setBgColor('hsl(235, 24%, 19%)')
            setBgImage('/assets/bg-desktop-dark.jpg')
        } else {
            setTheme('light')
            setBgColor('white')
            setBgImage('/assets/bg-desktop-light.jpg')
        }
    }


    const onMouseClickEvent = () => {
        if (textInput !== "") {
            setTodoList([...todoList, {text: textInput, completed: false}])
            setTextInput("")
        }
    }

    const onInputChange = (e) => {
        setTextInput(e.target.value)
    }

    const filterAll = () => {
        setFilteredData(todoList)
        setActiveButton({all: true, active: false, comp: false})
    }

    const filterActive = () => {
        setFilteredData(todoList.filter(td => !td.completed))
        setActiveButton({all: false, active: true, comp: false})

    }

    const filterComplete = () => {
        setFilteredData(todoList.filter(td => td.completed))
        setActiveButton({all: false, active: false, comp: true})
    }

    const clearComplete = () => {
        setTodoList(todoList.filter(td => td.completed === false))
    }

    return (
        <div className={styles.main}
             style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundColor: bgColor}}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <div className={styles.header}>
                        <h1 style={{color: "white"}}>TODO</h1>
                        <Image className={styles.themeImg} role={"button"} layout={'fixed'}
                               onClick={onThemeClick}
                               alt={""} src={resolvedTheme === 'light' ? moon : sun} width={30} height={30}/>
                    </div>
                    <div className={styles.inputContainer}
                         style={{backgroundColor: bgColor}}>
                        <Checkbox
                            onClick={onMouseClickEvent}
                            isSelected={false} bgColor={bgColor} theme={theme}/>
                        <input onChange={onInputChange} value={textInput} placeholder={placeholder}
                               onFocus={() => setPlaceholder("")}
                               onBlur={() => setPlaceholder("Add to list")}
                               style={{backgroundColor: bgColor}}/>
                    </div>
                </div>
                {
                    todoList.length > 0 &&
                    <div className={styles.todoContainer}>
                        {/*removed for causing unusual behavior*/}
                        {/*<ReactSortable list={todoList} setList={setTodoList}>*/}
                            {
                                filteredData.map((todo, index) =>
                                    <TodoItem key={index} setTodo={setTodoList} todoList={todoList} todo={todo}
                                              onMouseClick={onMouseClickEvent} bgColor={bgColor} theme={resolvedTheme}/>
                                )
                            }
                        {/*</ReactSortable>*/}

                        <div className={styles.containerFooter} style={{backgroundColor: bgColor}}>
                            <p>{todoList.filter(td => !td.completed).length} items left</p>
                            <div className={styles.filterContainer}>
                                <p style={{color: activeButton.all ? 'hsl(232,72%,61%)' : 'hsl(234, 39%, 85%)'}}
                                   onClick={filterAll}>All</p>
                                <p style={{color: activeButton.active ? 'hsl(232,72%,61%)' : 'hsl(234, 39%, 85%)'}}
                                   onClick={filterActive}>Active</p>
                                <p style={{color: activeButton.comp ? 'hsl(232,72%,61%)' : 'hsl(234, 39%, 85%)'}}
                                   onClick={filterComplete}>Completed</p>
                            </div>
                            <p onClick={clearComplete}>Clear Completed</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home
