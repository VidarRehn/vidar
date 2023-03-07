import { colors } from "../../styles/partials"
import { useState } from 'react'

const Miro = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 99 99" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        <title>Miro</title>
        {actualColor ? (
            <>
            <path d="M71.742 0H57.3375L70.125 19.833L43.0815 0H28.6646L41.4604 25.9875L14.4128 0H0L12.5813 33.5404L0 99H14.4128L41.4562 28.8131L28.6646 99H43.0774L70.125 22.6628L57.3334 99H71.742L99 15.147L71.742 0Z" fill="#FFD02F"/>            
            </>
        ) : (
            <>
            <path d="M71.742 0H57.3375L70.125 19.833L43.0815 0H28.6646L41.4604 25.9875L14.4128 0H0L12.5813 33.5404L0 99H14.4128L41.4562 28.8131L28.6646 99H43.0774L70.125 22.6628L57.3334 99H71.742L99 15.147L71.742 0Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Miro