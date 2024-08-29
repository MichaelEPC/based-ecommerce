import React from "react";
import { ProductContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../imgs/flecha-izquierda.png";
import "./style.css";
import storeIcon from "../../imgs/storeIcon.png";

function SignUpCont() {
  const navigate = useNavigate();

  const { users, setUsers, userID, setUserID } =
    React.useContext(ProductContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // We acces to inputs values
    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;
    const nameValue = event.target.elements.name.value;
    const adressValue = event.target.elements.adress.value;

    const newUniqueID = parseInt(userID);
    setUserID(newUniqueID + 1);

    const newUser = {
      id: newUniqueID,
      email: emailValue,
      password: passwordValue,
      name: nameValue,
      adress: adressValue,
      orders: [],
      onCart: [],
    };
    const copyOfUser = users;
    copyOfUser.push(newUser);
    setUsers(copyOfUser);
    navigate("/based-ecommerce/");
  };

  return (
    <>
      <div className="flex h-auto w-auto flex-col items-center justify-center">
        <div className="signup-container mt-4 flex flex-col items-center rounded-lg">
          <div className="flex flex-col items-center">
            <div className="div-icon w-48 rounded-full">
              <Link to={"/based-ecommerce/home"}>
                <img className="store-icon" src={storeIcon} alt="icon" />
              </Link>
            </div>
          </div>

          <div>
            <p className="sign-in-title underlined underline-clip text-center font-semibold">
              ¡Create your account!
            </p>
          </div>

          <div className="input-container-singup mt-4 flex items-center justify-center rounded-lg">
            <form className="sign-in-form" action="" onSubmit={handleSubmit}>
              <div className="mt-10 flex flex-col">
                <p className="input-sign-in-text mb-2 mr-10 mt-2 cursor-default font-semibold">
                  Email:
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder=""
                  className="form-input-sing-in rounded-lg p-2 focus:outline-green-500"
                  required
                />
              </div>

              <div className="mt-10 flex-col">
                <p className="input-sign-in-text mb-2 mr-3 mt-2 cursor-default text-left font-semibold">
                  Password:
                </p>
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  className="form-input-sing-in rounded-lg p-2 focus:outline-green-500"
                  required
                />
              </div>

              <div className="mt-10 flex-col">
                <p className="input-sign-in-text mb-2 mr-3 mt-2 cursor-default text-left font-semibold">
                  Adress:
                </p>
                <input
                  type="text"
                  name="adress"
                  placeholder=""
                  className="form-input-sing-in rounded-lg p-2 focus:outline-green-500"
                  required
                />
              </div>

              <div className="mt-10 flex-col">
                <p className="input-sign-in-text mb-2 mr-3 mt-2 cursor-default text-left font-semibold">
                  Complete Name:
                </p>
                <input
                  type="name"
                  name="name"
                  placeholder=""
                  className="form-input-sing-in rounded-lg p-2 focus:outline-green-500"
                  required
                />
              </div>

              <div className="div-sign-in-button flex items-center justify-center">
                <button
                  type="submit"
                  className="sign-button rounded-lg bg-green-500 font-semibold text-white"
                >
                  Create account
                </button>
              </div>
            </form>

            <div>
              <Link to={"/based-ecommerce/sing-in"}>
                <img
                  src={backIcon}
                  alt="back"
                  className="absolute left-2 top-2 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpCont;
