import Image from 'next/image';
import Link from 'next/link';

export default function Auth() {
  return (
    <div className="flex h-screen">
      <div className="hidden relative lg:flex w-1/2 h-full">
        <Image src="/assets/cross.jpg" alt="Campus" layout="fill" objectFit="cover" quality={100} />
      </div>

      <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 bg-gray-100">
        <h1 className="mb-8 text-4xl font-medium text-red-600 text-left font-serif">Yale Journals</h1>

        <form className="w-full space-y-6">
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
            </label>
            <input type="email" id="email" className="h-12 p-3 mt-1 block w-full rounded-2xl border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" placeholder="Email" required/>
          </div>

          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-700">
              Password
            </label>
            <input type="password" id="password" className="h-12 p-3 mt-1 block w-full rounded-2xl border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" placeholder="Password" required/>
          </div>

          <Link href="/">
            <button type="submit" className="w-full h-14 mt-4 py-2 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Sign In
            </button>
          </Link>
        </form>

        <div className="flex items-center justify-center mt-6">
          <hr className="border-gray-300 w-full" />
          <span className="px-3 text-gray-600">or</span>
          <hr className="border-gray-300 w-full" />
        </div>

        <button type="button" className="w-full h-16 mt-4 flex items-center justify-center py-2 rounded-2xl border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          <Image src="/assets/google.png" alt="Google" width={50} height={50} className="mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
