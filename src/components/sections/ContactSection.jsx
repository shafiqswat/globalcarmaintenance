/** @format */

import React, { useEffect, useState } from "react";
import { PhoneIcon, LocationIcon, ClockIcon } from "../../assets/svg";
import dynamic from "next/dynamic";

// Dynamically import react-leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const ContactSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const contactInfo = [
    {
      id: 1,
      bg: "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100",
      iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
      icon: <PhoneIcon className='w-6 h-6 text-white' />,
      label: "الهاتف",
      value: "+966 55 714 6247",
      valueColor: "text-blue-600",
    },
    {
      id: 2,
      bg: "bg-gradient-to-r from-green-50 to-blue-50 border-green-100",
      iconBg: "bg-gradient-to-r from-green-500 to-green-600",
      icon: <LocationIcon className='w-6 h-6 text-white' />,
      label: "العنوان",
      value: "ال80، طريق المكرونه شارع, Jeddah 23536, Saudi Arabia",
      valueColor: "text-green-600",
    },
    {
      id: 3,
      bg: "bg-gradient-to-r from-orange-50 to-red-50 border-orange-100",
      iconBg: "bg-gradient-to-r from-orange-500 to-orange-600",
      icon: <ClockIcon className='w-6 h-6 text-white' />,
      label: "ساعات العمل",
      value: [
        "الأحد - الخميس: 8:00 ص - 6:00 م",
        "الجمعة - السبت: 9:00 ص - 4:00 م",
      ],
      valueColor: "text-orange-600",
    },
    {
      id: 4,
      bg: "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100",
      iconBg: "bg-gradient-to-r from-purple-500 to-purple-600",
      icon: <span className='text-white text-xl font-bold'>@</span>,
      label: "البريد الإلكتروني",
      value: "info@globalcarmaintenance.com",
      valueColor: "text-purple-600",
    },
  ];

  useEffect(() => {
    // Import leaflet CSS on client side
    import("leaflet/dist/leaflet.css");
    setIsMapLoaded(true);
  }, []);

  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6'>
            <span className='text-sm font-medium'>اتصل بنا</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            مركز العالمية لصيانة السيارات النزهة
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            خبرة خمس سنوات في تقديم خدمات صيانة شاملة لسيارتك، من الفحص الشامل
            إلى إصلاح الأعطال المعقدة
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-6'>
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className={`flex items-center space-x-4 p-4 rounded-xl border ${item.bg}`}>
                <div
                  className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='font-semibold text-gray-900'>{item.label}</p>
                  {Array.isArray(item.value) ? (
                    item.value.map((line, i) => (
                      <p
                        key={i}
                        className={`${item.valueColor} font-medium`}>
                        {line}
                      </p>
                    ))
                  ) : (
                    <p
                      className={`${item.valueColor} font-medium truncate`}
                      title={item.value}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
              <div className='w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-md p-2'>
                <span className='text-white text-xl leading-none'>✉️</span>
              </div>
              أرسل لنا رسالة
            </h3>

            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    الاسم الأول
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    placeholder='أدخل اسمك الأول'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    الاسم الأخير
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    placeholder='أدخل اسمك الأخير'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  رقم الهاتف
                </label>
                <input
                  type='tel'
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  placeholder='+966 5X XXX XXXX'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  نوع الخدمة المطلوبة
                </label>
                <select className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'>
                  <option value=''>اختر نوع الخدمة</option>
                  <option value='maintenance'>صيانة دورية</option>
                  <option value='repair'>إصلاح</option>
                  <option value='diagnostic'>تشخيص</option>
                  <option value='tire'>إطارات</option>
                  <option value='oil'>تغيير زيت</option>
                  <option value='other'>خدمات أخرى</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  الرسالة
                </label>
                <textarea
                  rows='4'
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                  placeholder='اكتب رسالتك هنا...'></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className='mt-16'>
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100'>
            <div className='p-6 border-b border-gray-100'>
              <h3 className='text-2xl font-bold text-gray-900 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mr-3'>
                  <span className='text-white font-bold'>📍</span>
                </div>
                موقعنا
              </h3>
            </div>
            <div className='h-96'>
              {isMapLoaded ? (
                <MapContainer
                  center={[21.5433, 39.1679]} // Jeddah coordinates
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}>
                  <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[21.5433, 39.1679]}>
                    <Popup>
                      <div className='text-center'>
                        <h3 className='font-bold text-gray-900'>
                          مركز العالمية لصيانة السيارات النزهة
                        </h3>
                        <p className='text-gray-600'>
                          Global Car Maintenance Center Al Nuzha
                        </p>
                        <p className='text-sm text-gray-500'>
                          ال80، طريق المكرونه شارع, Jeddah 23536, Saudi Arabia
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <div className='h-full flex items-center justify-center bg-gray-100'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-white text-xl'>📍</span>
                    </div>
                    <p className='text-gray-600 text-lg'>
                      جاري تحميل الخريطة...
                    </p>
                    <p className='text-gray-500'>Loading map...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
