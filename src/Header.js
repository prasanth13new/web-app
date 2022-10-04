import React from 'react'
import './header.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <AppBar position="static">
                <Toolbar className='bar'>
                    <Link to="/">
                        <img
                            className="header__icon"
                            src="https://static.bluelabellabs.com/wp-content/uploads/2021/10/bll-small-logo.png"
                            alt="icon"
                        />
                    </Link>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" onClick={() => navigate("/work")}>Work</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" onClick={() => navigate("/services")}>Services</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" onClick={() => navigate("/specialties")}>Specialties</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" onClick={() => navigate("/about")}>About</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" onClick={() => navigate("/blog")}>Blog</Button>
                    <Button style={{ "text-transform": "capitalize" }} color="inherit" onClick={() => navigate("/careers")}>Careers</Button>

                    <Button
                        style={{ "margin-left": "auto", "text-transform": "capitalize", color: "blue", background: "white", borderRadius: "50px" }}
                        color="inherit"
                        variant="outlined"
                        size="medium"
                        onClick={() => navigate("/letstalk")}>Let's talk😄</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header