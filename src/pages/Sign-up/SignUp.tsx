import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, FormEvent } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../common/components/_molecules";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [emailValidate, setEmailValidate] = useState<boolean>(false);
  const [passwordValidate, setPasswordValidate] = useState<boolean>(false);
  const [showPassword] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setEmailValidate(true);
      setError("Email is required");
      return;
    } else {
      setEmailValidate(false);
    }

    if (!password) {
      setPasswordValidate(true);
      setError("Password is required");
      return;
    } else {
      setPasswordValidate(false);
    }

    if (password !== rePassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/pages/sign-in");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as FormEvent);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] sm:w-[420px] bg-[#161D2F] rounded-[20px]">
      <h1 className="flex w-full font-outfit text-[32px] px-8 text-white my-8">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="grid items-center gap-5 w-full">
        <Input
          onKeyDown={handleKeyDown}
          className={`mx-8 py-3 bg-transparent outline-none text-white ${
            emailValidate ? "border-red-500" : "border-[#5A698F]"
          } border-b px-5 font-outfit`}
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          onKeyDown={handleKeyDown}
          className={`mx-8 py-3 bg-transparent outline-none text-white ${
            passwordValidate ? "border-red-500" : "border-[#5A698F]"
          } border-b px-5`}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          onKeyDown={handleKeyDown}
          className="mx-8 py-3 bg-transparent outline-none text-white border-[#5A698F] border-b px-5"
          type={showPassword ? "text" : "password"}
          placeholder="Repeat password"
          onChange={(e) => setRePassword(e.target.value)}
          value={rePassword}
        />
        {error && (
          <div className="flex text-red-500 justify-center items-center">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="bg-[#FC4747] rounded-md text-white px-5 mx-8 py-3 mt-[15px]"
        >
          Create an account
        </button>
        <div className="flex justify-center items-center text-white px-5 rounded">
          <div className="flex justify-center items-center text-white px-5 rounded gap-2 font-outfit">
            <p>Already have an account?</p>
            <Link to="/pages/sign-in">
              <p className="text-[#FC4747]">Login</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
