import React from 'react'
import './Footer.scss'
import logo from '../../../public/logo.png'
import insta from '../../../public/instagramm.png'
import IN from '../../../public/IN.png'
import Facebook from '../../../public/Facebool.png'
import Twitter from '../../../public/Twitter.png'

const Footer = () => {
  return (
    <footer>
        <div className="cards">
            <div className="card_1">
                <img src={logo}  alt="" />
            </div><hr />
            <div className="card_2">
                <div className="card-1">
                    <p className="p1">© 2021 FILON All Rights Reserv</p>
                </div>
                <div className="card-2">
                    <img src={insta} alt="" className="img" />
                    <img src={IN} alt="" className="img" />
                    <img src={Facebook} alt="" className="img" />
                    <img src={Twitter} alt="" className="img" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer