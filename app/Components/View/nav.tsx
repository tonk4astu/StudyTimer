'use client'
import useStore from '../../Store/loginStore'
import Link from 'next/link'
import { SignOut } from '../signOut'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
export default function Nav() {
    const { loginUser } = useStore();
    return (
        <nav className="flex flex-row 
        justify-between items-center 
        bg-yellow-400 ">
            <div className="flex flex-row items-center mx-5">
                <h1 className="text-2xl font-bold">Study Timer</h1>
            </div>
            <div className="flex flex-row items-center mx-5">
                <Link href="/Login">
                    {loginUser.MailAddress &&
                        (
                            <div className=' flex text-slate-500'>
                                <p>Exit</p>
                                <ArrowRightOnRectangleIcon
                                    className="h-5 w-5 text-gray-500"
                                    onClick={SignOut}
                                />
                            </div>)}
                    {!loginUser.MailAddress && (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Sign In
                        </button>
                    )}

                </Link>
            </div>
        </nav>
    )
}

