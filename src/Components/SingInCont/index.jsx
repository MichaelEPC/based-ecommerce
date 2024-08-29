import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context";
import "./style.css";
import storeIcon from "../../imgs/storeIcon.png";

function SignInCont() {
  const navigate = useNavigate();

  const { users, setIsUserSingIn, setCurrentUser, currentUser } =
    React.useContext(ProductContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;

    for (const copyOfUser of users) {
      if (copyOfUser.email === emailValue) {
        if (copyOfUser.password === passwordValue) {
          setCurrentUser(copyOfUser);
          setIsUserSingIn(true);
          navigate("/based-ecommerce/home");
        }
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="main-container">
          <div className="flex flex-col items-center">
            <div className="div-icon w-48 rounded-full">
              <Link to={"/based-ecommerce/home"}>
                <img className="store-icon" src={storeIcon} alt="icon" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="input-container flex flex-col items-center rounded-lg">
              <p className="sing-up-title font-semibold">Sign in</p>
              <form action="" onSubmit={handleSubmit}>
                <div className="reduce-width mt-10">
                  <p className="info-text mt-1 cursor-default font-semibold">
                    Email:
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder=""
                    className="form-input rounded-lg focus:outline-green-500"
                    required
                  />
                </div>

                <div className="reduce-width mt-10">
                  <p className="info-text cursor-default font-semibold">
                    Password:
                  </p>
                  <input
                    type="password"
                    name="password"
                    placeholder="*********"
                    className="form-input rounded-lg p-2 focus:outline-green-500"
                    required
                  />
                </div>

                <div className="mb-12 flex flex-col items-center justify-center">
                  <p className="forgot-text cursor-pointer text-green-500 underline">
                    ¿Forgot password?
                  </p>
                  <button
                    type="submit"
                    className="sign-button rounded-lg bg-green-500 font-semibold text-white"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/based-ecommerce/sing-up"}>
              <a
                className="createAccount-text rounded-lg bg-transparent font-semibold text-green-500"
                href=""
              >
                Create new account
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInCont;
