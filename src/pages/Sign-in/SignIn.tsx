import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Input from "../../common/components/_molecules/Input/input";
import Breadcrumbs from "../../common/components/_organisms/Breadcrumbs/Breadcrumbs";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [loginError, setLoginError] = useState<string>("");
  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        setLoginError("incorrect password or email address");
      }
    } catch (error) {
      console.log(error);
      setLoginError("incorrect email or password.please try again");
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <>
      <Breadcrumbs />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[455px] sm:w-[400px] ${
          loginError ? "h-auto sm:h-[450px]" : "h-auto sm:h-[430px]"
        } bg-[#161D2F] rounded-[20px]`}
      >
        <h1 className="flex w-full font-outfit text-[32px] px-8 text-white my-8">
          Login
        </h1>
        <div className="grid items-center gap-5 w-full font-outfit px-8 pb-8">
          <Input
            onKeyDown={handleKeyDown}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setEmail(e.target.value)}
            className="py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5 w-full"
            type="email"
            placeholder="Email address"
            value={email}
          />
          <Input
            onKeyDown={handleKeyDown}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPassword(e.target.value)}
            className="py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5 w-full"
            type="password"
            placeholder="Password..."
            value={undefined}
          />
          <button
            onClick={handleLogin}
            className="bg-[#FC4747] rounded-md text-white px-5 py-3 mt-5 w-full"
          >
            Login to your account
          </button>
          {loginError && (
            <p className="flex justify-center text-red-500">{loginError}</p>
          )}
          <div className="flex text-white justify-center mt-3">
            <div className="flex gap-2">
              <p className="text-sm">Don’t have an account?</p>
              <Link to="/pages/Sign-Up">
                <p className="text-[#FC4747] text-sm">Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
