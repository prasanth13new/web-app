import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Homes </li>
                    <li className="fListItem">Work </li>
                    <li className="fListItem">Services </li>
                    <li className="fListItem">About Us</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Blog</li>
                    <li className="fListItem">Contact</li>
                    <li className="fListItem">Sitemap </li>
                </ul>
            </div>
            <div className="fImg">
                <img src="https://static.bluelabellabs.com/wp-content/uploads/2018/08/made-in-ny-logo.png" alt="icon" />
                <img src="https://static.bluelabellabs.com/wp-content/uploads/2021/09/linkedin-1.png" alt="icon" />
                <img src="https://static.bluelabellabs.com/wp-content/uploads/2021/09/instagram.png" alt="icon" />
                <img src="https://static.bluelabellabs.com/wp-content/uploads/2020/04/facebook-f.svg" alt="icon" />
                <img src="https://static.bluelabellabs.com/wp-content/uploads/2021/09/twitter-1.png" alt="icon" />
            </div>
            <div className="fText">Copyright © 2022 Bluelabellabs.</div>
        </div>
  )
}

export default Footer