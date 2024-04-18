import React from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context";
import "./style.css";

function AccountOptions() {
  const { isAccountSideOpen, setIsUserSingIn, setCurrentUser } =
    React.useContext(ProductContext);

  // Log out : This function makes the user logout
  const logOutAccount = () => {
    setIsUserSingIn("false");
    setCurrentUser({});
    window.location.href = "/based-online-product-store/sing-in";
  };

  return (
    <>
      <div className={`${isAccountSideOpen ? "account-side fixed" : "hidden"}`}>
        <div className="flex items-center justify-center">
          <Link to={"/based-online-product-store/my-account"}>
            <span className="cursor-pointer text-green-500">My account</span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <span
            className="cursor-pointer text-red-600"
            onClick={() => logOutAccount()}
          >
            Log Out
          </span>
        </div>
      </div>
    </>
  );
}

export default AccountOptions;
