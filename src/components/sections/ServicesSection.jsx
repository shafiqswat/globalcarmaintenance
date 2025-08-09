/** @format */

import React from "react";
import ServiceCard from "../cards/ServiceCard";
import { servicesData } from "../../assets/dummy";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "ورشة ميكانيكا السيارات",
      description: "إصلاح شامل للمحرك والأنظمة الميكانيكية",
      icon: "🔧",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "كهرباء السيارات",
      description: "تشخيص وإصلاح جميع المشاكل الكهربائية",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      title: "إصلاح تكييف السيارات",
      description: "صيانة وتعبئة فريون التكييف",
      icon: "❄️",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 4,
      title: "فحص كومبيوتر",
      description: "تشخيص دقيق باستخدام أحدث الأجهزة",
      icon: "💻",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 5,
      title: "تنظيف بخاخات",
      description: "تنظيف وإصلاح نظام الحقن",
      icon: "🔫",
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "تركيب قماشات",
      description: "تركيب وتجديد قماشات السيارات",
      icon: "🪑",
      color: "from-red-500 to-red-600",
    },
    {
      id: 7,
      title: "خرط هوبات",
      description: "إصلاح وتجديد نظام الفرامل",
      icon: "⭕",
      color: "from-gray-500 to-gray-600",
    },
    {
      id: 8,
      title: "توضيب علب دريكسون",
      description: "إصلاح وصيانة علب التروس",
      icon: "⚙️",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 9,
      title: "توضيب ماكينه",
      description: "إصلاح شامل للمحرك",
      icon: "🏭",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 10,
      title: "تربيط",
      description: "خدمات التربيط والشد",
      icon: "🔩",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section
      id='services'
      className='py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6'>
            <span className='text-sm font-medium'>خدماتنا</span>
          </div>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-wide'>
            خدمات صيانة السيارات
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed'>
            نقدم مجموعة شاملة من خدمات صيانة السيارات بأحدث التقنيات وأفضل
            الأسعار
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {services.map((service) => (
            <div
              key={service.id}
              className='group'>
              <div className='bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100 h-full'>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className='text-2xl'>{service.icon}</span>
                </div>
                <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-tight'>
                  {service.title}
                </h3>
                <p className='text-gray-600 leading-relaxed font-medium text-base'>
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className='mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-16'>
          <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-2xl mx-auto'>
            <div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
              <span className='text-2xl'>📞</span>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              هل تحتاج إلى خدمة معينة؟
            </h3>
            <p className='text-gray-600 mb-6'>
              اتصل بنا للحصول على استشارة مجانية وتقدير سعر دقيق
            </p>
            <button
              onClick={() => window.open("tel:+966557146247", "_self")}
              className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
              احجز موعد الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
