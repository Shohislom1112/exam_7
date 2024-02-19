import React, { useEffect, useState } from "react";
import "./Dishes.scss";
import plus from '../../../public/plus.png'
import minus from '../../../public/minus.png'
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import useTovars from "../../app/getTovars";


const Dishes = () => {
  const { loading, tovars, error, getTovars } =
  useTovars();
  const [change, setChange] = useState(false);

  useEffect(() => {
    getTovars();
  }, [change]);
  return (
    <div className="dishes">
      <Header/>
      <div className="container">
        <div className="alldishes">
          
          <div className="dish">
             {loading ? <h1>Loading...</h1> : null}
        {error ? <h1>{error}</h1> : null}
        { (
          <ul className="ul"> 

            {tovars.map((tovars) => (
              <li className="li" key={tovars.id}>
                <img src={tovars.img} className="img" alt="" />
                <p className="p1">{tovars.tittle}</p>
                <p className="p2">{tovars.name}</p>
              <div className="tt">
              <p className="p3">{tovars.date}</p>
              <p className="p3">{tovars.rate}</p>
              
              </div>
                <p className="p1">{tovars.money}</p>


              </li>
            ))}
            </ul>
          
        ) }
          </div>
          </div> <hr />
        <div className="question">
          <div className="words">
            <p className="p1">
              Frequently Asked <br />
              <span>Questions</span>
            </p>
            <div className="cards">
            <div className="text">
              <p className="p1">How long does delivery take?</p>
            <p className="p2">You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?</p>
            </div>
           <div className="img">
             <img src={plus} alt="" className="imag1" />
            <img src={minus} alt="" className="imag2" />
           </div>
            </div>
            <div className="cards">
            <div className="text">
              <p className="p1">How Does It Work ?</p>
            <p className="p2">You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?</p>
            </div>
            <div className="img">
              <img src={plus} alt="" className="imag1" />
            <img src={minus} alt="" className="imag2" />
            </div>
            </div>
            <div className="cards">
           <div className="text">
             <p className="p1">How does your food delivery service work?</p>
            <p className="p2">You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?</p>
           </div>
           <div className="img">
            <img src={plus} alt="" className="imag1" />
           <img src={minus} alt="" className="imag2" />
           </div>
            </div>
            <div className="cards">
            <div className="text">
              <p className="p1">What payment options do you accept?</p>
            <p className="p2">You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?</p>
            </div>
            <div className="img">
              <img src={plus} alt="" className="imag1" />
            <img src={minus} alt="" className="imag2" />
            </div>
            </div>
            <div className="cards">
            <div className="text">
              <p className="p1">Do you offer discounts or promotions?</p>
            <p className="p2">You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?</p>
            </div>
            <div className="img">
              <img src={plus} alt="" className="imag1" />
            <img src={minus} alt="" className="imag2" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dishes;
