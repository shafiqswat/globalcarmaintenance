/** @format */

import React from "react";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonialsData } from "../../assets/dummy";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      rating: 5,
      comment: "خدمة ممتازة وأسعار معقولة. أصلحوا سيارتي بسرعة وجودة عالية.",
      date: "2024-01-15",
      avatar: "👨‍🔧"
    },
    {
      id: 2,
      name: "فاطمة علي",
      rating: 5,
      comment: "فريق عمل محترف ومكان نظيف. أنصح الجميع بالتعامل معهم.",
      date: "2024-01-10",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "خالد عبدالله",
      rating: 4,
      comment: "خدمة جيدة وأسعار مناسبة. سأعود مرة أخرى.",
      date: "2024-01-05",
      avatar: "👨‍💻"
    },
    {
      id: 4,
      name: "سارة أحمد",
      rating: 5,
      comment: "أفضل مركز صيانة في المنطقة. خدمة سريعة ومضمونة.",
      date: "2024-01-01",
      avatar: "👩‍🎓"
    },
    {
      id: 5,
      name: "محمد حسن",
      rating: 5,
      comment: "خبرة عالية وأسعار منافسة. أنصح بالتعامل معهم.",
      date: "2023-12-28",
      avatar: "👨‍🏫"
    },
    {
      id: 6,
      name: "نورا سعد",
      rating: 5,
      comment: "خدمة رائعة وموظفين محترفين. شكراً لكم.",
      date: "2023-12-25",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">آراء العملاء</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-wide">
            آراء عملائنا
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            اكتشف ما يقوله عملاؤنا عن خدماتنا وجودة عملنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100 h-full">
                {/* Avatar and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl">{testimonial.avatar}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-4 italic font-medium text-base">
                  "{testimonial.comment}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.date}</p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">😊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              انضم إلى قائمة عملائنا الراضين
            </h3>
            <p className="text-gray-600 mb-6">
              واحصل على أفضل خدمة صيانة لسيارتك
            </p>
            <button
              onClick={() => window.open("tel:+966557146247", "_self")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              احجز موعد الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
