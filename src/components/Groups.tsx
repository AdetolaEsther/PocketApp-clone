import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Groups = () => {
    return (
        <div className="min-h-screen px-8 lg:px-24 py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full md:w-1/2">
                    <h1 className="text-8xl font-extrabold text-[#212529]">
                        Groups
                    </h1>
                    <h2 className="text-4xl font-extrabold text-[#98AFC7]">
                        A transparent way to manage expenses with anyone
                    </h2>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                    {/* First Card */}
                    <div className="w-full md:w-1/2">
                        <div
                            className="relative rounded-4xl shadow-lg p-16 h-[700px] flex flex-col justify-between overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('/wobbly-arrow-bg-2.68845e8f.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "850px auto",
                                backgroundColor: "#20c997",
                            }}
                        >
                            <div>
                                <h3 className="text-4xl font-bold mb-6">
                                    For your friends, family or significant
                                    other to spend from, anytime.
                                </h3>
                            </div>

                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-8">
                                <img
                                    src="/img-1.png"
                                    alt="Card visual"
                                    className="w-full max-w-[450px] max-h-[450px] mx-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="w-full md:w-1/2">
                        <div
                            className="relative rounded-4xl shadow-lg p-16 h-[700px] flex flex-col justify-between overflow-hidden"
                            style={{ backgroundColor: "#dee2e6" }}
                        >
                            <div className="absolute top-0 left-0 m-6 w-20 h-20 rounded-[8px] bg-[#20c997] flex items-center justify-center z-10">
                                <MoreHorizIcon
                                    style={{ fontSize: 32, color: "white" }}
                                />
                            </div>

                            <div className="mt-24">
                                <h3 className="text-4xl font-bold mb-10">
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
