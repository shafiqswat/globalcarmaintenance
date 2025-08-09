/** @format */

import React from "react";
import {
  LocationIcon,
  PhoneIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "../assets/svg";
import { contactData, socialData } from "../assets/dummy";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold text-blue-400 mb-4'>
              Global Car Maintenance
            </h3>
            <p className='text-gray-300 mb-4'>
              خبرة خمس سنوات في تقديم خدمات صيانة شاملة لسيارتك
            </p>
            <div className='flex space-x-4'>
              {socialData.map((social) => {
                const IconComponent =
                  social.icon === "FacebookIcon"
                    ? FacebookIcon
                    : social.icon === "InstagramIcon"
                    ? InstagramIcon
                    : social.icon === "WhatsAppIcon"
                    ? WhatsAppIcon
                    : null;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-200'>
                    {IconComponent && <IconComponent className='w-6 h-6' />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>معلومات الاتصال</h4>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <PhoneIcon className='w-5 h-5 text-blue-400 mr-3' />
                <span className='text-gray-300'>{contactData.phone}</span>
              </div>
              <div className='flex items-start'>
                <LocationIcon className='w-5 h-5 text-blue-400 mr-3 mt-1' />
                <span className='text-gray-300'>{contactData.address}</span>
              </div>
              <div className='flex items-center'>
                <ClockIcon className='w-5 h-5 text-blue-400 mr-3' />
                <span className='text-gray-300'>
                  {contactData.hours.open} - {contactData.hours.close}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>روابط سريعة</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#services'
                  className='text-gray-300 hover:text-blue-400 transition-colors duration-200'>
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-300 hover:text-blue-400 transition-colors duration-200'>
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href='#testimonials'
                  className='text-gray-300 hover:text-blue-400 transition-colors duration-200'>
                  آراء العملاء
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-300 hover:text-blue-400 transition-colors duration-200'>
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>
            © 2024 Global Car Maintenance Center. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
