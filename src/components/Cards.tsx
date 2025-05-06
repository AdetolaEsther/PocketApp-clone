import React from "react";
import AlbumIcon from "@mui/icons-material/Album";

const Cards = () => {
    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-12 sm:py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-[#212529]">
                            Cards
                        </h1>
                        <button className="px-4 py-2 rounded-3xl text-[#212529] font-bold flex items-center gap-2 bg-[#f4f3f5] text-sm sm:text-base">
                            coming soon
                        </button>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#98AFC7]">
                        Enjoy the flexibility of Pocket Virtual and Physical
                        Cards
                    </h2>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                    <div
                        className="relative rounded-4xl shadow-lg p-6 sm:p-10 md:p-12 lg:p-16 min-h-[500px] md:min-h-[700px] flex flex-col justify-between mt-12 overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('/wobbly-arrow-bg-2.68845e8f.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "850px auto",
                        }}
                    >
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                                Connect your physical card to your personal
                                Pocket, Groups, and Shops. You&apos;re in
                                complete control.
                            </h3>
                        </div>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-6">
                            <img
                                src="/img-3.png"
                                alt="Card visual"
                                className="w-full max-w-[240px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[750px] h-auto mx-auto object-contain"
                            />
                        </div>
                    </div>

                    <div
                        className="relative rounded-4xl shadow-lg p-6 sm:p-10 md:p-12 lg:p-16 min-h-[500px] md:min-h-[700px] flex flex-col justify-between mt-12 overflow-hidden"
                        style={{
                            backgroundColor: "#ffc107",
                        }}
                    >
                        <div className="absolute top-12 bg-white left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-16 sm:h-20 rounded-[8px] flex items-center justify-center z-10">
                            <AlbumIcon
                                style={{ fontSize: 36, color: "#ffc107" }}
                            />
                        </div>

                        <div className="mt-28 sm:mt-32">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center sm:text-left">
                                Pay for your online subscriptions
                            </h3>
                        </div>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-6">
                            <img
                                src="/image-2.png"
                                alt="Card visual"
                                className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto mx-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
