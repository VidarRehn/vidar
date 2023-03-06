import { colors } from "../../styles/partials"
import { useState } from 'react'

const Github = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 69 73" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path d="M15.6709 15.3087C14.763 12.9827 14.7993 10.3249 15.2024 7.89318C17.9776 8.72797 20.584 10.0486 22.9013 11.7942C23.9181 12.5744 25.2509 12.826 26.4929 12.4504C29.6798 11.4932 32.9897 11.0116 36.3162 11.0213C39.8061 11.0213 43.1217 11.5317 46.1322 12.4468C47.3742 12.826 48.707 12.5707 49.7202 11.7905C52.0364 10.0454 54.6415 8.72472 57.4154 7.88953C57.8185 10.3213 57.8512 12.9791 56.9506 15.3015C56.4058 16.7014 56.6782 18.3129 57.7059 19.4577C60.3352 22.3853 61.7369 25.7503 61.7369 29.2503C61.7369 36.9576 54.5828 44.5153 43.0926 46.8158C40.2165 47.3919 39.0943 51.0267 41.295 53.1085C42.7077 54.4428 43.5793 56.3241 43.5793 58.4168V69.3542C43.5793 70.3211 43.9619 71.2485 44.6429 71.9322C45.324 72.6159 46.2476 73 47.2108 73C48.1739 73 49.0976 72.6159 49.7787 71.9322C50.4597 71.2485 50.8423 70.3211 50.8423 69.3542V58.4168C50.8423 56.3387 50.4065 54.3626 49.6294 52.5725C60.5857 48.7554 69 40.1622 69 29.2503C69 24.3394 67.2423 19.8259 64.3262 16.0452C65.0888 13.0556 65.0198 10.0442 64.7293 7.73276C64.4715 5.66194 64.112 2.94946 62.6593 1.33072C60.4986 -1.07187 56.9215 0.342707 54.3794 1.21406C51.6525 2.14041 49.0581 3.42126 46.6624 5.02392C43.2816 4.15773 39.8054 3.72288 36.3162 3.72966C32.7064 3.72966 29.2238 4.18539 25.9627 5.02757C23.567 3.42487 20.9726 2.14402 18.2457 1.2177C15.7036 0.342708 12.1229 -1.07187 9.96213 1.33072C8.48047 2.97863 8.17179 5.476 7.90669 7.59786L7.88853 7.7364C7.598 10.0515 7.53264 13.0666 8.29526 16.0598C5.39003 19.8368 3.63237 24.3431 3.63237 29.2503C3.63237 40.1586 12.0466 48.7554 23.003 52.5725C22.2099 54.3928 21.7971 56.3571 21.79 58.3439L21.1799 58.4678C18.5761 58.8287 16.9093 58.5043 15.7762 58.023C13.0163 56.8491 11.5927 53.8923 9.85682 51.6319C8.77462 50.2283 7.19854 48.4747 4.77993 47.6653C4.32735 47.514 3.84953 47.4537 3.37373 47.4878C2.89793 47.5219 2.43348 47.6497 2.0069 47.864C1.14538 48.2968 0.490394 49.0555 0.186041 49.9731C-0.118312 50.8907 -0.0471056 51.8921 0.383996 52.757C0.815097 53.6219 1.57078 54.2795 2.4848 54.585C4.5112 55.2631 5.91297 58.7485 7.19854 60.2944C8.5531 61.9277 10.3543 63.6339 12.9364 64.735C15.4131 65.7922 18.3219 66.1678 21.79 65.7412V69.3542C21.79 70.3211 22.1727 71.2485 22.8537 71.9322C23.5347 72.6159 24.4584 73 25.4216 73C26.3847 73 27.3084 72.6159 27.9895 71.9322C28.6705 71.2485 29.0531 70.3211 29.0531 69.3542V58.4168C29.0531 56.3241 29.9247 54.4428 31.3373 53.1085C33.5417 51.0231 32.4159 47.3919 29.5397 46.8158C18.0459 44.5153 10.8954 36.9576 10.8954 29.2503C10.8954 25.7576 12.2936 22.3926 14.9192 19.465C15.9469 18.3202 16.2156 16.7087 15.6709 15.3087Z" fill="#800080"/>
            </>
        ) : (
            <>
            <path d="M15.6709 15.3087C14.763 12.9827 14.7993 10.3249 15.2024 7.89318C17.9776 8.72797 20.584 10.0486 22.9013 11.7942C23.9181 12.5744 25.2509 12.826 26.4929 12.4504C29.6798 11.4932 32.9897 11.0116 36.3162 11.0213C39.8061 11.0213 43.1217 11.5317 46.1322 12.4468C47.3742 12.826 48.707 12.5707 49.7202 11.7905C52.0364 10.0454 54.6415 8.72472 57.4154 7.88953C57.8185 10.3213 57.8512 12.9791 56.9506 15.3015C56.4058 16.7014 56.6782 18.3129 57.7059 19.4577C60.3352 22.3853 61.7369 25.7503 61.7369 29.2503C61.7369 36.9576 54.5828 44.5153 43.0926 46.8158C40.2165 47.3919 39.0943 51.0267 41.295 53.1085C42.7077 54.4428 43.5793 56.3241 43.5793 58.4168V69.3542C43.5793 70.3211 43.9619 71.2485 44.6429 71.9322C45.324 72.6159 46.2476 73 47.2108 73C48.1739 73 49.0976 72.6159 49.7787 71.9322C50.4597 71.2485 50.8423 70.3211 50.8423 69.3542V58.4168C50.8423 56.3387 50.4065 54.3626 49.6294 52.5725C60.5857 48.7554 69 40.1622 69 29.2503C69 24.3394 67.2423 19.8259 64.3262 16.0452C65.0888 13.0556 65.0198 10.0442 64.7293 7.73276C64.4715 5.66194 64.112 2.94946 62.6593 1.33072C60.4986 -1.07187 56.9215 0.342707 54.3794 1.21406C51.6525 2.14041 49.0581 3.42126 46.6624 5.02392C43.2816 4.15773 39.8054 3.72288 36.3162 3.72966C32.7064 3.72966 29.2238 4.18539 25.9627 5.02757C23.567 3.42487 20.9726 2.14402 18.2457 1.2177C15.7036 0.342708 12.1229 -1.07187 9.96213 1.33072C8.48047 2.97863 8.17179 5.476 7.90669 7.59786L7.88853 7.7364C7.598 10.0515 7.53264 13.0666 8.29526 16.0598C5.39003 19.8368 3.63237 24.3431 3.63237 29.2503C3.63237 40.1586 12.0466 48.7554 23.003 52.5725C22.2099 54.3928 21.7971 56.3571 21.79 58.3439L21.1799 58.4678C18.5761 58.8287 16.9093 58.5043 15.7762 58.023C13.0163 56.8491 11.5927 53.8923 9.85682 51.6319C8.77462 50.2283 7.19854 48.4747 4.77993 47.6653C4.32735 47.514 3.84953 47.4537 3.37373 47.4878C2.89793 47.5219 2.43348 47.6497 2.0069 47.864C1.14538 48.2968 0.490394 49.0555 0.186041 49.9731C-0.118312 50.8907 -0.0471056 51.8921 0.383996 52.757C0.815097 53.6219 1.57078 54.2795 2.4848 54.585C4.5112 55.2631 5.91297 58.7485 7.19854 60.2944C8.5531 61.9277 10.3543 63.6339 12.9364 64.735C15.4131 65.7922 18.3219 66.1678 21.79 65.7412V69.3542C21.79 70.3211 22.1727 71.2485 22.8537 71.9322C23.5347 72.6159 24.4584 73 25.4216 73C26.3847 73 27.3084 72.6159 27.9895 71.9322C28.6705 71.2485 29.0531 70.3211 29.0531 69.3542V58.4168C29.0531 56.3241 29.9247 54.4428 31.3373 53.1085C33.5417 51.0231 32.4159 47.3919 29.5397 46.8158C18.0459 44.5153 10.8954 36.9576 10.8954 29.2503C10.8954 25.7576 12.2936 22.3926 14.9192 19.465C15.9469 18.3202 16.2156 16.7087 15.6709 15.3087Z" fill={colors.light.main}/>
            </>
        )}
    </svg>
    )
}

export default Github