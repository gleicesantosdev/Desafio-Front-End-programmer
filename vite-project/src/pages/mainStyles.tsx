import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;

   > div {
        width: 55%;
    }

    h1 {
        color: #111827;
        font-size: 56px;
        font-weight: bold;
    }

    h6 {
        font-size: 16px;
        color: #374151;
        font-weigth: normal;
        padding-right: 150px;
        margin-top: 20px;
    }
`;