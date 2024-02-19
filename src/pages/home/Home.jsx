import React from "react";
import "./Home.scss";
import food from "../../../public/Food.png";
import mobile from "../../../public/Mobile.png";
// import arrow from '../../../public/Arrow.png'
import chicken from "../../../public/chicken.png";
import star from "../../../public/Star.png";
import save from "../../../public/saved.png";
import taom1 from "../../../public/taom1.png";
import taom2 from "../../../public/taom2.png";
import taom3 from "../../../public/taom3.png";
import expens from "../../../public/expens.png";
import expens2 from "../../../public/expens2.png";
import divider from "../../../public/divider.png";
import divider2 from "../../../public/divider2.png";
import stars from "../../../public/stars.png";
import profile from "../../../public/profile.png";

import divider3 from "../../../public/customdivider.png";
import vergul from "../../../public/vergul.png";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
const Home = () => {
  return (
    <main> <Header/>
      <div className="container">
        <section className="head">
          <div className="heads">
            <div className="head_1">
              <p className="p1">----- OVER 1000 USERS</p>
              <p className="p2">
                Enjoy Foods All Over The <span>World</span>
              </p>
              <p className="p3">
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a <span>$20 bonus</span>.
              </p>

              <button className="button">Get Started</button>
            </div>
            <div className="head_2">
              <img src={food} alt="" className="img1" />
            </div>
          </div>
        </section>
        <section className="main_head">
          <div className="foiz">
            <div className="head_foiz1">
              <p className="p1">10K+</p>
              <p className="p2">Satisfied Costumers All Great Over The World</p>
            </div>
            <div className="head_foiz2">
              <p className="p1">4M</p>
              <p className="p2">
                Healthy Dishes Sold Including Milk Shakes Smooth
              </p>
            </div>
            <div className="head_foiz3">
              <p className="p1">99.99%</p>
              <p className="p2">
                Reliable Customer Support We Provide Great Experiences
              </p>
            </div>
          </div>
        </section>
        <section className="phone">
          <div className="mobile">
            <div className="mobile1">
              <img className="iphone" src={mobile} alt="" />
            </div>
            <div className="mobile2">
              <b className="p1">
                Premium <span>Quality</span> For Your Health
              </b>
              <br />
              <br />
              <li className="p2">
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </li>
              <br />
              <li className="p3">
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
              <br />
              <br />
              <button className="button">Download -</button>
            </div>
          </div>{" "}
          <br /> <hr />
          <br />
          <div className="chicken">
            <div className="cards">
              <div className="card_1">
                {/* <img src={chicken} className="chick" alt="" /> */}
              </div>
              <div className="card_2">
                <p className="p1">The Chicken King</p>
                <p className="p2">
                  24min •{" "}
                  <span>
                    <img src={star} className="stars" alt="" />
                  </span>
                  4.8
                </p>
                <img
                  src={save}
                  className="save"
                  alt="Uxlading karochi internetga pul tasha"
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="tovars">
          {/* <div className="all_dishes"></div> */}
          <hr />
          <div className="purchaser">
            <div className="cards">
              <div className="card_1">
                <div className="text">
                  <p className="p_text">
                    Control <span>Purchases</span> Via Dashboard
                  </p>
                </div>
                <div className="images">
                  <div className="crd">
                    <div className="img">
                      <img src={taom1} alt="" className="tm" />
                    </div>
                    <div className="txt">
                      <p className="par1">Chicken Hell</p>
                      <p className="par2">On The Way</p>
                      <p className="par3">3:09 PM</p>
                    </div>
                  </div>
                  <div className="crd">
                    <div className="img">
                      <img src={taom2} className="tm" alt="" />
                    </div>
                    <div className="txt">
                      <p className="par1">Swe Dish</p>
                      <p className="par2">Delivered</p>
                      <p className="par3">Yesterday</p>
                    </div>
                  </div>
                  <div className="crd">
                    <div className="img">
                      <img src={taom3} alt="" className="tm" />
                    </div>
                    <div className="txt">
                      <p className="par1">Fish Hell Veg</p>
                      <p className="para2">Cancelled</p>
                      <p className="par3">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_2">
                <div className="cards">
                  <div className="card1">
                    <p className="p_one">Purchases</p>
                    <select className="select" name="month" id="month">
                      <option value="This Month">This Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="Aprel">Aprel</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="October">October</option>
                      <option value="September">September</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                  <div className="card_">
                    <div className="text">
                      <div className="t1">
                        <img src={expens} alt="" className="imgg" />
                      </div>
                      <div className="t2">
                        <p className="p1">Expense</p>
                        <p className="p2">Increased By 10%</p>
                      </div>
                      <div className="t3">
                        <p className="p3">$409.00</p>
                      </div>
                    </div>
                    <img src={divider} alt="" className="image" />
                  </div>
                  <div className="card_">
                    <div className="text">
                      <div className="t1">
                        <img src={expens2} alt="" className="imgg" />
                      </div>
                      <div className="t2">
                        <p className="p1">Vocher Usage</p>
                        <p className="p2">Increased By 5%</p>
                      </div>
                      <div className="t3">
                        <p className="p3">$45.78</p>
                      </div>
                    </div>
                    <img src={divider2} alt="" className="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="customers">
          <div className="custom">
            <p className="para">
              <span>Customer </span> Say
            </p>
            <div className="cards">
              <div className="card1">
                <div className="img">
                  <div className="pro">
                    <img src={profile} alt="" className="immg" />

                    <div className="tt">
                      <p className="p1">Alexander R.</p>
                      <p className="p2">01 Year With Us</p>
                    </div>
                  </div>
                  <div className="imag">
                    <img src={vergul} alt="" className="immm" />
                  </div>
                </div>
                <div className="txt">
                  <p className="txt">
                    “ Online invoice payment helps companies save time, are
                    faster and save maximum effort for the clients and save
                    maximum effort. Online invoice payment helps companies save
                    time ”
                  </p>
                </div>
                <div className="star">
                  <img src={stars} alt="" className="stars" />
                </div>
              </div>
              <div className="crd">
                <div className="card2">
                  <div className="txt">
                    <p className="txt">
                      “ Online invoice payment helps companies save time, are
                      faster and save maximum effort for the clients and save
                      maximum effort. Online invoice payment helps companies
                      save time ”
                    </p>
                  </div>
                  <div className="star">
                    <img src={stars} alt="" className="stars" />
                  </div>
                </div>
                <div className="card3">
                  <div className="txt">
                    <p className="txt">
                      “ Online invoice payment helps companies save time, are
                      faster and save  ”
                    </p>
                  </div>
                  <div className="star">
                    <img src={stars} alt="" className="stars" />
            </div>
                  </div>
                </div>
              </div>
                <img src={divider3} alt="" className="imgg" />
          </div>
          <div className="chegirma">
            <div className="cards">
                <div className="card1">
                    <p className="txt">GET 50%</p>
                   <div className="input">
                   <input type="search" placeholder=" Enter Your Email Address"  id="search" className="search"/>
                   <button className="nut">SUBSCRIBE</button>
                   </div>
                </div>  
                <div className="card2">
                    <img src={taom2} alt="" className="image" />
                </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  );
};
export default Home;
