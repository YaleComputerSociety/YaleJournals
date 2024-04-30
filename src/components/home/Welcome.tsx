import React from 'react';

const Welcome: React.FC = () => {
    function fetchDate() {
        const date = new Date();
        return date.toDateString();
    }

    return (
        <div className="flex flex-col w-screen py-24 justify-center items-center">
            <h1 className="mb-3 text-3xl">Welcome to Yale Journals!</h1>
            <p className="mb-3 text-lg">The best place to find the latest content from your favorite student publications.</p>
            <p className="mb-12 text-sm">{fetchDate()}</p>
            <div className="flex flex-row h-12 w-full items-center justify-center">
                <a href="/search?query=university" className="flex h-10 w-1/12 mx-2 bg-[#E4986D] text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#bb7d59] duration-200">University</a>
                <a href="/search?query=science" className="flex h-10 w-1/12 mx-2 bg-[#46C4A9] text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#399e88] duration-200">Science</a>
                <a href="/search?query=sports" className="flex h-10 w-1/12 mx-2 bg-[#C48C94] text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#a0737a] duration-200">Sports</a>
                <a href="/search?query=politics" className="flex h-10 w-1/12 mx-2 bg-[#C1C2AA] text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#9a9b88] duration-200">Politics</a>
                <a href="/search?query=economics" className="flex h-10 w-1/12 mx-2 bg-[#82CB84] text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#68a16a] duration-200">Economics</a>
                <a href="/search?query=art" className="flex h-10 w-1/12 mx-2 bg-[#97D5FF] text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#79abcd] duration-200">Art</a>
            </div>
        </div>
    );
};

export default Welcome;