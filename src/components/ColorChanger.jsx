import styled, {css} from 'styled-components'
import { colors } from '../styles/partials'
import { PaintBrush } from '../assets/icons'
import { useState, useEffect } from 'react'
import { PaintOverlay } from '../styles/styled-components'

const ColorChanger = () => {

    const [openColors, setOpenColors] = useState(false)
    const [chosenColor, setChosenColor] = useState()

    useEffect(() => {
        if (chosenColor){
            window.addEventListener('mousemove', (e) => {
                let paintBlob = document.createElement('span')
                paintBlob.style.backgroundColor = chosenColor
                paintBlob.style.position = 'absolute'
                paintBlob.style.left = `${e.x}px`
                paintBlob.style.top = `${e.y}px`
                let overlay = document.querySelector('.paint-overlay')
                if (e.which === 1){
                    overlay.appendChild(paintBlob)
                }
            })
        }
    }, [chosenColor])

    const handleOpenClose = (e) => {
        if (e.target.tagName === 'BUTTON'){
            setOpenColors(!openColors)
        }
    }

    return (
        <>
        <Container onClick={(e) => handleOpenClose(e)}>
            <PaintBrush size={16} color={colors.background} />
            {openColors && (
                <Swatches>
                    <Blob red><div data-color='red' onClick={(e) => setChosenColor(e.target.dataset.color)}></div></Blob>
                    <Blob green><div data-color='green' onClick={(e) => setChosenColor(e.target.dataset.color)}></div></Blob>
                    <Blob blue><div data-color='blue' onClick={(e) => setChosenColor(e.target.dataset.color)}></div></Blob>
                    <Blob yellow><div data-color='yellow' onClick={(e) => setChosenColor(e.target.dataset.color)}></div></Blob>
                </Swatches>
            )}
        </Container>
        {chosenColor && (
            <PaintOverlay className='paint-overlay' />
        )}
        </>
    )
}

const Container = styled.button`
    position: absolute;
    background-color: ${colors.main};
    top: 72px;
    right: 32px;
    height: 32px;
    width: 32px;
    z-index: 50;
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    input {
        display: none;
    }

    svg {
        pointer-events: none;
    }
`
const Swatches = styled.div`
    position: absolute;
    top: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const Blob = styled.div`
    height: 28px;
    width: 28px;
    background-color: ${colors.main};
    border-radius: 50%;
    padding: 4px;

    div {
        height: 100%;
        width: 100%;
        border-radius: 50%;

        ${props => props.green && css`
            background: green;
        `}
        ${props => props.red && css`
            background: red;
        `}
        ${props => props.blue && css`
            background: blue;
        `}
        ${props => props.yellow && css`
            background: yellow;
        `}
    }
`

export default ColorChanger