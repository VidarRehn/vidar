import styled, { css } from 'styled-components'
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
        setDarkMode(!darkMode)        
    }

    return (
        <Container onClick={(e) => changeMode(e)} >
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
    z-index: 50;
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