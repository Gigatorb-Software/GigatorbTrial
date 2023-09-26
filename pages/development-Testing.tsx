import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import LogoSlider from '../components/LogoSlider';

const RealEstate = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const [activeTab, setActiveTab] = useState<string>('residentails');

    return (
        <div>
            <Head>
                <title>Development & Testing | Gigatorb </title>
            </Head>
            <div className="overflow-x-hidden">
                <section className="overflow-hidden bg-black bg-[url(/assets/images/realestate/realestate_img.png)] bg-cover bg-center bg-no-repeat pt-[82px] lg:pt-[106px]">
                    <div className="container pt-12 pb-16 md:pt-24">
                        <div className="relative">
                            <div className="w-full text-center ltr:lg:text-left rtl:lg:text-right xl:max-w-[767px]">
                          
                                <h2 className="py-5 text-4xl font-extrabold text-white md:py-0 md:text-6xl md:leading-[90px]">
                                Manual and Automation  <span className="text-3xl italic text-primary md:text-[50px]">Testing</span> Services
                                </h2>
                                <p className="pt-4 text-base font-semibold">
                                We specialize in ensuring the quality, reliability, and performance of your software products through meticulous testing processes
                                </p>
                             
                              
                            </div>
                            {/* <div
                                className="relative -bottom-16 z-[1] order-2 mx-auto w-full max-w-[350px] ltr:right-10 rtl:left-10 lg:absolute lg:order-1 lg:max-w-[424px]"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                                data-aos-offset="0"
                            >
                                <img
                                    src="/assets/images/realestate/realestate_img1.png"
                                    alt=""
                                    className="z-1 relative h-full w-full bg-gray-dark object-cover p-3"
                                />
                                <span className="absolute -top-5 -bottom-5 -z-[1] w-full border-[3px] border-[#B476E5] ltr:-right-6 rtl:-left-6 ltr:xl:-right-8 rtl:xl:-left-8"></span>
                            </div> */}
                            <span className="absolute -bottom-16 order-1 w-full max-w-[350px] ltr:left-[51%] rtl:right-[55%] lg:order-2 lg:max-w-[400px] xl:ltr:left-[55%]">
                                <svg width="28" height="100" viewBox="0 0 28 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_6_1064)">
                                        <path
                                            d="M15.2353 3.76093V0H12.7648V3.76096L9.42133 1.94045L8.53853 4.47644L12.7648 6.7776V9.26383L8.05629 6.70011L7.17349 9.23607L12.7648 12.2805V14.8873L7.0162 11.7572L6.1334 14.2932L12.7648 17.9039V20.5437L5.73354 16.7152L4.85076 19.2511L12.7648 23.5602V25.9648L4.88278 21.6731L4 24.209L12.7648 28.9815V30.9321L4.88278 26.6405L4 29.1765L12.7648 33.9488V36.5842L4.88278 32.2926L4 34.8285L12.7648 39.6008V41.5918L4.88278 37.3002L4 39.8361L12.7648 44.6084V46.7977L4.88278 42.506L4 45.0419L12.7648 49.8142V52.4001L4.88278 48.1085L4 50.6444L12.7648 55.4167V58.3002L4.88278 54.0085L4 56.5444L12.7648 61.3167V63.4563L4.88278 59.1647L4 61.7007L12.7648 66.473V69.2242L5.67185 65.3621L4.78907 67.8982L12.7648 72.2409V74.2328L6.88461 71.031L6.00181 73.567L12.7648 77.2493V79.5856L8.98224 77.526L8.09944 80.0619L12.7648 82.6022V100H15.2353V82.6022L19.9006 80.0619L19.0178 77.526L15.2353 79.5856V77.2493L21.9982 73.567L21.1154 71.031L15.2353 74.2328V72.2409L23.2109 67.8982L22.3281 65.3621L15.2353 69.2242V66.473L24 61.7007L23.1172 59.1647L15.2353 63.4563V61.3167L24 56.5444L23.1172 54.0084L15.2353 58.3002V55.4167L24 50.6444L23.1172 48.1085L15.2353 52.4001V49.8142L24 45.0419L23.1172 42.506L15.2353 46.7977V44.6084L24 39.8361L23.1172 37.3L15.2353 41.5918V39.6008L24 34.8285L23.1172 32.2926L15.2353 36.5842V33.9488L24 29.1763L23.1172 26.6405L15.2353 30.9321V28.9813L24 24.209L23.1172 21.6731L15.2353 25.9648V23.5602L23.1493 19.2511L22.2665 16.7152L15.2353 20.5435V17.9039L21.8666 14.2932L20.9838 11.7572L15.2353 14.8872V12.2805L20.8265 9.23607L19.9437 6.70009L15.2353 9.26381V6.77756L19.4615 4.47642L18.5787 1.94045L15.2353 3.76093Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_6_1064"
                                            x="0"
                                            y="0"
                                            width="28"
                                            height="108"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_1064" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_1064" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                </section>

                <div className="bg-[url(/assets/images/realestate/line.png)] bg-[length:1052px] bg-top bg-repeat-y">
                   
                         <section className="relative overflow-hidden bg-gradient-to-t from-white/[55%] to-transparent px-5 pt-12 pb-24 dark:from-white/[0.02] lg:pb-[200px]">
                        <span className="absolute bottom-0 hidden ltr:right-0 rtl:left-0 sm:block">
                            <svg width="102" height="235" viewBox="0 0 102 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path
                                        d="M92.527 78.0833C75.118 82.9124 56.2545 110.949 49 124.363C59.8818 123.021 84.5453 115.912 96.1543 98.2051C107.763 80.4979 98.5725 77.4124 92.527 78.0833Z"
                                        fill="url(#paint0_linear_169_128)"
                                    />
                                    <path
                                        d="M82.7459 31.7592C65.3642 33.512 52.8734 76.4017 47.2734 96.1807C59.7188 86.009 84.2369 65.6654 90.2095 58.8836C101.409 46.1692 99.5458 30.0638 82.7459 31.7592Z"
                                        fill="url(#paint1_linear_169_128)"
                                    />
                                    <path
                                        d="M22.9938 5.01791C11.3666 23.3114 36.5574 50.7968 48.1847 69.0903C48.1847 57.5722 48.1847 33.4741 48.1847 23.3115C48.1847 7.05064 31.3847 -8.19111 22.9938 5.01791Z"
                                        fill="url(#paint2_linear_169_128)"
                                    />
                                    <path
                                        d="M49.0913 104.363C36.0186 86.1963 8.10056 54.7092 0.97333 74.0864C-7.9448 98.3071 47.3095 104.363 49.0913 104.363Z"
                                        fill="url(#paint3_linear_169_128)"
                                    />
                                    <path d="M49.0916 131.636L47.2734 63.4546" stroke="url(#paint4_linear_169_128)" strokeWidth="2" strokeLinecap="round" />
                                    <path
                                        d="M31.0181 183.08C35.4272 172.361 41.9908 144.854 43.3635 131.636H61.8907C62.7088 147.927 71.1451 171.291 75.2633 183.08C87.6087 210.946 76.9815 228.809 69.0907 233.453H39.2544C19.7 227.022 24.8455 198.085 31.0181 183.08Z"
                                        stroke="url(#paint5_linear_169_128)"
                                        strokeWidth="2"
                                    />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_169_128" x1="75.3632" y1="78" x2="75.3632" y2="124.363" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_169_128"
                                        x1="72.2717"
                                        y1="31.6357"
                                        x2="72.2717"
                                        y2="96.1807"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_169_128" x1="34.0923" y1="0" x2="34.0923" y2="69.0903" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_169_128"
                                        x1="24.5456"
                                        y1="67.9993"
                                        x2="24.5456"
                                        y2="104.363"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint4_linear_169_128"
                                        x1="48.1825"
                                        y1="63.4546"
                                        x2="48.1825"
                                        y2="131.636"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint5_linear_169_128"
                                        x1="53.1786"
                                        y1="131.636"
                                        x2="53.1786"
                                        y2="233.453"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <div className="relative mx-auto max-w-[1440px] bg-gray/5 pt-12 dark:bg-gray/[0.05] lg:max-h-[400px]">
                            <div className="container">
                                <div className="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                                    <h6 className="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">our services</h6>
                                    <h4 className="!font-black">
                                    Customized <span className="text-secondary"> Testing </span> Solutions
                                    </h4>
                                </div>
                                <p className="mt-2.5 text-center text-lg font-medium ltr:lg:text-left rtl:lg:text-right">
                                Our team of experienced testers possesses in-depth knowledge of testing methodologies and tools, ensuring thorough and accurate testing
                                </p>
                                <div className="mt-8 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary">
                                        <span className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_22_590)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M21.3028 15.7205C24.8991 12.1242 24.8991 6.2935 21.3028 2.69722C17.7065 -0.899072 11.8758 -0.899072 8.27947 2.69722C5.89155 5.08514 5.0892 8.45821 5.87242 11.5082C5.99874 12.0001 5.88656 12.532 5.52744 12.8911L0.577989 17.8406C0.154104 18.2645 -0.0541175 18.8581 0.0120824 19.4539L0.321504 22.2387C0.354493 22.5355 0.487544 22.8124 0.698774 23.0236L0.976392 23.3012C1.18762 23.5125 1.46445 23.6455 1.76135 23.6785L4.54613 23.9879C5.14193 24.0541 5.73552 23.8459 6.15941 23.422L7.10611 22.4753L4.77791 20.1726C4.38525 19.7842 4.38176 19.151 4.77013 18.7584C5.15851 18.3657 5.79166 18.3622 6.18433 18.7506L8.52035 21.0611L11.1092 18.4722C11.4683 18.1131 11.9999 18.0013 12.4918 18.1276C15.5418 18.9108 18.9149 18.1084 21.3028 15.7205ZM12.781 7.44772C13.8224 6.40632 15.5109 6.40632 16.5523 7.44772C17.5937 8.48911 17.5937 10.1776 16.5523 11.219C15.5109 12.2603 13.8224 12.2603 12.781 11.219C11.7396 10.1776 11.7396 8.48911 12.781 7.44772Z"
                                                        fill="currentcolor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_22_590">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <h5 className="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">Manual Testing Excellence</h5>
                                        <p className="mt-4 text-lg font-medium">We offer manual testing services that meticulously evaluate your software's functionality, usability, and compatibility across platforms</p>
                                    </div>
                                    <div className="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary">
                                        <span className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_18_167)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M16.9643 3.27418L19.1598 5.46974C22.3866 8.69653 24 10.3099 24 12.3148C24 14.3197 22.3866 15.933 19.1598 19.1598C15.933 22.3866 14.3197 24 12.3148 24C10.3099 24 8.69653 22.3866 5.46975 19.1598L3.27418 16.9643C1.41954 15.1096 0.49222 14.1823 0.147167 12.9792C-0.197887 11.776 0.0970006 10.4982 0.686775 7.9425L1.02689 6.46869C1.52307 4.31857 1.77116 3.24351 2.50733 2.50733C3.24351 1.77116 4.31857 1.52307 6.46868 1.02689L7.9425 0.686776C10.4982 0.0970007 11.776 -0.197887 12.9792 0.147167C14.1823 0.49222 15.1096 1.41954 16.9643 3.27418ZM10.976 14.7941C10.1684 13.9866 10.1753 12.8279 10.6582 11.9096C10.4169 11.559 10.4521 11.0754 10.7639 10.7636C11.0745 10.453 11.5557 10.4169 11.906 10.6554C12.3139 10.4386 12.762 10.324 13.2085 10.3282C13.7055 10.3329 14.1046 10.7396 14.1 11.2366C14.0953 11.7337 13.6885 12.1328 13.1915 12.1281C12.9792 12.1261 12.7002 12.2214 12.4609 12.4607C11.9959 12.9257 12.1182 13.3907 12.2488 13.5213C12.3794 13.6519 12.8444 13.7742 13.3095 13.3092C14.2503 12.3684 15.8747 12.0561 16.9157 13.0971C17.7233 13.9046 17.7164 15.0633 17.2335 15.9816C17.4748 16.3322 17.4396 16.8158 17.1278 17.1276C16.8171 17.4383 16.3358 17.4743 15.9855 17.2357C15.4372 17.5271 14.8135 17.6363 14.2188 17.5141C13.732 17.414 13.4184 16.9382 13.5184 16.4513C13.6185 15.9644 14.0943 15.6508 14.5812 15.7509C14.7938 15.7946 15.1365 15.7248 15.4308 15.4305C15.8958 14.9655 15.7735 14.5005 15.6429 14.3699C15.5123 14.2393 15.0473 14.1169 14.5823 14.582C13.6414 15.5228 12.017 15.8351 10.976 14.7941ZM9.62515 9.95175C10.5624 9.01449 10.5624 7.49489 9.62515 6.55763C8.68789 5.62037 7.1683 5.62037 6.23104 6.55763C5.29378 7.49489 5.29378 9.01449 6.23104 9.95175C7.1683 10.889 8.68789 10.889 9.62515 9.95175Z"
                                                        fill="currentcolor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_18_167">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <h5 className="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">Automation Testing Efficiency</h5>
                                        <p className="mt-4 text-lg font-medium">
                                        Our automation testing expertise streamlines repetitive testing tasks, saving time and reducing human error in the testing process
                                        </p>
                                    </div>
                                    <div className="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary">
                                        <span className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.2558 1H16.4651C16.1569 1 15.907 1.24989 15.907 1.55814V1.6239L19.8139 4.74947V1.55814C19.8139 1.24989 19.564 1 19.2558 1Z"
                                                    fill="currentcolor"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.6047 8.2558C10.6047 7.48517 11.2294 6.86045 12 6.86045C12.7706 6.86045 13.3953 7.48517 13.3953 8.2558C13.3953 9.02642 12.7706 9.65114 12 9.65114C11.2294 9.65114 10.6047 9.02642 10.6047 8.2558Z"
                                                    fill="currentcolor"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M21.7674 9.88608L22.6398 10.584C23.0008 10.8728 23.5277 10.8143 23.8165 10.4532C24.1054 10.0922 24.0468 9.56531 23.6858 9.27646L14.615 2.01985C13.0862 0.796794 10.9138 0.796794 9.385 2.01985L0.314239 9.27646C-0.0468168 9.56531 -0.105355 10.0922 0.183489 10.4532C0.472333 10.8143 0.999182 10.8728 1.36024 10.584L2.23258 9.88608V21.372H0.837238C0.374861 21.372 3.08724e-05 21.7469 3.08724e-05 22.2092C3.08724e-05 22.6716 0.374861 23.0465 0.837238 23.0465H23.1628C23.6251 23.0465 24 22.6716 24 22.2092C24 21.7469 23.6251 21.372 23.1628 21.372H21.7674V9.88608ZM8.93024 8.2558C8.93024 6.56041 10.3046 5.18604 12 5.18604C13.6954 5.18604 15.0698 6.56041 15.0698 8.2558C15.0698 9.95118 13.6954 11.3256 12 11.3256C10.3046 11.3256 8.93024 9.95118 8.93024 8.2558ZM12.0551 12.4418C12.7973 12.4418 13.4368 12.4418 13.9488 12.5106C14.4976 12.5844 15.0237 12.7508 15.4504 13.1775C15.8771 13.6042 16.0435 14.1302 16.1173 14.679C16.1818 15.1591 16.1858 15.7511 16.186 16.4348C16.186 16.4804 16.186 16.5264 16.186 16.5728L16.186 21.372H14.5116V16.6279C14.5116 15.8149 14.5098 15.2893 14.4578 14.9021C14.409 14.539 14.3301 14.4252 14.2664 14.3615C14.2027 14.2977 14.0889 14.2189 13.7257 14.1701C13.3385 14.118 12.813 14.1162 12 14.1162C11.187 14.1162 10.6615 14.118 10.2743 14.1701C9.91114 14.2189 9.79732 14.2977 9.73359 14.3615C9.66986 14.4252 9.59104 14.539 9.54222 14.9021C9.49016 15.2893 9.48838 15.8149 9.48838 16.6279V21.372H7.81396L7.81396 16.5728C7.81392 15.8306 7.81388 15.1911 7.88273 14.679C7.95652 14.1302 8.12291 13.6042 8.5496 13.1775C8.97629 12.7508 9.50235 12.5844 10.0512 12.5106C10.5632 12.4418 11.2027 12.4418 11.9449 12.4418H12.0551Z"
                                                    fill="currentcolor"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.6047 8.2558C10.6047 7.48517 11.2294 6.86045 12 6.86045C12.7706 6.86045 13.3953 7.48517 13.3953 8.2558C13.3953 9.02642 12.7706 9.65114 12 9.65114C11.2294 9.65114 10.6047 9.02642 10.6047 8.2558Z"
                                                    fill="currentcolor"
                                                />
                                            </svg>
                                        </span>
                                        <h5 className="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">Comprehensive Test Coverage</h5>
                                        <p className="mt-4 text-lg font-medium">
                                        We provide end-to-end test coverage, from functional and regression testing to performance and security testing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <span className="absolute bottom-0 ltr:-left-5 rtl:-right-5 md:bottom-20" data-aos="fade-up-right" data-aos-duration="1000">
                                <svg
                                    width="62"
                                    height="60"
                                    viewBox="0 0 62 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16"
                                >
                                    <path
                                        d="M62 0L42.5037 43.0236L29.8853 34.7351L21.3901 36.8163L19.6134 23.952L10.6432 14.9567L62 0ZM53.4601 6.74365L23.4852 22.7451L23.8735 31.8047L53.4601 6.74365Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M18.2192 39.9841C16.7331 41.4563 15.3531 43.0123 14.0066 44.5935C12.6657 46.1774 11.3638 47.7921 10.1012 49.4375C8.83847 51.0801 7.61209 52.7535 6.42763 54.4603C5.24874 56.17 4.10061 57.902 3.06421 59.7206C4.55317 58.2484 5.93038 56.6952 7.27688 55.114C8.61779 53.5301 9.91958 51.9154 11.1823 50.27C12.445 48.6246 13.6713 46.9513 14.853 45.2472C16.0347 43.5319 17.18 41.7999 18.2192 39.9841Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M31.064 40.2637C29.5778 41.7359 28.1978 43.2919 26.8513 44.873C25.5104 46.457 24.2086 48.0717 22.9459 49.7171C21.6832 51.3597 20.4568 53.033 19.2724 54.7399C18.0935 56.4495 16.9453 58.1816 15.9089 60.0002C17.3979 58.528 18.7751 56.9747 20.1216 55.3936C21.4625 53.8096 22.7643 52.195 24.027 50.5496C25.2897 48.9041 26.516 47.2308 27.7005 45.5267C28.8766 43.8115 30.0248 42.0795 31.064 40.2637Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M16.0322 23.9688C14.5461 25.441 13.166 26.997 11.8195 28.5781C10.4786 30.1621 9.17684 31.7767 7.91415 33.4222C6.65146 35.0648 5.42508 36.7381 4.24061 38.445C3.06173 40.1546 1.91357 41.8866 0.877159 43.7052C2.36613 42.233 3.74337 40.6798 5.08987 39.0987C6.43077 37.5147 7.73256 35.9 8.99246 34.2546C10.2551 32.6092 11.4815 30.9359 12.666 29.2318C13.8449 27.5166 14.993 25.7846 16.0322 23.9688Z"
                                        fill="#47BDFF"
                                    />
                                </svg>
                            </span>
                        </div>
                    </section>
                    <section className="relative py-12 lg:py-24">
                 <div className="container relative">
                    <div className="heading text-center">
                        <h4 className="!text-primary">Java and Spring Boot Expertise</h4>
                        <p className="mt-2.5 text-base font-semibold">Our team of experienced developers is well-versed in Java and Spring Boot technologies</p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20">
                            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-ful">
                              <img src="\assets\images\Gallary\Gartoon-Team-Gartoon-Apps-Rasmol.svg" alt="" />
                            </span>
                            <h3 className="mt-5 text-xl font-bold text-black dark:text-white">Custom Backend Development</h3>
                            <p className="mt-2.5 text-base font-medium leading-8"> Experts in custom backend solutions RESTful APIs, microservices, and tailored solutions</p>
                        </div>
                        <div className="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20">
                            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full ">
                            <img src="\assets\images\Gallary\Gartoon-Team-Gartoon-Apps-Ubuntu-tweak.svg" alt="" />
                            </span>
                            <h3 className="mt-5 text-xl font-bold text-black dark:text-white">Microservices Architecture</h3>
                            <p className="mt-2.5 text-base font-medium leading-8">For complex projects, we employ microservices to enhance flexibility, maintainability, and fault tolerance by modularizing the backend.</p>
                        </div>
                        <div className="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20">
                            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full ">
                            <img src="\assets\images\Gallary\Gartoon-Team-Gartoon-Apps-Kdevelop.svg" alt="" />

                            </span>
                            <h3 className="mt-5 text-xl font-bold text-black dark:text-white">API Development</h3>
                            <p className="mt-2.5 text-base font-medium leading-8">API experts for seamless communication, with clear documentation for easy integration with third-party services and mobile apps</p>
                        </div>
                        <div className="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20">
                            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full ">
                            <img src="\assets\images\Gallary\Gartoon-Team-Gartoon-Misc-Stock-Insert-Chart.svg" alt="" />

                            </span>
                            <h3 className="mt-5 text-xl font-bold text-black dark:text-white">Database Integration</h3>
                            <p className="mt-2.5 text-base font-medium leading-8">We seamlessly integrate SQL and NoSQL databases for peak data performance and integrity</p>
                        </div>
                    </div>
                    
                </div>
            </section>
                              <section className="relative bg-white py-12 dark:bg-black lg:py-24">
                        {/* <span className="absolute bottom-0 hidden max-w-[120px] ltr:right-0 rtl:left-0 sm:block xl:max-w-[250px]">
                            <svg className="h-full w-full" width="300" height="229" viewBox="0 0 300 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M122.411 2.08716L81.1719 30.5425H90.7378L127.421 5.04356L122.411 2.08716Z" fill="#08111F" />
                                <path
                                    d="M220.307 30.5257V229.008L86.0305 227.798V29.3331L123.773 3.22941L124.042 3.04463L125.454 2.07037L125.538 2.00317L125.639 2.08716L167.434 30.5257H220.307Z"
                                    fill="#47BDFF"
                                />
                                <path
                                    d="M220.307 30.5256V229.008L167.484 227.798C167.619 191.599 167.871 52.4299 167.568 33.8684C167.535 31.7183 167.501 30.5424 167.434 30.5256H220.307Z"
                                    fill="#B476E5"
                                />
                                <path
                                    d="M188.095 64.8266H177.47V49.5071C177.47 46.5675 179.858 44.199 182.783 44.199C185.725 44.199 188.095 46.5843 188.095 49.5071V64.8266Z"
                                    fill="#FFD181"
                                />
                                <path
                                    d="M210.96 133.731H200.335V118.411C200.335 115.472 202.722 113.103 205.647 113.103C208.589 113.103 210.96 115.489 210.96 118.411V133.731Z"
                                    fill="#FFD181"
                                />
                                <g opacity="0.5">
                                    <path
                                        d="M206.253 44.199C209.195 44.199 211.565 46.5843 211.565 49.5071V64.8266H200.94V49.5071C200.94 46.5675 203.327 44.199 206.253 44.199Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M188.18 98.5229H177.555V83.2034C177.555 80.2637 179.942 77.8953 182.867 77.8953C185.809 77.8953 188.18 80.2805 188.18 83.2034V98.5229Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M210.96 98.5229H200.335V83.2034C200.335 80.2637 202.722 77.8953 205.647 77.8953C208.589 77.8953 210.96 80.2805 210.96 83.2034V98.5229Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M188.18 133.731H177.555V118.411C177.555 115.472 179.942 113.103 182.867 113.103C185.809 113.103 188.18 115.489 188.18 118.411V133.731Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M188.18 168.334H177.555V153.015C177.555 150.075 179.942 147.707 182.867 147.707C185.809 147.707 188.18 150.092 188.18 153.015V168.334Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M210.96 168.334H200.335V153.015C200.335 150.075 202.722 147.707 205.647 147.707C208.589 147.707 210.96 150.092 210.96 153.015V168.334Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M188.18 206.667H177.555V191.347C177.555 188.408 179.942 186.039 182.867 186.039C185.809 186.039 188.18 188.424 188.18 191.347V206.667Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M210.96 206.667H200.335V191.347C200.335 188.408 202.722 186.039 205.647 186.039C208.589 186.039 210.96 188.424 210.96 191.347V206.667Z"
                                        fill="white"
                                    />
                                </g>
                                <g opacity="0.5">
                                    <path
                                        d="M110.038 62.4078H99.4126V47.0882C99.4126 44.1486 101.8 41.7802 104.725 41.7802C107.667 41.7802 110.038 44.1654 110.038 47.0882V62.4078Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M146.94 61.9541H136.315V46.6346C136.315 43.695 138.702 41.3265 141.627 41.3265C144.57 41.3265 146.94 43.7118 146.94 46.6346V61.9541Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M110.038 97.011H99.4126V81.6915C99.4126 78.7519 101.8 76.3834 104.725 76.3834C107.667 76.3834 110.038 78.7687 110.038 81.6915V97.011Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M146.94 96.5574H136.315V81.2379C136.315 78.2983 138.702 75.9298 141.627 75.9298C144.57 75.9298 146.94 78.3151 146.94 81.2379V96.5574Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M110.038 134.789H99.4126V119.47C99.4126 116.53 101.8 114.161 104.725 114.161C107.667 114.161 110.038 116.547 110.038 119.47V134.789Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M146.94 134.336H136.315V119.016C136.315 116.076 138.702 113.708 141.627 113.708C144.57 113.708 146.94 116.093 146.94 119.016V134.336Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M110.038 168.653H99.4126V153.334C99.4126 150.394 101.8 148.026 104.725 148.026C107.667 148.026 110.038 150.411 110.038 153.334V168.653Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M146.94 168.2H136.315V152.88C136.315 149.941 138.702 147.572 141.627 147.572C144.57 147.572 146.94 149.957 146.94 152.88V168.2Z"
                                        fill="white"
                                    />
                                </g>
                                <path
                                    d="M135.693 204.248V228.067H112.61V204.248C112.61 197.965 117.704 192.876 123.975 192.876H124.311C130.582 192.876 135.676 197.965 135.676 204.248H135.693Z"
                                    fill="white"
                                />
                                <path d="M122.109 2.00317L166.004 33.8685H226.611L181.724 3.14542L122.109 2.00317Z" fill="#08111F" />
                                <path
                                    opacity="0.2"
                                    d="M295.561 67.2269L295.561 67.2269L295.557 67.2285C293.716 68.082 292.233 69.5441 291.359 71.3857L291.358 71.3884L290.057 74.1502L288.783 71.3799L288.783 71.3799L288.781 71.3765C287.927 69.5362 286.464 68.0548 284.621 67.1817L284.618 67.1804L281.856 65.8818L284.627 64.61L284.627 64.61L284.63 64.6084C286.472 63.7548 287.954 62.2928 288.828 60.4512L288.83 60.4485L290.13 57.6867L291.404 60.457L291.406 60.4604C292.26 62.3007 293.724 63.7821 295.566 64.6552L295.569 64.6565L298.331 65.9551L295.561 67.2269Z"
                                    fill="url(#paint0_linear_79_171)"
                                    fillOpacity="0.5"
                                    stroke="url(#paint1_linear_79_171)"
                                    strokeWidth="2"
                                />
                                <path
                                    opacity="0.2"
                                    d="M256.035 152.778L256.032 152.779C254.191 153.633 252.708 155.095 251.834 156.936L251.833 156.939L250.532 159.701L249.258 156.931L249.258 156.931L249.256 156.927C248.402 155.087 246.938 153.606 245.096 152.732L245.093 152.731L242.331 151.433L245.102 150.161L245.105 150.159C246.946 149.306 248.429 147.844 249.303 146.002L249.304 145.999L250.605 143.238L251.879 146.008L251.881 146.011C252.735 147.851 254.199 149.333 256.041 150.206L256.044 150.207L258.806 151.506L256.035 152.778Z"
                                    fill="url(#paint2_linear_79_171)"
                                    fillOpacity="0.5"
                                    stroke="url(#paint3_linear_79_171)"
                                    strokeWidth="2"
                                />
                                <path
                                    opacity="0.2"
                                    d="M15.3734 139.155L15.37 139.156C13.5286 140.01 12.0458 141.472 11.1717 143.314L11.1705 143.316L9.86969 146.078L8.59579 143.308L8.59424 143.304C7.73978 141.464 6.27635 139.983 4.43363 139.11L4.43094 139.108L1.66904 137.81L4.43945 136.538L4.43946 136.538L4.44279 136.536C6.28426 135.683 7.76704 134.221 8.64108 132.379L8.64235 132.376L9.94312 129.615L11.217 132.385L11.2186 132.388C12.073 134.229 13.5365 135.71 15.3792 136.583L15.3819 136.584L18.1438 137.883L15.3734 139.155Z"
                                    fill="url(#paint4_linear_79_171)"
                                    fillOpacity="0.5"
                                    stroke="url(#paint5_linear_79_171)"
                                    strokeWidth="2"
                                />
                                <path
                                    opacity="0.2"
                                    d="M210.61 11.2065L210.606 11.2081C208.765 12.0617 207.282 13.5237 206.408 15.3653L206.407 15.368L205.106 18.1298L203.832 15.3595L203.831 15.3561C202.976 13.5159 201.513 12.0344 199.67 11.1613L199.667 11.16L196.905 9.86139L199.676 8.58957L199.676 8.58958L199.679 8.58804C201.521 7.73446 203.003 6.27237 203.877 4.43084L203.879 4.42815L205.179 1.66637L206.453 4.43665L206.453 4.43665L206.455 4.43999C207.309 6.28027 208.773 7.76171 210.616 8.63485L210.618 8.63611L213.38 9.93473L210.61 11.2065Z"
                                    fill="url(#paint6_linear_79_171)"
                                    fillOpacity="0.5"
                                    stroke="url(#paint7_linear_79_171)"
                                    strokeWidth="2"
                                />
                                <path
                                    opacity="0.2"
                                    d="M55.6375 75.2562L55.6342 75.2578C53.7927 76.1113 52.3099 77.5734 51.4359 79.415L51.4346 79.4177L50.1339 82.1795L48.8599 79.4092L48.8599 79.4092L48.8584 79.4058C48.0039 77.5655 46.5405 76.0841 44.6978 75.211L44.6951 75.2097L41.9332 73.9111L44.7036 72.6393L44.707 72.6377C46.5484 71.7841 48.0312 70.3221 48.9052 68.4805L48.9065 68.4778L50.2073 65.716L51.4812 68.4863L51.4827 68.4897C52.3372 70.33 53.8006 71.8114 55.6433 72.6845L55.646 72.6858L58.4079 73.9844L55.6375 75.2562Z"
                                    fill="url(#paint8_linear_79_171)"
                                    fillOpacity="0.5"
                                    stroke="url(#paint9_linear_79_171)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_79_171"
                                        x1="290.094"
                                        y1="56.0204"
                                        x2="290.094"
                                        y2="75.8165"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_79_171"
                                        x1="290.094"
                                        y1="56.0204"
                                        x2="290.094"
                                        y2="75.8165"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_79_171"
                                        x1="250.569"
                                        y1="141.571"
                                        x2="250.569"
                                        y2="161.367"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_79_171"
                                        x1="250.569"
                                        y1="141.571"
                                        x2="250.569"
                                        y2="161.367"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_79_171" x1="9.9064" y1="127.948" x2="9.9064" y2="147.744" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_79_171" x1="9.9064" y1="127.948" x2="9.9064" y2="147.744" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_79_171" x1="205.143" y1="0" x2="205.143" y2="19.7961" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_79_171" x1="205.143" y1="0" x2="205.143" y2="19.7961" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint8_linear_79_171"
                                        x1="50.1706"
                                        y1="64.0497"
                                        x2="50.1706"
                                        y2="83.8458"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint9_linear_79_171"
                                        x1="50.1706"
                                        y1="64.0497"
                                        x2="50.1706"
                                        y2="83.8458"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" />
                                        <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span> */}
                        <div className="container">
                            <div className="heading mb-0 w-full text-center lg:max-w-[478px] ltr:lg:text-left rtl:lg:text-right">
                                <h6 className="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">why choose</h6>
                                <h4 className="!font-black">
                                    WHY OUR CLIENTS <span className="text-secondary">CHOOSE US?</span>
                                </h4>
                            </div>
                            <p className="mt-2.5 w-full text-center text-lg font-medium lg:max-w-[478px] ltr:lg:text-left rtl:lg:text-right">
                            We tailor our testing strategies to meet your unique project requirements, ensuring that your software meets industry standards and user expectations                            </p>
                            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                                <div className="flex gap-5">
                                    <div>
                                        <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(204,102,1,0.06)]">
                                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.9755 7.02706C12.4315 6.20905 12.6595 5.80005 13.0004 5.80005C13.3413 5.80005 13.5693 6.20905 14.0253 7.02706L14.1432 7.23869C14.2728 7.47115 14.3376 7.58737 14.4386 7.66406C14.5396 7.74075 14.6654 7.76921 14.9171 7.82615L15.1462 7.87798C16.0316 8.07833 16.4744 8.1785 16.5797 8.51723C16.6851 8.85596 16.3832 9.20891 15.7796 9.91482L15.6234 10.0974C15.4518 10.298 15.3661 10.3983 15.3275 10.5224C15.2889 10.6465 15.3019 10.7803 15.3278 11.048L15.3514 11.2916C15.4427 12.2335 15.4883 12.7044 15.2125 12.9137C14.9368 13.1231 14.5222 12.9322 13.6931 12.5505L13.4787 12.4517C13.2431 12.3432 13.1253 12.289 13.0004 12.289C12.8755 12.289 12.7577 12.3432 12.5221 12.4517L12.3076 12.5505C11.4786 12.9322 11.064 13.1231 10.7882 12.9137C10.5125 12.7044 10.5581 12.2335 10.6494 11.2916L10.673 11.048C10.6989 10.7803 10.7119 10.6465 10.6733 10.5224C10.6347 10.3983 10.5489 10.298 10.3774 10.0974L10.2212 9.91482C9.61756 9.20891 9.31573 8.85596 9.42106 8.51723C9.5264 8.1785 9.96914 8.07833 10.8546 7.87798L11.0837 7.82615C11.3353 7.76921 11.4612 7.74075 11.5622 7.66406C11.6632 7.58737 11.728 7.47115 11.8576 7.23869L11.9755 7.02706Z"
                                                    stroke="#CC6601"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M13 17.8814L8.47425 22.5674C7.82611 23.2385 7.50204 23.574 7.2276 23.6901C6.60222 23.9547 5.9085 23.7283 5.57953 23.1522C5.43516 22.8994 5.39018 22.4434 5.3002 21.5314C5.2494 21.0164 5.224 20.759 5.1469 20.5433C4.97429 20.0605 4.61159 19.685 4.14533 19.5063C3.93705 19.4264 3.68839 19.4001 3.19107 19.3475C2.31024 19.2544 1.86983 19.2078 1.62566 19.0583C1.06926 18.7177 0.850571 17.9994 1.10611 17.3519C1.21826 17.0677 1.54233 16.7322 2.19047 16.0611L5.1469 13"
                                                    stroke="#CC6601"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M13 17.8814L17.5257 22.5674C18.1739 23.2385 18.498 23.574 18.7724 23.6901C19.3978 23.9547 20.0915 23.7283 20.4205 23.1522C20.5648 22.8994 20.6098 22.4434 20.6998 21.5314C20.7506 21.0164 20.776 20.759 20.8531 20.5433C21.0257 20.0605 21.3884 19.685 21.8547 19.5063C22.0629 19.4264 22.3116 19.4001 22.8089 19.3475C23.6898 19.2544 24.1302 19.2078 24.3743 19.0583C24.9307 18.7177 25.1494 17.9994 24.8939 17.3519C24.7817 17.0677 24.4577 16.7322 23.8095 16.0611L20.8531 13"
                                                    stroke="#CC6601"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M5.19961 6.2763C4.81255 7.2419 4.59961 8.29608 4.59961 9.4C4.59961 14.0392 8.36042 17.8 12.9996 17.8C17.6388 17.8 21.3996 14.0392 21.3996 9.4C21.3996 4.76081 17.6388 1 12.9996 1C11.8957 1 10.8415 1.21295 9.87591 1.6"
                                                    stroke="#CC6601"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold dark:text-white">Manual Testing</h5>
                                        <p className="mt-2 text-sm font-semibold">Thoroughly evaluate your software's functionality, user experience, and compatibility through manual testing</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div>
                                        <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(52,102,255,0.06)]">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.8 5.8C17.8 3.53726 17.8 2.40589 17.097 1.70294C16.3941 1 15.2627 1 13 1C10.7372 1 9.60584 1 8.90289 1.70294C8.19995 2.40589 8.19995 3.53726 8.19995 5.8"
                                                    stroke="#3466FF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M10.6001 16.6H5.8001C5.23441 16.6 4.95157 16.6 4.77583 16.7757C4.6001 16.9514 4.6001 17.2343 4.6001 17.8V19C4.6001 19.5657 4.6001 19.8485 4.77583 20.0242C4.95157 20.2 5.23441 20.2 5.8001 20.2H10.6001C11.1658 20.2 11.4486 20.2 11.6244 20.0242C11.8001 19.8485 11.8001 19.5657 11.8001 19V17.8C11.8001 17.2343 11.8001 16.9514 11.6244 16.7757C11.4486 16.6 11.1658 16.6 10.6001 16.6Z"
                                                    stroke="#3466FF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                    strokeLinejoin="round"
                                                />
                                                <path d="M5.80005 6.40002V16.6M5.80005 24.4V20.8" stroke="#3466FF" strokeWidth="2" strokeLinecap="square" />
                                                <path d="M20.2 6.40002V10.6M20.2 24.4V15.4" stroke="#3466FF" strokeWidth="2" strokeLinecap="square" />
                                                <path
                                                    d="M1 15.4C1 10.8746 1 8.61182 2.40589 7.20594C3.81178 5.80005 6.07452 5.80005 10.6 5.80005H15.4C19.9255 5.80005 22.1882 5.80005 23.5941 7.20594C24.3779 7.98975 24.7248 9.03991 24.8782 10.6M25 15.4C25 19.9255 25 22.1883 23.5941 23.5942C22.1882 25 19.9255 25 15.4 25H10.6C6.07453 25 3.81177 25 2.40589 23.5942C1.62207 22.8103 1.27525 21.7602 1.12179 20.2"
                                                    stroke="#3466FF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold dark:text-white">Automation Testing</h5>
                                        <p className="mt-2 text-sm font-semibold">Optimize testing efficiency by automating repetitive test cases, ensuring faster and more consistent results</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div>
                                        <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(0,102,0,0.06)]">
                                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25 10.6C25 6.07452 25 3.81177 23.5941 2.40589C22.1882 1 19.9255 1 15.4 1H10.6C6.07452 1 3.81177 1 2.40589 2.40589C1 3.81177 1 6.07452 1 10.6C1 15.1255 1 17.3882 2.40589 18.7941C3.81177 20.2 6.07452 20.2 10.6 20.2H15.4C19.9255 20.2 22.1882 20.2 23.5941 18.7941C24.3779 18.0103 24.7247 16.9601 24.8782 15.4"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path d="M10.6 15.4H5.80005" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path d="M15.4001 15.4H13.6001" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path
                                                    d="M1 8.19995L7 8.19995M25 8.19995L11.8 8.19995"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold dark:text-white">Functional Testing</h5>
                                        <p className="mt-2 text-sm font-semibold">Validate that your software meets its functional requirements and performs as expected.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div>
                                        <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(0,102,0,0.06)]">
                                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25 10.6C25 6.07452 25 3.81177 23.5941 2.40589C22.1882 1 19.9255 1 15.4 1H10.6C6.07452 1 3.81177 1 2.40589 2.40589C1 3.81177 1 6.07452 1 10.6C1 15.1255 1 17.3882 2.40589 18.7941C3.81177 20.2 6.07452 20.2 10.6 20.2H15.4C19.9255 20.2 22.1882 20.2 23.5941 18.7941C24.3779 18.0103 24.7247 16.9601 24.8782 15.4"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path d="M10.6 15.4H5.80005" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path d="M15.4001 15.4H13.6001" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path
                                                    d="M1 8.19995L7 8.19995M25 8.19995L11.8 8.19995"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold dark:text-white">Regression Testing</h5>
                                        <p className="mt-2 text-sm font-semibold">Detect and mitigate issues that may arise after software updates or code changes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div>
                                        <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(0,102,0,0.06)]">
                                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25 10.6C25 6.07452 25 3.81177 23.5941 2.40589C22.1882 1 19.9255 1 15.4 1H10.6C6.07452 1 3.81177 1 2.40589 2.40589C1 3.81177 1 6.07452 1 10.6C1 15.1255 1 17.3882 2.40589 18.7941C3.81177 20.2 6.07452 20.2 10.6 20.2H15.4C19.9255 20.2 22.1882 20.2 23.5941 18.7941C24.3779 18.0103 24.7247 16.9601 24.8782 15.4"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path d="M10.6 15.4H5.80005" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path d="M15.4001 15.4H13.6001" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path
                                                    d="M1 8.19995L7 8.19995M25 8.19995L11.8 8.19995"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold dark:text-white">Performance Testing</h5>
                                        <p className="mt-2 text-sm font-semibold">Assess the scalability and reliability of your software under various loads and conditions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div>
                                        <span className="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(0,102,0,0.06)]">
                                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25 10.6C25 6.07452 25 3.81177 23.5941 2.40589C22.1882 1 19.9255 1 15.4 1H10.6C6.07452 1 3.81177 1 2.40589 2.40589C1 3.81177 1 6.07452 1 10.6C1 15.1255 1 17.3882 2.40589 18.7941C3.81177 20.2 6.07452 20.2 10.6 20.2H15.4C19.9255 20.2 22.1882 20.2 23.5941 18.7941C24.3779 18.0103 24.7247 16.9601 24.8782 15.4"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path d="M10.6 15.4H5.80005" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path d="M15.4001 15.4H13.6001" stroke="#006600" strokeWidth="2" strokeLinecap="square" />
                                                <path
                                                    d="M1 8.19995L7 8.19995M25 8.19995L11.8 8.19995"
                                                    stroke="#006600"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold dark:text-white">Security Testing</h5>
                                        <p className="mt-2 text-sm font-semibold">Identify and address vulnerabilities to protect your software and user data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="relative py-12 lg:py-24">
                                <span className="absolute -bottom-3 hidden max-w-[320px] ltr:-left-44 rtl:-right-44 rtl:rotate-y-180 sm:block lg:max-w-full ltr:lg:-left-[360px] rtl:lg:-right-[360px]">
                                    <img src="assets/images/realestate/testimonials.svg" alt="" className="dark:hidden" />
                                    <img src="assets/images/realestate/testimonials-dark.svg" alt="" className="hidden dark:block" />
                                </span>
                                <div className="flex flex-col items-center justify-between gap-[73px] lg:flex-row">
                                    <div>
                                        <div className="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                                            <h6 className="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">testimonials</h6>
                                            <h4 className="!font-black">
                                                WHAT OUR CUSTOMERS ARE <span className="text-secondary">SAYING US?</span>
                                            </h4>
                                        </div>
                                    
                                   
                                    </div>
                                    <div className="relative mx-auto w-full max-w-[445px] bg-white drop-shadow-[6px_6px_0px_rgba(119,128,161,0.3)] dark:bg-black">
                                        <Swiper
                                            modules={[Navigation, Autoplay]}
                                            slidesPerView="auto"
                                            spaceBetween={30}
                                            loop={true}
                                            speed={1000}
                                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                                            navigation={{
                                                nextEl: '.testimonial-button-next',
                                                prevEl: '.testimonial-button-prev',
                                            }}
                                            dir={isRtl ? 'rtl' : 'ltr'}
                                            key={isRtl ? 'true' : 'false'}
                                        >
                                            <SwiperSlide>
                                                <div className="flex justify-between gap-7 p-7">
                                                    <div className="flex items-center gap-2.5">
                                                        <div className="flex h-14 w-14 items-end justify-center overflow-hidden rounded-full border border-[rgba(125,132,150,0.2)] bg-gradient-to-t from-[rgba(125,132,150,0.1)] to-[125,132,150] px-1 pt-2">
                                                            <img src="assets/images/realestate/customer-avatar.svg" alt="" />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-lg font-bold text-black dark:text-white">Sudo</h5>
                                                            <p className="text-sm font-bold italic">Client</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border border-gray/10"></div>
                                                <div className="p-7">
                                                  
                                                    <p className="mt-4 text-base font-semibold leading-7">
                                                        “Hi Lav - this is awesome !”
                                                    </p>
                                                    <div className="text-right">
                                                        <p className="mt-7 inline-flex bg-[rgba(8,17,31,0.06)] p-2 text-sm font-semibold text-black dark:text-white">
                                                            Canada
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>

                                        <div className="absolute top-7 z-10 flex gap-2.5 ltr:right-7 rtl:left-7">
                                            <Link href="#">
                                                <button className="testimonial-button-prev flex h-8 w-8 items-center justify-center bg-[rgba(8,17,31,0.08)] text-black duration-200 after:hidden hover:bg-black hover:text-white dark:bg-white/80 dark:hover:bg-secondary">
                                                    <svg
                                                        width="9"
                                                        height="18"
                                                        viewBox="0 0 9 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="rtl:rotate-180"
                                                    >
                                                        <path
                                                            d="M7 16L1 9L2.5 7.25M7 2L5 4.33333"
                                                            stroke="currentcolor"
                                                            strokeWidth="2"
                                                            strokeLinecap="square"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </Link>
                                            <Link href="#">
                                                <button className="testimonial-button-next flex h-8 w-8 items-center justify-center bg-[rgba(8,17,31,0.08)] text-black duration-200 after:hidden hover:bg-black hover:text-white dark:bg-white/80 dark:hover:bg-secondary">
                                                    <svg
                                                        width="9"
                                                        height="18"
                                                        viewBox="0 0 9 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="rtl:rotate-180"
                                                    >
                                                        <path
                                                            d="M2 2L4 4.33333M2 16L8 9L6.5 7.25"
                                                            stroke="currentcolor"
                                                            strokeWidth="2"
                                                            strokeLinecap="square"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="relative overflow-hidden bg-black bg-[url(/assets/images/realestate/newsletter_img.png)] bg-cover bg-center bg-no-repeat py-14 lg:py-24">
                    <div className="container">
                        <div className="md:flex">
                            <div
                                className="relative z-10 mb-8 text-center md:mb-0 ltr:md:text-left rtl:md:text-right"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="absolute -left-[50px] -top-[42px]">
                                    <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.2">
                                            <path d="M17.3252 38.325H57.3252" stroke="url(#paint0_linear_963_22629)" strokeWidth="2" strokeDasharray="6 6" />
                                            <path d="M37.3252 18.325V58.325" stroke="url(#paint1_linear_963_22629)" strokeWidth="2" strokeDasharray="6 6" />
                                            <path d="M5.5752 22.65L18.0752 1" stroke="url(#paint2_linear_963_22629)" strokeWidth="2" strokeDasharray="6 6" />
                                            <path d="M1 5.57495L22.65 18.075" stroke="url(#paint3_linear_963_22629)" strokeWidth="2" strokeDasharray="6 6" />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_963_22629"
                                                x1="37.3252"
                                                y1="38.325"
                                                x2="37.3252"
                                                y2="39.325"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_963_22629"
                                                x1="37.8252"
                                                y1="18.325"
                                                x2="37.8252"
                                                y2="58.325"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint2_linear_963_22629"
                                                x1="11.8252"
                                                y1="1"
                                                x2="11.8252"
                                                y2="22.65"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint3_linear_963_22629"
                                                x1="11.825"
                                                y1="5.57495"
                                                x2="11.825"
                                                y2="18.075"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <div className="relative">
                                    <h2 className="relative z-10 text-4xl font-black text-white md:text-6xl">EMAIL NEWSLETTER</h2>
                                    <h2 className="text-stroke absolute top-1.5 left-1.5 whitespace-nowrap text-4xl font-black text-transparent md:text-6xl">
                                        EMAIL NEWSLETTER
                                    </h2>
                                </div>
                                <span className="absolute right-20 -top-5">
                                    <svg width="72" height="36" viewBox="0 0 72 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.2"
                                            d="M66 36C66 19.4315 52.5685 6 36 6C19.4315 6 6 19.4315 6 36"
                                            stroke="url(#paint0_linear_963_22675)"
                                            strokeWidth="11"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear_963_22675" x1="36" y1="6" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <p className="text-2xl font-semibold">get updates & more</p>
                                <div className="mt-10 flex justify-between bg-white py-4 px-5 drop-shadow-[6px_6px_0px_rgba(119,128,161,0.3)] md:mt-16 lg:max-w-[445px]">
                                    <div className="flex items-center gap-2.5">
                                        <div>
                                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M24 10.4091C24 14.8446 24 17.0623 22.6527 18.4403C21.3054 19.8182 19.1369 19.8182 14.8 19.8182H10.2C5.86308 19.8182 3.69462 19.8182 2.34731 18.4403C1 17.0623 1 14.8446 1 10.4091C1 5.9736 1 3.75586 2.34731 2.37793C3.69462 1 5.86308 1 10.2 1H14.8C19.1369 1 21.3054 1 22.6527 2.37793C23.4038 3.14616 23.7362 4.17543 23.8833 5.70455"
                                                    stroke="#08111F"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M19.3999 5.70508L16.9172 7.82104C14.8051 9.62115 13.749 10.5212 12.4999 10.5212C11.7532 10.5212 11.0755 10.1996 10.1999 9.55627M5.59991 5.70508L6.63491 6.58718L7.66991 7.46928"
                                                    stroke="#08111F"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <input type="search" placeholder="your email" className="h-14 border-0 text-black outline-0" />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" className="btn rounded-none bg-secondary text-white">
                                            subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute -bottom-6 hidden w-full max-w-[430px] flex-1 ltr:-right-[15%] rtl:-left-[15%] sm:border-y-black md:block lg:-bottom-7 lg:max-w-[480px] ltr:lg:right-0 rtl:lg:left-0 xl:-bottom-8 xl:max-w-[577px] ltr:xl:right-40 rtl:xl:left-40 "
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img src="assets/images/realestate/newsletter.svg" className="rtl:rotate-y-180" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RealEstate;
