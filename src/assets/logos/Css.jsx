import { colors } from "../../styles/partials"
import { useState } from 'react'

const Css = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 25 28" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L2.246 25.201L12.329 28L22.439 25.197L24.688 0H0ZM4.89906 8.02606H12.344H12.3551H16.716L16.434 11.1911H12.344V14.2821H16.1593L15.7991 18.2899L12.3521 19.2199V19.221L12.349 19.2219L8.90698 18.2919L8.68699 15.8269H7.01398H5.58398L6.01698 20.6799L12.348 22.4379L12.363 22.4339V22.4328L18.6881 20.6799L18.7351 20.1579L19.2603 14.2821H19.261L20.02 5.76406L20.094 4.93506H12.3551H12.355H12.344H4.61206L4.68606 5.76406L4.82706 7.33106L4.88906 8.02606H4.89906ZM12.3439 11.1912V13.1112V14.2742V14.2822H8.95495H8.94495L8.88295 13.5872L8.74295 12.0202L8.66895 11.1912H12.3439Z" fill="#1572B6"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M20.514 23.593L12.344 25.858V14.2821H16.1593L15.7991 18.2899L12.3521 19.2199V22.4359L18.6881 20.6799L18.7351 20.1579L19.2603 14.2821H19.261L20.02 5.76406L20.094 4.93506H12.355H12.344V2.06104H22.436L20.514 23.593ZM12.344 8.02606H16.716L16.434 11.1911H12.344V8.02606Z" fill="#33A9DC"/>
            </>
        ) : (
            <>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L2.246 25.201L12.329 28L22.439 25.197L24.688 0H0ZM4.89906 8.02606H12.344H12.3551H16.716L16.434 11.1911H12.344V14.2821H16.1593L15.7991 18.2899L12.3521 19.2199V19.221L12.349 19.2219L8.90698 18.2919L8.68699 15.8269H7.01398H5.58398L6.01698 20.6799L12.348 22.4379L12.363 22.4339V22.4328L18.6881 20.6799L18.7351 20.1579L19.2603 14.2821H19.261L20.02 5.76406L20.094 4.93506H12.3551H12.355H12.344H4.61206L4.68606 5.76406L4.82706 7.33106L4.88906 8.02606H4.89906ZM12.3439 11.1912V13.1112V14.2742V14.2822H8.95495H8.94495L8.88295 13.5872L8.74295 12.0202L8.66895 11.1912H12.3439Z" fill={colors.main}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M20.514 23.593L12.344 25.858V14.2821H16.1593L15.7991 18.2899L12.3521 19.2199V22.4359L18.6881 20.6799L18.7351 20.1579L19.2603 14.2821H19.261L20.02 5.76406L20.094 4.93506H12.355H12.344V2.06104H22.436L20.514 23.593ZM12.344 8.02606H16.716L16.434 11.1911H12.344V8.02606Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default Css