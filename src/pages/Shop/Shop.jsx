import React from "react";
import "./Shop.scss";
import taom from '../../../public/taom3.png'
import Footer from "../../Components/footer/Footer";

const Shop = () => {
  return (
    <div className="shop">
        <Header/>
      <div className="container">
      <div className="tovars">
        <div className="cards">
          <div className="card1"></div>
          <div className="card1">

          </div>
        </div>
        <div className="foiz">
        <div className="cards">
                <div className="card1">
                    <p className="txt">GET 50%</p>
                   <div className="input">
                   <input type="search" placeholder=" Enter Your Email Address"  id="searchs" className="search"/>
                   <button className="nut">SUBSCRIBE</button>
                   </div>
                </div>  
                <div className="card2">
                    <img src={taom} alt="" className="image" />
                </div>
            </div>
        </div>
      </div>
      </div>
      {/* <div className=""></div> */}
      <Footer/>
    </div>
  );
};

export default Shop;
