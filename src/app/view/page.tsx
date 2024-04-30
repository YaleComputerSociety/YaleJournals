'use client'

import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const Viewer: React.FC = () => {
    const searchParams = useSearchParams();

    return (
        <div className="flex flex-col h-screen w-screen items-center mt-12">
            <Header />

            <div className="flex flex-col w-3/5 h-screen mt-20 items-start">
                <h1 className="text-3xl font-bold font-serif mb-2">{searchParams.get("title")}</h1>
                <p className="text-lg mb-3">{searchParams.get("date")} • {searchParams.get("author")}</p>
                <a href={`${searchParams.get("url")}`} className="cursor-pointer">
                    <div className="flex flex-row justify-center">
                        <p className="mr-1 hover:text-blue-400 hover:underline duration-200">Read it on </p>
                        <Image src={`${searchParams.get("authorLogo")}`} alt="publication" width={100} height={50} className="mb-8" />
                    </div>
                </a>
                <Image src={`${searchParams.get("thumbnail")}`} alt="thumbnail" width={1000} height={1800} className="rounded-lg mb-5" />
                <p className="text-lg font-serif">{searchParams.get("content")}</p>
            </div>

            <Footer />
        </div>
    );
};

export default Viewer;
