import React from "react";
import "./style.css";
import NavItemsMobile from "../NavItemsMobile";
import { ProductContext } from "../../../Context";

function SelectCategory({
  navbarButtonMobile,
  setNavbarButtonMobile,
  setCategorySelected,
  leftNav,
  responsiveMobile,
}) {
  const toggleVisible = () => {
    if (navbarButtonMobile == true) {
      setNavbarButtonMobile(false);
    } else {
      setNavbarButtonMobile(true);
    }
    return;
  };

  return (
    <>
      <aside
        className={`${navbarButtonMobile ? " aside-nav-category flex flex-col items-center" : "hidden"}`}
      >
        <div className="flex flex-col items-center rounded-xl">
          {leftNav.map(({ name, to, className, on }) => (
            <div className="flex items-center justify-center">
              <NavItemsMobile
                key={name}
                navbarName={name}
                to={to}
                on={on}
                setCategorySelected={setCategorySelected}
                responsiveMobile={responsiveMobile}
              />
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default SelectCategory;
