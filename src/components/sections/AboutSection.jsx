/** @format */

import React from "react";
import { CheckIcon } from "../../assets/svg";
import { aboutData, statsData } from "../../assets/dummy";
import StatsCard from "../cards/StatsCard";

const AboutSection = () => {
  return (
    <section
      id='about'
      className='py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div className='space-y-8'>
            <div>
              <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6'>
                <span className='text-sm font-medium'>من نحن</span>
              </div>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-wide'>
                مركز العالمية لصيانة السيارات النزهة
              </h2>
              <p className='text-lg md:text-xl text-blue-600 font-bold mb-6'>
                خبرة خمس سنوات في تقديم خدمات صيانة شاملة
              </p>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed font-medium'>
                نحن نقدم خدمات صيانة شاملة لسيارتك مع ضمان الجودة والأمان. فريق
                عملنا المحترف يضمن لك تجربة صيانة سلسة وسيارة تعود إليك كجديدة.
              </p>
            </div>

            {/* Features */}
            <div className='space-y-6'>
              <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-3'>
                  <span className='text-white font-bold'>⭐</span>
                </div>
                مميزاتنا
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {[
                  "خبرة خمس سنوات في مجال صيانة السيارات",
                  "فريق عمل محترف ومدرب",
                  "أحدث المعدات والتقنيات",
                  "أسعار مناسبة وشفافة",
                  "ضمان الجودة على جميع الأعمال",
                  "خدمة عملاء على مدار الساعة",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className='flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100'>
                    <div className='w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <CheckIcon className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-gray-700 font-semibold text-sm'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats and Image */}
          <div className='space-y-8'>
            {/* Stats Grid */}
            <div className='grid grid-cols-2 gap-6'>
              {[
                {
                  number: "5+",
                  label: "سنوات خبرة",
                  icon: "🛠️",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  number: "1000+",
                  label: "عميل راضي",
                  icon: "😊",
                  color: "from-green-500 to-green-600",
                },
                {
                  number: "50+",
                  label: "خدمة مختلفة",
                  icon: "🔧",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  number: "24/7",
                  label: "دعم فني",
                  icon: "📞",
                  color: "from-purple-500 to-purple-600",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl shadow-xl p-6 border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className='text-2xl'>{stat.icon}</span>
                  </div>
                  <div className='text-2xl font-bold text-gray-900 mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-gray-600 font-medium text-sm'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Service Image */}
            <div className='relative'>
              <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl'>
                <div className='aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden'>
                  {/* Car Service Image Placeholder */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50'></div>
                  <div className='relative z-10 text-center text-white'>
                    <div className='w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm overflow-hidden'>
                      <img
                        src='https://images.unsplash.com/photo-1563720223185-11003d516935?w=96&h=96&fit=crop&crop=center'
                        alt='Car Maintenance'
                        className='w-full h-full object-cover rounded-full'
                      />
                    </div>
                    <h3 className='text-xl font-bold mb-2'>
                      خدمات صيانة شاملة
                    </h3>
                    <p className='text-blue-100'>من الفحص الشامل إلى الإصلاح</p>
                  </div>

                  {/* Floating Elements */}
                  <div className='absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce'></div>
                  <div className='absolute bottom-4 left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse'></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse'></div>
              <div className='absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
