import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
const Shops = () => {
    return (
        <div className="min-h-screen px-8 lg:px-24 py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full ">
                    <h1 className="text-8xl font-extrabold  text-[#212529]">
                        Shops{" "}
                    </h1>
                    <h2 className="text-4xl font-extrabold  text-[#98AFC7]">
                        Take your business to the next level with features
                        designed to empower entrepreneurs and creatives like
                        you.
                    </h2>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                    <div
                        className="relative text-white rounded-4xl shadow-lg p-16 min-h-[700px] max-w-[800px] flex flex-col justify-between mt-12 overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('/wobbly-arrow-bg-2.68845e8f.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "850px auto",
                            backgroundColor: "#dc3545",
                        }}
                    >
                        <div>
                            <h3 className="text-4xl font-bold mb-6">
                                Create a shop in less than 3 mins and add team
                                members to manage orders in your Pocket shop.
                            </h3>
                        </div>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-8">
                            <img
                                src="/img-2.png"
                                className="w-full max-w-[450px] max-h-[450px] mx-auto object-contain"
                            />
                        </div>
                    </div>
                    <div className="relative rounded-4xl shadow-lg p-16 min-h-[700px] max-w-[400px] flex flex-col justify-between mt-12 overflow-hidden">
                        <div className="absolute top-0 left-0 m-6 w-20 h-20 rounded-[8px] p-6  bg-[#fff] flex items-center justify-center z-10">
                            <StorefrontIcon
                                style={{
                                    fontSize: 55,
                                    color: "#fff",
                                    backgroundColor: "#dc3545",
                                    borderRadius:"15px"
                                }}
                            />
                        </div>

                        <div className="mt-32">
                            <h3 className="text-4xl font-bold mb-10">
                                Enjoy 0% commission and get a custom account
                                number that reflects your business name when you
                                set up a shop account on PocketApp{" "}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shops;
