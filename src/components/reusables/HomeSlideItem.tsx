import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';

interface slideProp{
    image: string,
    name: string,
    quote: string,
}

const HomeSlideItemWrapper = styled.div`
    min-width: 33%;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    scroll-snap-align: center;
    
    .slide-item{
        background-color: #ffffff;
        text-align: center;
        border-radius: 8px;
        padding: 39px 28px;
        width: 320px;
        flex-shrink: 0;
        margin: 0 15px;
        
        
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
    @media all and (max-width: 1199px){
        width: 100%;
        display: flex;
        flex-shrink: 0;
        justify-content: center;
        border-radius: 8px;
        
    }

    @media all and (max-width: 768px){
            flex-shrink: 0;
            margin: 0 15px;
            
        }
    }

    @media all and (max-width: 425px){
        .slide-item{
            width: 290px;
            flex-shrink: 0;
            margin: 0 15px;
            padding: 39px 15px;

        }
    }
    
`;


const HomeSlideItem: FC<any> = ({ image, name, quote }: slideProp): ReactElement => {
    return (
        <HomeSlideItemWrapper>
            <div className="slide-item">
                <img src={image} alt="edenmeets testifier" className="" />
                <h4>{name}</h4>
                <p>
                    {quote}
                </p>
            </div>
        </HomeSlideItemWrapper> 
    )
}

export default HomeSlideItem;
