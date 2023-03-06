import { colors } from "../../styles/partials"
import { useState } from 'react'

const Figma = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 73 110" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path d="M18 110C27.936 110 36 101.712 36 91.5V73H18C8.064 73 0 81.288 0 91.5C0 101.712 8.064 110 18 110Z" fill="#0ACF83"/>
            <path d="M0 55C0 45.064 8.064 37 18 37H36V73H18C8.064 73 0 64.936 0 55Z" fill="#A259FF"/>
            <path d="M0 18.5C0 8.288 8.064 0 18 0H36V37H18C8.064 37 0 28.712 0 18.5Z" fill="#F24E1E"/>
            <path d="M36 0H54.5C64.712 0 73 8.288 73 18.5C73 28.712 64.712 37 54.5 37H36V0Z" fill="#FF7262"/>
            <path d="M73 55C73 64.936 64.712 73 54.5 73C44.288 73 36 64.936 36 55C36 45.064 44.288 37 54.5 37C64.712 37 73 45.064 73 55Z" fill="#1ABCFE"/>
            </>
        ) : (
            <>
            <path d="M18 110C27.936 110 36 101.712 36 91.5V73H18C8.064 73 0 81.288 0 91.5C0 101.712 8.064 110 18 110Z" fill={colors.main}/>
            <path d="M0 55C0 45.064 8.064 37 18 37H36V73H18C8.064 73 0 64.936 0 55Z" fill={colors.main}/>
            <path d="M0 18.5C0 8.288 8.064 0 18 0H36V37H18C8.064 37 0 28.712 0 18.5Z" fill={colors.main}/>
            <path d="M36 0H54.5C64.712 0 73 8.288 73 18.5C73 28.712 64.712 37 54.5 37H36V0Z" fill={colors.main}/>
            <path d="M73 55C73 64.936 64.712 73 54.5 73C44.288 73 36 64.936 36 55C36 45.064 44.288 37 54.5 37C64.712 37 73 45.064 73 55Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Figma