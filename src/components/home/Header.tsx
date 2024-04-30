'use client'

import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

const Header: React.FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    function search() {
        router.push(`/search?query=${searchQuery}`);
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(event.target.value);
    }

    return (
        <div className="flex h-24 w-full items-center justify-center">
            <Link href="/home" className="font-bold font-mono text-3xl hover:text-slate-600 hover:text-[1.7rem] duration-200 cursor-pointer">Yale Journals</Link>
            {/* The following div is the search bar of the page. */}
            <div onKeyDown={ (e) => { if (e.key === "Enter") search(); } } onChange={onChange} className="flex h-14 w-7/12 mx-9 p-5 bg-[#C8E1F1] items-center rounded-full hover:h-[3.3rem] hover:w-[57%] hover:bg-[#b2c8d5] duration-200">
                <IconSearch size={24} strokeWidth={1.5} className="mr-4" />
                <input className="w-full bg-transparent outline-none" type="text" placeholder="Search for topics, publications, or literally whatever you want." />
            </div>
        </div>
    );
};

export default Header;