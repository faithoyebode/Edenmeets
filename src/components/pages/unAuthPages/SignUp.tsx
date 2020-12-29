import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import HeroImg from 'assets/images/auth-hero.jpg';
import NavBar from "components/reusables/NavBar";
import Footer from "components/reusables/Footer";

const SignUpWrapper = styled.div`
    .hero{
        min-height: 1049px;
        background: linear-gradient(104.88deg, rgba(0, 0, 0, 0.9) -5.41%, rgba(0, 0, 0, 0) 102.1%), url(${HeroImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 30% top;
        margin-bottom: 100px;
        padding-bottom: 91px;

        .row{
            align-items: center;
            height: 70%;
            margin-top: 45px;

            .col-lg-6{
                .form-section{
                    background: rgba(40, 40, 40, 0.67);
                    box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.16);
                    border-radius: 8px;
                    align-self: flex-start;
                    color: #ffffff;
                    padding: 50px 37px;

                    form{
                        .header{
                            font-size: 25px;
                        }
                        .gender-grp{
                            padding: 0;
                            margin: 0;
                            box-sizing: border-box;
                            position: relative;
                            width: 100%;
                        }
                        .group{
                            margin-bottom: 23px;
                            
                            input{
                                width: 100%;
                                border: none;
                                padding: 12px 20px;
                                height: 40px;
                                background: #FFFFFF;
                                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
                                border-radius: 8px;

                                &:hover{
                                    border: 1px solid #F34E4E;
                                    outline: none;
                                }
                                &:focus{
                                    border: 1px solid #F34E4E;
                                    outline: none; 
                                }
                            }
                            select{
                                border: none;
                                padding: 10px 20px;
                                height: 40px;
                                background: #FFFFFF;
                                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
                                border-radius: 8px;
                                appearance: none;
                                width: 100%;
                                font-size: 16px;

                                option{
                                    
                                    height: 40px;
                                }

                                &:focus{
                                    outline: none;
                                }
                            }
                        }
                        button{
                            border: none;
                            color: #ffffff;
                            border-radius: 40px;
                            height: 50px;
                            margin-bottom: 24px;
                        }
                        .disclaimer{
                            font-size: 12px;
                        }


                        .select-box {
                            position: relative;
                            display: block;
                            width: 100%;
                            margin: 0 auto;
                            font-size: 18px;
                            color: #60666d;

                            &__current:focus .select-box__icon {
                                transform: translateY(-50%) rotate(180deg);
                            }
                        }
                          
                          .select-box__current {
                            position: relative;
                            box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
                            cursor: pointer;
                            outline: none;
                          }
                          .select-box__current:focus + .select-box__list {
                            opacity: 1;
                            -webkit-animation-name: none;
                            animation-name: none;
                          }
                          .select-box__current:focus + .select-box__list .select-box__option {
                            cursor: pointer;
                          }
                          .select-box__current:focus .select-box__icon {
                            transform: translateY(-50%) rotate(180deg);
                          }
                          .select-box__icon {
                            position: absolute;
                            top: 50%;
                            right: 15px;
                            transform: translateY(-50%);
                            width: 20px;
                            opacity: 0.3;
                            transition: 0.2s ease;
                          }
                          .select-box__value {
                            display: flex;
                          }
                          .select-box__input {
                            display: none;
                          }
                          .select-box__input:checked + .select-box__input-text {
                            display: block;
                          }
                          .select-box__input-text {
                            display: none;
                            width: 100%;
                            margin: 0;
                            padding: 15px;
                            background-color: #fff;
                          }
                          .select-box__list {
                            position: absolute;
                            z-index: 25;
                            width: 100%;
                            padding: 15px 0;
                            background: red;
                            list-style: none;
                            opacity: 1;
                            border-radius: 10px;
                            margin-top: 6px;
                            -webkit-animation-name: HideList;
                                    animation-name: HideList;
                            -webkit-animation-duration: 0.5s;
                                    animation-duration: 0.5s;
                            -webkit-animation-delay: 0.5s;
                                    animation-delay: 0.5s;
                            -webkit-animation-fill-mode: forwards;
                                    animation-fill-mode: forwards;
                            -webkit-animation-timing-function: step-start;
                                    animation-timing-function: step-start;
                            box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
                          }
                          .select-box__option {
                            display: block;
                            padding: 15px;
                            background-color: #fff;
                          }
                          .select-box__option:hover, .select-box__option:focus {
                            color: #546c84;
                            background-color: #fbfbfb;
                          }
                          
                          @-webkit-keyframes HideList {
                            from {
                              transform: scaleY(1);
                            }
                            to {
                              transform: scaleY(0);
                            }
                          }
                          
                          @keyframes HideList {
                            from {
                              transform: scaleY(0);
                            }
                            to {
                              transform: scaleY(1);
                            }
                        }



                    }
                }
            }
        }
        .hero__theme{
            color: #ffffff;
            font-family: "Montserrat-Bold";
            font-size: 64px;
        }
    }
    @media all and (max-width: 768px){
        .row{
            align-items: flex-start !important;
        }
        .hero__theme{
            font-size: 40px !important;
        }
    }
    
`;

const SignUp: FC<any> = (): ReactElement => {
    return (
        <SignUpWrapper>
            <section className="hero position-relative">
                <div className="container h-100">
                    <NavBar />
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h3 className="hero__theme">Your true christian love lives here</h3>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-section">
                                <form>
                                    <div className="header d-flex justify-content-between">
                                        <p>Almost done...</p>
                                        <p>&#10005;</p>
                                    </div>
                                    <div className="">
                                        
                                        
                                    <div className="select-box">
                                        <div className="select-box__current">
                                            <div className="select-box__value">
                                                <input className="select-box__input" type="radio" id="0" value="1" name="Ben" defaultChecked />
                                                <p className="select-box__input-text">Cream</p>
                                            </div>
                                            <div className="select-box__value">
                                                <input className="select-box__input" type="radio" id="1" value="2" name="Ben"/>
                                                <p className="select-box__input-text">Cheese</p>
                                            </div>
                                            <div className="select-box__value">
                                                <input className="select-box__input" type="radio" id="2" value="3" name="Ben"/>
                                                <p className="select-box__input-text">Milk</p>
                                            </div>
                                            <div className="select-box__value">
                                                <input className="select-box__input" type="radio" id="3" value="4" name="Ben"/>
                                                <p className="select-box__input-text">Honey</p>
                                            </div>
                                            
                                            <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
                                        </div>
                                        <ul className="select-box__list">
                                            <li>
                                                <label className="select-box__option" htmlFor="0">Cream</label>
                                            </li>
                                            <li>
                                                <label className="select-box__option" htmlFor="1">Cheese</label>
                                            </li>
                                            <li>
                                                <label className="select-box__option" htmlFor="2">Milk</label>
                                            </li>
                                            <li>
                                                <label className="select-box__option" htmlFor="3">Honey</label>
                                            </li>
                                            
                                        </ul>
                                        </div>



                                    </div>
                                    <div className="group">
                                        <label className="d-block">Tell us your name</label>
                                        <input type="text" placeholder="Name" name="" id="" />
                                    </div>
                                    <div className="group">
                                        <label className="d-block">Date of birth</label>
                                        <input type="text" placeholder="Name" name="" id="" />
                                    </div>
                                    <div className="group">
                                        <label className="d-block">Location</label>
                                        <input type="text" placeholder="i.e. Lagos, Nigeria" name="" id="" />
                                    </div>
                                    <div className="group">
                                        <label className="d-block">Email address / Phone Number</label>
                                        <input type="text" placeholder="Email / Phone" name="" id="" />
                                    </div>
                                    <div className="group">
                                        <label className="d-block">Password</label>
                                        <input type="password" placeholder="Create password (at least 5 characters)" name="" id="" />
                                    </div>
                                    
                                    <button type="submit" className="d-block w-100 pry-button">Create account</button>
                                    <p className="disclaimer">
                                        By continuing, you're confirming that you've read and agree to our Terms and Conditions and Privacy Policy.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </SignUpWrapper>
    );
}

export default SignUp;
