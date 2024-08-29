import React from "react";
import { ProductContext } from "../../Context";
import Layout from "../../Components/Layout";
import SignInCont from "../../Components/SingInCont";

function SignIn() {
  const { users, setIsUserSingIn, setCurrentUser } =
    React.useContext(ProductContext);

  return (
    <>
      <Layout>
        <SignInCont
          users={users}
          setIsUserSingIn={setIsUserSingIn}
          setCurrentUser={setCurrentUser}
        />
      </Layout>
    </>
  );
}

export default SignIn;
