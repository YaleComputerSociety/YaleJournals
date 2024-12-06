import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <nav className="flex flex-row my-9 mx-24 p-3 justify-between items-center">
                <div className="flex flex-row justify-center items-center">
                    <Link href="/">
                        <h1 className="pr-5 text-4xl text-red-500 font-serif font-medium hover:text-red-600 transition-all duration-300 cursor-pointer">
                            Yale Journals
                        </h1>
                    </Link>
                    <span className="h-12 w-[2px] bg-black"></span>
                    <Link href="/">
                        <button className="ml-5 text-lg text-black hover:underline transition-all duration-300">Search</button>
                    </Link>
                    <Link href="/saved">
                        <button className="ml-5 text-lg text-black hover:underline transition-all duration-300">Saved</button>
                    </Link>
                    <Link href="/team">
                        <button className="ml-5 text-lg text-black hover:underline transition-all duration-300">Team</button>
                    </Link>
                </div>
                <Link href="/auth">
                    <button className="flex flex-col w-32 h-14 justify-center items-center bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-2xl text-white cursor-pointer shadow-lg">
                        Sign In
                    </button>
                </Link>
            </nav>

            <header className="flex flex-col mx-24 my-12 p-10 items-center justify-center bg-gray-100 text-center rounded-xl">
                <h3 className="mb-3 text-xl font-light">WELCOME TO YALE JOURNALS</h3>
                <h2 className="text-3xl font-medium">Discover stories 📖 that ignite <span className="text-red-500">inspiration 💡</span>, <br/> knowledge 🧠, and entertainment 🎬</h2>
            </header>

            <main className="px-24">
                <section>
                    <div className="flex items-center mb-8">
                        <img
                            src="/assets/john-wick.jpg"
                            alt="John Wick"
                            className="w-1/3 rounded-xl shadow-lg"
                        />
                        <div className="ml-8">
                            <div className="flex flex-row mb-2 items-center">
                                <img src="/assets/ydn.png" alt="Yale Daily News" className="h-8 mr-2 rounded-full"/>
                                <p className="text-sm">Yale Daily News • August 25, 2024</p>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 hover:text-3xl transition-all duration-300 cursor-pointer">Where To Watch ‘John Wick: Chapter 4’</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">Latest Stories</h3>
                    <div className="grid grid-cols-3 gap-6">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Link href="/article/${articleId}">
                                <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                                    <img
                                        src="/assets/story-placeholder.jpg"
                                        alt="Story"
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <div className="flex flex-row mb-2 items-center">
                                        <img src="/assets/ydn.png" alt="Yale Daily News" className="h-8 mr-2 rounded-full"/>
                                        <p className="text-sm">Yale Daily News • August 25, 2024</p>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">
                                        Yale mental health experts weigh in on increasing national suicide rates
                                    </h4>
                                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="my-12">
                    <h3 className="text-2xl font-bold mb-4">Publications</h3>
                    <div className="flex justify-between">
                        <img
                            src="/assets/ydn.png"
                            alt="Yale Daily News"
                            className="h-32 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                        <img
                            src="/assets/ydn.png"
                            alt="Yale Scientific"
                            className="h-32 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                        <img
                            src="/assets/ydn.png"
                            alt="Yale Literary Magazine"
                            className="h-32 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                        <img
                            src="/assets/ydn.png"
                            alt="Yale Historical"
                            className="h-32 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 text-center py-6 mt-12">
                <p className="text-sm text-gray-700">
                    Yale Journals © {new Date().getFullYear()} Yale Computer Society. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
