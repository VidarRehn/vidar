import { colors } from "../../styles/partials"
import { useState } from 'react'

const Linear = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 50 50" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        <title>Linear</title>
        {actualColor ? (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.253662 21.4253C0.466553 19.9375 0.810547 18.4922 1.27319 17.1016L32.8982 48.7266C31.5073 49.1895 30.062 49.5332 28.5747 49.7461L0.253662 21.4253ZM0.0710449 26.8999C0.994629 39.1924 10.8079 49.0049 23.1003 49.9287L0.0710449 26.8999ZM40.6602 44.4888C39.4736 45.4434 38.1982 46.2915 36.8481 47.0195L2.98022 13.1519C3.70825 11.8018 4.55664 10.5264 5.51123 9.33984L40.6602 44.4888ZM43.5684 41.7397C47.5662 37.3081 50 31.4385 50 25C50 11.1929 38.8071 0 25 0C18.5615 0 12.6917 2.43359 8.26001 6.43164L43.5684 41.7397Z" fill="#5E6AD2"/>
            </>
        ) : (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.253662 21.4253C0.466553 19.9375 0.810547 18.4922 1.27319 17.1016L32.8982 48.7266C31.5073 49.1895 30.062 49.5332 28.5747 49.7461L0.253662 21.4253ZM0.0710449 26.8999C0.994629 39.1924 10.8079 49.0049 23.1003 49.9287L0.0710449 26.8999ZM40.6602 44.4888C39.4736 45.4434 38.1982 46.2915 36.8481 47.0195L2.98022 13.1519C3.70825 11.8018 4.55664 10.5264 5.51123 9.33984L40.6602 44.4888ZM43.5684 41.7397C47.5662 37.3081 50 31.4385 50 25C50 11.1929 38.8071 0 25 0C18.5615 0 12.6917 2.43359 8.26001 6.43164L43.5684 41.7397Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Linear