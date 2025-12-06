import { Facebook, Instagram, Linkedin, Mail, SquareArrowOutUpRight, Twitter, TwitterIcon, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import useDarkMode from '../../hooks/useDarkMode'
import { Moon, Sun } from 'lucide-react';


const NavTop = () => {

    const { theme, toggleTheme } = useDarkMode();


    return (
        <nav className="navTop">
            <div className="left">
                <div className="email"><p><Mail size='16px' /> Email:</p>
                <a href="mailto:ars.chatriwala@gmail.com">ars.chatriwala@gmail.com</a></div>
            </div>
            <div className="right">
                <p><b>ABDUL RAFAY CHATRIWALA's STUDIO</b></p>
            </div>
        </nav>
    )
}

export default NavTop