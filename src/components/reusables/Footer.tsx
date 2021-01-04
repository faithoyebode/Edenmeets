import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import ForwardArrow from 'assets/icons/forward-arrow.svg';
import Twitter from 'assets/icons/twitter-white.svg';
import Instagram from 'assets/icons/instagram-white.svg';
import Linkedin from 'assets/icons/linkedin-white.svg';
import Facebook from 'assets/icons/facebook-white.svg';




interface slideProp{
    image: string,
    name: string,
    quote: string,
}

const FooterWrapper = styled.footer`
    background-color: #1A1A1A;
    color: #ffffff;
    padding-top: 55px;

    .footer-links{
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;
        a{
            all: unset;
            color: white;
            cursor: pointer;
            padding-top: 15px;
        }
    }
    
    form{
        label{
            margin-bottom: 0;
            font-family: "Montserrat SemiBold";
        }
        input{
            width: 294px;
            height: 44px;
            background: #FFFFFF;
            border: 1px solid #B9C6D6;
            box-sizing: border-box;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 10px 20px;

            &::placeholder{
                line-height: 20px;
                font-family: 'Montserrat-SemiBold';
                color: #7F91A8;
            }
        }
        button{
            all: unset;
            width: 57px;
            height: 57px;
            border-radius: 50%;
            background: linear-gradient(135deg, #F34E4E 0%, rgba(114, 15, 15, 0.6) 100%);
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.32);
            padding: 5px;
            display: inline-flex;
            justify-content: center;
            cursor: pointer;
            margin-left: 37px;
        }
    }
    .note{
        font-size: 12px;
        margin-top: 8px;
        max-width: 390px;
    }
    .social-media-icons{
        margin-bottom: 25px;
        img{
            margin-right: 10.63px;
        }
    }

    @media all and (max-width: 768px){
        .row{
            flex-direction: column-reverse;
        }
        
    }

    @media all and (max-width: 425px){
        .footer-links{
            flex-direction: column;
        }
        form{
            div{

                input{
                    width: 80%;
                }
            }
            button{
                width: 43px;
                height: 43px;
                margin-left: 10px;
            }
        }
    }
`;


const Footer: FC<any> = ({ image, name, quote }: slideProp): ReactElement => {
    return (
        <FooterWrapper className="pb-4">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-6 flex-column">
                            <div className=" footer-links">
                                <Link to="/">Terms of Use</Link>
                                <Link to="/">Privacy Policy</Link>
                                <Link to="/about-us">About Us</Link>
                                <Link to="/">FAQ</Link>
                                <Link to="/">Guidelines</Link>
                            </div>
                            <p>
                                &#169; Edenmeets | All rights reserved
                            </p>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <form>
                                <label htmlFor="newsletter" className="d-block">Subscribe</label>
                                <div className="d-flex">
                                    <input type="text" name="email" id="newsletter" placeholder="Email address" className="d-inline-block my-auto"/>
                                    <button type="submit">
                                        <img src={ForwardArrow} alt="backward arrow" /> 
                                    </button>
                                </div>
                            </form>
                            <p className="note">
                                I confirm that I have read Edenmeets’ Privacy Policy and I agree to the use of my data in line therewith.
                            </p>
                            <p className="social-media-icons">
                                <img src={Twitter} alt="twitter icon" />
                                <img src={Facebook} alt="facebook icon" />
                                <img src={Instagram} alt="instagram icon" />
                                <img src={Linkedin} alt="linkedin icon" />
                            </p>
                        </div>
                    </div>
                </div>
        </FooterWrapper> 
    )
}

export default Footer;
