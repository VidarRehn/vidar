import { createPortal } from "react-dom"
import styled, { keyframes } from "styled-components"
import { useContext } from "react"
import AppContext from "../context/AppContext"
import { colors } from "../styles/partials"

const Loader = () => {

    const {darkMode, loading, setLoading} = useContext(AppContext)

    if (!loading) return null

    return createPortal (
        <Container className={darkMode && 'dark-mode'}>
            <svg viewBox="250 250 750 500" fill="none">
                <Path onAnimationEnd={() => setLoading(false)} d="M40.5 282.5L229.5 30L59.5 454L346 85L59.5 643L456.5 100L74.5 833.5L583.5 85L95.5 937.5L702.5 55.5L229.5 908L781 85L367 893L861.5 114.5L488 893L961 114.5L607 908L1054.5 100L647 1033L1198.5 30L781 986.5L1321.5 30L912.5 967.5L1396 100L1054.5 920.5L1451 184.5L1173 908L1415 507L1287.5 908L1415 766L1387.5 901.5" stroke={darkMode ? colors.background : '#1c1c1c'} strokeWidth="150" strokeLinecap="round" />
            </svg>
        </Container>,
        document.getElementById('loader')
    )
}

// viewBox="250 250 750 500"

const animation = keyframes`
    0% {stroke-dasharray: 21000 23726};
    100% {stroke-dasharray: 50 23726 }
`
const Container = styled.div`
    position: fixed;
    overflow: hidden;
    pointer-events: none;
    top: 0;
    z-index: 200;
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 110%;
        height: 110%;
    }
`
const Path = styled.path`
    animation-name: ${animation};
    animation-iteration-count: 1;
    animation-duration: 4s;
    animation-timing-function: linear;
`

export default Loader