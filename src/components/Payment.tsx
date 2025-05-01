import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Payment = () => {
    return (
        <div className="min-h-screen px-8 lg:px-24 py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full md:w-1/2">
                    <h1 className="text-8xl font-extrabold  text-[#212529]">
                        Payment
                    </h1>
                    <h2 className="text-4xl font-extrabold  text-[#98AFC7]">
                        All your transactions in one place
                    </h2>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                    <div
                        className="relative text-white rounded-4xl shadow-lg p-16 min-h-[700px] flex flex-col justify-between mt-12 overflow-hidden"
                        style={{
                            backgroundColor: "#6610f2",
                            backgroundImage:
                                "url('/lightning-bolt.857e6270.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "calc(100% + 170px) center", // push far right
                            backgroundSize: "550px auto",
                        }}
                    >
                        <div>
                            <h3 className="text-4xl font-bold mb-6">
                                Experience lightning-fast transfers <br />
                                when you make and receive payments with your
                                Pocket ID.
                            </h3>
                        </div>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-8">
                            <img
                                src="/image-1.png"
                                alt="Card visual"
                                className="w-full max-w-[400px] max-h-[450px] mx-auto object-contain"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 flex flex-col gap-6">
                        <div className="bg-[#20c997] text-white rounded-[2rem] shadow-lg p-6 min-h-[350px] flex flex-col items-center justify-end relative text-center">
                            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-[#212529] text-white border-[8px] border-white rounded-full flex items-center justify-center text-center text-base font-bold z-10">
                                <div>
                                    15%
                                    <br />
                                    p.a
                                </div>
                            </div>

                            <div className="mt-24">
                                <h3 className="text-xl font-semibold">
                                    Paid daily on your cash
                                    <br />
                                    balance
                                </h3>
                            </div>
                        </div>

                        <div className="bg-[#212529] text-white rounded-[2rem] shadow-lg p-6 min-h-[350px] flex flex-col items-center justify-end relative text-center">
                            <div className="absolute top-16 bg-[#adb5bd] left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-[8px] flex items-center justify-center z-10">
                                <NotificationsActiveIcon
                                    style={{ fontSize: 32, color: "white" }}
                                />
                            </div>

                            <div className="mt-24">
                                <h3 className="text-xl font-semibold">
                                    Get notified of incoming <br />
                                    transfers, send money to <br />
                                    any bank in Nigeria
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-[#f4f3f5] rounded-4xl shadow-lg min-h-[400px] mt-12 flex items-center justify-between px-16 py-8"
                    style={{
                        backgroundImage:
                            "url('/wobbly-arrow-bg-2.68845e8f.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "850px auto",
                    }}
                >
                    <h2 className="text-4xl font-extrabold text-[rgb(191, 194, 217)] max-w-[50%]">
                        Pay all your bills in one place.
                    </h2>

                    <div className="flex max-w-[350px] transform translate-y-8">
                        <img
                            src="/pay-faster.png"
                            alt="Card visual"
                            className="w-full max-h-[350px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
