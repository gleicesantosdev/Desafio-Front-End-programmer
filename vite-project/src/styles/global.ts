import {createGlobalStyle} from 'styled-components'

const globalStyle = createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body {
        backgroud-color: #F8FDFF;
        font-family: 'Open Sans', sans-serif;
    }

    a {
        text-decoration: none;
        outline: none;
    }

`

export default globalStyle;