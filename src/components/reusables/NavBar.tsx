import React, { FC, ReactElement , useState } from 'react';
import styled from '@emotion/styled';
import { NavLink, Link } from "react-router-dom";






const NavBarWrapper = styled.div`
    header{
                
        height: 96px;
        wwidth: 100%;

        .nav-brand{
            position: relative;
            font-family: 'Montserrat-Bold';
            font-size: 20px;
            margin-bottom: 0;
            z-index: 10;
        }
        .navigation{
            display: flex;
            flex-basis: 469px;
            justify-content: space-evenly;

            a{
                all: unset;
                cursor: pointer;
                font-family: "Montserrat-SemiBold";
                color: #ffffff;
                
                
            }
        }
        .nav-button{
            border: none; 
            width: 131px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            border-radius: 28px;
            color: #ffffff;
            text-decoration: none;
            font-family: 'Montserrat-Medium';

            
        }
        .menu-toggle{
            display: none;
        }
        
    }
    .overlay {
        display: none;
    }


    @media all and (max-width: 768px){
        .navigation{
            flex-basis: 380px;
        }
    }

    
    @media all and (max-width: 425px){
        .navigation{
            display: none !important;
        }
        .nav-button{
            display: none !important;
        }
        .menu-toggle {
            position: relative;
            display: block !important;
            height: 27px;
            width: 35px;
            cursor: pointer;
            transition: opacity 0.25s ease;
            z-index: 10;
            

            &:hover {
                opacity: 0.7;
            }

            &.active .top {
                transform: translateY(10px) translateX(0) rotate(45deg);
                background: #FFF;
            }

            &.active .middle {
                opacity: 0;
                background: #FFF;
            }
            &.active .bottom {
                transform: translateY(-10px) translateX(0) rotate(-45deg);
                background: #FFF;
            }
            & span {
                position: absolute;
                top: 0;
                left: 0;
                background: #ffffff;
                border: none;
                height: 5px;
                width: 100%;
                transition: all 0.35s ease;
                cursor: pointer;
            }
            & span:nth-of-type(2) {
                top: 10px;
            }
            & span:nth-of-type(3) {
                top: 20px;
            }
        }
        .overlay {
            position: fixed;
            display: block !important;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            visibility: hidden;
            transition: opacity 0.35s, visibility 0.35s, width 0.35s;
            z-index: 5;
            &:before {
                content: "";
                background: #FF5252;
                left: -55%;
                top: 0;
                width: 50%;
                height: 100%;
                position: absolute;
                transition: left 0.35s ease;
            }
            &:after {
                content: "";
                background: #FF5252;
                right: -55%;
                top: 0;
                width: 50%;
                height: 100%;
                position: absolute;
                transition: all 0.35s ease;
            }
            &.open{
                opacity: 0.9;
                visibility: visible;
                height: 100%;
            }
            &.open:before{
                left: 0;
            }
            &.open:after{
                right: 0;
            }
            &.open li{
                -webkit-animation: fadeInRight 0.5s ease forwards;
                        animation: fadeInRight 0.5s ease forwards;
                -webkit-animation-delay: 0.35s;
                        animation-delay: 0.35s;
            }
            &.open li:nth-of-type(2){
                -webkit-animation-delay: 0.45s;
                        animation-delay: 0.45s;
            }
            &.open li:nth-of-type(3){
                -webkit-animation-delay: 0.55s;
                        animation-delay: 0.55s;
            }
            &.open li:nth-of-type(4){
                -webkit-animation-delay: 0.65s;
                        animation-delay: 0.65s;
            }
            & nav{
                position: relative;
                height: 70%;
                top: 50%;
                transform: translateY(-50%);
                font-size: 24px;
                font-weight: 400;
                text-align: center;
                z-index: 100;
            }
            & ul{
                list-style: none;
                padding: 40px 0;
                margin: 0 auto;
                display: inline-block;
                position: relative;
                height: 100%;
            }
            & ul li{
                display: block;
                height: 25%;
                height: calc(100% / 4);
                min-height: 50px;
                position: relative;
                opacity: 0;
            }
            & ul li a{
                display: block;
                position: relative;
                color: #FFF;
                text-decoration: none;
                overflow: hidden;
            }
            & ul li a:hover:after, .overlay ul li a:focus:after, .overlay ul li a:active:after{
                width: 100%;
            }
            & ul li a:after{
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0%;
                transform: translateX(-50%);
                height: 3px;
                background: #FFF;
                transition: 0.35s;
            }
        }
        @-webkit-keyframes fadeInRight {
            0% {
              opacity: 0;
              left: 20%;
            }
            100% {
              opacity: 1;
              left: 0;
            }
        }
          
        @keyframes fadeInRight {
            0% {
              opacity: 0;
              left: 20%;
            }
            100% {
              opacity: 1;
              left: 0;
            }
        }
    }
`;


const NavBar: FC<any> = (): ReactElement => {
    const [navState, setNavState] = useState(false);

    return (
        <NavBarWrapper>
            <header className="d-flex justify-content-between align-items-center">
                <p className="nav-brand text-white">Edenmeets</p>
                <nav className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                    <NavLink to="/terms-of-use">Terms of Use</NavLink>
                    <NavLink to="/support">Support</NavLink>
                </nav>
                <Link to="/sign-in" className="nav-button pry-button">Login</Link>
                <div onClick = {(e) => {setNavState(!navState)}} className={`menu-toggle ${navState ? 'active' : ''}`}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </div>

            </header>
            <div className={`overlay ${navState ? 'open' : ''}`}>
                <nav className="overlay-menu">
                    <ul>
                        <li ><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                </nav>
            </div>
        </NavBarWrapper> 
    )
}

export default NavBar;
