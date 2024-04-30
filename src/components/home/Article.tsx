import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleProps {
    title: string;
    date: string;
    author: string;
    authorLogo: string;
    thumbnail: string;
    publication: string;
    topic: string;
    content: string;
    url: string;
}

const Article: React.FC<ArticleProps> = (props) => {
    function publisherWebsite() {
        const publisher = props.publication;
        if (publisher === "Yale Daily News") {
            return "https://yaledailynews.com/";
        } else if (publisher === "Yale Scientific") {
            return "https://www.yalescientific.org//";
        } else if (publisher === "Yale Politic") {
            return "https://thepolitic.org/";
        }
    }

    return (
        <div className="flex flex-col h-[500px] w-full p-3 bg-[#C8E1F1] items-center rounded-lg">
            <Image src={`${props.thumbnail}`} alt="thumbnail" width={500} height={900} className="rounded-lg mb-6" />
            <a href={publisherWebsite()}><Image src={`${props.authorLogo}`} alt="publication" width={125} height={75} className="mb-8" /></a>
            <Link href={{
                pathname: '/view',
                query: { 
                    title: props.title,
                    date: props.date,
                    author: props.author,
                    authorLogo: props.authorLogo,
                    thumbnail: props.thumbnail,
                    publication: props.publication,
                    topic: props.topic,
                    content: props.content,
                    url: props.url,
                },
            }}
            className="mb-2 font-mono text-2xl text-center cursor-pointer text-ellipsis hover:text-[1.4rem] duration-200">{props.title}</Link>
            <p className="text-sm">{props.date} • {props.author}</p>
        </div>
    );
};

export default Article;