import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth()
  const navigate =useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password).then(() => {
      console.log(email)
      navigate('/')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your account has been created!",
        showConfirmButton: false,
        timer: 1500
      });
    });

    form.reset();
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/129526b8-f755-4f8c-bc82-204efe7e23fa/BD-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f655af9e-cdd9-4a71-85bd-1e1787266031_small.jpg"
          alt="/"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full  px-4 py-20 mx-auto z-20">
          <div className="max-w-[450px] h-[500px] bg-black/80 opacity-70 mx-auto rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="font-nsans-bold text-3xl">Sign Up</h1>
              <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered p-3 my-2 bg-gray-700 rounded-none"
                />

                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  autoComplete="current-password"
                  className="input input-bordered p-3 my-2 bg-gray-700 rounded-none"
                />
                <button
                  type="submit"
                  className="bg-red-600 py-3 my-6 rounded font-nsans-bold"
                >
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-gray-400">
                  <p>
                    <input
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                      type="checkbox"
                      name=""
                      id=""
                    />{" "}
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-400">
                    Already subscribe to netflix ?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
