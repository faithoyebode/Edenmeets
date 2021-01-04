import React, { FC, ReactElement, useState, useRef } from 'react';
import styled from '@emotion/styled';
import SelectIcon from 'assets/icons/select-icon-black.svg';


const EachRadio: FC<any> = ({radiosName, itemName, identity, selectedRef, setDropDown, setDataState }): ReactElement => {
    const selectOption = () => {
        if( selectedRef.current !== null ){
            selectedRef.current.innerHTML = itemName;
            setDataState(itemName);
            setDropDown(false);
        }
    }
    return (
        <div className="option" onClick={selectOption}>
            <input type="radio" name={radiosName} id={identity} className="radio" />
            <label htmlFor={identity}>{itemName}</label>
        </div>
    );
}
const SelectInputWrapper = styled.div`

    .select-box{
        display: flex;
        width: 100%;
        flex-direction: column;

    }
    .select-box .options-container{
        background: #ffffff;
        color: #000000;
        width: 100%;
        transition: all 0.4s;
        border-radius: 8px;
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        order: 1;
    }

    .selected{
        background: #ffffff;
        border-radius: 8px;
        color: #000000;
        margin-bottom: 5px;
        position: relative;
        order: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
    }

    .selected::after{
        content: "";
        background: url(${SelectIcon});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        height: 100%;
        width: 22px;
        right: 10px;
        top: 25%;
        transition: all 0.4s;
    }

    .select-box .options-container.active{
        max-height: 240px;
        opacity: 1;
        overflow-y: auto;
    }

    .select-box .options-container.active + .selected::after{
        transform: rotateX(180deg);
        top: -22%;
    }

    .select-box .options-container::webkit-scrollbar{
        width: 8px;
        background: #0d141f;
        border-radius: 0 8px 8px 0;
    }

    .select-box .options-container::webkit-scrollbar-thumb{
        background: #525861;
        border-radius: 0 8px 8px 0;
    }
     
    .select-box .option, .selected{
        padding: 0 24px;
        cursor: pointer;
    }
    .select-box .option{
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .select-box .option:hover{
        background: #f34e4e;
        color: #ffffff
    }

    .select-box label{
        cursor: pointer;
    }

    .select-box .option .radio{
        display: none;
    }
`;


const SelectInput: FC<any> = ({ data, dataState, setDataState }): ReactElement => {

    const [dropDown, setDropDown] = useState(false);
    const selectedRef = useRef(null);


    return (
        <SelectInputWrapper>
            
            <div className="select-box">
               
                <div className={`options-container ${dropDown ? 'active' : null}`}>
                {data.map((eachOption: any, i: number) => (
                    <EachRadio 
                        key={i}
                        radiosName={eachOption.radiosName} 
                        itemName={eachOption.itemName} 
                        identity={eachOption.identity} 
                        selectedRef={selectedRef} 
                        setDropDown={setDropDown}
                        setDataState={setDataState}
                    />
                ))}
                    {/* <div className="option">
                        <input type="radio" name="category" id="automobiles" className="radio" />
                        <label htmlFor="automobiles">Automobiles</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="category" id="film" className="radio" />
                        <label htmlFor="film">Film and Animation</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="category" id="science" className="radio" />
                        <label htmlFor="science">Science and Technology</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="category" id="art" className="radio" />
                        <label htmlFor="art">Art</label>
                    </div> */}
                </div>
                <div className="selected" ref={selectedRef} onClick={() => {setDropDown(!dropDown)}}>
                        {dataState}
                </div>
            </div>
        </SelectInputWrapper> 
    )
}

export default SelectInput;
