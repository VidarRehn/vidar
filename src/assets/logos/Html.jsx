import { colors } from "../../styles/partials"
import { useState } from 'react'

const Html = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 42 47" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L3.75169 42.0767L20.5867 46.75L37.4668 42.07L41.2235 0H0ZM20.5933 19.0456V19.0456H13.7829L13.3121 13.7612H20.6118V13.7612H33.0589L33.1624 12.6024L33.3978 9.98611L33.5214 8.60031H20.5933V8.60034H7.67205L7.79561 9.98615L9.06286 24.2065H20.6118V24.2065H26.948L26.3503 30.9001L20.6118 32.4479L20.6113 32.448L20.5933 32.4528V32.4531L20.5884 32.4545L14.8415 30.9034L14.4742 26.7878H9.29327L10.0162 34.8889L20.5884 37.8241L20.6118 37.8174V37.8173L31.1739 34.8888L31.2507 34.0173L32.4628 20.4314L32.5897 19.0456H20.5933Z" fill="#E44F26"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M34.2528 39.3919L20.6118 43.1737V37.8173L31.1739 34.8888L31.2507 34.0173L32.4628 20.4314L32.5897 19.0456H20.6118V13.7612H33.0589L33.1624 12.6024L33.3978 9.98611L33.5214 8.60031H20.6118V3.44116H37.4619L34.2528 39.3919ZM20.6118 24.2065V32.4478L26.3503 30.9001L26.948 24.2065H20.6118Z" fill="#f37640"/>
            </>
        ) : (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L3.75169 42.0767L20.5867 46.75L37.4668 42.07L41.2235 0H0ZM20.5933 19.0456V19.0456H13.7829L13.3121 13.7612H20.6118V13.7612H33.0589L33.1624 12.6024L33.3978 9.98611L33.5214 8.60031H20.5933V8.60034H7.67205L7.79561 9.98615L9.06286 24.2065H20.6118V24.2065H26.948L26.3503 30.9001L20.6118 32.4479L20.6113 32.448L20.5933 32.4528V32.4531L20.5884 32.4545L14.8415 30.9034L14.4742 26.7878H9.29327L10.0162 34.8889L20.5884 37.8241L20.6118 37.8174V37.8173L31.1739 34.8888L31.2507 34.0173L32.4628 20.4314L32.5897 19.0456H20.5933Z" fill={colors.main}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M34.2528 39.3919L20.6118 43.1737V37.8173L31.1739 34.8888L31.2507 34.0173L32.4628 20.4314L32.5897 19.0456H20.6118V13.7612H33.0589L33.1624 12.6024L33.3978 9.98611L33.5214 8.60031H20.6118V3.44116H37.4619L34.2528 39.3919ZM20.6118 24.2065V32.4478L26.3503 30.9001L26.948 24.2065H20.6118Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Html