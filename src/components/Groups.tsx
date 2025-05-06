import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Groups = () => {
    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-12 sm:py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-[#212529]">
                        Groups
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#98AFC7]">
                        A transparent way to manage expenses with anyone
                    </h2>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                        <div
                            className="relative rounded-4xl shadow-lg p-6 sm:p-10 lg:p-16 min-h-[500px] md:min-h-[700px] flex flex-col justify-between overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('/wobbly-arrow-bg-2.68845e8f.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "850px auto",
                                backgroundColor: "#20c997",
                            }}
                        >
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                                    For your friends, family or significant
                                    other to spend from, anytime.
                                </h3>
                            </div>

                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-6">
                                <img
                                    src="/img-1.png"
                                    alt="Card visual"
                                    className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto mx-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div
                            className="relative rounded-4xl shadow-lg p-6 sm:p-10 lg:p-16 min-h-[500px] md:min-h-[700px] flex flex-col justify-between overflow-hidden"
                            style={{ backgroundColor: "#dee2e6" }}
                        >
                            <div className="absolute top-6 left-6 w-16 sm:w-20 h-16 sm:h-20 rounded-[8px] bg-[#20c997] flex items-center justify-center z-10">
                                <MoreHorizIcon
                                    style={{ fontSize: 28, color: "white" }}
                                />
                            </div>

                            <div className="mt-24">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                                    For your staff to track spending and manage
                                    expenses with customized access levels and
                                    permissions.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Groups;
