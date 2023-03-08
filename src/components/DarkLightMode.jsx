import styled from 'styled-components'
import { SunIcon, MoonIcon } from '../assets/icons'
import AppContext from '../context/AppContext'
import { useContext } from 'react'
import { colors } from '../styles/partials'

const ToggleSwitch = () => {

    const {darkMode, setDarkMode} = useContext(AppContext)

    const changeMode = (e) => {
        if (darkMode){
            localStorage.setItem('theme', 'light')
            setDarkMode(false)
        } else {
            localStorage.setItem('theme', 'dark')
            setDarkMode(true)
        }
        e.target.style.zIndex = 'auto'
        e.target.style.backgroundColor = colors.main
        e.target.firstChild.firstChild.style.fill = colors.background
        setDarkMode(!darkMode)        
    }

    const handleHover = (e) => {
        e.target.style.zIndex = '200'
        e.target.style.backgroundColor = e.target.firstChild.dataset.color
        e.target.firstChild.firstChild.style.fill = colors.main
    }

    const handleMouseLeave = (e) => {
        setTimeout(() => {
            e.target.style.zIndex = 'auto'
            e.target.style.backgroundColor = colors.main
            e.target.firstChild.firstChild.style.fill = colors.background
        }, 300)
    }

    return (
        <Container title={darkMode ? 'Change to light mode' : 'Change to dark mode'} onClick={(e) => changeMode(e)} onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleMouseLeave(e)} >
            {darkMode ? (
                <MoonIcon size={16} color={colors.background} />
            ) : (
                <SunIcon size={16} color={colors.background} />
            )}
        </Container>
    )
}

const Container = styled.button`
    position: absolute;
    background-color: ${colors.main};
    top: 32px;
    right: 32px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    svg {
        pointer-events: none;
    }
`

export default ToggleSwitch