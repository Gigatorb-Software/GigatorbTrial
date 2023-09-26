import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import CountUp from 'react-countup';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Crypto = (props: any) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    // success chart

    const successChartOptions: any = {
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#12AF97'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    };

    const successChartSeries = [
        {
            data: [9, 36, 12, 59, 41, 66],
        },
    ];

    // danger chart
    const dangerChartOptions: any = {
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#FF0000'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    };

    const dangerChartSeries = [
        {
            data: [55, 41, 69, 20, 44, 19],
        },
    ];
    const feedbacks = [
        {
            id: 1,
            name: 'Sudo Sarkar',
            role: '',
            color:'',
            thumbnail: '/assets/images/Gallary/Sudo.jpeg',
            message:
                "I wanted to acknowledge that the TWN system looks really nice. Thank you for your dedication and such high level of motivation to deliver a quality solution to the client"
        },
        {
            id: 1,
            name: 'Shanta Sharma',
            role: '',
            color:'',
            thumbnail: '/assets/images/Gallary/Shanta.jpeg',
            message:
                "Thank you for your support , Client loved the solution"
        },
    ];

    return (
        <div>
            <Head>
                <title>Web Developmant | GigaTorb</title>
            </Head>
            <div className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20" />
                    <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" className="absolute right-0 -top-4" />
                    <div className="container">
                        <div className="relative flex flex-col items-center bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat lg:flex-row">
                            <div className="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                Expert Web <span className="italic text-primary">Development</span> Services
                                </h2>
                            </div>
                            <div>
                                <img 
                                    src="\assets\images\Gallary\Web-Designing-PNG-Pic.png"
                                    alt="crypto-banner"
                                    className="rtl:rotate-y-0 mx-auto h-[500px] w-full max-w-[560px]"
                                    data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                    data-aos-duration="1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pt-12">
                <div className="container">
                <div className="mx-auto mb-10 w-full max-w-[610px] space-y-5 text-center" data-aos="fade-down" data-aos-duration="1000">
                        
                        <h3 className="text-3xl font-extrabold text-primary dark:text-primary lg:text-[40px] lg:leading-[60px]">Our Services</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F7931A]">
                                       
                                    </Link>
                                    <h4 className="text-lg font-bold text-black dark:text-white">Expertise</h4>
                                </div>
                                <div>
                                   
                                </div>
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <p className="text-lg font-semibold">Our team of seasoned web developers is well-versed in the latest technologies and trends, ensuring that your website is built to industry standards and stands out from the competition</p>
                                
                                </div>
                              
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#345d9d]">
                                       
                                    </Link>
                                    <h4 className="text-lg font-bold text-black dark:text-white">Custom Solutions</h4>
                                   
                                </div>
                              
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <p className="text-lg font-semibold">
                                    We don't believe in one-size-fits-all solutions. We work closely with you to understand your goals and create a customized web development plan that aligns with your vision
                                    </p>
                                   
                                </div>
                              
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F3BA2F]">
                                      
                                    </Link>
                                    <h4 className="text-lg font-bold text-black dark:text-white">Responsive Design</h4>
                                   
                                </div>
                                <div>
                                  
                                </div>
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="flex items-center justify-between gap-2">
                                <div>
                                    <p className="text-lg font-semibold">In today's mobile-first world, responsive design is crucial. We ensure that your website looks and functions beautifully on all devices, providing a seamless user experience</p>
                                  
                                </div>
                               
                            </div>
                        </div>
                        <div className="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Link href="#" className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#53ae94]">
                                      
                                    </Link>
                                    <h4 className="text-lg font-bold text-black dark:text-white">E-Commerce Solutions</h4>
                                  
                                </div>
                                <div>
                                   
                                </div>
                            </div>
                            <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                            <div className="item-center flex justify-between gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold">If you're looking to sell products or services online, we have expertise in developing secure and user-friendly e-commerce websites that drive conversions</h3>
                                 
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-12 lg:pt-24">
                <div className="container">
                    <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
                        <div className="text-center ltr:md:text-left rtl:md:text-right">
                            <h6 className="mb-3 text-lg font-extrabold text-primary sm:mb-4">ABOUT US</h6>
                           
                            <p className="mt-[18px] max-w-[522px] text-lg font-semibold">
                            Welcome to <span className=" text-primary">Giga</span>Torb, your trusted partner in web development solutions. With years of experience and a passion for innovation, we specialize in crafting stunning and functional websites that meet your unique needs
                            </p>
                            <button type="button" className="btn mt-7 text-white">
                                Get Started
                            </button>
                        </div>
                        <div>
                            <img src="\assets\images\Gallary\534-5348813_software-development-company-png-transparent-png.png" className="w-full max-w-[550px] rtl:rotate-y-180" alt="crypto-about-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-20">
                <div className="container">
                    <div className="mx-auto mb-10 w-full max-w-[610px] space-y-5 text-center" data-aos="fade-down" data-aos-duration="1000">
                        
                        <h3 className="text-3xl font-extrabold text-primary dark:text-primary lg:text-[40px] lg:leading-[60px]">Our Services</h3>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        <div className="grid grid-cols-1 gap-5 text-center" data-aos="fade-right" data-aos-duration="1000">
                            <div className="mx-auto grid h-20 w-20 place-content-center">
                            <svg className="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.9054 8.10138H14.833C10.6615 8.10138 8.0459 11.0547 8.0459 15.2357V26.5146C8.0459 30.6957 10.6492 33.6491 14.833 33.6491H26.8038C30.9889 33.6491 33.5922 30.6957 33.5922 26.5146V21.0502"
                                        stroke="#47BDFF"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.2906 19.1332L26.4286 8.99531C27.6917 7.73366 29.7387 7.73366 31.0018 8.99531L32.6528 10.6463C33.9157 11.9093 33.9157 13.9578 32.6528 15.2194L22.466 25.4062C21.9138 25.9583 21.165 26.269 20.3835 26.269H15.3018L15.4292 21.141C15.4482 20.3867 15.7562 19.6678 16.2906 19.1332Z"
                                        stroke="#47BDFF"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M24.888 10.5616L31.0823 16.7559" stroke="#47BDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="space-y-2.5">
                            <h4 className="text-lg font-bold ">Website Design and Development</h4>
                                    <p className="mt-2.5 font-semibold">We create visually stunning and highly functional websites tailored to your business needs.</p>
                                 </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 text-center" data-aos="fade-right" data-aos-duration="1000">
                            <div className="mx-auto grid h-20 w-20 place-content-center">
                                <img src="/assets/images/online-payments/work-icon2.svg" alt="" />
                            </div>
                            <div className="space-y-2.5">
                            <h4 className="text-lg font-bold ">E-Commerce Development</h4>
                                    <p className="mt-2.5 font-semibold">We specialize in building secure and scalable e-commerce websites that drive sales and enhance user experiences</p>
                              </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 text-center" data-aos="fade-left" data-aos-duration="1000">
                            <div className="mx-auto grid h-20 w-20 place-content-center">
                                <img src="/assets/images/online-payments/work-icon3.svg" alt="" />
                            </div>
                            <div className="space-y-2.5">
                            <h4 className="text-lg font-bold ">Web Application Development</h4>
                                    <p className="mt-2.5 font-semibold">Need a custom web application? We have the skills to turn your ideas into reality..</p>
                                </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 text-center" data-aos="fade-left" data-aos-duration="1000">
                            <div className="mx-auto grid h-20 w-20 place-content-center">
                            <svg className="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M34.258 14.4234L33.3153 12.7876C32.5178 11.4033 30.7504 10.9259 29.3644 11.72C28.7046 12.1087 27.9173 12.219 27.1761 12.0265C26.435 11.8342 25.8008 11.3547 25.4135 10.6942C25.1643 10.2744 25.0303 9.79614 25.0253 9.30792C25.0477 8.52519 24.7525 7.76669 24.2066 7.2052C23.6608 6.64372 22.911 6.32707 22.1279 6.32739H20.2287C19.4615 6.32738 18.726 6.63308 18.1848 7.17684C17.6437 7.72061 17.3415 8.4576 17.3453 9.22474C17.3225 10.8086 16.0319 12.0807 14.4479 12.0805C13.9596 12.0755 13.4815 11.9416 13.0616 11.6923C11.6755 10.8981 9.90813 11.3756 9.11062 12.7598L8.09863 14.4234C7.30208 15.8058 7.77309 17.572 9.15221 18.3743C10.0487 18.8918 10.6009 19.8484 10.6009 20.8835C10.6009 21.9186 10.0487 22.8751 9.15221 23.3927C7.77484 24.1895 7.30332 25.9515 8.09863 27.3297L9.05517 28.9794C9.42884 29.6537 10.0558 30.1512 10.7972 30.3619C11.5387 30.5727 12.3337 30.4792 13.0061 30.1023C13.6671 29.7166 14.4548 29.611 15.1942 29.8088C15.9335 30.0066 16.5631 30.4916 16.9432 31.1559C17.1924 31.5757 17.3262 32.054 17.3314 32.5422C17.3314 34.1424 18.6286 35.4395 20.2287 35.4395H22.1279C23.7226 35.4395 25.0176 34.1508 25.0253 32.556C25.0216 31.7865 25.3257 31.0474 25.8698 30.5033C26.414 29.959 27.1531 29.655 27.9226 29.6587C28.4096 29.6718 28.8859 29.8051 29.309 30.0468C30.6914 30.8434 32.4576 30.3724 33.2599 28.9933L34.258 27.3297C34.6443 26.6666 34.7504 25.8768 34.5527 25.1352C34.3548 24.3936 33.8696 23.7615 33.2043 23.3788C32.5392 22.9961 32.054 22.364 31.8561 21.6224C31.6584 20.8809 31.7645 20.091 32.1508 19.4279C32.402 18.9892 32.7658 18.6256 33.2043 18.3743C34.5752 17.5725 35.0451 15.8165 34.258 14.4372V14.4234Z"
                                        stroke="#B476E5"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.1852 24.876C23.3902 24.876 25.1777 23.0885 25.1777 20.8835C25.1777 18.6784 23.3902 16.8909 21.1852 16.8909C18.9802 16.8909 17.1927 18.6784 17.1927 20.8835C17.1927 23.0885 18.9802 24.876 21.1852 24.876Z"
                                        stroke="#B476E5"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-2.5">
                            <h4 className="text-lg font-bold ">Maintenance and Support</h4>
                                    <p className="mt-2.5 font-semibold">We offer ongoing support and maintenance services to ensure your website remains up-to-date and secure.</p>
                                 </div>
                        </div>
                    </div>
                </div>
            </section>

        

            <section className="bg-black py-12 lg:py-24">
                <div className="bg-[url(/assets/images/crypto/background-img.png)] bg-cover bg-center bg-no-repeat">
                    <div className="container">
                        <div className="heading text-center">
                            <h6>Our Process</h6>
                            <h4 className="!text-white">You do the business, we’ll handle the money.</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:sm:border-r rtl:sm:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.7656 39.9469C41.7656 40.1702 41.8543 40.3843 42.0122 40.5421C42.17 40.7 42.3842 40.7887 42.6074 40.7887H47.3563C47.4942 40.7885 47.6299 40.7547 47.7516 40.6898C47.8732 40.6249 47.9772 40.5313 48.0541 40.4169C48.1311 40.3025 48.1788 40.171 48.193 40.0339C48.2073 39.8967 48.1876 39.7582 48.1357 39.6305C47.6363 38.3821 46.81 37.2913 45.7437 36.4723C44.6774 35.6533 43.4103 35.1364 42.0754 34.9758C41.9358 34.9589 41.7941 34.9773 41.6634 35.0293C41.5328 35.0813 41.4172 35.1652 41.3273 35.2734C41.2374 35.3815 41.176 35.5105 41.1488 35.6485C41.1216 35.7865 41.1293 35.9291 41.1714 36.0633C41.5654 37.3202 41.7657 38.6297 41.7656 39.9469Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M16.2911 35.9898C16.3316 35.8638 16.3418 35.7299 16.3208 35.5991C16.2999 35.4683 16.2483 35.3443 16.1704 35.2372C16.0925 35.13 15.9904 35.0428 15.8724 34.9826C15.7544 34.9224 15.6239 34.8908 15.4914 34.8906H15.4712C13.9632 34.8913 12.4899 35.3432 11.2408 36.1879C9.99161 37.0327 9.02365 38.2318 8.46148 39.631C8.40989 39.7588 8.39057 39.8974 8.40506 40.0344C8.41955 40.1714 8.46743 40.3028 8.54457 40.417C8.62171 40.5312 8.72566 40.6247 8.84739 40.6894C8.96905 40.754 9.10478 40.7877 9.24254 40.7876H14.8316C15.0548 40.7876 15.2688 40.6989 15.4267 40.5411C15.5845 40.3832 15.6732 40.1691 15.6732 39.9459C15.6726 38.6031 15.8811 37.2685 16.2911 35.9898Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M24.6457 29.5232C24.7113 29.5634 24.7645 29.6207 24.7997 29.689C24.835 29.7573 24.8509 29.8339 24.8457 29.9105C24.8405 29.9872 24.8144 30.061 24.7703 30.1239C24.7261 30.1867 24.6655 30.2364 24.5952 30.2673C22.6983 31.0772 21.081 32.4262 19.9438 34.147C18.8066 35.8676 18.1996 37.8844 18.1982 39.947C18.1982 40.1702 18.2869 40.3843 18.4448 40.5421C18.6026 40.7 18.8167 40.7886 19.0399 40.7886H38.3993C38.6225 40.7886 38.8366 40.7 38.9945 40.5421C39.1523 40.3843 39.241 40.1702 39.241 39.947C39.2375 37.8813 38.6266 35.8623 37.4844 34.1412C36.3422 32.4201 34.7191 31.0729 32.817 30.2673C32.7459 30.2364 32.6847 30.1866 32.64 30.1232C32.5953 30.0599 32.5689 29.9855 32.5637 29.9081C32.5585 29.8308 32.5746 29.7534 32.6104 29.6847C32.6462 29.6159 32.7002 29.5583 32.7666 29.5182C34.268 28.6264 35.4349 27.2659 36.0877 25.6462C36.7405 24.0264 36.843 22.237 36.3796 20.5533C35.9161 18.8695 34.9122 17.3847 33.5225 16.3272C32.1327 15.2697 30.434 14.698 28.6877 14.7002C26.9414 14.7024 25.2441 15.2783 23.857 16.3393C22.4699 17.4002 21.4698 18.8875 21.0105 20.5724C20.5512 22.2573 20.6582 24.0464 21.315 25.6645C21.9718 27.2826 23.1421 28.6401 24.6457 29.5282V29.5232ZM24.0902 22.67C24.0902 22.3517 24.1258 22.0344 24.1963 21.7239C24.2255 21.594 24.2852 21.4728 24.3703 21.3705C24.4555 21.2681 24.5637 21.1874 24.6861 21.135C24.8086 21.0825 24.9416 21.0599 25.0745 21.0689C25.2073 21.078 25.3362 21.1184 25.4504 21.1869C27.064 22.1583 28.9119 22.6711 30.7952 22.67C31.2877 22.6696 31.7795 22.633 32.2666 22.5606C32.3981 22.5409 32.5324 22.5527 32.6585 22.5949C32.7846 22.6372 32.8989 22.7086 32.992 22.8036C33.0852 22.8985 33.1545 23.0142 33.1943 23.1411C33.2341 23.2679 33.2433 23.4025 33.2211 23.5336C33.0071 24.6607 32.3802 25.6675 31.463 26.3567C30.5459 27.0459 29.4045 27.368 28.2624 27.26C27.1202 27.152 26.0595 26.6216 25.2878 25.7727C24.5161 24.9236 24.089 23.8173 24.0902 22.67Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M41.1266 33.2135C42.0932 33.2194 43.0377 32.9244 43.8292 32.3695C44.6206 31.8146 45.2198 31.0272 45.5438 30.1164C45.8677 29.2057 45.9003 28.2168 45.637 27.2868C45.3737 26.3567 44.8276 25.5315 44.0744 24.9257C43.3211 24.32 42.3981 23.9635 41.4331 23.9058C40.4682 23.8481 39.5093 24.092 38.6893 24.6037C37.8691 25.1154 37.2286 25.8695 36.8564 26.7616C36.4841 27.6537 36.3986 28.6394 36.6117 29.5823C36.848 30.6062 37.4216 31.5209 38.2405 32.1795C39.0594 32.8381 40.0758 33.2023 41.1266 33.2135Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M15.4712 33.2129C18.0279 33.2129 20.1006 31.1402 20.1006 28.5835C20.1006 26.0267 18.0279 23.9541 15.4712 23.9541C12.9144 23.9541 10.8418 26.0267 10.8418 28.5835C10.8418 31.1402 12.9144 33.2129 15.4712 33.2129Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M28.2989 28.5546C31.1994 28.5546 33.5508 26.2033 33.5508 23.3027C33.5508 20.4022 31.1994 18.0508 28.2989 18.0508C25.3983 18.0508 23.047 20.4022 23.047 23.3027C23.047 26.2033 25.3983 28.5546 28.2989 28.5546Z"
                                        fill="#47BDFF"
                                    />
                                </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Consultation</h4>
                                    <p className="mt-2.5 font-semibold">We start by understanding your business goals, target audience, and unique requirements.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:lg:border-r rtl:lg:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.8889 21.2501L19.6389 25.0001L25.8889 16.2501M20.8889 4.52344C17.1151 8.10716 12.0893 10.0727 6.88556 10.0001C6.22362 12.0167 5.88718 14.1259 5.88889 16.2484C5.88889 25.5684 12.2622 33.3984 20.8889 35.6201C29.5156 33.4001 35.8889 25.5701 35.8889 16.2501C35.8889 14.0668 35.5389 11.9651 34.8922 9.99844H34.6389C29.3122 9.99844 24.4722 7.91844 20.8889 4.52344Z"
                                            stroke="#47BDFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Design</h4>
                                    <p className="mt-2.5 font-semibold">Our designers create a visually appealing and user-friendly layout that aligns with your brand.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:sm:border-r rtl:sm:border-l ltr:lg:border-r-0 rtl:lg:border-l-0"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_15_96884)">
                                            <path
                                                d="M6.3697 11.9947L18.2664 6.81298C18.4627 6.72884 18.6738 6.68486 18.8874 6.68362C19.101 6.68238 19.3127 6.72392 19.5099 6.80578C19.7072 6.88764 19.8861 7.00816 20.036 7.16025C20.186 7.31234 20.304 7.49291 20.383 7.69132L28.5897 27.528C28.7585 27.9304 28.7634 28.3829 28.6034 28.7889C28.4433 29.1949 28.131 29.5223 27.733 29.7013L15.838 34.883C15.6416 34.9674 15.4303 35.0116 15.2166 35.013C15.0028 35.0143 14.7909 34.9729 14.5935 34.891C14.396 34.8091 14.2169 34.6885 14.0669 34.5363C13.9168 34.384 13.7988 34.2033 13.7197 34.0047L5.51303 14.1663C5.34467 13.7638 5.33998 13.3115 5.49997 12.9057C5.65996 12.4998 5.97199 12.1723 6.3697 11.993V11.9947Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M25.363 6.66602H27.0297C27.4717 6.66602 27.8957 6.84161 28.2082 7.15417C28.5208 7.46673 28.6964 7.89065 28.6964 8.33268V14.166"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M33.6964 10C34.1364 10.1867 34.563 10.3617 34.9764 10.525C35.3832 10.6976 35.7049 11.0248 35.8705 11.4346C36.0362 11.8443 36.0323 12.3031 35.8597 12.71L32.0297 21.6667"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_96884">
                                                <rect width="40" height="40" fill="white" transform="translate(0.363037)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Development</h4>
                                    <p className="mt-2.5 font-semibold">Our expert developers bring the design to life, using the latest technologies and best practices.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 lg:border-b-0 ltr:lg:border-r rtl:lg:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_15_96895)">
                                            <path
                                                d="M30 6.66602H10C7.23858 6.66602 5 8.90459 5 11.666V28.3327C5 31.0941 7.23858 33.3327 10 33.3327H30C32.7614 33.3327 35 31.0941 35 28.3327V11.666C35 8.90459 32.7614 6.66602 30 6.66602Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15 20.0007C16.841 20.0007 18.3334 18.5083 18.3334 16.6673C18.3334 14.8264 16.841 13.334 15 13.334C13.1591 13.334 11.6667 14.8264 11.6667 16.6673C11.6667 18.5083 13.1591 20.0007 15 20.0007Z"
                                                stroke="#47BDFF"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M25 13.334H28.3333" stroke="#47BDFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25 20H28.3333" stroke="#47BDFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.6667 26.666H28.3334" stroke="#47BDFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_96895">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Testing</h4>
                                    <p className="mt-2.5 font-semibold">We rigorously test your website to ensure it functions flawlessly across all devices and browsers.</p>
                                </div>
                            </div>
                            <div
                                className="flex gap-[15px] border-b border-dashed px-4 py-5 sm:border-b-0 sm:py-9 ltr:sm:border-r rtl:sm:border-l"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="#47BDFF" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_132_8975)"><path opacity="0.3" d="M9.26504 23.1907C8.86698 22.5979 9.34237 21.8701 10.0565 21.8701H15.3123C16.0264 21.8701 16.5018 22.5979 16.1037 23.1907C15.3466 24.3185 14.3 25.2316 13.0656 25.8283C12.8248 25.9448 12.544 25.9448 12.3032 25.8283C11.0688 25.2316 10.0222 24.3185 9.26504 23.1907Z" fill="#47BDFF"></path><path d="M19.7602 15.3657C19.7602 15.6093 19.8491 15.8444 20.0102 16.0271L21.8688 18.1348C22.0299 18.3175 22.1188 18.5527 22.1188 18.7962V19.6908C22.1188 20.2431 21.6711 20.6908 21.1188 20.6908H4.25C3.69772 20.6908 3.25 20.2431 3.25 19.6908V18.7962C3.25 18.5527 3.33888 18.3175 3.49997 18.1348L5.35863 16.0271C5.51971 15.8444 5.6086 15.6093 5.6086 15.3657V8.89781C5.6086 4.89015 8.41975 1.46516 12.3859 0.0983C12.5792 0.0316815 12.7896 0.0316814 12.9829 0.0982998C16.949 1.46516 19.7602 4.89015 19.7602 8.89781V15.3657ZM12.6844 11.2564C13.3099 11.2564 13.9098 11.0079 14.3522 10.5656C14.7945 10.1233 15.043 9.52335 15.043 8.89781C15.043 8.27227 14.7945 7.67235 14.3522 7.23003C13.9098 6.78771 13.3099 6.53921 12.6844 6.53921C12.0589 6.53921 11.4589 6.78771 11.0166 7.23003C10.5743 7.67235 10.3258 8.27227 10.3258 8.89781C10.3258 9.52335 10.5743 10.1233 11.0166 10.5656C11.4589 11.0079 12.0589 11.2564 12.6844 11.2564Z" fill="#47BDFF"></path></g><defs><clipPath id="clip0_132_8975"><rect width="41" height="40" fill="#47BDFF"></rect></clipPath></defs></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Launch</h4>
                                    <p className="mt-2.5 font-semibold">Once everything is perfect, we launch your website, making it accessible to your audience.</p>
                                </div>
                            </div>
                            <div className="flex gap-[15px] px-4 py-5 sm:py-9" data-aos="fade-up" data-aos-duration="1000">
                                <div>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.6822 11.1466L31.4947 7.35783C31.2046 6.85537 30.7268 6.48878 30.1665 6.33863C29.606 6.18848 29.009 6.26709 28.5066 6.55717L26.9578 7.45191C25.4683 6.11519 23.7148 5.10614 21.8106 4.49V2.6875C21.8106 2.10734 21.5801 1.55091 21.1699 1.14071C20.7597 0.73044 20.2033 0.5 19.6231 0.5H15.2481C14.668 0.5 14.1115 0.73044 13.7013 1.14071C13.2911 1.55091 13.0606 2.10734 13.0606 2.6875V4.48342C11.1508 5.09487 9.3932 6.10602 7.90472 7.44967L6.36031 6.55717C5.85869 6.26989 5.26376 6.19282 4.70544 6.34283C4.14719 6.49284 3.67098 6.85775 3.38097 7.35783L1.19347 11.1466C0.903388 11.649 0.824779 12.2461 0.974929 12.8064C1.12508 13.3668 1.49167 13.8446 1.99406 14.1347L3.55156 15.0359C3.13149 16.9919 3.13149 19.0147 3.55156 20.9706L1.99406 21.8697C1.49167 22.1597 1.12508 22.6376 0.974929 23.1979C0.824779 23.7583 0.903388 24.3554 1.19347 24.8578L3.38097 28.6466C3.67105 29.149 4.1488 29.5156 4.70922 29.6657C5.26957 29.8159 5.86667 29.7372 6.36906 29.4472L7.91781 28.5525C9.40734 29.892 11.1628 30.902 13.0694 31.5166V33.3125C13.0694 33.8927 13.2998 34.4491 13.7101 34.8593C14.1203 35.2696 14.6767 35.5 15.2569 35.5H19.6319C20.212 35.5 20.7684 35.2696 21.1787 34.8593C21.5889 34.4491 21.8194 33.8927 21.8194 33.3125V31.5187C23.7277 30.9067 25.4844 29.8964 26.9731 28.5547L28.5153 29.4472C29.0178 29.7372 29.6148 29.8159 30.1752 29.6657C30.7356 29.5156 31.2133 29.149 31.5035 28.6466L33.691 24.8578C33.981 24.3554 34.0596 23.7583 33.9094 23.1979C33.7594 22.6376 33.3927 22.1597 32.8903 21.8697L31.335 20.9728C31.7562 19.0155 31.7562 16.991 31.335 15.0338L32.8903 14.1347C33.3912 13.8431 33.756 13.3647 33.9045 12.8045C34.0529 12.2442 33.973 11.6479 33.6822 11.1466ZM17.4356 25.6562C15.9214 25.6562 14.4411 25.2072 13.182 24.3659C11.923 23.5247 10.9417 22.3289 10.3622 20.9299C9.78268 19.5309 9.63106 17.9915 9.92646 16.5063C10.2219 15.0211 10.9511 13.657 12.0218 12.5862C13.0926 11.5155 14.4568 10.7863 15.942 10.4909C17.4272 10.1954 18.9665 10.347 20.3656 10.9266C21.7646 11.506 22.9603 12.4874 23.8016 13.7464C24.6428 15.0055 25.0919 16.4858 25.0919 18C25.0919 20.0306 24.2852 21.978 22.8494 23.4138C21.4136 24.8496 19.4662 25.6562 17.4356 25.6562Z"
                                        fill="#47BDFF"
                                    />
                                </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Maintenance</h4>
                                    <p className="mt-2.5 font-semibold">We offer ongoing maintenance and updates to keep your website secure and optimized.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-14 uppercase italic dark:bg-gray-dark md:py-20">
                <div className="container">
                    <div className="font-semibold">
                        {/* <img src="/assets/images/gym/06.svg" alt="" data-aos="fade-down" data-aos-duration="1500" /> */}
                        <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                            <span className="text-black dark:text-white">OUR </span>
                            <span className="text-border-gray tracking-wider">Web</span>
                            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">Developers</span>
                        </h2>
                      
                    </div>
                    <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-.png" alt="Developers" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0  bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white">Neeraj Sharma</h3>
                                <span className="text-sm font-bold">Full Stack (MERN)</span>
                            </div>
                        </div>
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-.png" alt="Developers" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0  bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white">Keshav Sharma</h3>
                                <span className="text-sm font-bold">Full Stack (MEAN)</span>
                            </div>
                        </div>
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-.png" alt="Developers" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0  bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white"></h3>
                                <h3 className="font-black text-white">Shubham Chouhan</h3>
                                <span className="text-sm font-bold">Full Stack (MERN)</span>
                            </div>
                        </div>
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-.png" alt="Developers" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0  bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white">Neeraj Yaduvanshi</h3>
                                <span className="text-sm font-bold">Full Stack (MERN)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial type="marketing" feedbacks={feedbacks} />


            <section className="py-12 dark:bg-gray-dark lg:py-24">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                            <h6>Get In Touch.</h6>
                            <h4 className="sm:!leading-[50px]">Ready to Get Started?</h4>
                            <img
                                src="/assets/images/form-img.png"
                                alt="form-img"
                                className="mx-auto"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            />
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        Full Name
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        Email Address
                                    </label>
                                    <svg
                                        width="22"
                                        height="21"
                                        viewBox="0 0 22 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        Mobile Number
                                    </label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        City
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <input
                                    type="text"
                                    name="message"
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                    Message
                                </label>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="button" className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Crypto;
