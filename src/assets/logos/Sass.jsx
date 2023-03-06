import { colors } from "../../styles/partials"
import { useState } from 'react'

const Sass = ({size}) => {

    const [actualColor, setActualColor] = useState(false)

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActualColor(false)
        }, 300)
    }

    return (
    <svg height={size} viewBox="0 0 84 63" onMouseEnter={() => setActualColor(true)} onMouseLeave={(() => handleMouseLeave())} style={{zIndex: actualColor ? '150' : '0'}}>
        {actualColor ? (
            <>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26.2702C0 26.7419 0.13849 27.0532 0.216098 27.3558C0.721889 29.3236 1.80907 31.0122 3.09897 32.5527C4.93614 34.7479 7.1861 36.5151 9.49093 38.1769C11.49 39.618 13.5299 41.027 15.537 42.4573C15.8815 42.7029 16.2074 42.9853 16.5814 43.2866C16.2596 43.461 15.9919 43.6147 15.7136 43.7562C13.0649 45.1034 10.5166 46.6136 8.16758 48.4432C6.7519 49.5462 5.38305 50.7183 4.4163 52.25C2.86079 54.7136 2.31018 57.3382 3.46961 60.1406C3.80815 60.9591 4.32464 61.6662 5.05322 62.1889C5.28939 62.3579 5.55433 62.5257 5.83064 62.5914C6.53848 62.7585 7.2597 62.8678 7.97623 63L10.0054 62.9987C12.2494 62.7981 14.2919 62.0272 16.1378 60.7498C19.0227 58.7531 20.9662 56.0762 21.8018 52.6404C22.4093 50.1433 22.4341 47.6435 21.7182 45.1578C21.652 44.927 21.5683 44.7009 21.4814 44.4775C21.3944 44.254 21.292 44.0367 21.1716 43.7582L25.7719 41.1054L25.8408 41.1645C25.7572 41.4389 25.6682 41.7126 25.5926 41.9897C25.046 43.9917 24.6827 46.0286 24.8132 48.1064C24.9523 50.3204 25.5685 52.3929 26.8611 54.2426C27.9061 55.7387 30.3963 55.7944 31.5069 54.2929C31.9009 53.7595 32.2829 53.202 32.57 52.6069C33.3199 51.0537 34.0144 49.4731 34.7309 47.9031L34.856 47.616C34.8045 48.3594 34.7443 49.0121 34.7169 49.6656C34.6741 50.6861 34.7336 51.7005 35.0815 52.6713C35.3792 53.5019 35.8857 54.1225 36.8344 54.2318C37.4833 54.3063 38.0005 54.0084 38.4775 53.6307C39.2228 53.041 39.8283 52.3124 40.2779 51.4845C41.5497 49.1423 42.8557 46.8142 44.0084 44.413C45.2555 41.8159 46.346 39.143 47.5041 36.5016L47.6955 36.0334C47.9691 37.1115 48.1598 38.1675 48.511 39.1672C48.9192 40.3272 49.4243 41.4597 49.9742 42.5607C50.2345 43.0806 50.2044 43.4181 49.8438 43.8542C48.3344 45.6791 46.8512 47.5261 45.3666 49.3711C45.0381 49.7783 44.7109 50.193 44.4373 50.6378C44.272 50.9081 44.1623 51.2376 44.1162 51.5529C44.0272 52.1554 44.3985 52.7364 45.0414 52.8753C45.6288 53.0021 46.2544 53.049 46.8532 53.0047C48.9252 52.8518 50.8065 52.1225 52.4697 50.8867C54.6247 49.2859 55.3165 47.1014 54.7946 44.5123C54.6535 43.8099 54.4039 43.1269 54.161 42.45C54.052 42.1447 54.0446 41.9307 54.2433 41.6462C55.9661 39.1793 57.438 36.562 58.8068 33.8844C58.861 33.7791 58.9165 33.6738 59.0115 33.561C59.4551 35.8757 60.1228 38.1065 61.319 40.1306C60.7089 40.7203 60.1047 41.2551 59.5581 41.8441C58.3546 43.1417 57.3109 44.5506 56.7663 46.2688C56.5321 47.0095 56.3521 47.7622 56.4565 48.5532C56.6184 49.7817 57.622 50.5801 58.8269 50.3003C61.4054 49.7018 63.6312 48.4835 65.2577 46.3251C66.3522 44.8719 66.4519 43.251 65.9936 41.5529C65.8678 41.0914 65.7186 40.6372 65.5581 40.1078C66.1943 39.9099 66.8145 39.6724 67.4561 39.5255C70.7872 38.7633 74.0822 38.8961 77.2923 40.1024C79.1662 40.8069 80.6802 41.9857 81.5781 43.8401C82.6746 46.1071 82.0685 48.258 79.9376 49.6911C79.7389 49.8246 79.5114 49.93 79.3469 50.097C79.2458 50.1997 79.185 50.405 79.2097 50.5465C79.2238 50.629 79.4412 50.7324 79.5663 50.731C80.2668 50.7257 80.8348 50.3573 81.3801 49.9789C82.7462 49.0309 83.7431 47.7555 83.9578 46.0762L84 45.9501L83.9485 44.8565C83.9277 44.7935 83.9639 44.7311 83.9592 44.6834C83.6688 42.2379 82.3662 40.3413 80.4715 38.8545C78.2771 37.1337 75.6859 36.4252 72.9455 36.3131C70.7123 36.2219 68.5172 36.5547 66.4124 37.3215C65.8123 37.5395 65.2175 37.7978 64.614 38.0414C64.5331 37.8945 64.4461 37.7536 64.3745 37.608C63.755 36.3359 63.0043 35.1202 62.8384 33.6617C62.7207 32.6258 62.5762 31.5912 62.8217 30.5668C63.0579 29.5812 63.3656 28.6124 63.6553 27.6402C63.8045 27.1397 63.6995 26.8593 63.2231 26.6339C63.0572 26.5554 62.8766 26.4869 62.6973 26.4608C61.5264 26.2904 60.3717 26.3876 59.2377 26.7184C58.8363 26.8358 58.5446 27.0612 58.4556 27.5067C58.4047 27.7623 58.301 28.0072 58.2288 28.2595C57.9324 29.3081 57.7223 30.3769 57.2433 31.3759C56.043 33.8817 54.6729 36.293 53.2706 38.6868C53.1187 38.9451 52.9588 39.1987 52.7674 39.512C52.275 38.4788 51.7498 37.5516 51.5906 36.4647C51.4106 35.2356 51.2688 34.0085 51.5739 32.7888C51.8007 31.8791 52.0971 30.9861 52.37 30.0884C52.4992 29.6617 52.4396 29.4376 52.0543 29.2129C51.8596 29.0995 51.6395 28.9988 51.42 28.966C50.2057 28.7855 49.0095 28.8801 47.838 29.2598C47.4747 29.3779 47.284 29.6134 47.173 29.9891C46.8465 31.0975 46.5682 32.2326 46.1099 33.2866C44.254 37.5536 42.3446 41.7985 40.4371 46.0427C40.0391 46.929 39.5727 47.7844 39.1238 48.6472C39.0101 48.8659 38.8442 49.0584 38.7023 49.2637C38.5886 49.1289 38.5444 49.0363 38.5451 48.9437C38.5484 48.3983 38.4836 47.8367 38.5873 47.3094C38.901 45.7139 39.2623 44.1272 39.643 42.5466C39.9574 41.241 40.3234 39.9475 40.672 38.6506C40.789 38.2165 40.7911 37.8106 40.48 37.4456C39.9574 36.8344 38.8656 36.7002 38.2179 37.1712L37.9316 37.3336L37.9871 36.8707C38.1236 35.8784 38.151 34.8894 37.8794 33.9119C37.5409 32.6936 36.6738 31.9924 35.4134 32.0314C34.8259 32.0495 34.2091 32.1501 33.6652 32.3648C31.3777 33.2638 29.6188 34.8559 28.1215 36.7714C27.9857 36.9451 27.8064 37.1035 27.6151 37.2101C25.6796 38.2863 23.738 39.349 21.7972 40.4157L19.6368 41.6026C19.0575 41.0484 18.5309 40.4734 17.9335 39.9857C16.109 38.4936 14.2551 37.0384 12.418 35.563C10.7895 34.2554 9.21194 32.8935 8.005 31.1619C7.10716 29.8737 6.52844 28.4641 6.47291 26.8714C6.40266 24.8419 6.9767 22.9875 8.00701 21.2612C9.32501 19.0526 11.1227 17.28 13.099 15.6745C15.1898 13.9771 17.4511 12.536 19.7947 11.2203C23.0737 9.38002 26.4463 7.75105 30.0624 6.67558C33.7702 5.5726 37.5322 4.94127 41.4126 5.38139C42.938 5.55448 44.4192 5.9047 45.7794 6.65277C46.8211 7.22505 47.6754 7.97446 48.0728 9.14588C48.4649 10.2985 48.4528 11.4666 48.1812 12.6373C47.6293 15.0083 46.3347 16.9627 44.7056 18.7091C42.0335 21.5718 38.7739 23.5208 35.1043 24.8083C32.9868 25.551 30.8084 26.0173 28.5711 26.2058C26.7453 26.3595 24.9577 26.1971 23.2289 25.5604C22.0842 25.1384 21.0873 24.493 20.2858 23.5564C20.1426 23.3887 19.9593 23.2069 19.6924 23.3638C19.4308 23.5182 19.3846 23.7677 19.4723 24.0207C19.6188 24.4407 19.7539 24.8781 19.9821 25.2538C20.5554 26.1964 21.3917 26.8801 22.3123 27.4665C24.0806 28.5943 26.0569 28.9733 28.1062 29.0612C31.2158 29.1961 34.2499 28.7305 37.2412 27.8938C41.5116 26.6996 45.2247 24.5903 48.2026 21.2626C50.6821 18.4917 52.453 15.3646 52.8323 11.5887C53.0177 9.74567 52.8203 7.94025 51.9599 6.25894C51.0266 4.43741 49.5427 3.08284 47.7684 2.1496C45.1846 0.791006 42.3961 0 39.5179 0H36.6343C33.1487 0 29.7787 1.00167 26.5031 2.19657C24.0237 3.10163 21.5924 4.16972 19.2321 5.35187C14.0919 7.9275 9.30494 11.0332 5.37302 15.3035C3.41408 17.431 1.75555 19.7785 0.801504 22.5426C0.522516 23.3518 0.257578 24.2193 0.058206 25.0559M18.6835 49.2174C18.4607 52.209 17.1086 54.6344 14.8987 56.5988C13.6557 57.7031 12.23 58.4895 10.5694 58.7659C9.96728 58.8658 9.3511 58.89 8.76703 58.6397C7.93408 58.2828 7.74742 57.5415 7.73137 56.7518C7.70661 55.4932 8.14617 54.3553 8.74897 53.2724C9.53575 51.8608 10.6892 50.7847 11.9209 49.7797C13.8611 48.1956 15.9658 46.8552 18.1215 45.5898L18.2841 45.5227C18.6172 46.7572 18.7758 47.9763 18.6835 49.2174ZM35.515 36.2158C35.3578 37.1712 35.1611 38.1273 34.8828 39.0531C33.9207 42.2581 32.685 45.3637 31.349 48.4278C31.1021 48.9947 30.7428 49.512 30.4304 50.0494C30.3822 50.1326 30.3106 50.2044 30.241 50.2735C29.8543 50.6566 29.4877 50.6364 29.2924 50.1353C29.0649 49.5529 28.9251 48.9296 28.8046 48.3131C28.7237 47.8991 28.7431 47.4644 28.7177 47.0403C28.7437 44.0253 29.661 41.2853 31.2172 38.7344C31.8588 37.6825 32.5572 36.6801 33.6244 36.0146C33.9522 35.8099 34.3201 35.6456 34.6915 35.5409C35.2601 35.3806 35.6094 35.6442 35.515 36.2158ZM46.9984 50.8873L51.1256 46.0548C51.2976 47.8495 48.2555 51.4321 46.9984 50.8873ZM60.1804 47.6354C59.8887 47.8032 59.5709 47.9239 59.2718 48.0789C58.9982 48.2211 58.9078 48.0776 58.8998 47.8414C58.8945 47.6811 58.9179 47.5133 58.962 47.3577C59.5193 45.3865 60.545 43.7039 62.071 42.3352L62.1781 42.2802C62.904 44.3164 62.065 46.5526 60.1804 47.6354Z" fill="#CB6699"/>
            </>
        ) : (
            <>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26.2702C0 26.7419 0.13849 27.0532 0.216098 27.3558C0.721889 29.3236 1.80907 31.0122 3.09897 32.5527C4.93614 34.7479 7.1861 36.5151 9.49093 38.1769C11.49 39.618 13.5299 41.027 15.537 42.4573C15.8815 42.7029 16.2074 42.9853 16.5814 43.2866C16.2596 43.461 15.9919 43.6147 15.7136 43.7562C13.0649 45.1034 10.5166 46.6136 8.16758 48.4432C6.7519 49.5462 5.38305 50.7183 4.4163 52.25C2.86079 54.7136 2.31018 57.3382 3.46961 60.1406C3.80815 60.9591 4.32464 61.6662 5.05322 62.1889C5.28939 62.3579 5.55433 62.5257 5.83064 62.5914C6.53848 62.7585 7.2597 62.8678 7.97623 63L10.0054 62.9987C12.2494 62.7981 14.2919 62.0272 16.1378 60.7498C19.0227 58.7531 20.9662 56.0762 21.8018 52.6404C22.4093 50.1433 22.4341 47.6435 21.7182 45.1578C21.652 44.927 21.5683 44.7009 21.4814 44.4775C21.3944 44.254 21.292 44.0367 21.1716 43.7582L25.7719 41.1054L25.8408 41.1645C25.7572 41.4389 25.6682 41.7126 25.5926 41.9897C25.046 43.9917 24.6827 46.0286 24.8132 48.1064C24.9523 50.3204 25.5685 52.3929 26.8611 54.2426C27.9061 55.7387 30.3963 55.7944 31.5069 54.2929C31.9009 53.7595 32.2829 53.202 32.57 52.6069C33.3199 51.0537 34.0144 49.4731 34.7309 47.9031L34.856 47.616C34.8045 48.3594 34.7443 49.0121 34.7169 49.6656C34.6741 50.6861 34.7336 51.7005 35.0815 52.6713C35.3792 53.5019 35.8857 54.1225 36.8344 54.2318C37.4833 54.3063 38.0005 54.0084 38.4775 53.6307C39.2228 53.041 39.8283 52.3124 40.2779 51.4845C41.5497 49.1423 42.8557 46.8142 44.0084 44.413C45.2555 41.8159 46.346 39.143 47.5041 36.5016L47.6955 36.0334C47.9691 37.1115 48.1598 38.1675 48.511 39.1672C48.9192 40.3272 49.4243 41.4597 49.9742 42.5607C50.2345 43.0806 50.2044 43.4181 49.8438 43.8542C48.3344 45.6791 46.8512 47.5261 45.3666 49.3711C45.0381 49.7783 44.7109 50.193 44.4373 50.6378C44.272 50.9081 44.1623 51.2376 44.1162 51.5529C44.0272 52.1554 44.3985 52.7364 45.0414 52.8753C45.6288 53.0021 46.2544 53.049 46.8532 53.0047C48.9252 52.8518 50.8065 52.1225 52.4697 50.8867C54.6247 49.2859 55.3165 47.1014 54.7946 44.5123C54.6535 43.8099 54.4039 43.1269 54.161 42.45C54.052 42.1447 54.0446 41.9307 54.2433 41.6462C55.9661 39.1793 57.438 36.562 58.8068 33.8844C58.861 33.7791 58.9165 33.6738 59.0115 33.561C59.4551 35.8757 60.1228 38.1065 61.319 40.1306C60.7089 40.7203 60.1047 41.2551 59.5581 41.8441C58.3546 43.1417 57.3109 44.5506 56.7663 46.2688C56.5321 47.0095 56.3521 47.7622 56.4565 48.5532C56.6184 49.7817 57.622 50.5801 58.8269 50.3003C61.4054 49.7018 63.6312 48.4835 65.2577 46.3251C66.3522 44.8719 66.4519 43.251 65.9936 41.5529C65.8678 41.0914 65.7186 40.6372 65.5581 40.1078C66.1943 39.9099 66.8145 39.6724 67.4561 39.5255C70.7872 38.7633 74.0822 38.8961 77.2923 40.1024C79.1662 40.8069 80.6802 41.9857 81.5781 43.8401C82.6746 46.1071 82.0685 48.258 79.9376 49.6911C79.7389 49.8246 79.5114 49.93 79.3469 50.097C79.2458 50.1997 79.185 50.405 79.2097 50.5465C79.2238 50.629 79.4412 50.7324 79.5663 50.731C80.2668 50.7257 80.8348 50.3573 81.3801 49.9789C82.7462 49.0309 83.7431 47.7555 83.9578 46.0762L84 45.9501L83.9485 44.8565C83.9277 44.7935 83.9639 44.7311 83.9592 44.6834C83.6688 42.2379 82.3662 40.3413 80.4715 38.8545C78.2771 37.1337 75.6859 36.4252 72.9455 36.3131C70.7123 36.2219 68.5172 36.5547 66.4124 37.3215C65.8123 37.5395 65.2175 37.7978 64.614 38.0414C64.5331 37.8945 64.4461 37.7536 64.3745 37.608C63.755 36.3359 63.0043 35.1202 62.8384 33.6617C62.7207 32.6258 62.5762 31.5912 62.8217 30.5668C63.0579 29.5812 63.3656 28.6124 63.6553 27.6402C63.8045 27.1397 63.6995 26.8593 63.2231 26.6339C63.0572 26.5554 62.8766 26.4869 62.6973 26.4608C61.5264 26.2904 60.3717 26.3876 59.2377 26.7184C58.8363 26.8358 58.5446 27.0612 58.4556 27.5067C58.4047 27.7623 58.301 28.0072 58.2288 28.2595C57.9324 29.3081 57.7223 30.3769 57.2433 31.3759C56.043 33.8817 54.6729 36.293 53.2706 38.6868C53.1187 38.9451 52.9588 39.1987 52.7674 39.512C52.275 38.4788 51.7498 37.5516 51.5906 36.4647C51.4106 35.2356 51.2688 34.0085 51.5739 32.7888C51.8007 31.8791 52.0971 30.9861 52.37 30.0884C52.4992 29.6617 52.4396 29.4376 52.0543 29.2129C51.8596 29.0995 51.6395 28.9988 51.42 28.966C50.2057 28.7855 49.0095 28.8801 47.838 29.2598C47.4747 29.3779 47.284 29.6134 47.173 29.9891C46.8465 31.0975 46.5682 32.2326 46.1099 33.2866C44.254 37.5536 42.3446 41.7985 40.4371 46.0427C40.0391 46.929 39.5727 47.7844 39.1238 48.6472C39.0101 48.8659 38.8442 49.0584 38.7023 49.2637C38.5886 49.1289 38.5444 49.0363 38.5451 48.9437C38.5484 48.3983 38.4836 47.8367 38.5873 47.3094C38.901 45.7139 39.2623 44.1272 39.643 42.5466C39.9574 41.241 40.3234 39.9475 40.672 38.6506C40.789 38.2165 40.7911 37.8106 40.48 37.4456C39.9574 36.8344 38.8656 36.7002 38.2179 37.1712L37.9316 37.3336L37.9871 36.8707C38.1236 35.8784 38.151 34.8894 37.8794 33.9119C37.5409 32.6936 36.6738 31.9924 35.4134 32.0314C34.8259 32.0495 34.2091 32.1501 33.6652 32.3648C31.3777 33.2638 29.6188 34.8559 28.1215 36.7714C27.9857 36.9451 27.8064 37.1035 27.6151 37.2101C25.6796 38.2863 23.738 39.349 21.7972 40.4157L19.6368 41.6026C19.0575 41.0484 18.5309 40.4734 17.9335 39.9857C16.109 38.4936 14.2551 37.0384 12.418 35.563C10.7895 34.2554 9.21194 32.8935 8.005 31.1619C7.10716 29.8737 6.52844 28.4641 6.47291 26.8714C6.40266 24.8419 6.9767 22.9875 8.00701 21.2612C9.32501 19.0526 11.1227 17.28 13.099 15.6745C15.1898 13.9771 17.4511 12.536 19.7947 11.2203C23.0737 9.38002 26.4463 7.75105 30.0624 6.67558C33.7702 5.5726 37.5322 4.94127 41.4126 5.38139C42.938 5.55448 44.4192 5.9047 45.7794 6.65277C46.8211 7.22505 47.6754 7.97446 48.0728 9.14588C48.4649 10.2985 48.4528 11.4666 48.1812 12.6373C47.6293 15.0083 46.3347 16.9627 44.7056 18.7091C42.0335 21.5718 38.7739 23.5208 35.1043 24.8083C32.9868 25.551 30.8084 26.0173 28.5711 26.2058C26.7453 26.3595 24.9577 26.1971 23.2289 25.5604C22.0842 25.1384 21.0873 24.493 20.2858 23.5564C20.1426 23.3887 19.9593 23.2069 19.6924 23.3638C19.4308 23.5182 19.3846 23.7677 19.4723 24.0207C19.6188 24.4407 19.7539 24.8781 19.9821 25.2538C20.5554 26.1964 21.3917 26.8801 22.3123 27.4665C24.0806 28.5943 26.0569 28.9733 28.1062 29.0612C31.2158 29.1961 34.2499 28.7305 37.2412 27.8938C41.5116 26.6996 45.2247 24.5903 48.2026 21.2626C50.6821 18.4917 52.453 15.3646 52.8323 11.5887C53.0177 9.74567 52.8203 7.94025 51.9599 6.25894C51.0266 4.43741 49.5427 3.08284 47.7684 2.1496C45.1846 0.791006 42.3961 0 39.5179 0H36.6343C33.1487 0 29.7787 1.00167 26.5031 2.19657C24.0237 3.10163 21.5924 4.16972 19.2321 5.35187C14.0919 7.9275 9.30494 11.0332 5.37302 15.3035C3.41408 17.431 1.75555 19.7785 0.801504 22.5426C0.522516 23.3518 0.257578 24.2193 0.058206 25.0559M18.6835 49.2174C18.4607 52.209 17.1086 54.6344 14.8987 56.5988C13.6557 57.7031 12.23 58.4895 10.5694 58.7659C9.96728 58.8658 9.3511 58.89 8.76703 58.6397C7.93408 58.2828 7.74742 57.5415 7.73137 56.7518C7.70661 55.4932 8.14617 54.3553 8.74897 53.2724C9.53575 51.8608 10.6892 50.7847 11.9209 49.7797C13.8611 48.1956 15.9658 46.8552 18.1215 45.5898L18.2841 45.5227C18.6172 46.7572 18.7758 47.9763 18.6835 49.2174ZM35.515 36.2158C35.3578 37.1712 35.1611 38.1273 34.8828 39.0531C33.9207 42.2581 32.685 45.3637 31.349 48.4278C31.1021 48.9947 30.7428 49.512 30.4304 50.0494C30.3822 50.1326 30.3106 50.2044 30.241 50.2735C29.8543 50.6566 29.4877 50.6364 29.2924 50.1353C29.0649 49.5529 28.9251 48.9296 28.8046 48.3131C28.7237 47.8991 28.7431 47.4644 28.7177 47.0403C28.7437 44.0253 29.661 41.2853 31.2172 38.7344C31.8588 37.6825 32.5572 36.6801 33.6244 36.0146C33.9522 35.8099 34.3201 35.6456 34.6915 35.5409C35.2601 35.3806 35.6094 35.6442 35.515 36.2158ZM46.9984 50.8873L51.1256 46.0548C51.2976 47.8495 48.2555 51.4321 46.9984 50.8873ZM60.1804 47.6354C59.8887 47.8032 59.5709 47.9239 59.2718 48.0789C58.9982 48.2211 58.9078 48.0776 58.8998 47.8414C58.8945 47.6811 58.9179 47.5133 58.962 47.3577C59.5193 45.3865 60.545 43.7039 62.071 42.3352L62.1781 42.2802C62.904 44.3164 62.065 46.5526 60.1804 47.6354Z" fill={colors.light.main}/>
            </>
        )}
    </svg>
    )
}

export default Sass