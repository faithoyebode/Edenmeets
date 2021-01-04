import React, { FC, ReactElement, useRef } from 'react';
import styled from '@emotion/styled';
import HeroImg from 'assets/images/edenmeets-home-hero.jpg';
import Singles1Img from 'assets/images/edenmeets-singles-1.jpg';
import Singles2Img from 'assets/images/edenmeets-singles-2.jpg';
import Singles3Img from 'assets/images/edenmeets-singles-3.jpg';
import Bullet from 'assets/images/edenmeets-bullet-img.svg';
import YellowLady from 'assets/images/smiling-lady-1.jpg';
import Couple1 from 'assets/images/smiling-couple-1.jpg';
import Couple2 from 'assets/images/smiling-couple-2.jpg';
import SuccessBg from 'assets/images/success-stories-bg.jpg';
import TimothyImg from 'assets/images/timothy-bola-cthumb.png';
import RonkeImg from 'assets/images/ronke-kuti-cthumb.png';
import BettyImg from 'assets/images/betty-fidelis-cthumb.png';
import HomeSlideItem from "components/reusables/HomeSlideItem";
import ForwardArrow from 'assets/icons/forward-arrow.svg';
import BackwardArrow from 'assets/icons/backward-arrow.svg';
import NavBar from "components/reusables/NavBar";
import Footer from "components/reusables/Footer";
import {ReactComponent as WhiteStrokes} from 'assets/images/white-strokes.svg';
import {ReactComponent as YellowStrokes} from 'assets/images/yellow-strokes.svg';
import {ReactComponent as StrokeOnPic} from 'assets/images/stroke-on-pic.svg';






const HomeWrapper = styled.div`
    font-family: 'Montserrat';

    .hero{
        height: 813px;
        background: linear-gradient(104.88deg, rgba(0, 0, 0, 0.9) -5.41%, rgba(0, 0, 0, 0) 102.1%), url(${HeroImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        
        .main{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            max-width: 523px;

            .primary-text{
                font-family: "Montserrat-Bold";
                font-size: 40px;
                margin-bottom: 28px;
            }

            .secondary-text{
                margin-bottom: 28px;
            }

            .main__button{
                border: none;
                padding: 20.5px 39.5px;
                border-radius: 39px;
            }
        }
        .white-stroke{
            position: absolute;
            bottom: 120px;
            left: 30%;
            @media all and (max-width: 1200px){
                left: 30%;
            }

            @media all and (max-width: 768px){
                left: 60%;
                bottom: 180px;
            }
            @media all and (max-width: 425px){
                display: none;
            }
        }
        .yellow-stroke{
            position: absolute;
            bottom: 120px;
            right: 10%;

            @media all and (max-width: 1200px){
                right: 4%;
            }
            @media all and (max-width: 992px){
                display: none;
            }
        }
        
    }
    .hero-form{
        position: absolute;
        z-index: 10;
        width: 294px;
        height: 351px;
        background: rgba(0, 0, 0, 0.4);
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        color: #ffffff;
        bottom: -60px;
        right: 0;
        margin-right: 15px;
        padding: 40px 25px;
        

        form{
            h5{
                font-family: "Montserrat-Medium";
                font-size: 16px;
                margin-bottom: 26px;
                line-height: 20px;
            }

            label{
                display: block;
                margin-bottom: 26px;
                height: 50px;
                background: none;
                border-radius: 39px;
                color: #22213D;
                position: relative;

                
                span{
                    font-family: "Montserrat-Medium";
                    color: #000000;
                    position: absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 10px 20px;
                    line-height: 30px;
                    text-align: center;
                    
                }

                input + label{
                    background: #ffffff;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                }

                input:checked + label{
                    border: 1.5px solid #F34E4E;
                }
                input:hover + label{
                    border: 1.5px solid #F34E4E;
                }
                input:hover + span{
                    color: #F34E4E !important;
                }
                input:checked ~ span{
                    color: #F34E4E !important;
                }
            }
            button{
                border: none;
                border-radius: 39px;
                height: 50px;
            }
        }
    }
    .genuine{
        padding-top: 126px;
        background: linear-gradient(to bottom, #EBEEF4 60%, #ffffff 0%);
        padding-bottom: 109px;
        .genuine__title{
            font-family: "Montserrat-Bold";
            font-size: 44px;
            margin-bottom: 23px;
            text-align: center;
        }
        .genuine__secondary-text{
            color: #364657;
            font-size: 18px;
            text-align: center;
            max-width: 715px;
            margin: 0 auto 64px auto;
        }
        
    }
    .how{
        padding: 81px 0;
        background-color: #EBEEF4;

        .how__title{
            font-size: 40px;
            font-family: "Montserrat-Bold";
            position: relative;
            margin-bottom: 51px;
            padding-bottom: 10px;

            &:before{
                content: "";
                position: absolute;
                width: 35%;
                height: 1px;
                bottom: 0;
                left: 0;
                border-bottom: 8px solid #AB4648;            
            }
        }
        ul{
            
        }
        li{
            list-style: none;
            margin-bottom: 46px;
            display: flex;

            &::before{
                content: " ";
                display: inline-block;
                height: 56px;
                flex-basis: 56px;
                background: url(${Bullet});
                -webkit-background-size: contain;
                background-size: contain;
                background-repeat: no-repeat;
                flex-shrink: 0;
                background-position: top left;
                transform: translate(-20%, -17%);
                background-size: contain;
            }

            div{
                display: inline-block;
                margin-left: 40px;
            }
        }
        .how__list-title{
            
            left: 0;
            font-family: "Montserrat-SemiBold";
            font-size: 22px;
            color: rgba(0, 0, 0, 0.9);
        }
        .how__list-content{
            font-family: 'Montserrat-Medium';
            color: #364657;
            font-size: 16px;
            line-height: 27px;

        }
        .stroke-overlay{
            width: 150px;
            left: 48%;
            top: -37px;
            transform: translateX(-50%);
            transform: scale(1.5);

            @media all and (max-width: 768px){
                left: 48%;
                top: 20px;
                transform: scale(1.8, 2);
            }

            @media all and (max-width: 425px){
                left: 39%;
                top: -45px;
                transform: scale(1.2);
            }
            @media all and (max-width: 320px){
                left: 37%;
                top: -63px;
            }
        }
    }
    .success-stories{
        .slide-section{
            background: url(${SuccessBg});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            padding: 74px 0 95px;

            .slides{
                display: flex;
                align-items: stretch;
                overflow-x: scroll;
                scroll-snap-type: x mandatory;
                width: 100%;
                -ms-overflow-style: none;
                overflow: -moz-scrollbars-none;
                scrollbar-width: none;

                &::-webkit-scrollbar { 
                    display: none; 
                }

                .slide-item{
                    background-color: #ffffff;
                    height: 364px;
                    text-align: center;
                    border-radius: 8px;
                    padding: 39px 28px; 
                    
                    img{
                        width: 82px;
                        height: 82px;
                        margin-bottom: 26px
                    }
    
                    h4{
                        font-size: 22px;
                        font-family: "Montserrat SemiBold";
    
                    }
                }
            }
        }

        .success__title{
            font-family: "Montserrat-Bold";
            font-size: 40px;
            text-align: center;
            position: relative;
            color: #ffffff;
            margin-bottom: 51px;
            padding-bottom: 10px;

            &:before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 15%;
                left: 50%;
                transform: translateX(-50%);
                border-bottom: 8px solid #AB4648; 
            }
        }
        .controls{
            padding-top: 60px;
            margin-bottom: 90px;

            button{
                border: none;
                width: 57px;
                height: 57px;
                border-radius: 50%;
                background: linear-gradient(135deg, #F34E4E 0%, rgba(114, 15, 15, 0.6) 100%);
                box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.32);
                padding: 5px;
                display: inline-flex;
                justify-content: center;
                padding: 0;
                outline: none;

                img{
                    margin: auto;
                }

                &:nth-of-type(1){
                    margin-right: 34px;
                }
            }   
        }
    }

    @media all and (max-width: 768px){

        .genuine__title, .genuine__secondary-text{
            padding: 0 15%;
            width: 100%;
        }
        .how{
            .how__title{
                text-align: center;
    
                &:before{
                    width: 35%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-bottom: 8px solid #AB4648; 
                }
            }
        }

        .slides{
            flex-direction: row !important;
            overflow: hidden;
            border-radius: 8px;
        }
        
    }

    @media all and (max-width: 425px){
        .hero-form{
            position: static;
            margin-top: 37px;
            margin-right: auto;
            margin-left: auto;
        }
        .genuine__title, .genuine__secondary-text{
            padding: 0 15px;
            width: 100%;
        }
        .genuine__title{
            width: 100%;
        }
        .how{
            .how__title{
                font-size: 24px;
            }
        }
        
    }
`;


const Home: FC<any> = (): ReactElement => {

    const slidesConRef = useRef<HTMLDivElement>(null);
    const prev = () => {
        if(slidesConRef.current !== null ){
        const conWidth = slidesConRef.current.clientWidth;
        const itemWidth = -0.34 * conWidth;
        slidesConRef.current.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
        // console.log(conWidth);
        }
    }
    const next = () => {
        if(slidesConRef.current !== null ){
        const conWidth = slidesConRef.current.clientWidth;
        const itemWidth = 0.34 * conWidth;
        slidesConRef.current.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
        // console.log(conWidth);
        }
    }
    return (
        <HomeWrapper>
            <section className="hero position-relative">
                <div className="container">
                    <NavBar />
                    <div className="main align-self-center">
                        <h3 className="primary-text text-white">Finding Love and a Soul Mate the right way</h3>
                        <p className="secondary-text text-white">
                            Edenmeets is a service designed and dedicated to help christian singles looking for long-term commitment to find a partner
                        </p>
                        <button className="main__button pry-button text-white">Signup with google</button>
                    </div>
                    
                </div>
                <WhiteStrokes className="white-stroke" />
                <YellowStrokes className="yellow-stroke"/>
                
            </section>
            <div className="container position-relative">
                <div className="hero-form">
                    <form>
                        <h5>Sign up by answering a few questions</h5>
                        <fieldset>
                            <label htmlFor="man" className="">
                                
                                <input type="radio" id="man" name="gender" value="daily" className="d-none"/>
                                <label htmlFor="man" className=""></label>
                                <span className="">I am a man 👨🏽</span>
                            </label>
                            <label htmlFor="woman" className="">
                                
                                <input type="radio" id="woman" name="gender" value="daily" className="d-none select-cycle my-auto"/>
                                <label htmlFor="woman" className=""></label>
                                <span className="">I am a woman 👩🏻</span>
                            </label>
                        </fieldset>
                        <button type="submit" className="pry-button text-white w-100">Create account</button>
                    </form>
                </div>
            </div>
            <section className="genuine">
                <h3 className="genuine__title">Genuine Christian Singles</h3>
                <p className="genuine__secondary-text">
                    We often meet that special person when we’re least expecting it. Edenmeets is the platform that connects you to genuine christians of like mind, the ones you cross paths with every day, the ones who are already a part of your routine without you realizing it!
                </p>
                <div className="container">
                    <div className="row genuine__images">
                        <div className="col-md-5 align-self-center mb-4">
                            <img src={Singles1Img} alt="edenmeets singles" className="img-fluid" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src={Singles2Img} alt="edenmeets singles" className="w-100 img-fluid" />
                        </div>
                        <div className="col-md-4 align-self-center mb-4">
                            <img src={Singles3Img} alt="edenmeets singles" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="how">
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-lg-6">
                            <h3 className="how__title">Learn how it works</h3>
                            <div className="how__lists">
                                <ul>
                                    <li>
                                        <div>   
                                            <h4 className="how__list-title">Create your profile</h4>
                                            <p className="how__list-content">
                                                Create your profile by simply providing the required information about yourself and uploading up to 4 pictures of you. When you have a profile, other registered users are able to view your profile and interact.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>   
                                            <h4 className="how__list-title">Find a match</h4>
                                            <p className="how__list-content">
                                                To find a match, go to the tab and fill in your preferences. A result will be generated that provides you with various User profiles based on your selected preferences. You can reach out to any of them that catches your fancy by direct message to their profile.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div> 
                                            <h4 className="how__list-title">Make the first move</h4>
                                            <p className="how__list-content">
                                                When you find a profile that matches your spec, send a direct message be polite and genuine. Also send us a feedback afterwards on your experience.
                                            </p>
                                        </div> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 flex-column h-100">
                            <div className="position-relative">
                                <StrokeOnPic className="position-absolute stroke-overlay" />
                                <img src={YellowLady} alt="smiling lady on yellow dress" className="img-fluid w-100 mb-4 flex-shrink-0 h-50" />
                            </div>
                            <div className="row no-gutter">
                                <div className="col-md-6">
                                    <img src={Couple1} alt="edenmeets singles" className="img-fluid w-100  mb-4" />
                                </div>
                                <div className="col-md-6">
                                    <img src={Couple2} alt="edenmeets singles" className="img-fluid w-100 mb-4" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <section className="success-stories">
                <div className="slide-section">
                    <div className="container overflow-hidden">
                        <h3 className="success__title">Our Success Stories</h3>
                        <div ref={slidesConRef} className="slides">
                            <HomeSlideItem 
                                image={TimothyImg}
                                name="Timothy Bola"
                                quote="The dates are now regular and we are going from strength to strength as our relationship builds more towards a new chapter in our lives."
                            />
                            <HomeSlideItem 
                                image={RonkeImg}
                                name="Ronke Kuti"
                                quote="The dates are now regular and we are going from strength to strength as our          relationship builds more towards a new chapter in our lives."
                            />
                            <HomeSlideItem 
                                image={BettyImg}
                                name="Betty Fidelis"
                                quote="The dates are now regular and we are going from strength to strength as our          relationship builds more towards a new chapter in our lives."
                            />
                            <HomeSlideItem 
                                image={RonkeImg}
                                name="Ronke Kuti"
                                quote="The dates are now regular and we are going from strength to strength as our          relationship builds more towards a new chapter in our lives."
                            />
                            <HomeSlideItem 
                                image={BettyImg}
                                name="Betty Fidelis"
                                quote="The dates are now regular and we are going from strength to strength as our          relationship builds more towards a new chapter in our lives."
                            />
                        </div>
                    </div>
                </div>
                <div className="controls d-flex justify-content-center">
                    <button onClick={prev}>
                        <img src={BackwardArrow} alt="backward arrow" />
                    </button>
                    <button onClick={next}>
                        <img src={ForwardArrow} alt="backward arrow" />
                    </button>
                </div>
            </section>
            <Footer />
        </HomeWrapper>
    )
}


export default Home;
