"use client";
import useStore from "@/Components/Store/loginStore";
import { authRouteHandler } from "@/Components/authRouteHandler";
import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
export default function Nav() {
  const loginUser = useStore((state) => state.loginUser);
  const router = useRouter();
  return (
    <nav
      className="flex flex-row 
        justify-between items-center 
        bg-yellow-400 "
    >
      <div className="flex flex-row items-center mx-5">
        <h1 className="text-2xl font-bold">Study Timer</h1>
      </div>
      <div className="flex flex-row items-center mx-5">
        {loginUser.MailAddress && (
          <div className=" flex text-slate-500">
            <p>Exit</p>
            <ArrowRightOnRectangleIcon
              className="h-5 w-5 text-gray-500"
              type="button"
              onClick={() => {
                async () => await authRouteHandler({ PostUrl: "/auth/logout" });
                router.push("/login");
              }}
            />
          </div>
        )}
        {!loginUser.MailAddress && (
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
