import { colors } from "../../styles/partials"
import { useState } from 'react'

const Trello = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 59 59" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        <title>Trello</title>
        {actualColor ? (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M53.2383 0H5.76172C2.57961 0 0 2.57961 0 5.76172V53.2383C0 56.4204 2.57961 59 5.76172 59H53.2383C56.4204 59 59 56.4204 59 53.2383V5.76172C59 2.57961 56.4204 0 53.2383 0ZM48.2336 8H35.7664C34.2386 8 33 9.19924 33 10.6786V30.3214C33 31.8008 34.2386 33 35.7664 33H48.2336C49.7614 33 51 31.8008 51 30.3214V10.6786C51 9.19924 49.7614 8 48.2336 8ZM10.7664 8H23.2336C24.7614 8 26 9.22104 26 10.7273V45.2727C26 46.779 24.7614 48 23.2336 48H10.7664C9.23856 48 8 46.779 8 45.2727V10.7273C8 9.22104 9.23856 8 10.7664 8Z" fill="url(#paint0_linear_41_623)"/>
            <defs>
            <linearGradient id="paint0_linear_41_623" x1="2950" y1="0" x2="2950" y2="5900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0091E6"/>
            <stop offset="0.0291665" stopColor="#003F64"/>
            </linearGradient>
            </defs>
            </>
        ) : (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M53.2383 0H5.76172C2.57961 0 0 2.57961 0 5.76172V53.2383C0 56.4204 2.57961 59 5.76172 59H53.2383C56.4204 59 59 56.4204 59 53.2383V5.76172C59 2.57961 56.4204 0 53.2383 0ZM48.2336 8H35.7664C34.2386 8 33 9.19924 33 10.6786V30.3214C33 31.8008 34.2386 33 35.7664 33H48.2336C49.7614 33 51 31.8008 51 30.3214V10.6786C51 9.19924 49.7614 8 48.2336 8ZM10.7664 8H23.2336C24.7614 8 26 9.22104 26 10.7273V45.2727C26 46.779 24.7614 48 23.2336 48H10.7664C9.23856 48 8 46.779 8 45.2727V10.7273C8 9.22104 9.23856 8 10.7664 8Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Trello