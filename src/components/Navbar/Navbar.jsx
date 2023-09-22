import React, { useState } from 'react'
import Logo from '../../utilits/svg/white-onair-logo.svg'
import './Navbar.css'
import { menu } from '../../utilits/constants/Constants'

export default function Navbar() {

    const [data, setData] = useState('Home')

  return (
    <header>
        <div className="container">
            <div className="row">

                <div className="col-6">
                    <a href="#!" className="logo">
                        <img src={Logo} alt="" />
                    </a>
                </div>

                <div className="col-6 justify-content-between align-items">
                    <ul>
                        {
                            menu?.map((element, value) => <li key={element.value} className={data === element ? 'activeLink' : ''} onClick={() => setData(element)}>{element}</li>)
                        }
                    </ul>

                </div>

            </div>
        </div>
    </header>
  )
}