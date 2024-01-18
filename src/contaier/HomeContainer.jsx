import React from "react";

const HomeContainer = () => {
  return (
    <div>
      <h1>Home Components</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://i.pinimg.com/736x/5b/95/b0/5b95b05d61d9d6c2e055f33b31c1d16d.jpg"
            alt="iphone"
          />
          <img
            src="https://freepngimg.com/save/25486-add-to-cart-button/763x220"
            alt="Add To Cart"
          />
        </div>
        <div className="text-wrapper item">
          <span>I- phone 15 Ultra</span>
          <span>Price: 1000$.00</span>
          <button>Add To cart</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
