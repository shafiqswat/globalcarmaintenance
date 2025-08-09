/** @format */

// /** @format */

// import React, { useState, useEffect } from "react";
// import { MenuIcon, CloseIcon } from "../assets/svg";
// import NavLink from "../components/form/NavLink";
// import { navData } from "../assets/dummy";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}>
//       <div className='container mx-auto px-4'>
//         <div className='flex items-center justify-between h-16'>
//           {/* Logo */}
//           <div className='flex items-center'>
//             <Image
//               src='/images/logo.png'
//               alt='JTE Repair Services Logo'
//               width={120}
//               height={100}
//               className='object-contain w-[120px] h-[96px] '
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className='hidden md:flex items-center space-x-8'>
//             {navData.map((item) => (
//               <NavLink
//                 key={item.name}
//                 href={item.href}
//                 className='text-gray-700 hover:text-blue-600 font-medium'>
//                 {item.name}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className='md:hidden p-2 rounded-lg hover:bg-gray-100'>
//             {isMenuOpen ? (
//               <CloseIcon className='w-6 h-6' />
//             ) : (
//               <MenuIcon className='w-6 h-6' />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className='md:hidden bg-white border-t border-gray-200 py-4'>
//             <nav className='flex flex-col space-y-4'>
//               {navData.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   href={item.href}
//                   className='text-gray-700 hover:text-blue-600 font-medium px-4 py-2'
//                   onClick={() => setIsMenuOpen(false)}>
//                   {item.name}
//                 </NavLink>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
