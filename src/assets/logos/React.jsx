import { colors } from "../../styles/partials"
import { useState } from 'react'

const React = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 33 29" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path d="M27.1326 9.39948C26.7814 9.28047 26.4272 9.17022 26.0704 9.06883C26.1303 8.82691 26.1855 8.58793 26.2345 8.35314C27.0386 4.49767 26.5129 1.39162 24.7174 0.36896C22.9958 -0.611428 20.1804 0.41085 17.337 2.85507C17.0568 3.09639 16.7827 3.34467 16.5152 3.59966C16.3361 3.4301 16.1539 3.26383 15.9685 3.10093C12.9885 0.487498 10.0014 -0.613975 8.20785 0.411614C6.48785 1.39506 5.97854 4.31496 6.70248 7.96888C6.7745 8.33076 6.85583 8.69078 6.94637 9.04858C6.52356 9.16725 6.11557 9.29355 5.72511 9.428C2.23124 10.6312 0 12.5167 0 14.4726C0 16.4925 2.39534 18.5186 6.03436 19.7472C6.32938 19.8464 6.62686 19.9383 6.92652 20.0228C6.8292 20.4082 6.7428 20.7962 6.66742 21.1863C5.97725 24.7768 6.51621 27.6277 8.23157 28.6049C10.0033 29.6141 12.9769 28.5769 15.8722 26.0769C16.107 25.8737 16.3366 25.6647 16.5608 25.4501C16.8506 25.7262 17.148 25.9943 17.4529 26.254C20.2576 28.6378 23.0276 29.6003 24.7412 28.6204C26.5112 27.6084 27.0866 24.5457 26.3397 20.8196C26.2808 20.5277 26.2149 20.2372 26.1418 19.9485C26.3506 19.8874 26.5556 19.8245 26.7554 19.759C30.5385 18.521 33 16.5195 33 14.4726C33 12.5096 30.6967 10.6113 27.1326 9.39948ZM26.3121 18.4374C26.1316 18.4963 25.9465 18.5533 25.7578 18.6086C25.3401 17.3027 24.7766 15.9141 24.0868 14.4793C24.745 13.0787 25.2869 11.7079 25.6928 10.4104C26.0304 10.5069 26.358 10.6087 26.6738 10.716C29.7276 11.7545 31.5903 13.2896 31.5903 14.4726C31.5903 15.7325 29.5786 17.3683 26.3121 18.4374ZM24.9568 21.09C25.287 22.7376 25.3341 24.2273 25.1153 25.3919C24.9189 26.4384 24.5236 27.136 24.0348 27.4155C22.9949 28.0101 20.7709 27.2372 18.3724 25.1985C18.0888 24.957 17.8121 24.7078 17.5426 24.4511C18.4725 23.4467 19.4018 22.279 20.3088 20.9821C21.9041 20.8423 23.4113 20.6136 24.7781 20.3015C24.8439 20.5629 24.9035 20.8259 24.9568 21.09ZM11.2504 27.3127C10.2344 27.6671 9.42511 27.6772 8.93591 27.3987C7.89499 26.8057 7.46225 24.5166 8.05252 21.446C8.12268 21.0832 8.20302 20.7224 8.29344 20.3639C9.64515 20.6593 11.1414 20.8717 12.7404 20.9998C13.6536 22.2688 14.6097 23.4352 15.5733 24.4566C15.3685 24.6523 15.1589 24.843 14.9446 25.0285C13.6642 26.134 12.3812 26.9183 11.2504 27.3127ZM6.49043 18.4296C4.88129 17.8863 3.5524 17.1803 2.64155 16.4099C1.82299 15.7176 1.40985 15.0302 1.40985 14.4726C1.40985 13.2856 3.20126 11.7718 6.18918 10.7429C6.55179 10.6181 6.93129 10.5003 7.3251 10.3898C7.73811 11.7165 8.27978 13.1037 8.93346 14.5064C8.27127 15.9299 7.72187 17.3392 7.30486 18.6816C7.03133 18.6042 6.75978 18.5202 6.49043 18.4296ZM8.08603 7.70138C7.46586 4.57088 7.87772 2.20942 8.91425 1.61673C10.0182 0.985459 12.4594 1.88551 15.0325 4.14218C15.2003 4.28967 15.3654 4.44015 15.5277 4.59354C14.5689 5.61047 13.6215 6.76822 12.7165 8.02974C11.1644 8.17184 9.6788 8.4 8.31291 8.7057C8.22875 8.3729 8.1531 8.03794 8.08603 7.70138ZM22.3208 11.1732C21.9981 10.6228 21.6636 10.0793 21.3172 9.54311C22.3701 9.67463 23.379 9.84919 24.3263 10.0626C24.0419 10.963 23.6874 11.9043 23.2702 12.8694C22.9652 12.2978 22.6486 11.7323 22.3208 11.1732ZM16.5159 5.5887C17.1661 6.28452 17.8173 7.06132 18.4578 7.9042C17.1585 7.84359 15.8569 7.84333 14.5575 7.90344C15.1987 7.06832 15.8555 6.29254 16.5159 5.5887ZM10.6737 11.1828C10.3499 11.7374 10.0393 12.2994 9.74209 12.8683C9.33165 11.9066 8.98038 10.961 8.69357 10.0478C9.6351 9.83977 10.6391 9.66966 11.6854 9.54056C11.3352 10.08 10.9979 10.6277 10.6737 11.1828ZM11.7154 19.5036C10.6345 19.3844 9.61538 19.2231 8.6741 19.0207C8.96543 18.0912 9.32443 17.1255 9.74377 16.1432C10.0422 16.7125 10.3541 17.2748 10.6792 17.8297C11.0136 18.4001 11.3599 18.9588 11.7154 19.5036ZM16.5548 23.4544C15.8865 22.7424 15.2201 21.9547 14.5692 21.1075C15.2011 21.1319 15.8453 21.1444 16.5 21.1444C17.1726 21.1444 17.8375 21.1295 18.492 21.1007C17.8494 21.9632 17.2006 22.7521 16.5548 23.4544ZM23.2834 16.093C23.7246 17.0861 24.0963 18.0468 24.3915 18.9603C23.4348 19.176 22.4017 19.3497 21.3132 19.4786C21.662 18.9325 21.9998 18.3796 22.3263 17.8201C22.6583 17.2515 22.9774 16.6756 23.2834 16.093ZM21.1052 17.1244C20.6053 17.9821 20.0773 18.8235 19.5221 19.6473C18.5163 19.7177 17.5083 19.7527 16.5 19.7521C15.473 19.7521 14.4741 19.7206 13.5122 19.6589C12.9425 18.837 12.4044 17.9942 11.8992 17.1321C11.3964 16.2746 10.9268 15.3985 10.4913 14.5058C10.9257 13.6128 11.394 12.7364 11.8951 11.8782C12.396 11.0198 12.9296 10.1807 13.4951 9.36231C14.4764 9.28897 15.4828 9.25077 16.4999 9.25077C17.5216 9.25077 18.5294 9.28935 19.5105 9.3632C20.0702 10.1803 20.6005 11.0167 21.1005 11.8708C21.6033 12.7271 22.0778 13.5993 22.5231 14.486C22.0823 15.3819 21.6094 16.2619 21.1052 17.1244ZM24.0133 1.57522C25.1183 2.20471 25.5481 4.74315 24.8538 8.07201C24.8094 8.28439 24.7597 8.50071 24.7055 8.72009C23.3363 8.40789 21.8496 8.17578 20.2931 8.03152C19.3863 6.75613 18.4467 5.5966 17.5035 4.59278C17.7507 4.35742 18.0038 4.12817 18.2625 3.90523C20.6989 1.81115 22.9759 0.984313 24.0133 1.57522ZM16.5 11.5619C18.1274 11.5619 19.4468 12.8651 19.4468 14.4726C19.4468 16.08 18.1274 17.3832 16.5 17.3832C14.8726 17.3832 13.5532 16.08 13.5532 14.4726C13.5532 12.8651 14.8726 11.5619 16.5 11.5619Z" fill="#00D8FF"/>
            </>
        ) : (
            <>
            <path d="M27.1326 9.39948C26.7814 9.28047 26.4272 9.17022 26.0704 9.06883C26.1303 8.82691 26.1855 8.58793 26.2345 8.35314C27.0386 4.49767 26.5129 1.39162 24.7174 0.36896C22.9958 -0.611428 20.1804 0.41085 17.337 2.85507C17.0568 3.09639 16.7827 3.34467 16.5152 3.59966C16.3361 3.4301 16.1539 3.26383 15.9685 3.10093C12.9885 0.487498 10.0014 -0.613975 8.20785 0.411614C6.48785 1.39506 5.97854 4.31496 6.70248 7.96888C6.7745 8.33076 6.85583 8.69078 6.94637 9.04858C6.52356 9.16725 6.11557 9.29355 5.72511 9.428C2.23124 10.6312 0 12.5167 0 14.4726C0 16.4925 2.39534 18.5186 6.03436 19.7472C6.32938 19.8464 6.62686 19.9383 6.92652 20.0228C6.8292 20.4082 6.7428 20.7962 6.66742 21.1863C5.97725 24.7768 6.51621 27.6277 8.23157 28.6049C10.0033 29.6141 12.9769 28.5769 15.8722 26.0769C16.107 25.8737 16.3366 25.6647 16.5608 25.4501C16.8506 25.7262 17.148 25.9943 17.4529 26.254C20.2576 28.6378 23.0276 29.6003 24.7412 28.6204C26.5112 27.6084 27.0866 24.5457 26.3397 20.8196C26.2808 20.5277 26.2149 20.2372 26.1418 19.9485C26.3506 19.8874 26.5556 19.8245 26.7554 19.759C30.5385 18.521 33 16.5195 33 14.4726C33 12.5096 30.6967 10.6113 27.1326 9.39948ZM26.3121 18.4374C26.1316 18.4963 25.9465 18.5533 25.7578 18.6086C25.3401 17.3027 24.7766 15.9141 24.0868 14.4793C24.745 13.0787 25.2869 11.7079 25.6928 10.4104C26.0304 10.5069 26.358 10.6087 26.6738 10.716C29.7276 11.7545 31.5903 13.2896 31.5903 14.4726C31.5903 15.7325 29.5786 17.3683 26.3121 18.4374ZM24.9568 21.09C25.287 22.7376 25.3341 24.2273 25.1153 25.3919C24.9189 26.4384 24.5236 27.136 24.0348 27.4155C22.9949 28.0101 20.7709 27.2372 18.3724 25.1985C18.0888 24.957 17.8121 24.7078 17.5426 24.4511C18.4725 23.4467 19.4018 22.279 20.3088 20.9821C21.9041 20.8423 23.4113 20.6136 24.7781 20.3015C24.8439 20.5629 24.9035 20.8259 24.9568 21.09ZM11.2504 27.3127C10.2344 27.6671 9.42511 27.6772 8.93591 27.3987C7.89499 26.8057 7.46225 24.5166 8.05252 21.446C8.12268 21.0832 8.20302 20.7224 8.29344 20.3639C9.64515 20.6593 11.1414 20.8717 12.7404 20.9998C13.6536 22.2688 14.6097 23.4352 15.5733 24.4566C15.3685 24.6523 15.1589 24.843 14.9446 25.0285C13.6642 26.134 12.3812 26.9183 11.2504 27.3127ZM6.49043 18.4296C4.88129 17.8863 3.5524 17.1803 2.64155 16.4099C1.82299 15.7176 1.40985 15.0302 1.40985 14.4726C1.40985 13.2856 3.20126 11.7718 6.18918 10.7429C6.55179 10.6181 6.93129 10.5003 7.3251 10.3898C7.73811 11.7165 8.27978 13.1037 8.93346 14.5064C8.27127 15.9299 7.72187 17.3392 7.30486 18.6816C7.03133 18.6042 6.75978 18.5202 6.49043 18.4296ZM8.08603 7.70138C7.46586 4.57088 7.87772 2.20942 8.91425 1.61673C10.0182 0.985459 12.4594 1.88551 15.0325 4.14218C15.2003 4.28967 15.3654 4.44015 15.5277 4.59354C14.5689 5.61047 13.6215 6.76822 12.7165 8.02974C11.1644 8.17184 9.6788 8.4 8.31291 8.7057C8.22875 8.3729 8.1531 8.03794 8.08603 7.70138ZM22.3208 11.1732C21.9981 10.6228 21.6636 10.0793 21.3172 9.54311C22.3701 9.67463 23.379 9.84919 24.3263 10.0626C24.0419 10.963 23.6874 11.9043 23.2702 12.8694C22.9652 12.2978 22.6486 11.7323 22.3208 11.1732ZM16.5159 5.5887C17.1661 6.28452 17.8173 7.06132 18.4578 7.9042C17.1585 7.84359 15.8569 7.84333 14.5575 7.90344C15.1987 7.06832 15.8555 6.29254 16.5159 5.5887ZM10.6737 11.1828C10.3499 11.7374 10.0393 12.2994 9.74209 12.8683C9.33165 11.9066 8.98038 10.961 8.69357 10.0478C9.6351 9.83977 10.6391 9.66966 11.6854 9.54056C11.3352 10.08 10.9979 10.6277 10.6737 11.1828ZM11.7154 19.5036C10.6345 19.3844 9.61538 19.2231 8.6741 19.0207C8.96543 18.0912 9.32443 17.1255 9.74377 16.1432C10.0422 16.7125 10.3541 17.2748 10.6792 17.8297C11.0136 18.4001 11.3599 18.9588 11.7154 19.5036ZM16.5548 23.4544C15.8865 22.7424 15.2201 21.9547 14.5692 21.1075C15.2011 21.1319 15.8453 21.1444 16.5 21.1444C17.1726 21.1444 17.8375 21.1295 18.492 21.1007C17.8494 21.9632 17.2006 22.7521 16.5548 23.4544ZM23.2834 16.093C23.7246 17.0861 24.0963 18.0468 24.3915 18.9603C23.4348 19.176 22.4017 19.3497 21.3132 19.4786C21.662 18.9325 21.9998 18.3796 22.3263 17.8201C22.6583 17.2515 22.9774 16.6756 23.2834 16.093ZM21.1052 17.1244C20.6053 17.9821 20.0773 18.8235 19.5221 19.6473C18.5163 19.7177 17.5083 19.7527 16.5 19.7521C15.473 19.7521 14.4741 19.7206 13.5122 19.6589C12.9425 18.837 12.4044 17.9942 11.8992 17.1321C11.3964 16.2746 10.9268 15.3985 10.4913 14.5058C10.9257 13.6128 11.394 12.7364 11.8951 11.8782C12.396 11.0198 12.9296 10.1807 13.4951 9.36231C14.4764 9.28897 15.4828 9.25077 16.4999 9.25077C17.5216 9.25077 18.5294 9.28935 19.5105 9.3632C20.0702 10.1803 20.6005 11.0167 21.1005 11.8708C21.6033 12.7271 22.0778 13.5993 22.5231 14.486C22.0823 15.3819 21.6094 16.2619 21.1052 17.1244ZM24.0133 1.57522C25.1183 2.20471 25.5481 4.74315 24.8538 8.07201C24.8094 8.28439 24.7597 8.50071 24.7055 8.72009C23.3363 8.40789 21.8496 8.17578 20.2931 8.03152C19.3863 6.75613 18.4467 5.5966 17.5035 4.59278C17.7507 4.35742 18.0038 4.12817 18.2625 3.90523C20.6989 1.81115 22.9759 0.984313 24.0133 1.57522ZM16.5 11.5619C18.1274 11.5619 19.4468 12.8651 19.4468 14.4726C19.4468 16.08 18.1274 17.3832 16.5 17.3832C14.8726 17.3832 13.5532 16.08 13.5532 14.4726C13.5532 12.8651 14.8726 11.5619 16.5 11.5619Z" fill={colors.main}/>
            </>
        )}
    </svg>
    )
}

export default React