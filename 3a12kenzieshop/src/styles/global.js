import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: white;
        font-family: Arial, Helvetica, sans-serif;
        list-style: none;
        background-color: #F5F5F5;
    }
    ul{
        list-style: none;
        min-width: 200px;
        padding: 10px;
    }
    .li-cart{
        box-sizing: border-box;
        width: 150%;
    }
    .div-cart{
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cart-img{
        height: 80px;
    }
    .span-cart{
        padding: 10px;
    }
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
`

export default GlobalStyle