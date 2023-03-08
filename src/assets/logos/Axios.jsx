import { colors } from "../../styles/partials"
import { useState } from 'react'

const Axios = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 108 183" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        <title>Axios</title>        
        {actualColor ? (
            <>
            <path d="M60.5 162V11.5L77 0.5V123.5H108L60.5 162Z" fill="#5A29E4"/>
            <path d="M47.5 21L47.5 171.5L31 182.5L31 59.5L1.0753e-05 59.5L47.5 21Z" fill="#5A29E4"/>
            </>
        ) : (
            <>
            <path d="M60.5 162V11.5L77 0.5V123.5H108L60.5 162Z" fill={colors.main}/>
            <path d="M47.5 21L47.5 171.5L31 182.5L31 59.5L1.0753e-05 59.5L47.5 21Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Axios