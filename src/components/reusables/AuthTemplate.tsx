import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import HeroImg from 'assets/images/auth-hero.jpg';
import NavBar from "components/reusables/NavBar";
import Footer from "components/reusables/Footer";
import {ReactComponent as WhiteStrokes} from 'assets/images/white-strokes.svg';
import {ReactComponent as YellowStrokes} from 'assets/images/yellow-strokes.svg';





const AuthTemplateWrapper = styled.div`
    
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
                
            }
        }
        .hero__theme{
            color: #ffffff;
            font-family: "Montserrat-Bold";
            font-size: 64px;
        }
        .yellow-stroke{
            position: absolute;
            left: 17%;
            bottom: 103px;
        }
        .white-stroke{
            position: absolute;
            left: 47%;
            bottom: 95px;
        }
    }
    
    @media all and (max-width: 768px){
        .row{
            align-items: flex-start !important;
        }
        .hero__theme{
            font-size: 40px !important;
        }
        .yellow-stroke{
            display: none;
        }
        .white-stroke{
            display: none;
        }
    }
    @media all and (max-width: 425px){
        .hero__theme{
            margin-bottom: 14px !important;
        }
    }

`;

interface AuthChildProps{
    children: FC<any>;
}


const AuthTemplate: FC<any> = ({ children }: AuthChildProps ): ReactElement => {
    return (
        <AuthTemplateWrapper>
            <section className="hero position-relative">
                <div className="container h-100">
                    <NavBar />
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h3 className="hero__theme">Your true christian love lives here</h3>
                        </div>
                        <div className="col-lg-6 col-md-6">
                           { children }
                        </div>
                    </div>
                    
                    <YellowStrokes className="yellow-stroke"/>
                    <WhiteStrokes className="white-stroke" />
                </div>
            </section>
            <Footer />
        </AuthTemplateWrapper> 
    )
}

export default AuthTemplate;
