import React from "react";

import classes from "../styles/Test.module.css"

function Test() {
  return (
    <div className={classes.box}>
      <div className="card w-96 shadow-xl w-[50%]">
        <h1 className="text-2xl">Hello World</h1>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className={classes.card}>Welcome!</h2>
          <h2 className={classes.card}>Welcome!</h2>
          <h2 className={classes.card}>Welcome!</h2>
          <h2 className={classes.card}>Welcome!</h2>
          
        </div>
      </div>
    </div>
  );
}

export default Test;
