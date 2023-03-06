import { colors } from "../../styles/partials"
import { useState } from 'react'

const Three = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 156 158" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path d="M0.05308 2.19171C-0.271717 0.872551 0.947642 -0.305398 2.24927 0.0711549L40.1706 11.023C40.511 11.0222 40.8446 11.1186 41.1322 11.3011L115.921 32.9003C116.23 32.9064 116.536 32.995 116.802 33.1546L154.726 44.1076C156.029 44.4842 156.436 46.1346 155.459 47.0773L41.0183 157.506C40.0415 158.448 38.4138 157.976 38.089 156.656L19.1058 79.5653C19.0803 79.4861 19.0604 79.4052 19.0461 79.3232L0.05308 2.19171ZM32.5364 119.381L40.7752 152.839L65.5852 128.898L32.5364 119.381ZM58.0924 92.9225L34.0714 116.148L66.0709 125.364L58.0924 92.9225ZM61.6578 92.6743L69.6114 125.013L93.5665 101.898L61.6578 92.6743ZM23.2246 81.5648L31.2128 114.008L55.2051 90.8093L23.2246 81.5648ZM86.4191 65.5014L62.0131 89.1007L94.5372 98.5023L86.4191 65.5014ZM89.8389 64.6621L97.957 97.6618L122.43 74.0472L89.8389 64.6621ZM48.6568 54.5508L24.1983 78.1709L56.7822 87.589L48.6568 54.5508ZM52.0632 53.6602L60.0424 86.1012L84.0633 62.8747L52.0638 53.6602H52.0632ZM13.6409 42.643L21.7608 75.6225L46.2016 52.0195L13.6409 42.643ZM114.914 38.0644L90.8932 61.2903L122.893 70.506L114.914 38.0644ZM118.347 37.2759L126.439 70.179L150.819 46.6542L118.347 37.2759ZM76.9946 27.186L53.0821 50.2786L84.931 59.4497L76.9946 27.186ZM80.4077 26.3186L88.3978 58.7987L112.425 35.5655L80.4077 26.3186ZM39.206 16.1871L15.1851 39.4136L47.1846 48.6281L39.206 16.1871ZM42.6417 15.4114L50.6007 47.7711L74.5631 24.6308L42.6417 15.4114ZM4.20109 4.30982L12.3198 37.2796L36.7082 13.698L4.20109 4.30982Z" fill="#049EF4"/>
            </>
        ) : (
            <>
            <path d="M0.05308 2.19171C-0.271717 0.872551 0.947642 -0.305398 2.24927 0.0711549L40.1706 11.023C40.511 11.0222 40.8446 11.1186 41.1322 11.3011L115.921 32.9003C116.23 32.9064 116.536 32.995 116.802 33.1546L154.726 44.1076C156.029 44.4842 156.436 46.1346 155.459 47.0773L41.0183 157.506C40.0415 158.448 38.4138 157.976 38.089 156.656L19.1058 79.5653C19.0803 79.4861 19.0604 79.4052 19.0461 79.3232L0.05308 2.19171ZM32.5364 119.381L40.7752 152.839L65.5852 128.898L32.5364 119.381ZM58.0924 92.9225L34.0714 116.148L66.0709 125.364L58.0924 92.9225ZM61.6578 92.6743L69.6114 125.013L93.5665 101.898L61.6578 92.6743ZM23.2246 81.5648L31.2128 114.008L55.2051 90.8093L23.2246 81.5648ZM86.4191 65.5014L62.0131 89.1007L94.5372 98.5023L86.4191 65.5014ZM89.8389 64.6621L97.957 97.6618L122.43 74.0472L89.8389 64.6621ZM48.6568 54.5508L24.1983 78.1709L56.7822 87.589L48.6568 54.5508ZM52.0632 53.6602L60.0424 86.1012L84.0633 62.8747L52.0638 53.6602H52.0632ZM13.6409 42.643L21.7608 75.6225L46.2016 52.0195L13.6409 42.643ZM114.914 38.0644L90.8932 61.2903L122.893 70.506L114.914 38.0644ZM118.347 37.2759L126.439 70.179L150.819 46.6542L118.347 37.2759ZM76.9946 27.186L53.0821 50.2786L84.931 59.4497L76.9946 27.186ZM80.4077 26.3186L88.3978 58.7987L112.425 35.5655L80.4077 26.3186ZM39.206 16.1871L15.1851 39.4136L47.1846 48.6281L39.206 16.1871ZM42.6417 15.4114L50.6007 47.7711L74.5631 24.6308L42.6417 15.4114ZM4.20109 4.30982L12.3198 37.2796L36.7082 13.698L4.20109 4.30982Z" fill={colors.light.main}/>
            </>
        )}
    </svg>
    )
}

export default Three