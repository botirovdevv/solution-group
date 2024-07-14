import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
const About = () => {
    const sr = ScrollReveal();
    useEffect(() => {

        sr.reveal('.about-title', {
            duration: 1000,
            origin: 'bottom',
            distance: '50px',
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

        sr.reveal('.about-subtitle', {
            duration: 1200,
            origin: 'bottom',
            distance: '50px',
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

        sr.reveal('.about-icon', {
            duration: 1200,
            origin: 'bottom',
            distance: '50px',
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

    }, [])
    return (
        <section className="about" id='about'>
            <div className="container">
                <div className="about-content">
                    <div className="about-cards">
                        <div className="about-card">
                            <span className="about-icon">
                                <svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M45.9517 8.8955L30.5892 1.57675C27.2076 -0.443171 22.9986 -0.479011 19.583 1.483L4.0476 8.8955C3.9893 8.9247 3.92885 8.95595 3.8726 8.98925C0.18588 11.0973 -1.094 15.7948 1.014 19.4815C1.72856 20.7313 2.77963 21.7554 4.0476 22.4372L8.33305 24.4789V34.6872C8.33559 39.2519 11.3058 43.2848 15.6643 44.6414C18.6974 45.5188 21.8424 45.9484 24.9997 45.9164C28.1566 45.9517 31.3016 45.5258 34.3352 44.6518C38.6937 43.2953 41.6639 39.2624 41.6664 34.6976V24.4747L45.8331 22.483V39.6663C45.8331 40.8169 46.7659 41.7496 47.9164 41.7496C49.067 41.7496 49.9997 40.8169 49.9997 39.6663V14.6663C50.0136 12.2199 48.082 9.95995 45.9517 8.8955ZM37.4996 34.6976C37.5007 37.428 35.7292 39.8432 33.1247 40.6622C30.4834 41.4169 27.7464 41.7832 24.9996 41.7497C22.2529 41.7832 19.5159 41.4169 16.8747 40.6622C14.2701 39.8431 12.4986 37.428 12.4996 34.6976V26.4643L19.4101 29.756C21.1152 30.7685 23.0625 31.3006 25.0455 31.2956C26.933 31.309 28.7888 30.8093 30.4143 29.8498L37.4996 26.4642V34.6976ZM44.1663 18.6768L28.4538 26.1767C26.263 27.4524 23.5475 27.4163 21.3913 26.083L6.0184 18.7705C4.30483 17.8465 3.66479 15.7083 4.58881 13.9948C4.90131 13.4153 5.36986 12.935 5.94135 12.608L21.5559 5.1497C23.7474 3.87685 26.4615 3.91288 28.6184 5.24345L43.9809 12.5622C45.1107 13.1895 45.8175 14.3742 45.833 15.6664C45.835 16.8904 45.2047 18.0287 44.1663 18.6768Z" fill="#008080" />

                                </svg>
                            </span>
                            <h1 className="about-title">Kuchli xodimlar</h1>
                            <p className="about-subtitle">
                                Bizning jamoada kamida 2 yillik tajribaga ega dasturchilar o'z faoliyatini yuritadi va sizning loyihangiz kuchli mutaxassislar tomonidan ishlab chiqiladi
                            </p>
                        </div>
                        <div className="about-card">
                            <span className="about-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_109)">
                                        <path d="M38.7106 4.45981L25.6586 0.107728C25.2312 -0.0346073 24.7692 -0.0346073 24.3419 0.107728L11.2898 4.45981C9.21461 5.14915 7.40942 6.47493 6.13073 8.24879C4.85204 10.0227 4.16488 12.1544 4.16689 14.3411V25.0015C4.16689 40.7577 23.3336 49.4598 24.1544 49.8223C24.4207 49.9406 24.7088 50.0017 25.0002 50.0017C25.2916 50.0017 25.5798 49.9406 25.8461 49.8223C26.6669 49.4598 45.8336 40.7577 45.8336 25.0015V14.3411C45.8356 12.1544 45.1484 10.0227 43.8697 8.24879C42.591 6.47493 40.7858 5.14915 38.7106 4.45981V4.45981ZM41.6669 25.0015C41.6669 36.3661 28.5023 43.8202 25.0002 45.6036C21.494 43.8265 8.33356 36.3952 8.33356 25.0015V14.3411C8.33368 13.0291 8.74663 11.7505 9.5139 10.6864C10.2812 9.6222 11.3639 8.82646 12.6086 8.4119L25.0002 4.28065L37.3919 8.4119C38.6366 8.82646 39.7193 9.6222 40.4865 10.6864C41.2538 11.7505 41.6668 13.0291 41.6669 14.3411V25.0015Z" fill="#FF6B6B" />
                                        <path d="M31.8749 17.2923L23.1499 26.0423L18.4749 21.1673C18.2873 20.9622 18.0605 20.7967 17.8079 20.6805C17.5554 20.5644 17.2821 20.5 17.0042 20.4911C16.7264 20.4822 16.4496 20.529 16.1901 20.6287C15.9306 20.7285 15.6937 20.8791 15.4934 21.0718C15.293 21.2646 15.1332 21.4954 15.0235 21.7508C14.9137 22.0062 14.8562 22.281 14.8543 22.559C14.8524 22.837 14.9061 23.1125 15.0123 23.3694C15.1186 23.6263 15.2751 23.8594 15.4728 24.0548L20.277 29.0548C20.6352 29.4418 21.0683 29.7521 21.5499 29.967C22.0315 30.1818 22.5517 30.2968 23.079 30.3048H23.1478C23.6646 30.3065 24.1766 30.2056 24.654 30.0078C25.1314 29.81 25.5648 29.5194 25.929 29.1528L34.829 20.2527C35.0234 20.0588 35.1777 19.8284 35.2831 19.5748C35.3884 19.3212 35.4428 19.0493 35.4431 18.7747C35.4434 18.5001 35.3896 18.2281 35.2848 17.9743C35.1799 17.7205 35.0261 17.4898 34.8322 17.2954C34.6382 17.1011 34.4078 16.9468 34.1542 16.8414C33.9006 16.7361 33.6288 16.6817 33.3542 16.6814C33.0796 16.6811 32.8076 16.7349 32.5538 16.8397C32.3 16.9446 32.0693 17.0983 31.8749 17.2923V17.2923Z" fill="#FF6B6B" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_109">
                                            <rect width="50" height="50" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <h1 className="about-title">Mukammal Yechimlar</h1>
                            <p className="about-subtitle">
                                Biz har bir mijozga alohida yondashgan holda siz uchun xavfsiz, mukammal va zamonaviy bo'lgan raqamli yechimlarni taklif qilamiz
                            </p>
                        </div>

                        <div className="about-card">
                            <span className="about-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_121)">
                                        <path d="M14.5833 0H8.33333C6.1232 0 4.00358 0.877974 2.44078 2.44078C0.877974 4.00358 0 6.1232 0 8.33333L0 14.5833C0 16.7935 0.877974 18.9131 2.44078 20.4759C4.00358 22.0387 6.1232 22.9167 8.33333 22.9167H14.5833C16.7935 22.9167 18.9131 22.0387 20.4759 20.4759C22.0387 18.9131 22.9167 16.7935 22.9167 14.5833V8.33333C22.9167 6.1232 22.0387 4.00358 20.4759 2.44078C18.9131 0.877974 16.7935 0 14.5833 0V0ZM18.75 14.5833C18.75 15.6884 18.311 16.7482 17.5296 17.5296C16.7482 18.311 15.6884 18.75 14.5833 18.75H8.33333C7.22826 18.75 6.16846 18.311 5.38705 17.5296C4.60565 16.7482 4.16667 15.6884 4.16667 14.5833V8.33333C4.16667 7.22826 4.60565 6.16846 5.38705 5.38705C6.16846 4.60565 7.22826 4.16667 8.33333 4.16667H14.5833C15.6884 4.16667 16.7482 4.60565 17.5296 5.38705C18.311 6.16846 18.75 7.22826 18.75 8.33333V14.5833Z" fill="#25BA6A" />
                                        <path d="M14.5833 27.0834H8.3333C6.12317 27.0834 4.00355 27.9613 2.44075 29.5242C0.877943 31.087 -3.05176e-05 33.2066 -3.05176e-05 35.4167L-3.05176e-05 41.6667C-3.05176e-05 43.8769 0.877943 45.9965 2.44075 47.5593C4.00355 49.1221 6.12317 50.0001 8.3333 50.0001H14.5833C16.7934 50.0001 18.9131 49.1221 20.4759 47.5593C22.0387 45.9965 22.9166 43.8769 22.9166 41.6667V35.4167C22.9166 33.2066 22.0387 31.087 20.4759 29.5242C18.9131 27.9613 16.7934 27.0834 14.5833 27.0834V27.0834ZM18.75 41.6667C18.75 42.7718 18.311 43.8316 17.5296 44.613C16.7482 45.3944 15.6884 45.8334 14.5833 45.8334H8.3333C7.22823 45.8334 6.16843 45.3944 5.38702 44.613C4.60562 43.8316 4.16664 42.7718 4.16664 41.6667V35.4167C4.16664 34.3116 4.60562 33.2518 5.38702 32.4704C6.16843 31.689 7.22823 31.25 8.3333 31.25H14.5833C15.6884 31.25 16.7482 31.689 17.5296 32.4704C18.311 33.2518 18.75 34.3116 18.75 35.4167V41.6667Z" fill="#25BA6A" />
                                        <path d="M41.6668 27.0834H35.4168C33.2067 27.0834 31.0871 27.9613 29.5243 29.5242C27.9615 31.087 27.0835 33.2066 27.0835 35.4167V41.6667C27.0835 43.8769 27.9615 45.9965 29.5243 47.5593C31.0871 49.1221 33.2067 50.0001 35.4168 50.0001H41.6668C43.877 50.0001 45.9966 49.1221 47.5594 47.5593C49.1222 45.9965 50.0002 43.8769 50.0002 41.6667V35.4167C50.0002 33.2066 49.1222 31.087 47.5594 29.5242C45.9966 27.9613 43.877 27.0834 41.6668 27.0834V27.0834ZM45.8335 41.6667C45.8335 42.7718 45.3945 43.8316 44.6131 44.613C43.8317 45.3944 42.7719 45.8334 41.6668 45.8334H35.4168C34.3118 45.8334 33.252 45.3944 32.4706 44.613C31.6892 43.8316 31.2502 42.7718 31.2502 41.6667V35.4167C31.2502 34.3116 31.6892 33.2518 32.4706 32.4704C33.252 31.689 34.3118 31.25 35.4168 31.25H41.6668C42.7719 31.25 43.8317 31.689 44.6131 32.4704C45.3945 33.2518 45.8335 34.3116 45.8335 35.4167V41.6667Z" fill="#25BA6A" />
                                        <path d="M29.1669 14.5834H35.4169V20.8334C35.4169 21.3859 35.6364 21.9158 36.0271 22.3065C36.4178 22.6972 36.9477 22.9167 37.5002 22.9167C38.0527 22.9167 38.5826 22.6972 38.9733 22.3065C39.364 21.9158 39.5835 21.3859 39.5835 20.8334V14.5834H45.8335C46.3861 14.5834 46.916 14.3639 47.3067 13.9732C47.6974 13.5825 47.9169 13.0526 47.9169 12.5C47.9169 11.9475 47.6974 11.4176 47.3067 11.0269C46.916 10.6362 46.3861 10.4167 45.8335 10.4167H39.5835V4.16671C39.5835 3.61417 39.364 3.08427 38.9733 2.69357C38.5826 2.30287 38.0527 2.08337 37.5002 2.08337C36.9477 2.08337 36.4178 2.30287 36.0271 2.69357C35.6364 3.08427 35.4169 3.61417 35.4169 4.16671V10.4167H29.1669C28.6143 10.4167 28.0844 10.6362 27.6937 11.0269C27.303 11.4176 27.0835 11.9475 27.0835 12.5C27.0835 13.0526 27.303 13.5825 27.6937 13.9732C28.0844 14.3639 28.6143 14.5834 29.1669 14.5834V14.5834Z" fill="#25BA6A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_121">
                                            <rect width="50" height="50" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <h1 className="about-title">Doimiy Mijozlar</h1>
                            <p className="about-subtitle">
                                Biz bilan hamkorlik qilgan mijozlar albatta bizning doimiy mijozimiz bo'lib qoladi va xohlagan vaqtda bizga aloqaga chiqishlari mumkin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About