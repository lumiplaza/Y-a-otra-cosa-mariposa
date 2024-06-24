
import styled from 'styled-components';

import FondoNav from '../../Assets/magicflowers4.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';



export const NavBarStyle = styled(AppBar)`
    background-image: url(${FondoNav}) ;
    height: 8.5rem;
    opacity: 0.97;
`

export const LogoContainer = styled.div`
   padding-top: 1.3rem;
   margin-left: 4.7rem;
`

export const LogoImg = styled.img`
   width: 9.5rem;
   height: 9.5rem;
   opacity: 0.87;
`

export const MenuItemContainer = styled(Box)`
    margin-right: 1rem;
    padding-right: 1.3rem; 
`
export const MenuItem = styled.button`
    width: 7.2rem;
    height: 2.8rem;
    font-size: 15.3px;
    border-radius: 15%;
    border-color: #981fa8;
    border-width: 3.9px;;
    color:  #f1ff29;
    background-color: transparent;
    margin-left: 1.5rem;
    margin-right: -1.5rem;
    border-style: inset;
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 550;
    font-style: italic;
    font-variation-settings: "wdth" 100;
    

      &:hover{
            color: #34bd22;
            transition: 0.5s;
            font-size: 18px; 
            border: 2px solid #df45bd;
            cursor: pointer;
            background-color: #e9d3e7;
       }
`


