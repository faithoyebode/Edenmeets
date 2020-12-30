import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import AuthTemplate from "components/reusables/AuthTemplate";


const ForgotPasswordWrapper = styled.div`
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
                margin-top: 22px;
                
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
                font-family: "Montserrat-Medium";
                border: none;
                color: #ffffff;
                border-radius: 40px;
                height: 50px;
                margin-bottom: 24px;
            }
            
        }
    }

`;


const ForgotPassword: FC<any>= (): ReactElement => {
    return (
        <ForgotPasswordWrapper>
            <AuthTemplate>
                <div className="form-section">
                    <form>
                        <div className="header d-flex justify-content-between">
                            <p>Forgot Password</p>
                            <p>&#10005;</p>
                        </div>
                        <p className="f-14">
                            Enter your email or mobile number below and we'll send you instructions to create a new password.
                        </p>
                        <p className="f-14">
                            Make sure you enter the same email or mobile number you used to create your profile.
                        </p>
                        <div className="group">
                            <label className="d-block">Email address / Phone Number</label>
                            <input type="text" placeholder="Email / Phone" name="" id="" />
                        </div>
                        <button type="submit" className="d-block w-100 pry-button">Get new password 🤚</button>
                        
                    </form>
                </div>
            </AuthTemplate>
        </ForgotPasswordWrapper>
    )
}

export default ForgotPassword;
