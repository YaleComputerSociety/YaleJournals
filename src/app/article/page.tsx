"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ArticlePage() {
    const searchParams = useSearchParams();

    const article = {
        title: "U.S. Milk to Be Tested for Bird Flu Virus",
        subtitle: "New federal rules call for testing unpasteurized milk from dairy processors and for farm owners to provide details that would help officials identify and track cases more easily.",
        authors: ["Apoorva Mandavilli"],
        date: "Dec. 6, 2024",
        updateTime: "2:36 p.m. ET",
        content: "The U.S. Department of Agriculture will begin testing the nation’s milk supply for the bird flu virus known as H5N1, nearly a year after the virus began circulating through dairy cattle, the department announced on Friday.\nUnder the new strategy, officials will test samples of unpasteurized milk from large storage tanks at dairy processing facilities across the country.\nFarmers and dairy processors will be required to provide samples of raw milk on request from the government. And farm owners with infected herds will be required to provide details that would help officials identify more cases and contacts.",
        image: "/assets/cross.jpg",
    };

    return (
        <div className="px-24 pb-6">
            <nav className="flex flex-row my-9 p-3 justify-between items-center">
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
                    <Link href="/">
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

            <header className="border-b pb-6 mb-6">
                <h1 className="text-4xl font-bold">{searchParams.get("title")}</h1>                    
                <p className="text-lg text-gray-700 mt-4">{searchParams.get("content")?.split(".")[1] + "."}</p>
                <div className="flex flex-col mt-6">
                    <div className="flex items-center mb-2">
                        {searchParams.get("author")}
                    </div>
                    <div className="text-sm text-gray-500">
                        {searchParams.get("date")}
                    </div>
                </div>
            </header>

            <main className="flex flex-col items-center">
                <img
                    src={`${searchParams.get("thumbnail")}`}
                    alt="Article visual"
                    className="rounded-lg shadow-md mb-8"
                />
                <article className="text-gray-800 text-lg leading-8 whitespace-pre-wrap">
                    {searchParams.get("content")}
                </article>
            </main>

            <footer className="mt-12 text-gray-500 text-sm">
                <div className="flex items-center justify-between border-t pt-6">
                    <span>© {new Date().getFullYear()} Yale Journals</span>
                    <div className="flex space-x-4">
                        <button className="hover:text-red-500 transition-colors">Share</button>
                        <button className="hover:text-red-500 transition-colors">Bookmark</button>
                        <button className="hover:text-red-500 transition-colors">0 Comments</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
