import React from "react";
import { ProductContext } from "../../Context";
import { Link } from "react-router-dom";
import "./style.css";

function AccountSingIn() {
    const {
        isAccountSideOpenSingUp,
    } = React.useContext(ProductContext);

    return(
        <>
        <div className={`${isAccountSideOpenSingUp ? 'account-side-sing-in fixed' : 'hidden'}`}>
            <div className="flex justify-center items-center">
                <Link to={'/based-online-product-store/sing-in'}>
                    <span className="text-green-500 cursor-pointer">Sing In</span>
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <Link to={'/based-online-product-store/sing-up'}>
                    <span className="text-green-500 cursor-pointer mt-4">Create Account</span>
                </Link>
            </div>
       </div>
        </>
    )
}

export default AccountSingIn