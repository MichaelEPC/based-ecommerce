import React from "react";

function LocalStorageLogIn() {
  const [isUserSingIn, setIsUserSingIn] = React.useState("false");
  let activeUser;

  React.useEffect(() => {
    setTimeout(() => {
      const userIsActive = localStorage.getItem("userActive-YourStore");
      activeUser = JSON.parse(userIsActive);
      if (activeUser == undefined) {
        try {
          localStorage.setItem("userActive-YourStore", JSON.stringify("false"));
        } catch (error) {
          alert(error);
        }
      }
      if (activeUser == "false") {
        try {
          activeUser = "false";
          setIsUserSingIn(activeUser);
        } catch (error) {}
      } else {
        try {
          activeUser = "true";
          setIsUserSingIn(activeUser);
        } catch (error) {}
      }
    }, 2000);
  });

  const updateIsUserSingIn = (userActive) => {
    localStorage.setItem("userActive-YourStore", JSON.stringify(userActive));
    setIsUserSingIn(userActive);
  };

  return { isUserSingIn, updateIsUserSingIn };
}

export { LocalStorageLogIn };
