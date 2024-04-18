import React from "react";
import { ProductContext } from "../../Context";
import { Link } from "react-router-dom";
import "./style.css";

function AccountSingIn() {
  const { isAccountSideOpenSingUp } = React.useContext(ProductContext);

  return (
    <>
      <div
        className={`${isAccountSideOpenSingUp ? "account-side-sing-in fixed" : "hidden"}`}
      >
        <div className="flex items-center justify-center">
          <Link to={"/based-online-product-store/sing-in"}>
            <span className="cursor-pointer text-green-500">Sing In</span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link to={"/based-online-product-store/sing-up"}>
            <span className="mt-4 cursor-pointer text-green-500">
              Create Account
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AccountSingIn;
