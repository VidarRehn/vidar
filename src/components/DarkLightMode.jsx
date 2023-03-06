import styled, { css } from 'styled-components'
import { SunIcon, MoonIcon } from '../assets/icons'
import AppContext from '../context/AppContext'
import { useContext } from 'react'
import { colors } from '../styles/partials'

const ToggleSwitch = () => {

    const {darkMode, setDarkMode} = useContext(AppContext)

    const changeMode = (e) => {
        setDarkMode(!darkMode)
    }

    return (
        <Container onClick={(e) => changeMode(e)} >
            {darkMode ? (
                <MoonIcon size={24} color={colors.light.background} />
            ) : (
                <SunIcon size={24} color={colors.light.background} />
            )}
        </Container>
    )
}

const Container = styled.button`
    position: absolute;
    background-color: black;
    top: 32px;
    right: 32px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        pointer-events: none;
    }
`

export default ToggleSwitch