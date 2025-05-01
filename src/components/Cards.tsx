import React from "react";
import AlbumIcon from "@mui/icons-material/Album";
const Cards = () => {
    return (
        <div className="min-h-screen px-8 lg:px-24 py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full md:w-1/2">
                    <h1 className="text-8xl font-extrabold  text-[#212529]">
                        Cards{" "}
                    </h1>
                    <h2 className="text-4xl font-extrabold  text-[#98AFC7]">
                        Enjoy the flexibility of Pocket Virtual and Physical
                        Cards
                    </h2>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                    <div
                        className="relative  rounded-4xl shadow-lg p-16 min-h-[700px] flex flex-col justify-between mt-12 overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('/wobbly-arrow-bg-2.68845e8f.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "850px auto",
                        }}
                    >
                        <div>
                            <h3 className="text-4xl font-bold mb-6">
                                Connect your physical card to your personal
                                Pocket, Groups, and Shops. You're in complete
                                control.
                            </h3>
                        </div>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-8">
                            <img
                                src="/img-3.png"
                                alt="Card visual"
                                className="w-full max-w-[750px] max-h-[650px] mx-auto object-contain"
                            />
                        </div>
                    </div>
                    <div
                        className="relative rounded-4xl shadow-lg p-16 min-h-[700px] flex flex-col justify-between mt-12 overflow-hidden"
                        style={{
                            backgroundColor: "#ffc107",
                            backgroundSize: "550px auto",
                        }}
                    >
                        <div className="absolute top-12 bg-[#fff] left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-[8px] flex items-center justify-center z-10">
                            <AlbumIcon
                                style={{ fontSize: 55, color: "#ffc107" }}
                            />
                        </div>

                        <div className="mt-32">
                            <h3 className="text-4xl font-bold mb-10">
                                Pay for your online subscriptions
                            </h3>
                        </div>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-8">
                            <img
                                src="/image-2.png"
                                alt="Card visual"
                                className="w-full max-w-[400px] max-h-[450px] mx-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
