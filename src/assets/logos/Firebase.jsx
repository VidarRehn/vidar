import { colors } from "../../styles/partials"
import { useState } from 'react'

const Firebase = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 8 11" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path d="M0 8.47479L0.0637498 8.38592L3.07125 2.68067L3.07762 2.62029L1.752 0.130295C1.72773 0.0847609 1.68976 0.0480109 1.64346 0.0252436C1.59715 0.00247634 1.54487 -0.00515543 1.49399 0.00342796C1.44311 0.0120113 1.39622 0.0363753 1.35995 0.073073C1.32368 0.109771 1.29986 0.156944 1.29187 0.20792L0 8.47479Z" fill="#FFC24A"/>
            <path d="M0.0373535 8.40732L0.0853534 8.31357L3.06173 2.66757L1.73948 0.167824C1.71767 0.124352 1.68237 0.0891146 1.63886 0.0673919C1.59534 0.0456692 1.54596 0.0386306 1.49811 0.0473307C1.45026 0.0560307 1.40652 0.080001 1.37343 0.11565C1.34035 0.1513 1.31971 0.196709 1.3146 0.245074L0.0373535 8.40732Z" fill="#FFA712"/>
            <path d="M4.044 4.50358L5.031 3.49108L4.04362 1.60821C4.02189 1.56769 3.98958 1.53382 3.95012 1.5102C3.91066 1.48659 3.86554 1.47412 3.81956 1.47412C3.77358 1.47412 3.72846 1.48659 3.689 1.5102C3.64954 1.53382 3.61723 1.56769 3.5955 1.60821L3.06787 2.61396V2.69983L4.044 4.50358Z" fill="#F4BD62"/>
            <path d="M4.02639 4.46222L4.98601 3.47972L4.02639 1.64972C4.01068 1.6101 3.98385 1.57588 3.94913 1.55117C3.91442 1.52647 3.87329 1.51233 3.83072 1.51047C3.78815 1.5086 3.74595 1.51909 3.7092 1.54067C3.67246 1.56225 3.64274 1.594 3.62364 1.63209L3.09339 2.65547L3.07764 2.70759L4.02639 4.46222Z" fill="#FFA50E"/>
            <path d="M0.000732422 8.47503L0.0296075 8.44578L0.134232 8.4034L3.98173 4.57015L4.03048 4.4374L3.07086 2.60815L0.000732422 8.47503Z" fill="#F6820C"/>
            <path d="M4.167 10.4084L7.65 8.46625L6.65475 2.34212C6.64762 2.29895 6.62872 2.25858 6.60015 2.22544C6.57157 2.1923 6.53442 2.16768 6.49277 2.15427C6.45112 2.14087 6.40657 2.1392 6.36403 2.14945C6.32149 2.1597 6.2826 2.18147 6.25163 2.21237L0 8.47487L3.46237 10.408C3.57002 10.4681 3.69123 10.4996 3.8145 10.4996C3.93777 10.4996 4.05898 10.4681 4.16662 10.408" fill="#FDE068"/>
            <path d="M7.61798 8.44994L6.63098 2.37194C6.62924 2.33065 6.61528 2.2908 6.59088 2.25744C6.56649 2.22408 6.53274 2.19871 6.49392 2.18454C6.45509 2.17037 6.41294 2.16803 6.37278 2.17783C6.33263 2.18762 6.29629 2.20911 6.26835 2.23957L0.0373535 8.46307L3.46148 10.3756C3.56826 10.4351 3.68851 10.4664 3.81079 10.4664C3.93307 10.4664 4.05332 10.4351 4.1601 10.3756L7.61798 8.44994Z" fill="#FCCA3F"/>
            <path d="M4.167 10.3497C4.05936 10.4098 3.93814 10.4413 3.81487 10.4413C3.69161 10.4413 3.57039 10.4098 3.46275 10.3497L0.0284999 8.44545L0 8.4747L3.46237 10.4078C3.57002 10.4679 3.69123 10.4994 3.8145 10.4994C3.93777 10.4994 4.05898 10.4679 4.16662 10.4078L7.65 8.46607L7.64137 8.41357L4.167 10.3497Z" fill="#EEAB37"/>
            </>
        ) : (
            <>
            <path d="M0 8.47479L0.0637498 8.38592L3.07125 2.68067L3.07762 2.62029L1.752 0.130295C1.72773 0.0847609 1.68976 0.0480109 1.64346 0.0252436C1.59715 0.00247634 1.54487 -0.00515543 1.49399 0.00342796C1.44311 0.0120113 1.39622 0.0363753 1.35995 0.073073C1.32368 0.109771 1.29986 0.156944 1.29187 0.20792L0 8.47479Z" fill={colors.light.main}/>
            <path d="M0.0373535 8.40732L0.0853534 8.31357L3.06173 2.66757L1.73948 0.167824C1.71767 0.124352 1.68237 0.0891146 1.63886 0.0673919C1.59534 0.0456692 1.54596 0.0386306 1.49811 0.0473307C1.45026 0.0560307 1.40652 0.080001 1.37343 0.11565C1.34035 0.1513 1.31971 0.196709 1.3146 0.245074L0.0373535 8.40732Z" fill={colors.light.main}/>
            <path d="M4.044 4.50358L5.031 3.49108L4.04362 1.60821C4.02189 1.56769 3.98958 1.53382 3.95012 1.5102C3.91066 1.48659 3.86554 1.47412 3.81956 1.47412C3.77358 1.47412 3.72846 1.48659 3.689 1.5102C3.64954 1.53382 3.61723 1.56769 3.5955 1.60821L3.06787 2.61396V2.69983L4.044 4.50358Z" fill={colors.light.main}/>
            <path d="M4.02639 4.46222L4.98601 3.47972L4.02639 1.64972C4.01068 1.6101 3.98385 1.57588 3.94913 1.55117C3.91442 1.52647 3.87329 1.51233 3.83072 1.51047C3.78815 1.5086 3.74595 1.51909 3.7092 1.54067C3.67246 1.56225 3.64274 1.594 3.62364 1.63209L3.09339 2.65547L3.07764 2.70759L4.02639 4.46222Z" fill={colors.light.main}/>
            <path d="M0.000732422 8.47503L0.0296075 8.44578L0.134232 8.4034L3.98173 4.57015L4.03048 4.4374L3.07086 2.60815L0.000732422 8.47503Z" fill={colors.light.main}/>
            <path d="M4.167 10.4084L7.65 8.46625L6.65475 2.34212C6.64762 2.29895 6.62872 2.25858 6.60015 2.22544C6.57157 2.1923 6.53442 2.16768 6.49277 2.15427C6.45112 2.14087 6.40657 2.1392 6.36403 2.14945C6.32149 2.1597 6.2826 2.18147 6.25163 2.21237L0 8.47487L3.46237 10.408C3.57002 10.4681 3.69123 10.4996 3.8145 10.4996C3.93777 10.4996 4.05898 10.4681 4.16662 10.408" fill={colors.light.main}/>
            <path d="M7.61798 8.44994L6.63098 2.37194C6.62924 2.33065 6.61528 2.2908 6.59088 2.25744C6.56649 2.22408 6.53274 2.19871 6.49392 2.18454C6.45509 2.17037 6.41294 2.16803 6.37278 2.17783C6.33263 2.18762 6.29629 2.20911 6.26835 2.23957L0.0373535 8.46307L3.46148 10.3756C3.56826 10.4351 3.68851 10.4664 3.81079 10.4664C3.93307 10.4664 4.05332 10.4351 4.1601 10.3756L7.61798 8.44994Z" fill={colors.light.main}/>
            <path d="M4.167 10.3497C4.05936 10.4098 3.93814 10.4413 3.81487 10.4413C3.69161 10.4413 3.57039 10.4098 3.46275 10.3497L0.0284999 8.44545L0 8.4747L3.46237 10.4078C3.57002 10.4679 3.69123 10.4994 3.8145 10.4994C3.93777 10.4994 4.05898 10.4679 4.16662 10.4078L7.65 8.46607L7.64137 8.41357L4.167 10.3497Z" fill={colors.light.main}/>            
            </>
        )}
    </svg>
    )
}

export default Firebase