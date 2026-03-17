export function ContactPage(){

    return(
    <div className="min-h-screen bg-gray-50">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight py-70 px-10 text-center">
            <span className="text-[#333] font-bold">Launching this page </span>
          <span className="text-[#6cc93e] font-bold">Soon !</span><br />
          <span className="text-[#fecd3f] font-bold">(Contact Us)</span>
        </h1>

    </div>
)
}

// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin, Clock, ArrowRight, Calendar, Check, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
// // import imgSolarPanel from "../../assets/solar panel.png";

// export function ContactPage() {
//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">

//       {/* Hero Section */}
//       <section className="relative py-20 px-4 bg-linear-to-br from-gray-50 to-white z-10 mt-15">
//         {/* Background Decorative Elements */}
//         <div className="absolute inset-0 opacity-5 pointer-events-none">
//           <div className="absolute top-10 left-10 w-64 h-64 bg-[#6cc93e] rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fecd3f] rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Contact Us Badge */}
//           <div className="flex justify-center mb-6">
//             <span className="inline-flex items-center px-6 py-2 bg-[rgba(108,201,62,0.1)] text-[#6cc93e] rounded-full text-sm font-semibold">
//               Contact Us
//             </span>
//           </div>

//           {/* Hero Heading */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[#333] mb-6">
//             Let's Start a <span className="text-[#6cc93e]">Conversation</span>
//           </h1>
          
//           <p className="text-lg sm:text-xl text-center text-[rgba(51,51,51,0.8)] max-w-4xl mx-auto mb-12">
//             Speak with our solar experts and take the first step towards clean, affordable, and reliable <br /><span className="text-[#6cc93e]">energy solutions</span>.
//           </p>

//           {/* Stats/Features */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             {[
//               { value: '<2hrs', label: 'Response Time' },
//               { value: '100%', label: 'Client Satisfaction' },
//               { value: '24/7', label: 'Support Available' },
//               { value: 'Free', label: 'Consultation' },
//             ].map((stat, idx) => (
//               <div key={idx} className="text-center bg-gray-100 rounded-2xl h-18 items-center border">
//                 <div className="text-3xl font-bold text-[#6cc93e] mb-2">{stat.value}</div>
//                 <div className="text-sm text-[rgba(51,51,51,0.7)]">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-6">
//             {/* Email Us */}
//             <div className="bg-gray-100 border border-[rgba(0,0,0,0.2)] rounded-3xl p-8">
//               <div className="flex justify-center mb-6">
//                 <div className="bg-[#6cc93e] rounded-2xl p-6">
//                   <Mail className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-black mb-2 text-center">Email Us</h3>
//               <p className="text-base text-black mb-6 text-center font-semibold">jkbnenterprisers@gmail.com</p>
//               <p className="text-base text-black mb-6 text-center leading-relaxed">
//                 For general inquiries. Reach out to us via email and our team will respond promptly.
//               </p>
//               <a
//                 href="mailto:jkbnenterprisers@gmail.com"
//                 className="block w-full bg-[#6cc93e] hover:bg-[#5ab84f] text-white font-bold py-3 rounded-xl text-center transition-colors"
//               >
//                 Send Email
//               </a>
//             </div>

//             {/* Call Us */}
//             <div className="bg-gray-100 border border-[rgba(0,0,0,0.2)] rounded-3xl p-8">
//               <div className="flex justify-center mb-6">
//                 <div className="bg-[#fecd3f] rounded-2xl p-6">
//                   <Phone className="w-12 h-12 text-[#333]" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-black mb-2 text-center">Call Us</h3>
//               <p className="text-base text-black mb-6 text-center font-semibold">+91 75500 55300</p>
//               <p className="text-base text-black mb-6 text-center leading-relaxed">
//                 Speak directly with our solar experts for instant assistance and consultation.
//               </p>
//               <a
//                 href="tel:+917550055300"
//                 className="block w-full bg-[#fecd3f] hover:bg-[#fde047] text-[#333] font-bold py-3 rounded-xl text-center transition-colors"
//               >
//                 Call Now
//               </a>
//             </div>

//             {/* WhatsApp Us */}
//             <div className="bg-gray-100 border border-[rgba(0,0,0,0.2)] rounded-3xl p-8">
//               <div className="flex justify-center mb-6">
//                 <div className="bg-[#6cc93e] rounded-2xl p-6">
//                   <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-black mb-2 text-center">WhatsApp Us</h3>
//               <p className="text-base text-black mb-6 text-center font-semibold">7550055300</p>
//               <p className="text-base text-black mb-6 text-center leading-relaxed">
//                 Get quick answers and solar guidance through WhatsApp chat.
//               </p>
//               <a
//                 href="https://wa.me/917550055300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block w-full bg-[#6cc93e] hover:bg-[#5ab84f] text-white font-bold py-3 rounded-xl text-center transition-colors"
//               >
//                 WhatsApp Consultation
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Schedule a Call Section */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-linear-to-br from-[#273a69] via-[#15203b] to-[#060a12] border border-[rgba(0,0,0,0.2)] rounded-3xl p-8 lg:p-12">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Left Side - Info */}
//               <div>
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="bg-[#fecd3f] rounded-2xl p-4">
//                     <Calendar className="w-10 h-10 text-[#333]" />
//                   </div>
//                   <div>
//                     <h2 className="text-3xl font-bold text-white mb-2">Schedule a Call</h2>
//                     <p className="text-lg text-white">Free 30-minute consultation</p>
//                   </div>
//                 </div>

//                 <p className="text-lg text-mist-400 mb-8 leading-relaxed">
//                   Prefer to talk? Schedule a free 30-minute consultation call with our solar experts to discuss your energy requirements and receive personalized solar solutions.
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-4 mb-8">
//                   {[
//                     'Personalized solar site assessment',
//                     'System capacity & technology recommendations',
//                     'Cost estimation and savings analysis',
//                     'Subsidy guidance and installation timeline',
//                   ].map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-3">
//                       <Check className="w-5 h-5 text-[#6cc93e] shrink-0 mt-0.5" />
//                       <span className="text-base text-mist-400">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right Side - CTA */}
//               <div className="flex flex-col justify-between">
//                 <div>
//                   <button className="w-full bg-[#6cc93e] hover:bg-[#5ab84f] text-white font-semibold py-6 px-8 rounded-2xl transition-colors flex items-center justify-center gap-3 mb-6">
//                     <span className="text-xl">Book a Call Now</span>
//                     <ArrowRight className="w-6 h-6" />
//                   </button>

//                   <div className=" pt-6 space-y-4 mt-12">
//                     <div className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-[#fecd3f]" />
//                       <span className="text-xl text-white font-semibold">+91 7550055300</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Mail className="w-5 h-5 text-[#fecd3f]" />
//                       <span className="text-xl text-white font-semibold">jkbnenterprisers@gmail.com</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-5">
//                   <h3 className="text-xl font-medium text-gray-400 mb-6">Follow us on</h3>
//                   <div className="flex gap-7">
//                     {[
//                       { icon: Facebook, link: '#' },
//                       { icon: Twitter, link: '#' },
//                       { icon: Linkedin, link: '#' },
//                       { icon: Instagram, link: '#' },
//                     ].map((social, idx) => (
//                       <a
//                         key={idx}
//                         href={social.link}
//                         className=" rounded-full  transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <social.icon className="w-6 h-6 text-white hover:text-[#6cc93e] transition-colors" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Visit Our Office Section */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl sm:text-5xl font-bold text-[#333] mb-4">
//               Visit Our <span className="text-[#fecd3f]">Office</span>
//             </h2>
//             <p className="text-xl text-[rgba(51,51,51,0.8)] max-w-3xl mx-auto">
//               Visit our office to discuss your solar requirements and explore suitable energy solutions.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-6">
//             {/* Business Hours Card */}
//             <div className="bg-gray-100 border border-[rgba(0,0,0,0.2)] rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="bg-[#fecd3f] rounded-xl p-4">
//                   <Clock className="w-8 h-8 text-[#333]" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#333]">Business Hours</h3>
//               </div>

//               <div className="space-y-3">
//                 <div className="bg-[#fdf0f0] rounded-xl p-4 border">
//                   <p className="text-base text-[#858587] font-semibold">Monday - Friday: 10:00 AM - 10:00 PM</p>
//                 </div>
//                 <div className="bg-[#fdf0f0] rounded-xl p-4 border">
//                   <p className="text-base text-[#858587] font-semibold">Saturday: 10:00 AM - 8:00PM</p>
//                 </div>
//                 <div className="bg-[#fdf0f0] rounded-xl p-4 border">
//                   <p className="text-base text-[#e33f3f] font-semibold">Sunday: Closed</p>
//                 </div>
//                 <div className="bg-[rgba(108,201,62,0.1)] rounded-xl p-4 mt-13">
//                   <p className="text-sm text-black">
//                     <span className="font-bold text-[#6cc93e]">Emergency Support:</span><br />
//                     Available 24/7 critical system issues and urgent service requirements.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Location Map Card */}
//             <div className="lg:col-span-2 bg-[rgba(236,236,236,0.9)] rounded-2xl overflow-hidden">
//               <div className="bg-[#6cc93e] p-6 flex items-center gap-4">
//                 <div className="bg-[#fecd3f] rounded-full p-4">
//                   <MapPin className="w-8 h-8 text-[#333]" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white">JKBN Enterprisers</h3>
//                   <p className="text-sm text-white">Tambaram, Chennai, India</p>
//                 </div>
//               </div>
              
//               {/* Google Maps Embed */}
//               <div className="relative h-96 bg-gray-200 b order">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.2330642317283!2d80.1063361!3d12.9120755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f5c5e8d9ee1%3A0xb7623a68579d4546!2sJkbn!5e0!3m2!1sen!2sin!4v1773406061598!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="w-full h-full"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// }

// export default ContactPage;