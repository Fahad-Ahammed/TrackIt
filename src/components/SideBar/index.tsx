// "use client";
// import React from "react";
// import { useState, ReactElement } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { FaChevronLeft } from "react-icons/fa";
// // NavBar props types
// type NavBarProps = {
//   isOpen: boolean;
//   toggleSidebar?: () => void;
// };

// // Navbar Link types
// type NavLinks = {
//   title: string;
//   path: string;
//   icon: ReactElement;
// };

// const SideBar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const toggleSidebar = (): void => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <header
//         className={`absolute left-0 top-0 z-[20] h-[65px] w-full bg-[#f8f8f8] ${isOpen ? "border-b" : "max-md:overflow-hidden"} py-[15px] duration-[500ms] ease-in-out md:relative md:left-[unset] md:top-[unset] md:flex md:h-screen md:flex-col md:border-none md:pb-[8px] md:pt-[12px] ${isOpen ? "md:min-w-[230px] md:max-w-[230px] xl:min-w-[260px] xl:max-w-[260px] " : "md:min-w-[64px] md:max-w-[64px] xl:min-w-[72px] xl:max-w-[72px]"} `}
//       >
//         <div
//           className={`absolute right-[-15px] top-[50%] z-[1000000] ml-auto hidden shrink-0 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white p-[10px] md:flex md:duration-500 md:ease-in-out`}
//           onClick={toggleSidebar}
//         >
//           <FaChevronLeft
//             className={`${isOpen ? "right-[1.25px]" : "left-[1.25px] rotate-180"} relative h-[13px] w-[13px]`}
//           />
//         </div>

//         <div className="max-md:mx-auto max-md:w-[90%] md:mx-[10px] md:mb-[15px] md:py-[10px] lg:mx-[8px] lg:mb-[12px] lg:py-[8px]">
//           <div className="flex items-center gap-x-[6px] ">
//             <Logo isOpen={isOpen} />
//             {/* hamburger start*/}
//             <button
//               onClick={toggleSidebar}
//               aria-expanded={isOpen}
//               aria-controls="navigation menu"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               className="relative z-[2] ml-auto h-[24px] w-[24px] border-none bg-transparent md:hidden"
//             >
//               <span
//                 className={`block h-[2px] w-[24px] bg-black transition-transform duration-300 ease-in-out ${
//                   isOpen ? "translate-y-[7px] rotate-45" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`mt-[6px] block h-[2px] w-[24px] bg-black transition-opacity duration-300 ease-in-out ${
//                   isOpen ? "opacity-0" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`mt-[6px] block h-[2px] w-[24px] bg-black transition-transform duration-300 ease-in-out ${
//                   isOpen ? "-translate-y-[9px] -rotate-45" : ""
//                 }`}
//               ></span>
//             </button>
//             {/* hamburger end*/}
//           </div>
//         </div>
//         <NavBar isOpen={isOpen} />
//       </header>
//     </>
//   );
// };

// const Logo = ({ isOpen }: { isOpen: boolean }) => {
//   return (
//     <>
//       <svg
//         className={`md:ml-[11px] xl:ml-[12px] h-[25px] w-[25px] shrink-0 cursor-pointer md:h-[22px] md:w-[22px] xl:w-[30px] xl:h-[30px] md:duration-200 md:ease-in-out`}
//         id="logo-85"
//         width="40"
//         height="40"
//         viewBox="0 0 40 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           className="ccustom"
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
//           fill="#5417D7"
//         ></path>
//       </svg>
//       <h2
//         className={`truncate md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"} relative w-fit bg-gradient-to-r from-[#5417D7] via-[#6d50c4] to-[#9b4dff] bg-clip-text text-center text-[28px] md:text-[20px] font-[700] xl:leading-[40px] xl:text-[32px] leading-[28px] text-transparent`}
//       >
//         TrackIt
//       </h2>
//     </>
//   );
// };

// const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
//   const pathName: string = usePathname();
//   const navStyles: string = `flex items-center gap-x-[10px] ${isOpen ? "md:gap-x-[5px] xl:gap-x-[10px]" : "md:gap-x-0"} md:duration-300 md:ease-in-out text-[16px] font-[500] leading-[28px] text-[#334155] md:mb-2 xl:mb-4 md:text-[14px] xl:text-[16px] md:leading-[20px] lg:text-[14px] p-[15px] md:p-[8px]`;

//   const [isUserProfileOpen, setProfileOpen] = useState(false);

//   const MytaskIcon: React.FC<NavBarProps> = ({ isOpen }) => (
//     <svg
//       className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px] xl:h-[23px] xl:w-[23px] `}
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
//   const WaitlistIcon: React.FC<NavBarProps> = ({ isOpen }) => (
//     <svg
//       className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px] xl:h-[23px] xl:w-[23px]`}
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g clipPath="url(#clip0_1_12388)">
//         <path
//           d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
//           stroke="#334155"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
//           stroke="#334155"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
//           stroke="#334155"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_1_12388">
//           <rect width="16" height="16" fill="white" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
//   const CalendarIcon: React.FC<NavBarProps> = ({ isOpen }) => (
//     <svg
//       className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px]  xl:h-[23px] xl:w-[23px]`}
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M10.6666 1.33337V4.00004"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M5.33337 1.33337V4.00004"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M2 6.66663H14"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M5.33337 9.33337H5.34004"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M8 9.33337H8.00667"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M10.6666 9.33337H10.6733"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M5.33337 12H5.34004"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M8 12H8.00667"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M10.6666 12H10.6733"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
//   const SubscriptionIcon: React.FC<NavBarProps> = ({ isOpen }) => (
//     <svg
//       className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px]  xl:h-[23px] xl:w-[23px]`}
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   const DashboardIcon: React.FC<NavBarProps> = ({ isOpen }) => (
//     <svg
//       className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px]  xl:h-[23px] xl:w-[23px] md:duration-300 md:ease-in-out`}
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M6.66667 2H2V8H6.66667V2Z"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M14 2H9.33337V5.33333H14V2Z"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M14 8H9.33337V14H14V8Z"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z"
//         stroke="#334155"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   const navLinks: NavLinks[] = [
//     {
//       title: "Dashboard",
//       path: "/dashboard",
//       icon: <DashboardIcon isOpen={isOpen} />,
//     },
//     {
//       title: "My Tasks",
//       path: "/my-tasks",
//       icon: <MytaskIcon isOpen={isOpen} />,
//     },
//     {
//       title: "Calendar",
//       path: "/calendar",
//       icon: <CalendarIcon isOpen={isOpen} />,
//     },
//     {
//       title: "Waitlist",
//       path: "/waitlist",
//       icon: <SubscriptionIcon isOpen={isOpen} />,
//     },
//     {
//       title: "Subscription",
//       path: "/subscriptions",
//       icon: <WaitlistIcon isOpen={isOpen} />,
//     },
//   ];

//   return (
//     <>
//       <nav
//         className={`absolute left-0 top-[65px] grow md:relative md:left-[unset] md:top-[unset] ${isOpen ? "max-md:visible max-md:translate-x-0" : "max-md:invisible max-md:translate-x-[-100%]"} w-full bg-[#F8FAFC] pt-[20px] duration-300 ease-in-out md:pt-[30px]`}
//       >
//         <div className="relative mx-auto flex h-full w-[90%] flex-col md:mx-[10px] xl:mx-[12px] md:h-full md:w-[unset] lg:mx-[8px]">
//           <div className="flex min-h-[calc(100vh-65px)] flex-grow flex-col justify-between pb-[70px] min-[600px]:flex-row md:min-h-[unset] md:flex-col md:pb-0">
//             <ul>
//               {navLinks.map((element: NavLinks, index: number) => {
//                 return (
//                   <React.Fragment key={index}>
//                     <li
//                       className={`${pathName === element.path ? "bg-white shadow-md" : "bg-transparent lg:hover:bg-[#E2E8F0]"} rounded-[6px] ${isOpen ? "md:mx-[0px]" : "md:mx-[5px] xl:mx-[3px]"} md:duration-100 md:ease-in-out`}
//                     >
//                       <Link href={element.path} className={navStyles}>
//                         {element.icon}
//                         <span
//                           className={`truncate md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"}`}
//                         >
//                           {element.title}
//                         </span>
//                       </Link>
//                     </li>
//                   </React.Fragment>
//                 );
//               })}
//             </ul>
//             <ul>
//               <li
//                 onClick={() => setProfileOpen(!isUserProfileOpen)}
//                 className={`mb-[12px] rounded-[6px] bg-white shadow-md lg:mb-[8px]`}
//               >
//                 <button
//                   aria-expanded="false"
//                   aria-label="User info"
//                   className="mb-[2px] flex w-full items-center gap-x-[8px] px-[8px] py-[10px]"
//                 >
//                   <div
//                     className={`relative ${isOpen ? "md:mx-[0px]" : "md:mx-[3px]"} h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full md:h-[24px] md:w-[24px] md:duration-300 md:ease-in-out`}
//                   >
//                     <Image
//                       className="cover"
//                       src={"/user.png"}
//                       fill
//                       sizes="(max-width: 768px) 32px,32px"
//                       alt="User avatar"
//                     />
//                   </div>
//                   <div
//                     className={`md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"} text-left text-[18px] leading-[28px] md:text-[12px] md:leading-[20px]`}
//                   >
//                     <span
//                       aria-label="Admin name"
//                       tabIndex={0}
//                       className="block truncate font-[500] text-[#0F172A]"
//                     >
//                       Admin name
//                     </span>
//                     <span
//                       aria-label="Admin email"
//                       tabIndex={0}
//                       className="block truncate font-[400] text-[#64748B]"
//                     >
//                       adminname@mail.com
//                     </span>
//                     <div
//                       className={`${isUserProfileOpen ? "max-h-[50px]" : "max-h-0"} `}
//                     >
//                       sign out
//                     </div>
//                   </div>
//                   <svg
//                     tabIndex={0}
//                     className={`${isOpen ? "md:h-[16px] md:w-[16px]" : "md:h-[0px] md:w-[0px]"} ml-auto h-[22px] w-[22px] shrink-0`}
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M4 6L8 10L12 6"
//                       stroke="#334155"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </li>
//               <li
//                 tabIndex={0}
//                 className={`${isOpen ? "md:mx-0 md:h-[unset]" : "md:mx-[5px] md:h-[48px]"} flex items-center gap-x-[8px] px-[10px] py-[6px] md:px-[10px] md:duration-300 md:ease-in-out lg:px-[8px]`}
//                 aria-label="Help Center information"
//               >
//                 <svg
//                   className="h-[26px] w-[26px] shrink-0 md:h-[16px] md:w-[16px]"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clipPath="url(#clip0_1_12438)">
//                     <path
//                       d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
//                       stroke="#475569"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M6.05994 5.99989C6.21667 5.55434 6.52604 5.17863 6.93324 4.93931C7.34044 4.7 7.8192 4.61252 8.28472 4.69237C8.75024 4.77222 9.17248 5.01424 9.47665 5.37558C9.78083 5.73691 9.94731 6.19424 9.9466 6.66656C9.9466 7.99989 7.9466 8.66656 7.9466 8.66656"
//                       stroke="#475569"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M8 11.3333H8.00667"
//                       stroke="#475569"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1_12438">
//                       <rect width="16" height="16" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <div
//                   className={`md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"} flex flex-col`}
//                 >
//                   <span className="truncate text-[18px] font-[400] leading-[28px] text-[#334155] md:text-[12px] md:leading-[20px]">
//                     Help Center
//                   </span>
//                   <span className="truncate text-[16px] leading-[20px] text-[#64748B] md:text-[10px] md:leading-[16px]">
//                     @2024 TrackIt.Inc.
//                   </span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default SideBar;

"use client";
import React from "react";
import { useState, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { logout } from "@/actions/auth";

// NavBar props types
type NavBarProps = {
  isOpen: boolean;
  toggleSidebar?: () => void;
};

// Navbar Link types
type NavLinks = {
  title: string;
  path: string;
  icon: ReactElement;
};

// Main Sidebar component
const SideBar: React.FC = () => {
  // State to track sidebar open/close status
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggles the sidebar open/close
  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`absolute left-0 top-0 z-[20] h-[65px] w-full bg-[#f8f8f8] ${isOpen ? "border-b" : "max-md:overflow-hidden"} py-[15px] duration-[500ms] ease-in-out md:relative md:left-[unset] md:top-[unset] md:flex md:h-screen md:flex-col md:border-none md:pb-[8px] md:pt-[12px] ${isOpen ? "md:min-w-[230px] md:max-w-[230px] xl:min-w-[260px] xl:max-w-[260px] " : "md:min-w-[64px] md:max-w-[64px] xl:min-w-[72px] xl:max-w-[72px]"}`}
      >
        {/* Sidebar toggle button for larger screens */}
        <div
          className={`absolute right-[-15px] top-[50%] z-[1000000] ml-auto hidden shrink-0 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white p-[10px] md:flex md:duration-500 md:ease-in-out`}
          onClick={toggleSidebar}
        >
          <FaChevronLeft
            className={`${isOpen ? "right-[1.25px]" : "left-[1.25px] rotate-180"} relative h-[13px] w-[13px]`}
          />
        </div>

        {/* Logo and Hamburger Icon */}
        <div className="max-md:mx-auto max-md:w-[90%] md:mx-[10px] md:mb-[15px] md:py-[10px] lg:mx-[8px] lg:mb-[12px] lg:py-[8px]">
          <div className="flex items-center gap-x-[6px] ">
            <Logo isOpen={isOpen} />
            {/* Hamburger menu for mobile screens */}
            <button
              onClick={toggleSidebar}
              aria-expanded={isOpen}
              aria-controls="navigation menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="relative z-[2] ml-auto h-[24px] w-[24px] border-none bg-transparent md:hidden"
            >
              {/* Hamburger Icon lines */}
              <span
                className={`block h-[2px] w-[24px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
              ></span>
              <span
                className={`mt-[6px] block h-[2px] w-[24px] bg-black transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`mt-[6px] block h-[2px] w-[24px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
              ></span>
            </button>
          </div>
        </div>
        <NavBar isOpen={isOpen} />
      </header>
    </>
  );
};

// Logo component
const Logo = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <svg
        className={`md:ml-[11px] xl:ml-[12px] h-[25px] w-[25px] shrink-0 cursor-pointer md:h-[22px] md:w-[22px] xl:w-[30px] xl:h-[30px] md:duration-200 md:ease-in-out`}
        id="logo-85"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ccustom"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
          fill="#5417D7"
        ></path>
      </svg>
      {/* Logo Text */}
      <h2
        className={`truncate md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"} relative w-fit bg-gradient-to-r from-[#5417D7] via-[#6d50c4] to-[#9b4dff] bg-clip-text text-center text-[28px] md:text-[20px] font-[700] xl:leading-[40px] xl:text-[32px] leading-[28px] text-transparent`}
      >
        TrackIt
      </h2>
    </>
  );
};

// Navbar Component
const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  const pathName: string = usePathname();

  // Common styling for Nav Links
  const navStyles: string = `flex items-center gap-x-[10px] ${isOpen ? "md:gap-x-[5px] xl:gap-x-[10px]" : "md:gap-x-0"} md:duration-300 md:ease-in-out text-[16px] font-[500] leading-[28px] text-[#334155] md:mb-2 xl:mb-4 md:text-[14px] xl:text-[16px] md:leading-[20px] lg:text-[14px] p-[15px] md:p-[8px]`;

  // Toggle state for User Profile dropdown
  const [isUserProfileOpen, setProfileOpen] = useState(false);

  //Nav icons components
  const DashboardIcon: React.FC<NavBarProps> = ({ isOpen }) => (
    <svg
      className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px] xl:h-[23px] xl:w-[23px] md:duration-300 md:ease-in-out`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 2H2V8H6.66667V2Z"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2H9.33337V5.33333H14V2Z"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8H9.33337V14H14V8Z"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  const MytaskIcon: React.FC<NavBarProps> = ({ isOpen }) => (
    <svg
      className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px] xl:h-[23px] xl:w-[23px] `}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  const CalendarIcon: React.FC<NavBarProps> = ({ isOpen }) => (
    <svg
      className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px]  xl:h-[23px] xl:w-[23px]`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6666 1.33337V4.00004"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33337 1.33337V4.00004"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.66663H14"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33337 9.33337H5.34004"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.33337H8.00667"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6666 9.33337H10.6733"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33337 12H5.34004"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H8.00667"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6666 12H10.6733"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  const SubscriptionIcon: React.FC<NavBarProps> = ({ isOpen }) => (
    <svg
      className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px]  xl:h-[23px] xl:w-[23px]`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  const WaitlistIcon: React.FC<NavBarProps> = ({ isOpen }) => (
    <svg
      className={`${isOpen ? "md:mx-[0px]" : "md:mx-[2px]"} h-[22px] w-[22px] shrink-0 md:h-[16px] md:w-[16px] xl:h-[23px] xl:w-[23px]`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_12388)">
        <path
          d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
          stroke="#334155"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
          stroke="#334155"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
          stroke="#334155"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_12388">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  

  // Array of navigation links with titles, paths, and icons
  const navLinks: NavLinks[] = [
    { title: "Dashboard", path: "/dashboard", icon: <DashboardIcon isOpen={isOpen} /> },
    { title: "My Tasks", path: "/my-tasks", icon: <MytaskIcon isOpen={isOpen} /> },
    { title: "Calendar", path: "/calendar", icon: <CalendarIcon isOpen={isOpen} /> },
    { title: "Waitlist", path: "/waitlist", icon: <SubscriptionIcon isOpen={isOpen} /> },
    { title: "Subscription", path: "/subscriptions", icon: <WaitlistIcon isOpen={isOpen} /> },
  ];

  return (
    <>
      {/* Sidebar Navigation */}
      <nav
        className={`absolute left-0 top-[65px] grow md:relative md:left-[unset] md:top-[unset] ${isOpen ? "max-md:visible max-md:translate-x-0" : "max-md:invisible max-md:translate-x-[-100%]"} w-full bg-[#F8FAFC] pt-[20px] duration-300 ease-in-out md:pt-[30px]`}
      >
        <div className="relative mx-auto flex h-full w-[90%] flex-col md:mx-[10px] xl:mx-[12px] md:h-full md:w-[unset] lg:mx-[8px]">
          {/* Main navigation links */}
          <div className="flex min-h-[calc(100vh-65px)] flex-grow flex-col justify-between pb-[70px] min-[600px]:flex-row md:min-h-[unset] md:flex-col md:pb-0">
            <ul>
              {navLinks.map((element: NavLinks, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <li
                      className={`${pathName === element.path ? "bg-white shadow-md" : "bg-transparent lg:hover:bg-[#E2E8F0]"} rounded-[6px] ${isOpen ? "md:mx-[0px]" : "md:mx-[5px] xl:mx-[3px]"} md:duration-100 md:ease-in-out`}
                    >
                      <Link href={element.path} className={navStyles}>
                        {element.icon}
                        <span className={`truncate md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"}`}>
                          {element.title}
                        </span>
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
            <ul>
              {/* User Profile section */}
              <li
                onClick={() => setProfileOpen(!isUserProfileOpen)}
                className={`mb-[12px] rounded-[6px] bg-white shadow-md lg:mb-[8px]`}
              >
                <button
                  aria-expanded="false"
                  aria-label="User info"
                  className="mb-[2px] flex w-full items-center gap-x-[8px] px-[8px] py-[10px]"
                >
                  {/* User Profile Image */}
                  <div
                    className={`relative ${isOpen ? "md:mx-[0px]" : "md:mx-[3px]"} h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full md:h-[24px] md:w-[24px] md:duration-300 md:ease-in-out`}
                  >
                    <Image
                      className="cover"
                      src={"/user.png"}
                      fill
                      sizes="(max-width: 768px) 32px,32px"
                      alt="User avatar"
                    />
                  </div>
                  {/* User Name and Email */}
                  <div
                    className={`md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"} text-left text-[18px] leading-[28px] md:text-[12px] md:leading-[20px]`}
                  >
                    <span aria-label="Admin name" tabIndex={0} className="block truncate font-[500] text-[#0F172A]">Admin name</span>
                    <span aria-label="Admin email" tabIndex={0} className="block truncate font-[400] text-[#64748B]">adminname@mail.com</span>
                    {/* Sign-out option, visible when UserProfile is open */}
                    <div className={`${isUserProfileOpen ? "max-h-[50px]" : "max-h-0"} `}>
                      sign out
                    </div>
                  </div>
                  <svg
                    tabIndex={0}
                    className={`${isOpen ? "md:h-[16px] md:w-[16px]" : "md:h-[0px] md:w-[0px]"} ml-auto h-[22px] w-[22px] shrink-0`}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 6L8 10L12 6" stroke="#334155" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              {/* Help Center Information */}
              <li
                tabIndex={0}
                className={`${isOpen ? "md:mx-0 md:h-[unset]" : "md:mx-[5px] md:h-[48px]"} flex items-center gap-x-[8px] px-[10px] py-[6px] md:px-[10px] md:duration-300 md:ease-in-out lg:px-[8px]`}
                aria-label="Help Center information"
              >
                <svg className="h-[26px] w-[26px] shrink-0 md:h-[16px] md:w-[16px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_12438)">
                    <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.05994 5.99989C6.21667 5.55434 6.52604 5.17863 6.93324 4.93931C7.34044 4.7 7.8192 4.61252 8.28472 4.69237C8.75024 4.77222 9.17248 5.01424 9.47665 5.37558C9.78083 5.73691 9.94731 6.19424 9.9466 6.66656C9.9466 7.99989 7.9466 8.66656 7.9466 8.66656" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 11.3333H8.00667" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12438">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={`md:overflow-hidden md:duration-300 ${isOpen ? "md:max-w-full" : "md:max-w-0"} flex flex-col`}>
                  <span className="truncate text-[18px] font-[400] leading-[28px] text-[#334155] md:text-[12px] md:leading-[20px]">Help Center</span>
                  <span className="truncate text-[16px] leading-[20px] text-[#64748B] md:text-[10px] md:leading-[16px]">@2024 TrackIt.Inc.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button onClick={()=>logout()}>
        logout
      </button>
      </nav>
    </>
  );
};

export default SideBar;

