import { colors } from "../../styles/partials"
import { useState } from 'react'

const Next = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 78 78" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path d="M58.8655 5.40943C33.0678 -9.75928 0.287208 8.76739 0.00186825 38.6773C-0.276616 67.8841 30.6326 86.7487 56.3721 73.8936L28.2689 32.5461V58.1394C28.2689 60.9751 22.8426 60.9751 22.8426 58.1394V23.8298C22.8426 21.5787 27.0241 21.3939 28.2091 23.3507L60.2413 71.6887C84.304 56.1897 83.9791 20.1758 58.8655 5.40943ZM55.2464 53.8454L49.8027 45.531V22.769C49.8027 20.6465 55.2463 20.6465 55.2463 22.769V53.8454H55.2464Z" fill="url(#paint0_linear_41_614)"/>
            <defs>
            <linearGradient id="paint0_linear_41_614" x1="-13.5" y1="65.5" x2="97.5" y2="-1.47239e-06" gradientUnits="userSpaceOnUse">
            <stop stop-color="#40B7B1"/>
            <stop offset="1" stop-color="#A2E9E5"/>
            </linearGradient>
            </defs>
            </>
        ) : (
            <>
            <path d="M58.8655 5.40943C33.0678 -9.75928 0.287208 8.76739 0.00186825 38.6773C-0.276616 67.8841 30.6326 86.7487 56.3721 73.8936L28.2689 32.5461V58.1394C28.2689 60.9751 22.8426 60.9751 22.8426 58.1394V23.8298C22.8426 21.5787 27.0241 21.3939 28.2091 23.3507L60.2413 71.6887C84.304 56.1897 83.9791 20.1758 58.8655 5.40943ZM55.2464 53.8454L49.8027 45.531V22.769C49.8027 20.6465 55.2463 20.6465 55.2463 22.769V53.8454H55.2464Z" fill={colors.light.main}/>          
            </>
        )}
    </svg>
    )
}

export default Next