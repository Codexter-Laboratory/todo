import { useTheme } from 'next-themes'

const ThemeToggle = () => {


    return (
        <div>
            <button onClick={() => setTheme('light')}>Light Mode</button>
        </div>
    )
}
export default ThemeToggle
