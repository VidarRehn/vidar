import { colors } from "../../styles/partials"
import { useState } from 'react'

const Procreate = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 56 56" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path d="M15.7698 30.5874C11.2835 34.897 10.5481 44.4516 11.2113 45C11.7735 44.7258 12.42 38.882 18.3381 35.5877C25.7357 31.4698 35.7715 33.4839 40.9051 27.0578C47.1021 19.3003 44.5703 11.2742 44.0366 11C43.6508 11 42.1329 17.5537 36.6019 21.1751C29.9471 25.5323 24.7427 21.9677 15.7698 30.5874Z" fill="url(#paint0_linear_41_626)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M40 5H16C9.92487 5 5 9.92487 5 16V40C5 46.0751 9.92487 51 16 51H40C46.0751 51 51 46.0751 51 40V16C51 9.92487 46.0751 5 40 5ZM16 0C7.16344 0 0 7.16344 0 16V40C0 48.8366 7.16344 56 16 56H40C48.8366 56 56 48.8366 56 40V16C56 7.16344 48.8366 0 40 0H16Z" fill="url(#paint1_linear_41_626)"/>
            <defs>
            <linearGradient id="paint0_linear_41_626" x1="45.9107" y1="10.6964" x2="9.48214" y2="44.6964" gradientUnits="userSpaceOnUse">
            <stop stopColor="#190C62"/>
            <stop offset="0.384349" stopColor="#D349DB"/>
            <stop offset="0.630467" stopColor="#F8A4C5"/>
            <stop offset="1" stopColor="#F5F4B5"/>
            </linearGradient>
            <linearGradient id="paint1_linear_41_626" x1="57.5" y1="-0.500004" x2="-2.5" y2="55.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#190C62"/>
            <stop offset="0.384349" stopColor="#D349DB"/>
            <stop offset="0.630467" stopColor="#F8A4C5"/>
            <stop offset="1" stopColor="#F5F4B5"/>
            </linearGradient>
            </defs>
            </>
        ) : (
            <>
            <path d="M15.7698 30.5874C11.2835 34.897 10.5481 44.4516 11.2113 45C11.7735 44.7258 12.42 38.882 18.3381 35.5877C25.7357 31.4698 35.7715 33.4839 40.9051 27.0578C47.1021 19.3003 44.5703 11.2742 44.0366 11C43.6508 11 42.1329 17.5537 36.6019 21.1751C29.9471 25.5323 24.7427 21.9677 15.7698 30.5874Z" fill={colors.main}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M40 5H16C9.92487 5 5 9.92487 5 16V40C5 46.0751 9.92487 51 16 51H40C46.0751 51 51 46.0751 51 40V16C51 9.92487 46.0751 5 40 5ZM16 0C7.16344 0 0 7.16344 0 16V40C0 48.8366 7.16344 56 16 56H40C48.8366 56 56 48.8366 56 40V16C56 7.16344 48.8366 0 40 0H16Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Procreate