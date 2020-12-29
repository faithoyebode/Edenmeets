import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import AuthTemplate from "components/reusables/AuthTemplate";
import { Link } from 'react-router-dom';


const SignInWrapper = styled.div`
    .f-14{
        font-size: 14px;
    }
    .form-section{
        background: rgba(40, 40, 40, 0.67);
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        align-self: flex-end;
        color: #ffffff;
        max-width: 444px;
        padding: 48px 37px 65px 37px;

        form{
            .header{
                font-size: 25px;
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
            }
            button{
                border: none;
                color: #ffffff;
                border-radius: 40px;
                height: 50px;
                margin-bottom: 24px;
            }
            .fgt-pwd, .sup{
                all: unset;
                cursor: pointer;
                color: #F34E4E;
            }
        }
    }
    .sup-directive{
        font-size: 20px;
        margin-top: 18px;
    }

`;


const SignIn: FC<any>= (): ReactElement => {
    return (
        <SignInWrapper>
            <AuthTemplate>
                <div className="form-section">
                    <form>
                        <div className="header d-flex justify-content-between">
                            <p>Sign in to Edenmeets...</p>
                            <p>&#10005;</p>
                        </div>
                        <p className="f-14">Please enter your sign in details</p>
                        <div className="group">
                            <label className="d-block">Email address / Phone Number</label>
                            <input type="text" placeholder="Email / Phone" name="" id="" />
                        </div>
                        <div className="group">
                            <label className="d-block">Password</label>
                            <input type="password" placeholder="Enter password" name="" id="" />
                        </div>
                        
                        <button type="submit" className="d-block w-100 pry-button">Sign me in 🤚</button>
                        <Link to="/forgot-password" className="f-14 fgt-pwd">Forgot password</Link>
                        <p className="sup-directive">
                            <span><Link to="/sign-up" className="sup">Sign Up</Link></span> here if you are not yet directed
                        </p>
                    </form>
                </div>
            </AuthTemplate>
        </SignInWrapper>
    )
}

export default SignIn;
