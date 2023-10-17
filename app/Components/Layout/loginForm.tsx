"use client";
import { useState } from "react";
import { authRouteHandler } from "@/Components/authRouteHandler";
import useStore from "@/Components/Store/loginStore";
import { useRouter } from "next/navigation";

const loginForm: () => JSX.Element = () => {
  const loginUser = useStore((state) => state.loginUser);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    const request = {
      email: loginUser.MailAddress as string,
      password: password,
    };
    await authRouteHandler({
      PostUrl: "/api/auth/logout",
      RequestBody: request,
    });

    router.push("../timer");
  };

  const handleSignIn = async () => {
    const request = {
      email: loginUser.MailAddress as string,
      password: password,
    };
    await authRouteHandler({
      PostUrl: "/api//auth/login",
      RequestBody: request,
    });
    router.push("/timer");
  };

  const isCreateAccount = () => {
    if (false) {
      return <button onClick={async () => handleSignUp()}>Sign up</button>;
    } else {
      return <button onClick={async () => handleSignIn()}>Sign in</button>;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <div>MailAddress :</div>
          <input
            name="email"
            onChange={(e) => {
              useStore.setState({
                loginUser: { MailAddress: e.target.value, id: "" },
              });
            }}
            value={loginUser.MailAddress}
          />
        </div>
        <div>
          <div>Password :</div>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {isCreateAccount()}
        <button onClick={() => authRouteHandler({ PostUrl: "/auth/logout" })}>
          Sign out
        </button>
      </div>
    </>
  );
};

export default loginForm;
