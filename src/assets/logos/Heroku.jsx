import { colors } from "../../styles/partials"
import { useState } from 'react'

const Heroku = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 62 69" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        <title>Heroku</title>
        {actualColor ? (
            <>
            <path d="M55.8 0C59.1897 0 61.9443 2.72464 61.9993 6.1074L62 6.21001V62.79C62 66.1851 59.279 68.9442 55.9024 68.9993L55.8 69H6.2C2.81034 69 0.0557031 66.2746 0.000726563 62.8928L0 62.79V6.21001C0 2.81415 2.72098 0.0557931 6.09755 0.000727736L6.2 0H55.8ZM55.8 3.44995H6.2C4.70473 3.44995 3.48314 4.65023 3.44536 6.13893L3.44439 6.21001V62.79C3.44439 64.2877 4.64273 65.5112 6.12904 65.5491L6.2 65.55H55.8C57.296 65.55 58.5169 64.35 58.5546 62.8613L58.5556 62.79V6.21001C58.5556 4.68856 57.32 3.44995 55.8 3.44995ZM15.5 44.8503L23.25 51.7502L15.5 58.6504V44.8503ZM22.3888 10.3501V29.9383C25.8281 28.8171 30.6358 27.5999 35.3056 27.5999C39.5638 27.5999 42.1125 29.2768 43.5007 30.6835C46.4334 33.6551 46.5031 37.432 46.4993 37.9359V37.95L46.5 58.6501H39.6112V38.045C39.5773 36.4346 38.8023 34.5 35.3056 34.5C28.3713 34.5 20.6014 37.9584 20.3709 38.0618L20.366 38.064L15.5 40.2719V10.3499L22.3888 10.3501ZM46.5 10.3501C46.035 14.2692 44.4487 18.0263 41.3334 21.5626H34.4444C37.1518 18.0047 38.8517 14.2607 39.6112 10.3501H46.5Z" fill="#430098"/>
            </>
        ) : (
            <>
            <path d="M55.8 0C59.1897 0 61.9443 2.72464 61.9993 6.1074L62 6.21001V62.79C62 66.1851 59.279 68.9442 55.9024 68.9993L55.8 69H6.2C2.81034 69 0.0557031 66.2746 0.000726563 62.8928L0 62.79V6.21001C0 2.81415 2.72098 0.0557931 6.09755 0.000727736L6.2 0H55.8ZM55.8 3.44995H6.2C4.70473 3.44995 3.48314 4.65023 3.44536 6.13893L3.44439 6.21001V62.79C3.44439 64.2877 4.64273 65.5112 6.12904 65.5491L6.2 65.55H55.8C57.296 65.55 58.5169 64.35 58.5546 62.8613L58.5556 62.79V6.21001C58.5556 4.68856 57.32 3.44995 55.8 3.44995ZM15.5 44.8503L23.25 51.7502L15.5 58.6504V44.8503ZM22.3888 10.3501V29.9383C25.8281 28.8171 30.6358 27.5999 35.3056 27.5999C39.5638 27.5999 42.1125 29.2768 43.5007 30.6835C46.4334 33.6551 46.5031 37.432 46.4993 37.9359V37.95L46.5 58.6501H39.6112V38.045C39.5773 36.4346 38.8023 34.5 35.3056 34.5C28.3713 34.5 20.6014 37.9584 20.3709 38.0618L20.366 38.064L15.5 40.2719V10.3499L22.3888 10.3501ZM46.5 10.3501C46.035 14.2692 44.4487 18.0263 41.3334 21.5626H34.4444C37.1518 18.0047 38.8517 14.2607 39.6112 10.3501H46.5Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Heroku