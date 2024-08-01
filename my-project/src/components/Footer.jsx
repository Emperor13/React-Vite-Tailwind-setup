import React from "react";

import classes from "../styles/Footer.module.css";
function Footer() {
  return (
    <>
      <div className={classes.box}>
        <p className={classes.click} onClick={() => alert("Hello World!")}>
          Click Me
        </p>
      </div>
      <div className="relative">
        <p className="absolute inset-x-[30%] inset-y-[20%]">Hello World!!</p>
      </div>
    </>
  );
}

export default Footer;
