import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Shops = () => {
    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-12 sm:py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-[#212529]">
                        Shops
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#98AFC7]">
                        Take your business to the next level with features
                        designed to empower entrepreneurs and creatives like
                        you.
                    </h2>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                    <div
                        className="relative text-white rounded-4xl shadow-lg p-6 sm:p-10 lg:p-16 min-h-[500px] md:min-h-[700px] w-full flex flex-col justify-between mt-12 overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('/wobbly-arrow-bg-2.68845e8f.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "850px auto",
                            backgroundColor: "#dc3545",
                        }}
                    >
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                                Create a shop in less than 3 mins and add team
                                members to manage orders in your Pocket shop.
                            </h3>
                        </div>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-6">
                            <img
                                src="/img-2.png"
                                className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] h-auto mx-auto object-contain"
                                alt="Pocket Shop"
                            />
                        </div>
                    </div>

                    <div className="relative rounded-4xl shadow-lg p-6 sm:p-10 lg:p-16 min-h-[500px] md:min-h-[700px] w-full md:max-w-[400px] flex flex-col justify-between mt-12 overflow-hidden">
                        <div className="absolute top-6 left-6 w-16 sm:w-20 h-16 sm:h-20 rounded-[8px] bg-white flex items-center justify-center z-10">
                            <StorefrontIcon
                                style={{
                                    fontSize: 40,
                                    color: "#fff",
                                    backgroundColor: "#dc3545",
                                    borderRadius: "12px",
                                    padding: "8px",
                                }}
                            />
                        </div>

                        <div className="mt-24">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
                                Enjoy 0% commission and get a custom account
                                number that reflects your business name when you
                                set up a shop account on PocketApp
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shops;
