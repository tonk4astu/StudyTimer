import Link from 'next/link'
export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
            <h1 className="text-2xl font-bold">Study Timer</h1>
        </div>
        <div className="flex flex-row items-center">
            <Link href="/Login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign In
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
            </button>
            </Link>
        </div>
    </nav>
  )
}
