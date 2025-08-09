/** @format */

import React from "react";
import {
  StarIcon,
  PhoneIcon,
  LocationIcon,
  ClockIcon,
  ArrowRightIcon,
} from "../../assets/svg";
import { heroData } from "../../assets/dummy";
import Button from "../form/Button";

const HeroSection = () => {
  // Contact info array
  const contactInfo = [
    {
      icon: PhoneIcon,
      bg: "bg-blue-500",
      label: "الهاتف",
      value: "+966 55 714 6247",
    },
    {
      icon: LocationIcon,
      bg: "bg-green-500",
      label: "العنوان",
      value: "ال80، طريق المكرونه شارع, Jeddah",
    },
    {
      icon: ClockIcon,
      bg: "bg-orange-500",
      label: "ساعات العمل",
      value: "Open ⋅ Closes 10 pm",
    },
  ];

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Background Image */}
      <div className='absolute inset-0 opacity-20'>
        <img
          src='/images/image4.jpg'
          alt='Car Service Background'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse'></div>
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse delay-1000'></div>
      <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-500'></div>

      <div className='container mx-auto px-4 py-20 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div className='space-y-8 text-white'>
            <div className='space-y-6'>
              <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
                <StarIcon className='w-5 h-5 text-yellow-400' />
                <span className='text-sm font-medium'>
                  خبرة خمس سنوات في تقديم خدمات صيانة شاملة لسيارتك
                </span>
              </div>

              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  صيانة سيارتك
                </span>
                <br />
                <span className='text-white'>بأحدث التقنيات</span>
              </h1>

              <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium'>
                نقدم خدمات صيانة شاملة ومتخصصة لجميع أنواع السيارات مع ضمان
                الجودة وأفضل الأسعار
              </p>
            </div>

            {/* Rating */}
            <div className='flex items-center space-x-4'>
              <div className='flex items-center'>
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className='w-6 h-6 text-yellow-400'
                  />
                ))}
              </div>
              <span className='text-lg font-semibold text-gray-300'>
                4.9 (1108 تقييم)
              </span>
            </div>

            {/* Contact Info Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {contactInfo.map(({ icon: Icon, bg, label, value }, i) => (
                <div
                  key={i}
                  className='bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 relative overflow-hidden'>
                  {/* Background Image */}
                  <div className='absolute inset-0 opacity-10'>
                    <img
                      src={`/images/image${i + 1}.jpg`}
                      alt='Service Background'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='relative z-10 flex flex-col items-center space-x-3'>
                    <div
                      className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className='w-6 h-6 text-white' />
                    </div>
                    <div className='min-w-0 flex flex-col w'>
                      <p className='text-xs text-gray-300 font-medium'>
                        {label}
                      </p>
                      <p className='font-bold text-white text-sm leading-tight break-words'>
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={() => window.open(`tel:+966557146247`, "_self")}
                className='group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2'>
                <PhoneIcon className='w-5 h-5' />
                <span>اتصل الآن</span>
                <ArrowRightIcon className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className='group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2'>
                <span>استكشف خدماتنا</span>
                <ArrowRightIcon className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className='relative'>
            <div className='relative z-10'>
              <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl'>
                <div className='aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden'>
                  {/* Car Service Images */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50'></div>

                  {/* Main Car Image */}
                  <div className='relative z-10 text-center text-white'>
                    <div className='w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm overflow-hidden'>
                      <img
                        src='/images/image1.jpg'
                        alt='Car Service'
                        className='w-full h-full object-cover rounded-full'
                      />
                    </div>
                    <h3 className='text-2xl font-bold mb-2'>
                      مركز صيانة السيارات
                    </h3>
                    <p className='text-blue-100'>خدمات شاملة ومضمونة</p>
                  </div>

                  {/* Floating Car Images */}
                  <div className='absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-bounce backdrop-blur-sm overflow-hidden'>
                    <img
                      src='/images/image2.jpg'
                      alt='Car Engine'
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                  <div className='absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full animate-pulse backdrop-blur-sm overflow-hidden'>
                    <img
                      src='/images/image3.jpg'
                      alt='Car Tools'
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>

                  {/* Additional Floating Elements */}
                  <div className='absolute top-8 left-8 w-8 h-8 bg-yellow-400 rounded-full animate-pulse opacity-80'></div>
                  <div className='absolute bottom-8 right-8 w-6 h-6 bg-green-400 rounded-full animate-bounce opacity-80'></div>

                  {/* Additional Floating Images */}
                  <div className='absolute top-1/2 right-1/4 w-10 h-10 bg-white/20 rounded-full animate-pulse backdrop-blur-sm overflow-hidden'>
                    <img
                      src='/images/image5.jpg'
                      alt='Car Service'
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                  <div className='absolute bottom-1/3 left-1/3 w-8 h-8 bg-white/20 rounded-full animate-bounce backdrop-blur-sm overflow-hidden'>
                    <img
                      src='/images/image6.jpg'
                      alt='Car Service'
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className='absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse'></div>
            <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
