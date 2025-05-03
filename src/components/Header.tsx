import React from "react";


const Header = () => {
    return (
        <div className="h-screen bg-[url('/larva-bg.3443d1c4.png')] bg-cover bg-no-repeat bg-center flex items-center px-8 lg:px-24">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
                <div className="w-1/2 text-white space-y-8" data-aos="fade-up">
                    <div className="relative mb-10">
                        <img
                            src="/logo.svg"
                            alt="QR Code"
                            className="w-[150px] h-[150px]"
                        />
                    </div>

                    <h1 className="text-9xl font-extrabold ">
                        Make <br /> money <br /> moves
                    </h1>

                    <p className="text-lg font-semibold max-w-md">
                        ...with super fast transfers, debit cards, group
                        accounts, and shopping, PocketApp makes sending,
                        receiving and managing your money a breeze.
                    </p>

                    <p className="text-sm  max-w-md">
                        PocketApp is licensed by the CBN as a Mobile Money
                        Operator and funds insured by the NDIC.
                    </p>

                    <div className="flex space-x-6 text-sm font-bold">
                        <p>Licensed by the CBN</p>
                        <img
                            src="/Central_Bank_of_Nigeria_CBN_Logo.png"
                            className="max-w-[30px]"
                        />
                        <p>Deposits insured by</p>
                        <img
                            src="/ndic-logo.24987b9c.jpg"
                            className="w-[50px] h-[20px]"
                        />
                    </div>
                </div>
                <div
                    className="absolute top-[350px] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-30"
                    data-aos="fade-left"
                >
                    <div className="flex items-center space-x-6">
                        <img
                            src="/qr.svg"
                            alt="QR Code"
                            className="w-[100px] h-[100px] rotate-[15deg]"
                        />
                        <img
                            src="/arrow.svg"
                            alt="Arrow"
                            className="w-[70px] h-[70px]"
                        />
                    </div>
                    <h2 className="text-[#c6acfb] font-semibold text-center">
                        Scan to download
                    </h2>
                </div>
                <div
                    className="w-1/2 relative h-[600px] flex items-center justify-center"
                    data-aos="fade-left"
                >
                    <img
                        src="/image.png"
                        alt="Phone UI"
                        className="absolute z-8 max-w-[350px] top-0 left-1/2 transform -translate-x-1/2"
                    />

                    <img
                        src="/image-3.png"
                        alt="Phone UI"
                        className="absolute z-20 max-w-[380px] top-[550px] left-1/2 transform -translate-x-[50%]"
                    />

                    <img
                        src="/__next_static_media_display-card-2.fbfc2bde.png"
                        alt="Card 2"
                        className="absolute max-w-[400px] top-[380px] left-[-10%] rotate-[15deg]"
                    />

                    <img
                        src="/__next_static_media_display-card-3.33349c6e.png"
                        alt="Card 3"
                        className="absolute max-w-[400px] top-[380px] right-[-10%] rotate-[-15deg]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
