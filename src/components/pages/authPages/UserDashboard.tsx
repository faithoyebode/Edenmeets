import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {ReactComponent as MessageIcon} from 'assets/icons/message-icon.svg';
import {ReactComponent as MatchIcon} from 'assets/icons/match-icon.svg';
import {ReactComponent as NearMeIcon} from 'assets/icons/near-me-icon.svg';
import {ReactComponent as LikeMeIcon} from 'assets/icons/like-me-icon.svg';
import {ReactComponent as ProfileIcon} from 'assets/icons/profile-icon.svg';
import ProfilePrompt from 'assets/images/profile-prompt-pic.png';
import ProfileWelcome from 'assets/images/profile-welcome-pic.jpg';








const UserDashboardWrapper = styled.div`
    font-family: "Montserrat";

    header{
        height: 85px;
        border-bottom: 1px solid rgba(170, 183, 198, 0.5);
        margin-bottom: 26px;

        h3{
            font-family: "Montserrat-Bold";
            line-height: 85px;
        }
    }

    .left-nav{
        height: 493px;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        padding: 58px;

        .nav-link{
            all: unset;
            display: block;
            width: 100%;
            text-align: center;
            height: 48px;
            border-radius: 40px;
            margin-bottom: 20px;


            svg{
                margin-right: 15px;
            }
            
            &:hover{
                background-color: #F34E4E;
                
                svg{
                    filter:  brightness(0) invert(1);
                }
                span{
                    color: #ffffff;
                }
            }
        }
    }
    .profile-prompt{
        padding-left: 40px;
        padding-right: 40px;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.08);    
        height: 106px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        margin-bottom: 27px;

        img{
            width: 70px;
            height: auto;
            margin-right: 32px;
        }
        
        button{
            all: unset;
            color: #ffffff;
            background: #f34e4e;
            border-radius: 40px;
            height: 30px;
            font-size: 14px;
            width: 84px;
            text-align: center;
        }
    }
    .welcome-content{
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.08);  
        border-radius: 8px;

  
        h5{
            border-bottom: 1px solid rgba(170, 183, 198, 0.3);
            padding-left: 40px;
            height: 54px;
            line-height: 54px;
        }

        div{
            padding: 23px 20% 96px 20%;
            text-align: center;

            img{
                margin-bottom: 38px;
            }

            h6{
                font-size: 18px;
                font-family: "Montserrat-Bold"
                margin-bottom: 13px;
            }

            p{
                margin-bottom: 28px;
                line-height: 22.43px;
                font-size: 14px;
            }

            button{
                all: unset;
                color: #ffffff;
                background: #f34e4e;
                border-radius: 40px;
                height: 40px;
                font-family: "Montserrat-SemiBold";
                font-size: 14px;
                width: 148px;
                text-align: center;
            }
        }
    }
`;


const UserDashboard: FC<any> = (): ReactElement => {
    return (
        <UserDashboardWrapper className="pb-4">
            <header>
                <div className="container">
                    <h3>Edenmeets</h3>
                </div>
            </header>
            <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-nav">
                                <NavLink to="/user/messages" className="nav-link d-flex justify-content-center align-items-center"><MessageIcon /> <span>Messages</span></NavLink>
                                <NavLink to="/user/messages" className="nav-link d-flex justify-content-center align-items-center"><MatchIcon /> <span>Find a Match</span></NavLink>
                                <NavLink to="/user/messages" className="nav-link d-flex justify-content-center align-items-center"><NearMeIcon /> <span>Near Me</span></NavLink>
                                <NavLink to="/user/messages" className="nav-link d-flex justify-content-center align-items-center"><LikeMeIcon /> <span>Like Me</span></NavLink>
                                <NavLink to="/user/messages" className="nav-link d-flex justify-content-center align-items-center"><ProfileIcon /> <span>Profile</span></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="profile-prompt">
                                <img src={ProfilePrompt} alt="profile prompt avatar" />
                                <div>
                                    <h5>Welcome! Profile Update 👉</h5>
                                    <p className="my-0">Hello Tosin, Kindly update your profile and add some images</p>
                                </div>
                                <button>Proceed</button>
                            </div>
                            <div className="welcome-content">
                                <h5>Messages</h5>
                                <div>
                                    <img src={ProfileWelcome} alt="profile page welcome" />
                                    <h6>Welcome to Edenmeets, Its empty here</h6>
                                    <p>You do not have any chat messages or conversations to display at the moment kindly find a match and initiate a conversation 😎</p>
                                    <button>Find a match</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
        </UserDashboardWrapper> 
    )
}

export default UserDashboard;
