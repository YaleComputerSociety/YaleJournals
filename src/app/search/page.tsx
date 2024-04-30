'use client'

import React from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { useSearchParams } from 'next/navigation';
import data from '../../backend/backend.json';
import Article from '@/components/home/Article';

interface Props {
    query: string;
}

const MyComponent: React.FC<Props> = () => {
    const searchParams = useSearchParams();

    return (
        <div className="flex flex-col h-screen w-screen mt-12">
            <Header />

            <h1 className="m-5 text-sm">Search results for "{searchParams.get("query")}"</h1>
            <div className="inline-grid grid-cols-3 w-screen mb-5 px-5 gap-3">
                {
                    data.articles.map((article, index) => {
                        if (article.title.toLowerCase().includes(searchParams.get("query")!.toLowerCase()) || article.publication.toLowerCase().includes(searchParams.get("query")!.toLowerCase()) || article.topic.toLowerCase().includes(searchParams.get("query")!.toLowerCase())){
                            return (
                                <Article key={index} title={article.title} date={article.date} author={article.author} authorLogo={article.authorLogo} thumbnail={article.thumbnail} publication={article.publication} topic={article.topic} content={article.content} url={article.url} />
                            );
                        }
                    })
                }
            </div>
            
            <Footer />
        </div>
    );
};

export default MyComponent;