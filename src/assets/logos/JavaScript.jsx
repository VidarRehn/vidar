import { colors } from "../../styles/partials"
import { useState } from 'react'

const JavaScript = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 12 12" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.8125 0H9.1875C10.7408 0 12 1.2592 12 2.8125V9.1875C12 10.7408 10.7408 12 9.1875 12H2.8125C1.2592 12 0 10.7408 0 9.1875V2.8125C0 1.2592 1.2592 0 2.8125 0ZM4.0736 9.47222L3.15532 10.028L3.15527 10.0279C3.4211 10.5917 3.94474 11.0589 4.84685 11.0589C5.84576 11.0589 6.53041 10.5273 6.53041 9.3593V5.50908H5.4027V9.34336C5.4027 9.90717 5.16907 10.0521 4.79852 10.0521C4.41195 10.0521 4.25079 9.78633 4.0736 9.47222ZM8.06112 9.37552L7.14293 9.90713C7.47316 10.5596 8.14981 11.059 9.19695 11.059C10.2683 11.059 11.0657 10.5033 11.0657 9.48825C11.0657 8.54583 10.526 8.12705 9.56745 7.71619L9.28554 7.59539C8.80226 7.38591 8.59282 7.24894 8.59282 6.91064C8.59282 6.6368 8.80226 6.42736 9.13254 6.42736C9.45476 6.42736 9.6641 6.56428 9.85746 6.91064L10.7355 6.34678C10.365 5.69433 9.84945 5.44458 9.13254 5.44458C8.12562 5.44458 7.48118 6.08902 7.48118 6.93483C7.48118 7.85311 8.0209 8.28811 8.83451 8.63442L9.11637 8.75531C9.6319 8.98078 9.93799 9.11775 9.93799 9.50438C9.93799 9.8266 9.64006 10.0602 9.17276 10.0602C8.61701 10.0602 8.30285 9.77025 8.06112 9.37552Z" fill="#F0DB4F"/>
            </>
        ) : (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.8125 0H9.1875C10.7408 0 12 1.2592 12 2.8125V9.1875C12 10.7408 10.7408 12 9.1875 12H2.8125C1.2592 12 0 10.7408 0 9.1875V2.8125C0 1.2592 1.2592 0 2.8125 0ZM4.0736 9.47222L3.15532 10.028L3.15527 10.0279C3.4211 10.5917 3.94474 11.0589 4.84685 11.0589C5.84576 11.0589 6.53041 10.5273 6.53041 9.3593V5.50908H5.4027V9.34336C5.4027 9.90717 5.16907 10.0521 4.79852 10.0521C4.41195 10.0521 4.25079 9.78633 4.0736 9.47222ZM8.06112 9.37552L7.14293 9.90713C7.47316 10.5596 8.14981 11.059 9.19695 11.059C10.2683 11.059 11.0657 10.5033 11.0657 9.48825C11.0657 8.54583 10.526 8.12705 9.56745 7.71619L9.28554 7.59539C8.80226 7.38591 8.59282 7.24894 8.59282 6.91064C8.59282 6.6368 8.80226 6.42736 9.13254 6.42736C9.45476 6.42736 9.6641 6.56428 9.85746 6.91064L10.7355 6.34678C10.365 5.69433 9.84945 5.44458 9.13254 5.44458C8.12562 5.44458 7.48118 6.08902 7.48118 6.93483C7.48118 7.85311 8.0209 8.28811 8.83451 8.63442L9.11637 8.75531C9.6319 8.98078 9.93799 9.11775 9.93799 9.50438C9.93799 9.8266 9.64006 10.0602 9.17276 10.0602C8.61701 10.0602 8.30285 9.77025 8.06112 9.37552Z" fill={colors.light.main}/>
            </>
        )}
    </svg>
    )
}

export default JavaScript