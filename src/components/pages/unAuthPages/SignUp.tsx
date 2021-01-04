import React, { FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import HeroImg from 'assets/images/auth-hero.jpg';
import NavBar from "components/reusables/NavBar";
import Footer from "components/reusables/Footer";
import SelectInput from "components/reusables/SelectInput";



const SignUpWrapper = styled.div`
    .mt-23{ 
        margin-top: 23px;
    }

    .w-32{width: 32%;}

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

                        .group.last-child{
                            margin-bottom: 42px;
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
                        .gender-wrapper{
                            .gender-select:focus{
                                border: 1px solid red;
                                outline: none;
                            }
                            .gender-select.has-focus{
                                .gender-select__select{
                                    border-radius: 8px;
                                    background: #ffff !important;
    
                                    div.gender-select__options{
                                        list-style-type: none !important;
    
                                        .gender-select__row .gender-select__option{
                                            margin-bottom: 0 !important;
                                            border-radius: 8px !important;
                                            width: 100% !important;
                                            color: #00000 !important;
                                        }
                                    }
                                }

                            }
                            .gender-select__input{
                                width: 100%;
                                height: 40px;
                                border-radius: 8px;
                                padding: 12px 20px;
                                border: none;
                                outline: none;

                                &:focus{
                                    border: 1px solid red;
                                }
                            }

                            

                            img{
                                top: 0;
                                right: 20px;
                                height: 40px;
                                cursor: pointer;
                                opacity: 0.5;
                            }
                            img:click{
                                transform: scale(2);
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
    const genderData = [
        {
            radiosName: "gender",
            itemName: "I am a man 👨🏽",
            identity: "man"
        },
        {
            radiosName: "gender",
            itemName: "I am a woman 👩🏻",
            identity: "woman"
        }
    ];
    const [ genderState, setGenderState ] = useState(genderData[0].itemName);

    const dayData = [...Array(31)].map(
    (e, index) => ({
        radiosName: "day",
        itemName: index+1,
        identity: index+1
    }));
    
    const [ dayState, setDayState ] = useState(dayData[0].itemName);

    const monthData = [...Array(12)].map(
        (e, index) => ({
            radiosName: "day",
            itemName: index+1,
            identity: index+1
        }));

    const [ monthState, setMonthState ] = useState(monthData[0].itemName);

    const yearData = [...Array(50)].map(
        (e, index) => ({
            radiosName: "day",
            itemName: index+1980,
            identity: index+1980
        }));

    const [ yearState, setYearState ] = useState(yearData[0].itemName);


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

                                    <div className="position-relative gender-wrapper">


                                    </div>
                                    
                                    <div className="w-100">
                                        <SelectInput data={genderData} dataState={genderState} setDataState={setGenderState}/>
                                    </div>
                                    
                                    <div className="group mt-23">
                                        <label className="d-block">Tell us your name</label>
                                        <input type="text" placeholder="Name" name="" id="" />
                                    </div>
                                    <div className="group">
                                        <label className="d-block">Date of birth</label>
                                        <div className="d-flex justify-content-between">
                                            <div className="w-32">
                                                <SelectInput data={dayData} dataState={"Day"} setDataState={setDayState} dayState={dayState} />
                                            </div>
                                            <div className="w-32">
                                                <SelectInput data={monthData} dataState={"Month"} setDataState={setMonthState} dayState={monthState} />
                                            </div>
                                            <div className="w-32">
                                                <SelectInput data={yearData} dataState={"Year"} setDataState={setYearState} dayState={yearState} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="d-block">Location</label>
                                        <input type="text" placeholder="i.e. Lagos, Nigeria" name="" id="" />
                                    </div>
                                    <div className="group">
                                        <label className="d-block">Email address / Phone Number</label>
                                        <input type="text" placeholder="Email / Phone" name="" id="" />
                                    </div>
                                    <div className="group last-child">
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
