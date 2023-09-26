import Link from 'next/link';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Testimonial from '../components/Testimonial';
import CountUp from 'react-countup';

const Healthcare = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
        {
            id: 1,
            name: '',
            role: '',
            color:'',
            thumbnail: '/assets/images/testimonia.png',
            message: 'I had a great experience with Gigatorb. Thank you!!',
        },
    ];

    return (
        <div>
            <Head>
                <title>Cúram | Gigatorb</title>
            </Head>
            <div className="overflow-x-hidden">
                <div className="relative z-[1] overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
                    <div className="relative">
                        <img
                            src="/assets/images/banner-lefticon.png"
                            alt="banner-lefticon"
                            className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]"
                        />
                        <img
                            src="/assets/images/banner-rightIcon.png"
                            alt="banner-rightIcon"
                            className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
                        />
                        <div className="container bg-[url(/assets/images/world-map.png)] bg-cover">
                            <div className="relative">
                                <div className="relative w-full pb-14 pt-14 text-center text-white md:max-w-[550px] ltr:md:text-left rtl:md:text-right lg:max-w-[760px] lg:pb-52 xl:pt-36">
                                    <h2 className="relative z-10 text-3xl font-extrabold sm:text-5xl lg:text-[70px] lg:leading-[89px]">
                                    Merative  
                                        <span className="italic text-primary"> Cúram</span> <span className="italic text-secondary"> Social Program Management (SPM)</span>{' '}
                                        Implementation Services
                                    </h2>
                                  
                                    <span className="absolute top-[60px] -right-[120px] hidden rtl:right-auto rtl:-left-[150px] lg:block xl:top-[150px] ltr:xl:-right-[120px]">
                                        <img src="/assets/images/healthcare/bgimagehelt.svg" className="rtl:rotate-y-180" alt="" />
                                    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-gradient-to-t from-white/60 to-transparent py-12 dark:from-white/[0.02] lg:py-24">
                    <div className="container">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="mx-auto w-full max-w-[732px]">
                                <img src="\assets\images\Gallary\curam_logo.jpg" className="rtl:rotate-y-180" alt="" />
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <div className="heading mb-0 text-center rtl:text-left ltr:sm:text-right">
                                    <h6 className="!text-secondary">Our Specialties</h6>
                                    <h4>Cúram SPM Implementation Services</h4>
                                </div>
                                <p className="mt-5 text-lg font-semibold">
                                We provide a comprehensive suite of design, development, and implementation services for the 
                                Merative Cúram SPM platform, utilizing an agile delivery methodology and either on-site or offshore delivery options.
                                 By prioritizing simplicity and scalability in our implementation approach, we can help you achieve significant operational cost savings of
                                 up to 30% and effort savings of 30-40%.
                                </p>
                              
                             
                               
                                <button type="button" className="btn mt-10 py-5 px-9 text-white">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

              
                <section className="overflow-hidden py-12 lg:py-24">
                    <div className="container">
                        <div className="heading text-center">
                            <h6 className="!text-secondary">Meet Our Team</h6>
                            <h4>Our Cúram expertise</h4>
                        </div>
                    </div>

                    <div className="container relative px-16">
                        <div className="team-swiper-button-prev absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary text-primary duration-200 hover:bg-primary hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.5892 14.4111L9.41083 15.5895L3.82167 10.0003L9.41083 4.41113L10.5892 5.58947L7.01167 9.16697H15V10.8336H7.01167L10.5892 14.4111Z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </div>
                        <div className="team-swiper-button-next absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary text-primary duration-200 hover:bg-primary hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.41083 14.4111L10.5892 15.5895L16.1783 10.0003L10.5892 4.41113L9.41083 5.58947L12.9883 9.16697H5V10.8336H12.9883L9.41083 14.4111Z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </div>
                        <Swiper
                            loop={true}
                            slidesPerView={4}
                            spaceBetween={30}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                600: {
                                    slidesPerView: 2,
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                                1600: {
                                    slidesPerView: 4,
                                },
                            }}
                            navigation={{
                                nextEl: '.team-swiper-button-next',
                                prevEl: '.team-swiper-button-prev',
                            }}
                            modules={[Navigation]}
                            dir={isRtl ? 'rtl' : 'ltr'}
                            key={isRtl ? 'true' : 'false'}
                            className="swiper team-member text-center"
                        >
                            <SwiperSlide className="relative">
                                <div className="group relative overflow-hidden rounded-3xl">
                                    <img src="/assets/images/healthcare/healthcare-img.png" className="h-full w-full object-cover" alt="Curam Developers" />
                                    {/* <ul className="absolute inset-x-0 -bottom-full flex items-end justify-center gap-[30px] pb-5 transition-all duration-300 group-hover:inset-y-0 group-hover:bg-gradient-to-t group-hover:from-primary/70">
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.36167 2.58333C4.36143 3.06956 4.16804 3.53578 3.82406 3.87943C3.48007 4.22307 3.01365 4.41599 2.52742 4.41575C2.04119 4.41551 1.57497 4.22212 1.23133 3.87813C0.887685 3.53414 0.694764 3.06773 0.695008 2.5815C0.695251 2.09527 0.888638 1.62905 1.23263 1.28541C1.57662 0.941762 2.04303 0.748842 2.52926 0.749085C3.01549 0.749328 3.48171 0.942715 3.82535 1.2867C4.169 1.63069 4.36192 2.0971 4.36167 2.58333ZM4.41667 5.77333H0.750008V17.25H4.41667V5.77333ZM10.21 5.77333H6.56167V17.25H10.1733V11.2275C10.1733 7.8725 14.5458 7.56083 14.5458 11.2275V17.25H18.1667V9.98083C18.1667 4.325 11.695 4.53583 10.1733 7.31333L10.21 5.77333Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.27999 5.09 4.10999 3.38 1.99999 0.79C1.62999 1.42 1.41999 2.16 1.41999 2.94C1.41999 4.43 2.16999 5.75 3.32999 6.5C2.61999 6.5 1.95999 6.3 1.37999 6V6.03C1.37999 8.11 2.85999 9.85 4.81999 10.24C4.19072 10.4122 3.53009 10.4362 2.88999 10.31C3.1616 11.1625 3.69353 11.9084 4.41101 12.4429C5.12849 12.9775 5.99544 13.2737 6.88999 13.29C5.37362 14.4904 3.49399 15.1393 1.55999 15.13C1.21999 15.13 0.879993 15.11 0.539993 15.07C2.43999 16.29 4.69999 17 7.11999 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul> */}
                                </div>
                                <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">Anupam Mishra</h3>
                                <p className="mt-2.5 text-sm font-semibold">Cúram Developer</p>
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="group relative overflow-hidden rounded-3xl">
                                    <img src="/assets/images/healthcare/healthcare-img.png" className="h-full w-full object-cover" alt="Curam Developers" />
                                    {/* <ul className="absolute inset-x-0 -bottom-full flex items-end justify-center gap-[30px] pb-5 transition-all duration-300 group-hover:inset-y-0 group-hover:bg-gradient-to-t group-hover:from-primary/70">
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.36167 2.58333C4.36143 3.06956 4.16804 3.53578 3.82406 3.87943C3.48007 4.22307 3.01365 4.41599 2.52742 4.41575C2.04119 4.41551 1.57497 4.22212 1.23133 3.87813C0.887685 3.53414 0.694764 3.06773 0.695008 2.5815C0.695251 2.09527 0.888638 1.62905 1.23263 1.28541C1.57662 0.941762 2.04303 0.748842 2.52926 0.749085C3.01549 0.749328 3.48171 0.942715 3.82535 1.2867C4.169 1.63069 4.36192 2.0971 4.36167 2.58333ZM4.41667 5.77333H0.750008V17.25H4.41667V5.77333ZM10.21 5.77333H6.56167V17.25H10.1733V11.2275C10.1733 7.8725 14.5458 7.56083 14.5458 11.2275V17.25H18.1667V9.98083C18.1667 4.325 11.695 4.53583 10.1733 7.31333L10.21 5.77333Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.27999 5.09 4.10999 3.38 1.99999 0.79C1.62999 1.42 1.41999 2.16 1.41999 2.94C1.41999 4.43 2.16999 5.75 3.32999 6.5C2.61999 6.5 1.95999 6.3 1.37999 6V6.03C1.37999 8.11 2.85999 9.85 4.81999 10.24C4.19072 10.4122 3.53009 10.4362 2.88999 10.31C3.1616 11.1625 3.69353 11.9084 4.41101 12.4429C5.12849 12.9775 5.99544 13.2737 6.88999 13.29C5.37362 14.4904 3.49399 15.1393 1.55999 15.13C1.21999 15.13 0.879993 15.11 0.539993 15.07C2.43999 16.29 4.69999 17 7.11999 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>*/}
                                </div> 
                                <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">Shashank Sohani</h3>
                                <p className="mt-2.5 text-sm font-semibold">Cúram Developer</p>
                            </SwiperSlide>
                            <SwiperSlide className="relative">
                                <div className="group relative overflow-hidden rounded-3xl">
                                    <img src="/assets/images/healthcare/healthcare-img.png" className="h-full w-full object-cover" alt="Curam Developers" />
                                    {/* <ul className="absolute inset-x-0 -bottom-full flex items-end justify-center gap-[30px] pb-5 transition-all duration-300 group-hover:inset-y-0 group-hover:bg-gradient-to-t group-hover:from-primary/70">
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.36167 2.58333C4.36143 3.06956 4.16804 3.53578 3.82406 3.87943C3.48007 4.22307 3.01365 4.41599 2.52742 4.41575C2.04119 4.41551 1.57497 4.22212 1.23133 3.87813C0.887685 3.53414 0.694764 3.06773 0.695008 2.5815C0.695251 2.09527 0.888638 1.62905 1.23263 1.28541C1.57662 0.941762 2.04303 0.748842 2.52926 0.749085C3.01549 0.749328 3.48171 0.942715 3.82535 1.2867C4.169 1.63069 4.36192 2.0971 4.36167 2.58333ZM4.41667 5.77333H0.750008V17.25H4.41667V5.77333ZM10.21 5.77333H6.56167V17.25H10.1733V11.2275C10.1733 7.8725 14.5458 7.56083 14.5458 11.2275V17.25H18.1667V9.98083C18.1667 4.325 11.695 4.53583 10.1733 7.31333L10.21 5.77333Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                            >
                                                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.27999 5.09 4.10999 3.38 1.99999 0.79C1.62999 1.42 1.41999 2.16 1.41999 2.94C1.41999 4.43 2.16999 5.75 3.32999 6.5C2.61999 6.5 1.95999 6.3 1.37999 6V6.03C1.37999 8.11 2.85999 9.85 4.81999 10.24C4.19072 10.4122 3.53009 10.4362 2.88999 10.31C3.1616 11.1625 3.69353 11.9084 4.41101 12.4429C5.12849 12.9775 5.99544 13.2737 6.88999 13.29C5.37362 14.4904 3.49399 15.1393 1.55999 15.13C1.21999 15.13 0.879993 15.11 0.539993 15.07C2.43999 16.29 4.69999 17 7.11999 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul> */}
                                </div>
                                <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">Ankit Kushwah</h3>
                                <p className="mt-2.5 text-sm font-semibold">Cúram Developer</p>
                            </SwiperSlide>
                          
                        </Swiper>
                    </div>
                </section>

             
                <Testimonial showTitle={true} type="common" feedbacks={feedbacks} className="relative py-14 lg:py-[100px]" />

                <section className="py-12 dark:bg-gray-dark lg:py-24">
                    <div className="container">
                        <div className="relative z-10 lg:flex">
                            <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                                <h6>Get In Touch.</h6>
                               
                                <div>
                                    <img src="\assets\images\Gallary\gigatorb8.jpg" className="rtl:rotate-y-180" alt="" />
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
                                        name="Decease"
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
                                    <button
                                        type="button"
                                        className="btn bg-gray px-16 py-5 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary"
                                    >
                                        Book now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Healthcare;
