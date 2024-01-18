import React from "react";

const HomeContainer = () => {
  return (
    <div className="mainContainer">
      <h1>Home Components</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://i.pinimg.com/736x/5b/95/b0/5b95b05d61d9d6c2e055f33b31c1d16d.jpg"
            alt="iphone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I- phone 15 Ultra</span>
          <span>Price: 1000$.00</span>
          <button>Add To cart</button>
        </div>
      </div>
      <div className="addCartImgDiv">
        <img
          src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1013293.jpg"
          alt="Add to cart"
        />
      </div>
    </div>
  );
};

export default HomeContainer;
