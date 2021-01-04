import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import HeroImg from 'assets/images/about-page-hero.jpg';
import HeroTabImg from 'assets/images/about-hero@768.jpg';
import HeroMobImg from 'assets/images/about-hero@425.jpg';
import LoversImg from 'assets/images/about-us-lovers.jpg';
import NavBar from "components/reusables/NavBar";
import Footer from "components/reusables/Footer";





const AboutUsWrapper = styled.div`
    
    .hero{
        min-height: 675px;
        background: linear-gradient(104.88deg, rgba(0, 0, 0, 0.9) -5.41%, rgba(0, 0, 0, 0) 102.1%), url(${HeroImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        padding-bottom: 91px;        
        
    }
    .vision{
        text-align: center;
        padding: 77px 120px;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.16);
        border-radius: 7px;
        margin: 0 10%;
        position: relative;
        top: -70px;
        z-index: 3;
        background: #ffffff;
        h3{
            font-size: 36px;
            font-family: 'Montserrat-Bold';
            color: #000000;
            margin-bottom: 24px;
        }
        p{
            font-size: 18px;
            color: #364657;

        }
    }
    .description{
        text-align: center;
        margin: 0 14%;

        p:nth-of-type(1){
            font-family: 'Montserrat-Medium';
            margin-bottom: 42px;
            font-size: 18px;

        }
        p:nth-of-type(2){
            font-family: 'Montserrat-SemiBold';
            margin-bottom: 42px;
            font-size: 22px;
        }
        p:nth-of-type(3){
            font-family: 'Montserrat-Medium';
            margin-top: 42px;
            margin-bottom: 412px;
            font-size: 18px;
        }
    }
    
    
    @media all and (max-width: 1024px){
        .hero{
            min-height: 504px;
            background: linear-gradient(104.88deg, rgba(0, 0, 0, 0.9) -5.41%, rgba(0, 0, 0, 0) 102.1%), url(${HeroTabImg});
            background-size: cover;
        }
    
    }
    @media all and (max-width: 768px){
        .vision{
            margin: 0;
            padding: 52px 51px;

        }
    }
    
    @media all and (max-width: 425px){
        .hero{
            min-height: 546px;
            background: linear-gradient(104.88deg, rgba(0, 0, 0, 0.9) -5.41%, rgba(0, 0, 0, 0) 102.1%), url(${HeroMobImg});
            background-size: cover;
            background-position: 90% center;
            background-repeat: no-repeat;
        }
        .vision{
            margin: 0;
            padding: 78px 18px;

        }
        .description{
            text-align: center;
            margin: 0 3%;
        }
        
    }

`;




const AboutUs: FC<any> = (): ReactElement => {
    return (
        <AboutUsWrapper>
            <section className="hero position-relative">
                <div className="container h-100">
                    <NavBar />  
                </div>
            </section>
            <div className="container">
                <section className="vision">
                    <h3>We are building the largest christian social network in Africa</h3>
                    <p>
                        Our vision is to build a platform that enable genuine christians to meet people of like minds, while sharing success and thriving together.
                    </p>
                </section>
                <section className="description">
                    <p>
                        Edenmeets is a Christian dating website that is dedicated to bringing mature Christian Singles that are looking for long-term commitment, together. The people you will meet on Edenmeets are vetted Believers who are seeking life partners.
                    </p>
                    <p>
                        Our mission is to fulfil God’s mandate as is in the Book of Isaiah 34:14b: “no one will lack their own mate, for the Lord has promised this, and His Spirit will gather them together”, by being a gathering point.
                    </p>
                    <img src={LoversImg} alt="lovers" className="img-fluid"/>
                    <p>
                        At Edenmeets, rest assured that a number of people are working to bring you closer to your own forever love, and to help you start your relationship journey. All profiles are verified and vetted to ensure that users have a safe, trusting, secure, and smooth experience. Each user on the forum has been on-boarded based on referral from a reliable and trustworthy source (Believer), who has vouched for their character and integrity. We seriously mean it when we say your true (christian) love lives here!
                    </p>
                </section>
            </div>
            <Footer />
        </AboutUsWrapper> 
    )
}

export default AboutUs;
