import { colors } from "../../styles/partials"
import { useState } from 'react'

const Shapr = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox={actualColor ? "0 0 180 194" : "0 0 89 96"} onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        <title>Shapr3d</title>
        {actualColor ? (
            <>
            <path d="M47 13L133 80V130L47 63V13Z" fill="#00A7FF"/>
            <path d="M133 180L47 113V63L133 130V180Z" fill="#0BFEFD"/>
            <path d="M133 80L180 66V116L133 130V80Z" fill="#00CEFF"/>
            <path d="M47 113L0 127V77L47 63V113Z" fill="#00CEFF"/>
            <path d="M47 13L92.5 0L180 66L133 80L47 13Z" fill="#0BFEFD"/>
            <path d="M133 180L86 194L0 127L47 113L133 180Z" fill="#00A7FF"/>
            </>
        ) : (
            <>
            <path d="M23.2388 6.42773L65.761 39.5555V64.2777L23.2388 31.15V6.42773Z" fill={colors.main}/>
            <path d="M65.2612 64.5221V87.9766L23.739 55.6279V32.1734L65.2612 64.5221Z" stroke={colors.main} fill='none' strokeWidth={2} />
            <path d="M65.7612 39.5555L89.0001 32.6333V57.3555L65.7612 64.2777V39.5555Z" fill={colors.main}/>
            <path d="M23.2388 55.8722L-0.000120074 62.7944V38.0722L23.2388 31.15V55.8722Z" fill={colors.main}/>
            <path d="M65.8651 39.0028L24.3224 6.63818L45.6338 0.549206L87.9088 32.4366L65.8651 39.0028Z" stroke={colors.main} strokeWidth={2} fill="none"/>
            <path d="M65.7612 88.9999L42.5223 95.9221L0.000121295 62.7943L23.239 55.8721L65.7612 88.9999Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Shapr