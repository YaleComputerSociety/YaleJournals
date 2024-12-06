import Link from 'next/link';

const teamMembers = [
    {
        name: "Rifat Tarafder",
        role: "Project Lead",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/rifat.jpg",
    },
    {
        name: "Jorge Torres",
        role: "Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/jorge.jpg",
    },
    {
        name: "Ryan Kulsakdinum",
        role: "Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/ryan.jpg",
    },
    {
        name: "Dane Keahi",
        role: "Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/dane.jpg",
    },
    {
        name: "Alvin Lu",
        role: "Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/alvin.jpg",
    },
];

export default function TeamPage() {
    return (
        <div className="flex flex-col h-screen">
            <nav className="flex flex-row mx-24 my-9 p-3 justify-between items-center">
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

            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">Meet the Team</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Our team is dedicated to bringing you the best stories, news, and insights.
                </p>
            </header>

            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-24">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full mb-4 object-cover shadow-md"
                        />
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <p className="text-red-500 text-sm mb-2">{member.role}</p>
                        <p className="text-gray-700 text-sm">{member.bio}</p>
                    </div>
                ))}
            </main>

            <footer className="bg-gray-100 text-center py-6 mt-12">
                <p className="text-sm text-gray-700">
                    Yale Journals © {new Date().getFullYear()} Yale Computer Society. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
