import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const FooterFaq = () => {
    return (
        <div className="flex justify-center px-4 md:px-8 lg:px-24 py-16">
            <div className="max-w-[1400px] w-full">
                <div
                    className="relative bg-[#f4f3f5] text-white rounded-4xl shadow-lg mt-12 flex flex-col xl:flex-row items-start justify-between px-6 md:px-12 py-12 gap-8 overflow-hidden"
                    style={{
                        backgroundImage: "url('/wavy-bg-black.72ada49b.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundColor: "#212337",
                    }}
                >
                    <div className="flex flex-col max-w-xl text-center xl:text-left z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[rgb(191,194,217)] mb-4">
                            Download the app
                        </h2>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#6c757d] mb-6">
                            Over 2 million people trust PocketApp for their
                            daily money moves. Download PocketApp today to get
                            started.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                            <button className="bg-[#f4f3f5] px-6 py-3 rounded-3xl text-[#212337] font-bold flex items-center gap-2">
                                <AppleIcon /> App Store
                            </button>
                            <button className="bg-[#f4f3f5] px-6 py-3 rounded-3xl text-[#212337] font-bold flex items-center gap-2">
                                <ShopIcon /> Google Play
                            </button>
                        </div>
                    </div>

                    <img
                        src="/footer-display.png"
                        alt="App preview"
                        className="hidden xl:block xl:absolute xl:-bottom-10 xl:right-10 xl:max-w-[300px] w-full h-auto object-contain z-0"
                    />
                </div>

                <div className="bg-[#f4f3f5] rounded-4xl shadow-lg mt-12 flex flex-wrap justify-center md:justify-between gap-6 px-6 md:px-16 py-8">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[rgb(191,194,217)]">
                        FAQs
                    </h2>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[rgb(191,194,217)]">
                        Privacy
                    </h2>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[rgb(191,194,217)]">
                        Terms
                    </h2>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[rgb(191,194,217)]">
                        Help
                    </h2>
                </div>

                <div className="rounded-4xl mt-12 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-8 gap-6 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-4xl font-extrabold text-[#6610f2]">
                            Pocket
                        </h2>
                        <p className="text-xl text-[#6c757d] -mt-1">App</p>
                    </div>

                    <div className="text-xl">
                        <p>hello@pocketapp.com</p>
                        <p>+234 700 933 9339</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-4">
                            <FacebookIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                            <TwitterIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                            <InstagramIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                            <PinterestIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                        </div>
                        <h2 className="text-xl max-w-sm">
                            Tesmot house, Abdulrahman Okene Close, Victoria
                            Island, Lagos, Nigeria.
                        </h2>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center px-6 py-12 gap-6 border-t-2 text-center">
                    <h2 className="text-xl font-medium">
                        PocketApp is licensed by the CBN as a Mobile Money
                        Operator and funds insured by the NDIC.
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="/Central_Bank_of_Nigeria_CBN_Logo.png"
                                alt="CBN Logo"
                                className="w-10 h-auto"
                            />
                            <h2 className="text-sm">Licensed by the CBN</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm">
                                Deposits insured by NDIC
                            </h2>
                            <img
                                src="/ndic-logo.24987b9c.jpg"
                                alt="NDIC Logo"
                                className="w-20 h-auto"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <img
                                src="/compliance-badge.5c994945.png"
                                alt="Compliance Badge"
                                className="w-20 h-auto"
                            />
                        </div>
                    </div>

                    <p className="text-[#6610f2] mt-6 text-sm">© 2025</p>
                </div>
            </div>
        </div>
    );
};

export default FooterFaq;
