import React, { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Testimonials = () => {
    const testimonialData = [
        {
            name: "Sarah Johnson",
            userName: "@sarah_design",
            img: <Person2Icon fontSize="large" />,
            text: "This product completely transformed my workflow. I&apos;ve saved hours each week and the customer support team has been incredibly helpful with the onboarding process.",
        },
        {
            name: "Michael Chen",
            userName: "@mike_developer",
            img: <Person2Icon fontSize="large" />,
            text: "After trying multiple similar solutions, this one stands out for its intuitive interface and powerful features. Definitely worth the investment for our team.",
        },
        {
            name: "Olivia Rodriguez",
            userName: "@livvy_creates",
            img: <Person2Icon fontSize="large" />,
            text: "As a freelancer, I needed something reliable and easy to use. This exceeded my expectations and has become an essential part of my daily routine.",
        },
        {
            name: "James Wilson",
            userName: "@jwilson_tech",
            img: <Person2Icon fontSize="large" />,
            text: "The attention to detail in this product is impressive. It&apos;s clear the team understands what users actually need rather than just adding flashy features.",
        },
        {
            name: "Amara Patel",
            userName: "@amara_p",
            img: <Person2Icon fontSize="large" />,
            text: "I was skeptical at first, but after using it for three months, I can&apos;t imagine going back. It&apos;s simplified our team collaboration and improved our output quality.",
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 2;

    const getCurrentTestimonials = () =>
        testimonialData.slice(
            currentPage * cardsPerPage,
            (currentPage + 1) * cardsPerPage
        );

    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const goToNextPage = () => {
        setCurrentPage((prev) =>
            Math.min(
                prev + 1,
                Math.ceil(testimonialData.length / cardsPerPage) - 1
            )
        );
    };

    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-12 sm:py-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative mt-10 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-[#212529]">
                            Testimonials
                        </h1>
                        <button
                            className="self-start sm:self-auto p-2 rounded-2xl text-[#1DA1F2] font-bold flex items-center gap-1 bg-[#c9f5ff]"
                            aria-label="Follow PocketApp on Twitter"
                        >
                            <TwitterIcon sx={{ color: "#1DA1F2" }} /> Follow
                            PocketApp
                        </button>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#98AFC7]">
                        Here&apos;s what some users who have hopped on the
                        PocketApp train have to say. train have to say.
                    </h2>
                </div>

                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {getCurrentTestimonials().map((testimonial, index) => (
                            <div
                                key={index}
                                className="rounded-[2rem] shadow-lg p-6 sm:p-8 border-2 flex flex-col h-full"
                            >
                                <div className="flex items-center w-full mb-6">
                                    <div className="bg-gray-100 rounded-full p-3">
                                        {testimonial.img}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-gray-600">
                                            {testimonial.userName}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-grow mb-4">
                                    <p className="text-base sm:text-lg">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                    <button
                        onClick={goToPreviousPage}
                        className="bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400"
                        aria-label="Previous testimonials"
                    >
                        <ArrowBackIcon />
                    </button>

                    <button
                        onClick={goToNextPage}
                        className="bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400"
                        aria-label="Next testimonials"
                    >
                        <ArrowForwardIcon />
                    </button>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        In the Press:
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
