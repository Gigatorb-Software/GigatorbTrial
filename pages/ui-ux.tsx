import { useEffect, useState } from 'react';
import Link from 'next/link';
import Testimonial from '../components/Testimonial';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const Marketing = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
        {
            id: 1,
            name: 'Nilkanth',
            role: "",
            color:'',
            thumbnail: '/assets/images/Gallary/Nilkanth.jpeg',
            message:
                'An amazing services. We have a great relationship with Gigatorb, great & phenomenal experience.',
        },
    ];

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Ui/Ux Design | Gigatorb</title>
            </Head>
            <div className="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                    <img
                        src="/assets/images/banner-rightIcon.png"
                        alt="banner-rightIcon"
                        className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
                    />
                </div>
                <div className="container relative bg-[url(/assets/images/world-map.png)] bg-cover">
                    <div className="flex flex-col items-center gap-7 lg:flex-row">
                        <div className="flex-1 pb-14 pt-14 text-white ltr:text-center rtl:text-center lg:max-w-[558px] lg:pb-52 ltr:lg:text-left rtl:lg:text-right xl:pt-36">
                            <h2 className="text-3xl font-extrabold sm:text-5xl lg:text-[70px] lg:leading-[89px]">
                            Nurturing Your <span className="text-primary">UI/UX</span><span className="text-secondary"> Design</span>  
                              
                            </h2>
                            <p className="mt-7 text-lg font-semibold">We believe that the power of marketing & SEO performance helps businesses to grow.</p>
                            <button type="button" className="btn mx-auto mt-10 block bg-white py-[18px] px-8 rtl:ml-auto lg:mx-0">
                                Read More
                            </button>
                        </div>
                        <div className="mb-10 w-full max-w-[500px] flex-none lg:mb-0" data-aos="fade-left" data-aos-duration="1000">
                            <img src="\assets\images\Gallary\services-design-page.png" className="rtl:rotate-y-180 xl:ml-[100px]" alt="" />
                        </div>
                    </div>
                </div>
            </div>

         
            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-12 dark:from-white/5 md:py-20">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Our UI/UX Design Services</h6>
                        <h4>High-Impact UI/UX Services for Your Business Growth.</h4>
                    </div>

                    <div
                        className="mt-24 grid grid-cols-1 gap-7 space-y-10 text-black ltr:text-right rtl:text-left sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="group relative rounded-3xl border-2 border-transparent bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                            <Link
                                href="#"
                                className="absolute -top-[50px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-secondary text-white shadow-[0_15px_30px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_15px_30px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4"
                            >
                               <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.8344 40.6688C28.1318 40.6688 35.6688 33.1318 35.6688 23.8344C35.6688 14.537 28.1318 7 18.8344 7C9.53703 7 2 14.537 2 23.8344C2 33.1318 9.53703 40.6688 18.8344 40.6688Z"
                                            fill="currentColor"
                                            fillOpacity="0.2"
                                            stroke="#ffffff"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M30.5432 36.4171L37.1433 43" stroke="#66DA78" strokeWidth="3" />
                                        <path
                                            d="M30.5432 36.4171L37.1433 43"
                                            stroke="#ffffff"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                            </Link>
                            <h3 className="mt-[86px] text-[22px] font-extrabold dark:text-white dark:group-hover:text-black">User Research</h3>
                            <p className="text=lg mt-4 font-semibold text-gray dark:group-hover:text-black">
                            We start by understanding your target audience and their needs through in-depth user research.
                            </p>
                            <Link
                                href="/services-detail"
                                className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black group-hover:text-white ltr:float-right rtl:float-left dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="group relative rounded-3xl border-2 border-transparent bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                            <Link
                                href="#"
                                className="absolute -top-[50px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-secondary text-white shadow-[0_15px_30px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_15px_30px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4"
                            >
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="5" width="10" height="10" fill="currentColor" />
    
 
    <rect x="7" y="20" width="10" height="10" fill="currentColor" />
    
    <rect x="33" y="20" width="10" height="10" fill="currentColor" />

    <rect x="0" y="35" width="10" height="10" fill="currentColor" />
    
   
   

    <rect x="12" y="35" width="10" height="10" fill="currentColor" />
  
    <rect x="28" y="35" width="10" height="10" fill="currentColor" />
    
 
    <rect x="40" y="35" width="10" height="10" fill="currentColor" />
</svg>
                            </Link>
                            <h3 className="mt-[86px] text-[22px] font-extrabold dark:text-white dark:group-hover:text-black">Information Architecture</h3>
                            <p className="text=lg mt-4 font-semibold text-gray dark:group-hover:text-black">
                            We craft a logical and user-friendly information structure to ensure a smooth user journey
                            </p>
                            <Link
                                href="/services-detail"
                                className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black group-hover:text-white ltr:float-right rtl:float-left dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="group relative rounded-3xl border-2 border-transparent bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary sm:!mt-10 lg:!mt-0">
                            <Link
                                href="#"
                                className="absolute -top-[50px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-secondary text-white shadow-[0_15px_30px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_15px_30px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4"
                            >
                                 <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.4"
                                        d="M47.6663 16.9213V32.8463C47.038 32.543 46.3447 32.3263 45.5647 32.1963L44.893 32.088L44.3297 30.918C43.138 28.4913 41.188 27.083 38.9997 27.083C36.8113 27.083 34.8614 28.4913 33.6697 30.918L33.0847 32.088L32.4347 32.1963C29.8563 32.6297 27.993 34.0597 27.3213 36.0963C26.6713 38.1547 27.343 40.408 29.1847 42.2713L29.8563 42.943L29.7913 43.203C29.358 45.1313 29.5314 46.6047 29.943 47.6663H16.9213C9.03467 47.6663 4.33301 42.9647 4.33301 35.078V16.9213C4.33301 9.03468 9.03467 4.33301 16.9213 4.33301H35.078C42.9647 4.33301 47.6663 9.03468 47.6663 16.9213Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M41.4271 32.3701L42.1205 33.7785C42.4671 34.4718 43.3555 35.1218 44.0921 35.2518L45.0238 35.4035C47.8621 35.8801 48.5121 37.9601 46.4971 39.9968L45.6304 40.8635C45.0454 41.4485 44.7421 42.5751 44.9155 43.3984L45.0238 43.9184C45.8038 47.3418 43.9838 48.6634 41.0154 46.8651L40.3871 46.4751C39.6288 46.0201 38.3721 46.0201 37.6137 46.4751L36.9855 46.8651C33.9955 48.6634 32.1971 47.3418 32.9771 43.9184L33.0854 43.3984C33.2588 42.5968 32.9555 41.4485 32.3705 40.8635L31.5038 39.9968C29.4888 37.9385 30.1388 35.8801 32.9771 35.4035L33.9088 35.2518C34.6671 35.1218 35.5338 34.4718 35.8804 33.7785L36.5738 32.3701C37.9171 29.6618 40.0838 29.6618 41.4271 32.3701Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M34.9472 17.1542C35.6565 17.7041 35.7858 18.7248 35.236 19.4341L30.2213 25.9032C28.9324 27.5332 26.556 27.8305 24.898 26.5494L24.8867 26.5407L20.9292 23.4264C20.6847 23.2407 20.3436 23.287 20.158 23.5265C20.1578 23.5267 20.1581 23.5263 20.158 23.5265L15.0023 30.2201C14.4547 30.9312 13.4343 31.0636 12.7233 30.516C12.0123 29.9683 11.8799 28.948 12.4275 28.237L17.5858 21.54C18.8726 19.8747 21.2585 19.5737 22.9202 20.8577L22.9315 20.8665L26.8891 23.9807C27.1362 24.1683 27.4843 24.12 27.6687 23.8914L32.6673 17.443C33.2172 16.7337 34.2379 16.6044 34.9472 17.1542Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </Link>
                            <h3 className="mt-[86px] text-[22px] font-extrabold dark:text-white dark:group-hover:text-black">Wireframing and Prototyping</h3>
                            <p className="text=lg mt-4 font-semibold text-gray dark:group-hover:text-black">
                            Our wireframes and prototypes provide a clear visual roadmap of your project's user interface
                            </p>
                            <Link
                                href="/services-detail"
                                className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black group-hover:text-white ltr:float-right rtl:float-left dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

          
           

         

            <section className="bg-gradient-to-b from-transparent to-white/[55%] py-10 dark:bg-gradient-to-t dark:from-white/5 dark:to-transparent lg:py-20">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Our Process </h6>
                        <h4>Our creative team is dedicated to pushing the boundaries of design, delivering visually striking and memorable user interfaces</h4>
                    </div>
                    <div
                        className="grid grid-cols-1 justify-between gap-7 ltr:text-right rtl:text-left md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Discovery and Research</h3>
                                <p className="mt-4 text-lg font-semibold">
                                We dive deep into your project, analyzing market trends and user preferences to inform our design decisions                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.6822 11.1466L31.4947 7.35783C31.2046 6.85537 30.7268 6.48878 30.1665 6.33863C29.606 6.18848 29.009 6.26709 28.5066 6.55717L26.9578 7.45191C25.4683 6.11519 23.7148 5.10614 21.8106 4.49V2.6875C21.8106 2.10734 21.5801 1.55091 21.1699 1.14071C20.7597 0.73044 20.2033 0.5 19.6231 0.5H15.2481C14.668 0.5 14.1115 0.73044 13.7013 1.14071C13.2911 1.55091 13.0606 2.10734 13.0606 2.6875V4.48342C11.1508 5.09487 9.3932 6.10602 7.90472 7.44967L6.36031 6.55717C5.85869 6.26989 5.26376 6.19282 4.70544 6.34283C4.14719 6.49284 3.67098 6.85775 3.38097 7.35783L1.19347 11.1466C0.903388 11.649 0.824779 12.2461 0.974929 12.8064C1.12508 13.3668 1.49167 13.8446 1.99406 14.1347L3.55156 15.0359C3.13149 16.9919 3.13149 19.0147 3.55156 20.9706L1.99406 21.8697C1.49167 22.1597 1.12508 22.6376 0.974929 23.1979C0.824779 23.7583 0.903388 24.3554 1.19347 24.8578L3.38097 28.6466C3.67105 29.149 4.1488 29.5156 4.70922 29.6657C5.26957 29.8159 5.86667 29.7372 6.36906 29.4472L7.91781 28.5525C9.40734 29.892 11.1628 30.902 13.0694 31.5166V33.3125C13.0694 33.8927 13.2998 34.4491 13.7101 34.8593C14.1203 35.2696 14.6767 35.5 15.2569 35.5H19.6319C20.212 35.5 20.7684 35.2696 21.1787 34.8593C21.5889 34.4491 21.8194 33.8927 21.8194 33.3125V31.5187C23.7277 30.9067 25.4844 29.8964 26.9731 28.5547L28.5153 29.4472C29.0178 29.7372 29.6148 29.8159 30.1752 29.6657C30.7356 29.5156 31.2133 29.149 31.5035 28.6466L33.691 24.8578C33.981 24.3554 34.0596 23.7583 33.9094 23.1979C33.7594 22.6376 33.3927 22.1597 32.8903 21.8697L31.335 20.9728C31.7562 19.0155 31.7562 16.991 31.335 15.0338L32.8903 14.1347C33.3912 13.8431 33.756 13.3647 33.9045 12.8045C34.0529 12.2442 33.973 11.6479 33.6822 11.1466ZM17.4356 25.6562C15.9214 25.6562 14.4411 25.2072 13.182 24.3659C11.923 23.5247 10.9417 22.3289 10.3622 20.9299C9.78268 19.5309 9.63106 17.9915 9.92646 16.5063C10.2219 15.0211 10.9511 13.657 12.0218 12.5862C13.0926 11.5155 14.4568 10.7863 15.942 10.4909C17.4272 10.1954 18.9665 10.347 20.3656 10.9266C21.7646 11.506 22.9603 12.4874 23.8016 13.7464C24.6428 15.0055 25.0919 16.4858 25.0919 18C25.0919 20.0306 24.2852 21.978 22.8494 23.4138C21.4136 24.8496 19.4662 25.6562 17.4356 25.6562Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-secondary">Design and Prototyping</h3>
                                <p className="mt-4 text-lg font-semibold">
                                Our designers create wireframes and prototypes that bring your project's vision to life
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.8133 0.821289C13.6502 0.821289 10.5582 1.75924 7.92817 3.51658C5.29817 5.27392 3.2483 7.77167 2.03784 10.694C0.827388 13.6163 0.51066 16.8319 1.12771 19.9343C1.74483 23.0365 3.26798 25.8862 5.50469 28.1228C7.74133 30.3596 10.591 31.8827 13.6933 32.4998C16.7956 33.1169 20.0112 32.8001 22.9335 31.5897C25.8559 30.3792 28.3536 28.3294 30.111 25.6994C31.8683 23.0694 32.8062 19.9773 32.8062 16.8142C32.8013 12.5741 31.1147 8.50915 28.1166 5.51096C25.1184 2.51278 21.0534 0.826226 16.8133 0.821289ZM26.0453 11.7498L16.9226 24.1296C16.8149 24.2725 16.6798 24.3925 16.5253 24.4827C16.3707 24.5728 16.1997 24.6312 16.0222 24.6545C15.8449 24.6778 15.6646 24.6656 15.4919 24.6185C15.3193 24.5714 15.1578 24.4904 15.0168 24.3802L8.50238 19.1718C8.36568 19.0624 8.25185 18.9272 8.16744 18.7738C8.08302 18.6204 8.02962 18.4519 8.01036 18.278C7.97135 17.9265 8.07356 17.5741 8.29448 17.2979C8.51539 17.0219 8.83691 16.8449 9.18834 16.8059C9.36232 16.7867 9.53844 16.8018 9.70658 16.8506C9.87471 16.8993 10.0316 16.9807 10.1683 17.09L15.6005 21.4361L23.8995 10.1731C23.9994 10.0232 24.1287 9.89511 24.2795 9.79658C24.4303 9.69798 24.5996 9.63101 24.777 9.59972C24.9544 9.56843 25.1363 9.57344 25.3118 9.6144C25.4873 9.65542 25.6525 9.73156 25.7977 9.83823C25.9429 9.94489 26.065 10.0799 26.1565 10.2351C26.248 10.3903 26.3071 10.5624 26.3303 10.7411C26.3535 10.9198 26.3401 11.1012 26.2911 11.2746C26.2421 11.448 26.1585 11.6096 26.0453 11.7498Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-secondary">Testing and Refinement</h3>
                                <p className="mt-4 text-lg font-semibold">
                                We rigorously test our designs to ensure they meet your project's goals and user needs                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
                                <svg width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    
                                <path d="M24.398 22.1968C24.8033 22.1968 25.2086 22.0721 25.5827 21.8297L18.398 14.8255C17.3672 15.7867 15.961 16.3372 14.5186 16.3372C13.0763 16.3372 11.6702 15.7867 10.6394 14.8255L3.45465 21.8297C3.82871 22.0721 4.23397 22.1968 4.63924 22.1968H24.398Z" fill="currentcolor" />
                                <line x1="14.5" y1="10" x2="14.5" y2="12" stroke="currentColor" stroke-width="9" stroke-linecap="round" />
                                <polygon points="9,7  14,1 20,7" fill="currentColor" />

 
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Delivery and Launch</h3>
                                <p className="mt-4 text-lg font-semibold">
                                Once the design is perfected, we assist in the implementation and launch of your user-friendly digital product
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.7656 39.9469C41.7656 40.1702 41.8543 40.3843 42.0122 40.5421C42.17 40.7 42.3842 40.7887 42.6074 40.7887H47.3563C47.4942 40.7885 47.6299 40.7547 47.7516 40.6898C47.8732 40.6249 47.9772 40.5313 48.0541 40.4169C48.1311 40.3025 48.1788 40.171 48.193 40.0339C48.2073 39.8967 48.1876 39.7582 48.1357 39.6305C47.6363 38.3821 46.81 37.2913 45.7437 36.4723C44.6774 35.6533 43.4103 35.1364 42.0754 34.9758C41.9358 34.9589 41.7941 34.9773 41.6634 35.0293C41.5328 35.0813 41.4172 35.1652 41.3273 35.2734C41.2374 35.3815 41.176 35.5105 41.1488 35.6485C41.1216 35.7865 41.1293 35.9291 41.1714 36.0633C41.5654 37.3202 41.7657 38.6297 41.7656 39.9469Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M16.2911 35.9898C16.3316 35.8638 16.3418 35.7299 16.3208 35.5991C16.2999 35.4683 16.2483 35.3443 16.1704 35.2372C16.0925 35.13 15.9904 35.0428 15.8724 34.9826C15.7544 34.9224 15.6239 34.8908 15.4914 34.8906H15.4712C13.9632 34.8913 12.4899 35.3432 11.2408 36.1879C9.99161 37.0327 9.02365 38.2318 8.46148 39.631C8.40989 39.7588 8.39057 39.8974 8.40506 40.0344C8.41955 40.1714 8.46743 40.3028 8.54457 40.417C8.62171 40.5312 8.72566 40.6247 8.84739 40.6894C8.96905 40.754 9.10478 40.7877 9.24254 40.7876H14.8316C15.0548 40.7876 15.2688 40.6989 15.4267 40.5411C15.5845 40.3832 15.6732 40.1691 15.6732 39.9459C15.6726 38.6031 15.8811 37.2685 16.2911 35.9898Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M24.6457 29.5232C24.7113 29.5634 24.7645 29.6207 24.7997 29.689C24.835 29.7573 24.8509 29.8339 24.8457 29.9105C24.8405 29.9872 24.8144 30.061 24.7703 30.1239C24.7261 30.1867 24.6655 30.2364 24.5952 30.2673C22.6983 31.0772 21.081 32.4262 19.9438 34.147C18.8066 35.8676 18.1996 37.8844 18.1982 39.947C18.1982 40.1702 18.2869 40.3843 18.4448 40.5421C18.6026 40.7 18.8167 40.7886 19.0399 40.7886H38.3993C38.6225 40.7886 38.8366 40.7 38.9945 40.5421C39.1523 40.3843 39.241 40.1702 39.241 39.947C39.2375 37.8813 38.6266 35.8623 37.4844 34.1412C36.3422 32.4201 34.7191 31.0729 32.817 30.2673C32.7459 30.2364 32.6847 30.1866 32.64 30.1232C32.5953 30.0599 32.5689 29.9855 32.5637 29.9081C32.5585 29.8308 32.5746 29.7534 32.6104 29.6847C32.6462 29.6159 32.7002 29.5583 32.7666 29.5182C34.268 28.6264 35.4349 27.2659 36.0877 25.6462C36.7405 24.0264 36.843 22.237 36.3796 20.5533C35.9161 18.8695 34.9122 17.3847 33.5225 16.3272C32.1327 15.2697 30.434 14.698 28.6877 14.7002C26.9414 14.7024 25.2441 15.2783 23.857 16.3393C22.4699 17.4002 21.4698 18.8875 21.0105 20.5724C20.5512 22.2573 20.6582 24.0464 21.315 25.6645C21.9718 27.2826 23.1421 28.6401 24.6457 29.5282V29.5232ZM24.0902 22.67C24.0902 22.3517 24.1258 22.0344 24.1963 21.7239C24.2255 21.594 24.2852 21.4728 24.3703 21.3705C24.4555 21.2681 24.5637 21.1874 24.6861 21.135C24.8086 21.0825 24.9416 21.0599 25.0745 21.0689C25.2073 21.078 25.3362 21.1184 25.4504 21.1869C27.064 22.1583 28.9119 22.6711 30.7952 22.67C31.2877 22.6696 31.7795 22.633 32.2666 22.5606C32.3981 22.5409 32.5324 22.5527 32.6585 22.5949C32.7846 22.6372 32.8989 22.7086 32.992 22.8036C33.0852 22.8985 33.1545 23.0142 33.1943 23.1411C33.2341 23.2679 33.2433 23.4025 33.2211 23.5336C33.0071 24.6607 32.3802 25.6675 31.463 26.3567C30.5459 27.0459 29.4045 27.368 28.2624 27.26C27.1202 27.152 26.0595 26.6216 25.2878 25.7727C24.5161 24.9236 24.089 23.8173 24.0902 22.67Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M41.1266 33.2135C42.0932 33.2194 43.0377 32.9244 43.8292 32.3695C44.6206 31.8146 45.2198 31.0272 45.5438 30.1164C45.8677 29.2057 45.9003 28.2168 45.637 27.2868C45.3737 26.3567 44.8276 25.5315 44.0744 24.9257C43.3211 24.32 42.3981 23.9635 41.4331 23.9058C40.4682 23.8481 39.5093 24.092 38.6893 24.6037C37.8691 25.1154 37.2286 25.8695 36.8564 26.7616C36.4841 27.6537 36.3986 28.6394 36.6117 29.5823C36.848 30.6062 37.4216 31.5209 38.2405 32.1795C39.0594 32.8381 40.0758 33.2023 41.1266 33.2135Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M15.4712 33.2129C18.0279 33.2129 20.1006 31.1402 20.1006 28.5835C20.1006 26.0267 18.0279 23.9541 15.4712 23.9541C12.9144 23.9541 10.8418 26.0267 10.8418 28.5835C10.8418 31.1402 12.9144 33.2129 15.4712 33.2129Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M28.2989 28.5546C31.1994 28.5546 33.5508 26.2033 33.5508 23.3027C33.5508 20.4022 31.1994 18.0508 28.2989 18.0508C25.3983 18.0508 23.047 20.4022 23.047 23.3027C23.047 26.2033 25.3983 28.5546 28.2989 28.5546Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="relative overflow-hidden bg-black py-12 lg:py-24">
                <div className="absolute top-0 ltr:right-0 rtl:left-0 rtl:rotate-y-180">
                    <svg width="758" height="741" viewBox="0 0 758 741" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.03">
                            <ellipse
                                opacity="0.1"
                                cx="752"
                                cy="370.646"
                                rx="750"
                                ry="749.646"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.1"
                                d="M1443.13 370.646C1443.13 752.153 1133.7 1061.43 752 1061.43C370.296 1061.43 60.8655 752.153 60.8655 370.646C60.8655 -10.8606 370.296 -320.134 752 -320.134C1133.7 -320.134 1443.13 -10.8606 1443.13 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.2"
                                cx="752"
                                cy="370.646"
                                rx="634.561"
                                ry="634.207"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.3"
                                d="M1328.4 370.646C1328.4 688.789 1070.34 946.696 752 946.696C433.66 946.696 175.596 688.789 175.596 370.646C175.596 52.5037 433.66 -205.403 752 -205.403C1070.34 -205.403 1328.4 52.5037 1328.4 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.4"
                                cx="752"
                                cy="370.646"
                                rx="519.83"
                                ry="519.476"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.5"
                                d="M1211.55 370.646C1211.55 624.251 1005.8 829.84 752 829.84C498.197 829.84 292.452 624.251 292.452 370.646C292.452 117.041 498.197 -88.5479 752 -88.5479C1005.8 -88.5479 1211.55 117.041 1211.55 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <path
                                opacity="0.6"
                                d="M1155.6 370.646C1155.6 593.351 974.903 773.891 752 773.891C529.097 773.891 348.401 593.351 348.401 370.646C348.401 147.942 529.097 -32.5986 752 -32.5986C974.903 -32.5986 1155.6 147.942 1155.6 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.7"
                                cx="752"
                                cy="370.646"
                                rx="350.567"
                                ry="350.212"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                opacity="0.8"
                                d="M1040.16 370.647C1040.16 529.596 911.148 658.453 752 658.453C592.852 658.453 463.84 529.596 463.84 370.647C463.84 211.698 592.852 82.8408 752 82.8408C911.148 82.8408 1040.16 211.698 1040.16 370.647Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                opacity="0.9"
                                cx="752"
                                cy="370.646"
                                rx="223.088"
                                ry="222.734"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                            <path
                                d="M909.848 370.646C909.848 457.624 839.18 528.14 752 528.14C664.82 528.14 594.152 457.624 594.152 370.646C594.152 283.667 664.82 213.151 752 213.151C839.18 213.151 909.848 283.667 909.848 370.646Z"
                                stroke="white"
                                strokeWidth="3"
                            />
                            <ellipse
                                cx="752"
                                cy="370.646"
                                rx="106.941"
                                ry="106.586"
                                stroke="white"
                                strokeWidth="3"
                                strokeMiterlimit="4.62023"
                                strokeLinecap="round"
                                strokeDasharray="35 50 15 15"
                            />
                        </g>
                    </svg>
                </div>
                <div className="container relative">
                    <div className="heading overflow-hidden !pb-0 text-center">
                        <h6>Testimonial</h6>
                        <h4 className="!text-white">Feedback from our clients</h4>
                    </div>
                    <Testimonial type="marketing" feedbacks={feedbacks}></Testimonial>
                </div>
            </section>

            <section className="py-14 dark:bg-gray-dark lg:py-[100px]">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                            <h6>Get In Touch.</h6>
                            <h4 className="sm:!leading-[50px]">Ready to Get Started?</h4>
                            <div className="block dark:hidden">
                                <svg className="mx-auto" width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M256.296 146.855L206.276 143.116C201.431 142.749 196.568 143.55 192.098 145.453L178.792 151.124C177.003 154.373 174.804 157.378 172.249 160.067C165.83 166.922 141.214 179.667 128.22 182.346C125.158 182.891 122.003 182.34 119.308 180.788C113.421 185.512 107.253 189.872 100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L194.227 193.287L186.343 212.201C186.561 223.014 186.623 237.191 185.907 246.641C194.356 249.214 203.368 249.301 211.865 246.889C215.26 223.83 217.846 187.435 209.059 173.694L252.061 173.289C257.48 163.529 257.002 157.979 256.296 146.855Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.752 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.834 109.557L171.664 136.697"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.752 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.834 109.557L171.664 136.697C172.44 139.559 174.524 143.397 176.4 133.457Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C270.787 157.817 265.722 165.614 259.415 172.345C262.874 172.874 266.332 173.657 269.293 174.121C272.376 172.776 275.267 171.028 277.889 168.92C286.089 162.314 302.981 154.119 306.681 149.445C299.982 148.476 283.592 149.13 274.372 149.317Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C202.353 262.597 194.364 257.828 187.399 251.771C186.994 255.232 186.371 258.722 185.997 261.713C187.458 264.747 189.313 267.576 191.512 270.126C198.4 278.041 207.219 294.618 212.012 298.17C212.763 291.44 211.519 275.081 210.987 265.857Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M104.015 167.079C103.392 167.39 102.737 167.671 102.083 167.951C99.027 164.359 96.1553 160.616 93.4797 156.733C93.7601 157.389 102.36 175.99 116.632 183.001C117.566 182.253 118.47 181.537 119.311 180.82C113.98 177.922 108.44 172.313 104.015 167.079Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M185.966 196.836C185.966 196.836 186.246 203.411 186.402 212.167L194.223 193.284L185.966 196.836Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.761 81.3262C70.9264 87.5598 73.4159 112.611 73.4159 112.611C73.4159 112.611 62.0097 118.064 55.9335 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6457 150.548 79.0903 144.269C79.8693 133.208 83.889 123.081 87.4412 112.704C91.9709 99.2908 90.9984 100.363 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.1824 92.4569 96.3874 92.5126 97.0729 92.7275C100.786 93.8902 107.523 95.1875 111.177 93.9772C111.182 93.8821 111.493 85.3147 102.052 85.3147Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M95.1347 117.035L91.8008 108.685C92.9128 110.175 94.2234 111.506 95.6958 112.642C95.4217 114.094 95.2344 115.561 95.1347 117.035Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M139.226 258.535C139.442 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.004 265.058 133.928 265.064C132.853 265.069 131.8 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.886 261.735C128.468 260.743 128.355 259.65 128.559 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.754 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.304 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.809 257.167 139.086 257.833 139.226 258.535Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                    ></path>
                                    <path
                                        d="M215.069 208.21L231.179 216.343C234.485 218.007 238.318 218.292 241.834 217.136C245.352 215.98 248.266 213.476 249.939 210.173L268.386 173.653"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M280.071 150.532L291.444 128.035C293.109 124.728 293.394 120.896 292.238 117.38C291.082 113.863 288.577 110.949 285.274 109.276L171.44 51.7656M106.913 126.608L139.939 61.1864"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M291.974 116.505L196.903 131.836L161.762 63.5879"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M144.812 213.413C137.719 221.211 129.129 227.501 119.553 231.906C109.977 236.312 99.6115 238.744 89.0751 239.058C78.5388 239.371 68.0474 237.559 58.2264 233.729C48.4056 229.9 39.4566 224.132 31.9133 216.77C24.3699 209.406 18.3867 200.601 14.3205 190.876C10.2543 181.151 8.18852 170.706 8.2463 160.165C8.30407 149.624 10.4843 139.203 14.6568 129.523C18.8293 119.843 24.9088 111.103 32.5324 103.823"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.1344 119.622C95.0468 117.26 95.2474 114.897 95.7314 112.583C99.5296 115.124 102.669 113.544 104.973 110.258C107.928 105.475 109.445 99.9421 109.343 94.3203"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M93.4794 156.734C96.1541 160.617 99.0244 164.36 102.08 167.951C106.99 165.893 111.514 163.012 115.455 159.433C118.376 156.783 120.996 153.819 123.268 150.595C117.892 143.565 112.909 136.241 108.344 128.659C106.121 124.961 102.784 122.061 98.8111 120.377C97.1071 119.715 95.2672 119.479 93.4515 119.691C92.1031 120.045 90.6906 120.076 89.3278 119.783C87.9651 119.489 86.6906 118.879 85.6074 118.002"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M256.545 149.286C260.782 149.442 269.196 149.411 274.337 149.317C270.762 157.814 265.709 165.611 259.413 172.345C257.824 172.095 254.458 171.752 252.932 171.659"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M306.679 149.441C308.455 149.691 309.597 150.097 309.733 150.657C310.596 154.196 292.073 162.793 283.745 169.508C281.323 171.486 278.614 173.084 275.709 174.245C273.591 174.633 271.416 174.592 269.313 174.12C272.402 172.779 275.296 171.03 277.92 168.92C286.097 162.327 302.973 154.147 306.679 149.441Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C283.595 149.13 299.985 148.476 306.68 149.442C302.972 154.116 286.089 162.319 277.888 168.917C275.265 171.027 272.374 172.777 269.288 174.12C266.327 173.653 262.869 172.874 259.41 172.344C265.719 165.614 270.785 157.817 274.372 149.317Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.614 247.255C210.333 251.929 210.614 258.815 210.988 265.888C202.365 262.621 194.389 257.852 187.431 251.804C187.618 250.215 187.742 248.626 187.773 247.13"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M212.016 298.17C211.829 299.974 211.489 301.106 210.925 301.286C207.45 302.393 198.144 284.058 191.138 275.985C189.062 273.631 187.36 270.973 186.09 268.101C185.635 265.997 185.602 263.822 185.997 261.705C187.453 264.742 189.308 267.571 191.512 270.118C198.4 278.067 207.217 294.618 212.016 298.17Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C211.517 275.081 212.763 291.441 212.015 298.165C207.217 294.613 198.377 278.054 191.515 270.121C189.313 267.573 187.458 264.744 186 261.708C186.374 258.717 186.997 255.225 187.402 251.767C194.366 257.825 202.352 262.596 210.987 265.857Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M116.635 183.001C102.364 175.99 93.7634 157.388 93.4797 156.733"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M104.016 167.078C108.444 172.313 113.99 177.948 119.315 180.854C122.017 182.386 125.169 182.925 128.227 182.381C141.232 179.757 165.837 166.957 172.256 160.102C183.88 147.687 182.926 138.229 181.915 122.429C181.505 116.01 180.699 116.164 179.734 119.149C178.299 123.603 176.489 134.401 174.998 138.655C174.859 139.084 174.572 139.448 174.188 139.684C173.04 140.34 172.317 138.905 171.728 136.879C171.103 134.729 170.657 131.866 170.076 130.155C169.058 127.139 166.98 124.391 166.649 133.24C166.455 138.444 166.442 147.406 160.791 150.69C156.392 153.196 151.809 155.363 147.08 157.171C142.189 159.086 137.065 160.344 131.843 160.91C129.008 161.061 125.206 157.825 121.592 152.809"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M176.399 133.457L181.634 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.111 108.519 180.673 108.208 180.17 108.092C179.666 107.977 179.137 108.066 178.699 108.341C178.259 108.615 177.949 109.053 177.833 109.557L171.663 136.697"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M185.976 196.866C190.837 194.778 194.231 193.284 194.231 193.284L186.402 212.167"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M119.315 180.851C113.428 185.559 107.257 189.9 100.837 193.848C90.3679 186.542 83.0982 175.499 80.5237 162.996"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M178.768 151.125L193.382 144.924C197.001 143.395 200.931 142.743 204.848 143.023L256.295 146.856C257.453 157.623 257.315 163.815 252.058 173.28L209.117 173.685"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.761 81.3262C70.9264 87.5598 73.4159 112.611 73.4159 112.611C73.4159 112.611 62.0097 118.064 55.9335 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6457 150.548 79.0903 144.269C79.8693 133.208 83.889 123.081 87.4412 112.704C88.2514 110.305 90.1833 104.447 90.8376 102.015C91.4297 99.7418 91.7101 98.151 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.2185 92.5225 96.3923 92.4372 97.3714 92.7603C99.7953 93.5573 106.326 95.3663 111.185 93.9083C111.182 93.9132 111.493 85.3147 102.052 85.3147Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M40.5402 90.6723C29.4937 96.0007 19.1002 102.589 9.56714 110.305C9.29884 110.472 9.07503 110.701 8.9149 110.974C8.75477 111.246 8.66313 111.553 8.64781 111.869C8.63247 112.184 8.69396 112.499 8.82695 112.785C8.95993 113.072 9.16047 113.322 9.41134 113.514L16.5159 119.154C20.8209 113.508 26.6576 108.735 32.5223 103.805C28.0082 109.645 24.0548 115.897 20.7143 122.478L28.3583 128.533C28.605 128.729 28.8951 128.863 29.2042 128.923C29.5134 128.984 29.8323 128.969 30.1346 128.88C30.4368 128.792 30.7135 128.632 30.9412 128.414C31.1688 128.197 31.341 127.928 31.4432 127.63L43.4693 92.988C43.6097 92.5997 43.6244 92.1769 43.5114 91.7797C43.3983 91.3825 43.1631 91.0308 42.8392 90.7748C42.5151 90.5187 42.1187 90.3709 41.7061 90.3525C41.2936 90.3342 40.8856 90.446 40.5402 90.6723Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M251.808 31.2836C245.607 28.1971 238.659 32.5956 239.656 39.0736L236.758 41.7517L240.746 42.0633C244.267 48.0148 253.21 48.2658 256.139 42.406C257.035 40.356 257.081 38.0351 256.269 35.9508C255.457 33.8666 253.853 32.1885 251.808 31.2836Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M288.702 211.325C287.761 210.838 286.733 210.541 285.678 210.451C284.622 210.361 283.558 210.479 282.547 210.801C281.539 211.122 280.601 211.639 279.792 212.322C278.982 213.006 278.315 213.843 277.827 214.784C277.827 214.784 272.561 225.069 268.137 224.755L290.136 236.129C287.3 232.701 292.161 222.202 292.161 222.202C292.648 221.26 292.947 220.232 293.035 219.176C293.125 218.12 293.007 217.057 292.686 216.047C292.364 215.037 291.848 214.1 291.164 213.29C290.48 212.48 289.644 211.812 288.702 211.325Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M282.75 232.327C282.255 233.286 281.397 234.008 280.369 234.336C279.341 234.662 278.226 234.567 277.266 234.072C276.307 233.577 275.585 232.719 275.257 231.691C274.931 230.662 275.026 229.547 275.521 228.588"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M312.695 92.2949L306.868 112.362"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M319.8 105.226L299.733 99.3994"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M186.434 236.348C195.285 237.804 204.301 237.97 213.2 236.84"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M244.393 146.045C245.797 155.393 244.285 164.946 240.062 173.403"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M139.226 258.535C139.441 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.003 265.058 133.928 265.064C132.852 265.069 131.799 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.885 261.735C128.468 260.743 128.355 259.65 128.558 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.753 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.303 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.808 257.167 139.086 257.833 139.226 258.535Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M136.764 241.491C138.853 239.537 141.475 238.247 144.297 237.784C147.12 237.32 150.016 237.704 152.62 238.886C155.225 240.069 157.42 241.997 158.928 244.428C160.437 246.857 161.191 249.681 161.095 252.539C160.999 255.398 160.057 258.163 158.39 260.487C156.722 262.811 154.402 264.587 151.725 265.592C149.047 266.597 146.132 266.786 143.347 266.135C140.562 265.484 138.032 264.021 136.079 261.932C133.461 259.129 132.062 255.403 132.191 251.569C132.319 247.736 133.964 244.111 136.764 241.491Z"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L185.976 196.866C186.32 209.956 187.045 232.111 185.943 246.631C194.392 249.204 203.402 249.291 211.899 246.881C215.296 223.821 217.921 187.421 209.126 173.684C197.731 155.885 162.698 167.296 162.698 167.296"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.7317 112.583C94.2303 111.513 92.9112 110.208 91.8252 108.718L95.1347 117.036"
                                        stroke="#08111F"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="hidden dark:block">
                                <svg className="mx-auto" width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M256.296 146.855L206.276 143.116C201.431 142.749 196.568 143.55 192.098 145.453L178.792 151.124C177.003 154.373 174.804 157.378 172.249 160.067C165.83 166.922 141.213 179.667 128.22 182.346C125.158 182.891 122.003 182.34 119.308 180.788C113.421 185.512 107.253 189.872 100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L194.226 193.287L186.343 212.201C186.561 223.014 186.623 237.191 185.907 246.641C194.356 249.214 203.368 249.301 211.865 246.889C215.259 223.83 217.846 187.435 209.059 173.694L252.061 173.289C257.48 163.529 257.002 157.979 256.296 146.855Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.833 109.557L171.664 136.697"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M176.4 133.457L181.635 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.833 109.557L171.664 136.697C172.44 139.559 174.524 143.397 176.4 133.457Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        fill="#B476E5"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C270.787 157.817 265.722 165.614 259.415 172.345C262.874 172.874 266.332 173.657 269.293 174.121C272.376 172.776 275.267 171.028 277.889 168.92C286.089 162.314 302.981 154.119 306.681 149.445C299.982 148.476 283.592 149.13 274.372 149.317Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C202.353 262.597 194.364 257.828 187.399 251.771C186.994 255.232 186.371 258.722 185.997 261.713C187.458 264.747 189.313 267.576 191.512 270.126C198.4 278.041 207.219 294.618 212.012 298.17C212.764 291.44 211.519 275.081 210.987 265.857Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M104.015 167.079C103.392 167.39 102.738 167.671 102.083 167.951C99.027 164.359 96.1554 160.616 93.4797 156.733C93.7602 157.389 102.36 175.99 116.632 183.001C117.566 182.253 118.47 181.537 119.311 180.82C113.98 177.922 108.44 172.313 104.015 167.079Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M185.966 196.836C185.966 196.836 186.246 203.411 186.402 212.167L194.223 193.284L185.966 196.836Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.7611 81.3262C70.9264 87.5598 73.416 112.611 73.416 112.611C73.416 112.611 62.0098 118.064 55.9336 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6458 150.548 79.0904 144.269C79.8694 133.208 83.889 123.081 87.4412 112.704C91.9709 99.2908 90.9984 100.363 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.1824 92.4569 96.3874 92.5126 97.073 92.7275C100.786 93.8902 107.523 95.1875 111.177 93.9772C111.182 93.8821 111.493 85.3147 102.052 85.3147Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M95.1347 117.035L91.8008 108.685C92.9129 110.175 94.2234 111.506 95.6958 112.642C95.4217 114.094 95.2344 115.561 95.1347 117.035Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M139.226 258.535C139.442 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.004 265.058 133.928 265.064C132.853 265.069 131.8 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.886 261.735C128.468 260.743 128.355 259.65 128.559 258.594C128.763 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.754 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.304 254.683 136.901 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.809 257.167 139.086 257.833 139.226 258.535Z"
                                        fill="#47BDFF"
                                    ></path>
                                    <path
                                        d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                    ></path>
                                    <path
                                        d="M215.069 208.21L231.179 216.343C234.485 218.007 238.318 218.292 241.834 217.136C245.352 215.98 248.266 213.476 249.939 210.173L268.386 173.653"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M280.071 150.532L291.444 128.035C293.109 124.728 293.394 120.896 292.238 117.38C291.082 113.863 288.577 110.949 285.274 109.276L171.44 51.7656M106.913 126.608L139.939 61.1864"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M291.974 116.505L196.903 131.836L161.762 63.5879"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M144.812 213.413C137.719 221.211 129.129 227.501 119.553 231.906C109.977 236.312 99.6115 238.744 89.0751 239.058C78.5388 239.371 68.0474 237.559 58.2264 233.729C48.4056 229.9 39.4566 224.132 31.9133 216.77C24.3699 209.406 18.3867 200.601 14.3205 190.876C10.2543 181.151 8.18852 170.706 8.2463 160.165C8.30407 149.624 10.4843 139.203 14.6568 129.523C18.8293 119.843 24.9088 111.103 32.5324 103.823"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.1345 119.622C95.0469 117.26 95.2475 114.897 95.7314 112.583C99.5297 115.124 102.669 113.544 104.973 110.258C107.928 105.475 109.445 99.9421 109.343 94.3203"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M93.4794 156.734C96.1541 160.617 99.0244 164.36 102.08 167.951C106.99 165.893 111.514 163.012 115.455 159.433C118.376 156.783 120.996 153.819 123.268 150.595C117.892 143.565 112.909 136.241 108.344 128.659C106.121 124.961 102.784 122.061 98.8111 120.377C97.1071 119.715 95.2672 119.479 93.4515 119.691C92.1031 120.045 90.6906 120.076 89.3278 119.783C87.9651 119.489 86.6906 118.879 85.6074 118.002"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M256.545 149.286C260.782 149.442 269.196 149.411 274.337 149.317C270.762 157.814 265.709 165.611 259.413 172.345C257.824 172.095 254.458 171.752 252.932 171.659"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M306.679 149.441C308.455 149.691 309.597 150.097 309.733 150.657C310.596 154.196 292.073 162.793 283.745 169.508C281.323 171.486 278.614 173.084 275.709 174.245C273.591 174.633 271.416 174.592 269.313 174.12C272.402 172.779 275.296 171.03 277.92 168.92C286.097 162.327 302.973 154.147 306.679 149.441Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M274.372 149.317C283.595 149.13 299.985 148.476 306.68 149.442C302.972 154.116 286.089 162.319 277.888 168.917C275.265 171.027 272.374 172.777 269.288 174.12C266.327 173.653 262.869 172.874 259.41 172.344C265.719 165.614 270.785 157.817 274.372 149.317Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.614 247.255C210.333 251.929 210.614 258.815 210.988 265.888C202.365 262.621 194.389 257.852 187.431 251.804C187.618 250.215 187.742 248.626 187.773 247.13"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M212.016 298.17C211.829 299.974 211.489 301.106 210.925 301.286C207.45 302.393 198.144 284.058 191.138 275.985C189.062 273.631 187.36 270.973 186.09 268.101C185.635 265.997 185.602 263.822 185.997 261.705C187.453 264.742 189.308 267.571 191.512 270.118C198.4 278.067 207.217 294.618 212.016 298.17Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M210.987 265.857C211.517 275.081 212.763 291.441 212.015 298.165C207.217 294.613 198.377 278.054 191.515 270.121C189.313 267.573 187.458 264.744 186 261.708C186.374 258.717 186.997 255.225 187.402 251.767C194.366 257.825 202.352 262.596 210.987 265.857Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M116.635 183.001C102.364 175.99 93.7635 157.388 93.4797 156.733"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M104.016 167.078C108.444 172.313 113.99 177.948 119.315 180.854C122.017 182.386 125.169 182.925 128.227 182.381C141.232 179.757 165.837 166.957 172.256 160.102C183.88 147.687 182.926 138.229 181.915 122.429C181.505 116.01 180.699 116.164 179.734 119.149C178.299 123.603 176.489 134.401 174.998 138.655C174.859 139.084 174.572 139.448 174.188 139.684C173.04 140.34 172.317 138.905 171.728 136.879C171.103 134.729 170.657 131.866 170.076 130.155C169.058 127.139 166.98 124.391 166.649 133.24C166.455 138.444 166.442 147.406 160.791 150.69C156.392 153.196 151.809 155.363 147.08 157.171C142.189 159.086 137.065 160.344 131.843 160.91C129.008 161.061 125.206 157.825 121.592 152.809"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M176.399 133.457L181.634 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.111 108.519 180.673 108.208 180.17 108.092C179.666 107.977 179.137 108.066 178.699 108.341C178.259 108.615 177.949 109.053 177.833 109.557L171.663 136.697"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M185.976 196.866C190.837 194.778 194.231 193.284 194.231 193.284L186.402 212.167"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M119.315 180.851C113.428 185.559 107.257 189.9 100.837 193.848C90.3679 186.542 83.0982 175.499 80.5237 162.996"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M178.768 151.125L193.382 144.924C197.001 143.395 200.931 142.743 204.848 143.023L256.295 146.856C257.453 157.623 257.315 163.815 252.058 173.28L209.117 173.685"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.7611 81.3262C70.9264 87.5598 73.416 112.611 73.416 112.611C73.416 112.611 62.0098 118.064 55.9336 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6458 150.548 79.0904 144.269C79.8694 133.208 83.889 123.081 87.4412 112.704C88.2514 110.305 90.1833 104.447 90.8377 102.015C91.4297 99.7418 91.7102 98.151 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.2185 92.5225 96.3924 92.4372 97.3714 92.7603C99.7954 93.5573 106.326 95.3663 111.185 93.9083C111.182 93.9132 111.493 85.3147 102.052 85.3147Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M40.5402 90.6723C29.4937 96.0007 19.1002 102.589 9.56714 110.305C9.29884 110.472 9.07503 110.701 8.9149 110.974C8.75477 111.246 8.66313 111.553 8.64781 111.869C8.63247 112.184 8.69396 112.499 8.82695 112.785C8.95993 113.072 9.16047 113.322 9.41134 113.514L16.5159 119.154C20.8209 113.508 26.6576 108.735 32.5223 103.805C28.0082 109.645 24.0548 115.897 20.7143 122.478L28.3583 128.533C28.605 128.729 28.8951 128.863 29.2042 128.923C29.5134 128.984 29.8323 128.969 30.1346 128.88C30.4368 128.792 30.7135 128.632 30.9412 128.414C31.1688 128.197 31.341 127.928 31.4432 127.63L43.4693 92.988C43.6097 92.5997 43.6244 92.1769 43.5114 91.7797C43.3983 91.3825 43.1631 91.0308 42.8392 90.7748C42.5151 90.5187 42.1187 90.3709 41.7061 90.3525C41.2936 90.3342 40.8856 90.446 40.5402 90.6723Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M251.808 31.2836C245.607 28.1971 238.659 32.5956 239.656 39.0736L236.758 41.7517L240.746 42.0633C244.267 48.0148 253.21 48.2658 256.139 42.406C257.035 40.356 257.081 38.0351 256.269 35.9508C255.457 33.8666 253.853 32.1885 251.808 31.2836Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M288.702 211.325C287.761 210.838 286.733 210.541 285.678 210.451C284.622 210.361 283.558 210.479 282.547 210.801C281.539 211.122 280.601 211.639 279.792 212.322C278.982 213.006 278.315 213.843 277.827 214.784C277.827 214.784 272.561 225.069 268.137 224.755L290.136 236.129C287.3 232.701 292.161 222.202 292.161 222.202C292.648 221.26 292.947 220.232 293.035 219.176C293.125 218.12 293.007 217.057 292.686 216.047C292.364 215.037 291.848 214.1 291.164 213.29C290.48 212.48 289.644 211.812 288.702 211.325Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M282.75 232.327C282.255 233.286 281.397 234.008 280.369 234.336C279.341 234.662 278.226 234.567 277.266 234.072C276.307 233.577 275.585 232.719 275.257 231.691C274.931 230.662 275.026 229.547 275.521 228.588"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M312.695 92.2949L306.868 112.362"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M319.8 105.226L299.733 99.3994"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M186.434 236.348C195.285 237.804 204.301 237.97 213.2 236.84"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M244.393 146.045C245.797 155.393 244.285 164.946 240.062 173.403"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M139.226 258.535C139.441 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.003 265.058 133.928 265.064C132.852 265.069 131.799 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.885 261.735C128.468 260.743 128.355 259.65 128.558 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.753 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.303 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.808 257.167 139.086 257.833 139.226 258.535Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M136.764 241.491C138.853 239.537 141.475 238.247 144.297 237.784C147.12 237.32 150.016 237.704 152.62 238.886C155.225 240.069 157.42 241.997 158.928 244.428C160.437 246.857 161.19 249.681 161.095 252.539C160.999 255.398 160.057 258.163 158.39 260.487C156.722 262.811 154.402 264.587 151.725 265.592C149.047 266.597 146.131 266.786 143.346 266.135C140.562 265.484 138.032 264.021 136.079 261.932C133.461 259.129 132.062 255.403 132.191 251.569C132.319 247.736 133.964 244.111 136.764 241.491Z"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L185.976 196.866C186.32 209.956 187.045 232.111 185.943 246.631C194.392 249.204 203.402 249.291 211.899 246.881C215.296 223.821 217.921 187.421 209.126 173.684C197.731 155.885 162.697 167.296 162.697 167.296"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M95.7317 112.583C94.2303 111.513 92.9112 110.208 91.8252 108.718L95.1347 117.036"
                                        stroke="white"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
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

export default Marketing;
