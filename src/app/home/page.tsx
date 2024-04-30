import React from 'react';
import Article from '../../components/home/Article';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Welcome from '@/components/home/Welcome';
import data from '../../backend/backend.json';

const Homepage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen w-screen my-12">
            {/* The following div is the header of the page. */}
            <Header />

            {/* The following div is the welcome/category selection section of the page. */}
            <Welcome />

            {/* The following div is the latest publications section of the page. */}
            <div className="flex flex-col w-screen items-center">
                <h1 className="m-8 text-3xl font-serif">Top Stories</h1>
                <div className="inline-grid grid-cols-3 w-screen mb-5 px-5 gap-3">
                    {
                        data.articles.map((article, index) => {
                            return (
                                <Article key={index} title={article.title} date={article.date} author={article.author} authorLogo={article.authorLogo} thumbnail={article.thumbnail} publication={article.publication} topic={article.topic} content={article.content} url={article.url} />
                            );
                        })
                    }
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Homepage;