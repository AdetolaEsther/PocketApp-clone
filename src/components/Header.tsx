import React from "react";


const Header = () => {
    return (
        <div className="min-h-full bg-[url('/larva-bg.3443d1c4.png')] bg-cover bg-no-repeat bg-center flex items-center px-8 lg:px-24 py-16 sm:py-24 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
                <div
                    className="w-full md:w-1/2 text-white space-y-4 md:space-y-8 text-center md:text-left mb-12 md:mb-0"
                    data-aos="fade-up"
                >
                    <div className="relative mb-4 md:mb-10 flex justify-center md:justify-start">
                        <img
                            src="/logo.svg"
                            alt="Logo"
                            className="w-24 h-24 md:w-36 md:h-36 lg:w-[150px] lg:h-[150px] object-contain"
                        />
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-9xl font-extrabold leading-tight">
                        Make <br className="hidden md:block" /> money{" "}
                        <br className="hidden md:block" /> moves
                    </h1>

                    <p className="text-base md:text-lg  max-w-md mx-auto md:mx-0">
                        ...with super fast transfers, debit cards, group
                        accounts, and shopping, PocketApp makes sending,
                        receiving and managing your money a breeze.
                    </p>

                    <p className="text-xs md:text-sm max-w-md mx-auto md:mx-0">
                        PocketApp is licensed by the CBN as a Mobile Money
                        Operator and funds insured by the NDIC.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 lg:space-x-6 text-xs md:text-sm font-bold items-center">
                        <p>Licensed by the CBN</p>
                        <img
                            src="/Central_Bank_of_Nigeria_CBN_Logo.png"
                            className="max-w-[20px] md:max-w-[30px]"
                            alt="CBN Logo"
                        />
                        <p>Deposits insured by</p>
                        <img
                            src="/Central_Bank_of_Nigeria_CBN_Logo.png"
                            className="max-w-[30px] w-full h-auto"
                            alt="CBN Logo"
                        />
                    </div>
                </div>
                <div
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center space-y-2 z-30 top-1/2 lg:top-[350px]"
                    data-aos="fade-left"
                >
                    <div className="flex items-center space-x-6">
                        <img
                            src="/qr.svg"
                            alt="QR Code"
                            className="w-20 h-20 lg:w-[100px] lg:h-[100px] rotate-[15deg]"
                        />
                        <img
                            src="/arrow.svg"
                            alt="Arrow"
                            className="w-14 h-14 lg:w-[70px] lg:h-[70px]"
                        />
                    </div>
                    <h2 className="text-[#c6acfb] font-semibold text-center">
                        Scan to download
                    </h2>
                </div>
                <div
                    className="w-full md:w-1/2 relative h-[32rem] sm:h-[38rem] md:h-[44rem] flex items-center justify-center"
                    data-aos="fade-left"
                >
                    <img
                        src="/image.png"
                        alt="Phone UI"
                        className="absolute z-10 w-[9rem] sm:w-[10rem] md:w-[12.5rem] lg:w-[21.875rem] top-4 sm:top-6 md:top-0 left-1/2 transform -translate-x-1/2"
                    />
                    <img
                        src="/image-3.png"
                        alt="Purple card"
                        className="absolute z-20 w-[11.25rem] sm:w-[13.75rem] md:w-[18.75rem] lg:w-[25rem] top-[17.5rem] sm:top-[20rem] md:top-[34.375rem] left-1/2 transform -translate-x-1/2"
                    />
                    <img
                        src="/__next_static_media_display-card-2.fbfc2bde.png"
                        alt="Pink Card"
                        className="absolute w-[10rem] sm:w-[11.25rem] md:w-[15.625rem] lg:w-[25rem] top-[12.5rem] sm:top-[15rem] md:top-[23.75rem] left-[5%] md:left-[-10%] rotate-[15deg]"
                    />
                    <img
                        src="/__next_static_media_display-card-3.33349c6e.png"
                        alt="Green Card"
                        className="absolute w-[10rem] sm:w-[11.25rem] md:w-[15.625rem] lg:w-[25rem] top-[12.5rem] sm:top-[15rem] md:top-[23.75rem] right-[5%] md:right-[-10%] rotate-[-15deg]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
