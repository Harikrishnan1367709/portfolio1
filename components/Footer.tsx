'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-[96px] pb-[36px] bg-[#020202] font-sans">
      <div className="max-w-[1148px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-8 pb-8 lg:mb-16 lg:pb-16 gap-16 lg:gap-0">
          
          {/* Left Side: Links and Address */}
          <div className="flex flex-col justify-between pr-8 w-full lg:w-[45%] mb-12 lg:mb-0">
            
            {/* Follow Us */}
            <div>
              <h3 className="text-[#8a8a8a] text-[14px] font-normal mb-6">Follow Us</h3>
              <ul className="flex items-center gap-6">
                <li>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://linkedin.com"
                    className="flex justify-center items-center hover:opacity-80 transition-opacity"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#FAFBFC"></path></svg>
                  </a>
                </li>
                <li>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://instagram.com"
                    className="flex justify-center items-center hover:opacity-80 transition-opacity"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0027 5.8467C8.59743 5.8467 5.85075 8.594 5.85075 12C5.85075 15.406 8.59743 18.1533 12.0027 18.1533C15.4079 18.1533 18.1546 15.406 18.1546 12C18.1546 8.594 15.4079 5.8467 12.0027 5.8467ZM12.0027 16.0004C9.80212 16.0004 8.00312 14.2064 8.00312 12C8.00312 9.7936 9.79677 7.99955 12.0027 7.99955C14.2086 7.99955 16.0022 9.7936 16.0022 12C16.0022 14.2064 14.2032 16.0004 12.0027 16.0004ZM19.8412 5.595C19.8412 6.39295 19.1987 7.03024 18.4062 7.03024C17.6085 7.03024 16.9713 6.38759 16.9713 5.595C16.9713 4.80241 17.6138 4.15977 18.4062 4.15977C19.1987 4.15977 19.8412 4.80241 19.8412 5.595ZM23.9157 7.05166C23.8247 5.12909 23.3856 3.42608 21.9775 2.02298C20.5747 0.619882 18.8721 0.180743 16.9499 0.0843468C14.9689 -0.0281156 9.03112 -0.0281156 7.05008 0.0843468C5.1333 0.175388 3.43068 0.614526 2.02253 2.01763C0.614389 3.42073 0.180703 5.12373 0.0843279 7.0463C-0.0281093 9.02778 -0.0281093 14.9669 0.0843279 16.9483C0.175349 18.8709 0.614389 20.5739 2.02253 21.977C3.43068 23.3801 5.12794 23.8193 7.05008 23.9157C9.03112 24.0281 14.9689 24.0281 16.9499 23.9157C18.8721 23.8246 20.5747 23.3855 21.9775 21.977C23.3803 20.5739 23.8193 18.8709 23.9157 16.9483C24.0281 14.9669 24.0281 9.03314 23.9157 7.05166ZM21.3564 19.0744C20.9388 20.1241 20.1303 20.9327 19.0755 21.3558C17.496 21.9824 13.7481 21.8378 12.0027 21.8378C10.2572 21.8378 6.50396 21.977 4.92984 21.3558C3.88042 20.9381 3.07195 20.1294 2.64897 19.0744C2.02253 17.4946 2.16709 13.7458 2.16709 12C2.16709 10.2542 2.02789 6.50006 2.64897 4.92558C3.06659 3.87593 3.87507 3.06728 4.92984 2.6442C6.50931 2.01763 10.2572 2.16222 12.0027 2.16222C13.7481 2.16222 17.5014 2.02298 19.0755 2.6442C20.1249 3.06192 20.9334 3.87058 21.3564 4.92558C21.9828 6.50541 21.8383 10.2542 21.8383 12C21.8383 13.7458 21.9828 17.4999 21.3564 19.0744Z" fill="#FAFBFC"></path></svg>
                  </a>
                </li>
                <li>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://facebook.com"
                    className="flex justify-center items-center hover:opacity-80 transition-opacity"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073C24 5.40365 18.629 0 12 0C5.37097 0 0 5.40365 0 12.073C0 18.0988 4.38823 23.0935 10.125 24V15.563H7.07661V12.073H10.125V9.41306C10.125 6.38751 11.9153 4.71627 14.6574 4.71627C15.9706 4.71627 17.3439 4.95189 17.3439 4.95189V7.92146H15.8303C14.34 7.92146 13.875 8.85225 13.875 9.8069V12.073H17.2031L16.6708 15.563H13.875V24C19.6118 23.0935 24 18.0988 24 12.073Z" fill="#FAFBFC"></path></svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Find Us */}
            <div className="max-w-[420px]">
              <h3 className="text-[#8a8a8a] text-[14px] font-normal mb-5">Find Us</h3>
              <p className="text-[#FAFBFC] text-[18px] lg:text-[20px] font-normal leading-[1.6] mb-6 tracking-wide">
                No: 54 Bharathi Park 7th Cross, Near ICICI Bank, Saibaba Colony, Coimbatore, Tamil Nadu 641043, India
              </p>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.google.com/maps/search/?api=1&query=54+Bharathi+Park+7th+Cross,+Near+ICICI+Bank,+Saibaba+Colony,+Coimbatore"
                className="inline-block text-[#8a8a8a] text-[12px] font-medium tracking-[0.25em] uppercase border-b border-[#333] pb-1 hover:text-[#FAFBFC] hover:border-[#FAFBFC] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Side: Contact Cards */}
          <div className="flex flex-col sm:flex-row w-full lg:w-[55%] shrink-0">
            
            {/* WhatsApp / Email Card */}
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="mailto:23z132@psgietch.ac.in"
              className="group relative flex flex-col justify-between p-8 lg:p-[40px] border border-[#292b2f] sm:border-r-0 flex-1 transition-all duration-300 min-h-[300px]"
              style={{ zIndex: 1 }}
            >
              {/* Pseudo-element style for hover */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none"
                style={{
                  background: 'url(https://i.ibb.co/G3Wc6DW/cardBg.png), linear-gradient(146.61deg, #202324 -1.27%, rgba(35, 35, 35, 0) 101.4%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 100%'
                }}
              />

              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_4903)">
                  <path d="M23.736 23.0584C23.736 23.0584 23.8387 22.9851 24.0027 22.8597C26.46 20.9597 28 18.2064 28 15.1411C28 9.4264 22.6267 4.78906 16.0027 4.78906C9.376 4.78906 4 9.4264 4 15.1411C4 20.8584 9.37333 25.3357 16 25.3357C16.5653 25.3357 17.4933 25.2984 18.784 25.2237C20.4667 26.3171 22.9227 27.2144 25.072 27.2144C25.7373 27.2144 26.0507 26.6677 25.624 26.1104C24.976 25.3157 24.0827 24.0424 23.736 23.0571V23.0584Z" stroke="#FAFBFC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10 18C13.3333 21.3333 18.6667 21.3333 22 18" stroke="#FAFBFC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs><clipPath id="clip0_3_4903"><rect width="32" height="32" fill="white"></rect></clipPath></defs>
              </svg>

              <p className="text-[#FAFBFC] text-[16px] lg:text-[18px] font-normal leading-[1.4] flex items-end justify-between w-full m-0 p-0 mt-auto tracking-wide">
                <span>Chat with <br /> Sales Team</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[2px] ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M4.16797 10H15.8346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.5 13.3333L15.8333 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.5 6.67188L15.8333 10.0052" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </p>
            </a>

            {/* Phone Card */}
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="tel:+919790631286"
              className="group relative flex flex-col justify-between p-8 lg:p-[40px] border border-[#292b2f] flex-1 transition-all duration-300 min-h-[300px]"
              style={{ zIndex: 1 }}
            >
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none"
                style={{
                  background: 'url(https://i.ibb.co/G3Wc6DW/cardBg.png), linear-gradient(146.61deg, #202324 -1.27%, rgba(35, 35, 35, 0) 101.4%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 100%'
                }}
              />

              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_4915)">
                  <path d="M6.66667 5.33594H12L14.6667 12.0026L11.3333 14.0026C12.7613 16.898 15.1046 19.2413 18 20.6693L20 17.3359L26.6667 20.0026V25.3359C26.6667 26.0432 26.3857 26.7215 25.8856 27.2216C25.3855 27.7217 24.7072 28.0026 24 28.0026C18.799 27.6865 13.8935 25.4779 10.2091 21.7935C6.52467 18.1091 4.31607 13.2036 4 8.0026C4 7.29536 4.28095 6.61708 4.78105 6.11699C5.28115 5.61689 5.95942 5.33594 6.66667 5.33594" stroke="#FAFBFC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs><clipPath id="clip0_3_4915"><rect width="32" height="32" fill="white"></rect></clipPath></defs>
              </svg>

              <p className="text-[#FAFBFC] text-[16px] lg:text-[18px] font-normal leading-[1.4] flex items-end justify-between w-full m-0 p-0 mt-auto tracking-wide">
                <span>Sales <br />Inquiry Call</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[2px] ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M4.16797 10H15.8346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.5 13.3333L15.8333 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.5 6.67188L15.8333 10.0052" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </p>
            </a>

          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-start">
          <label className="text-[#8a8a8a] text-[13px] font-normal">
            © {currentYear} Jawanexis Technologies
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
