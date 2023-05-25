import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 740px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction = 'row' }) => direction};
    align-items: ${({ align = 'stretch' }) => align};
    justify-content: ${({ justify = 'flex-start' }) => justify};
    padding: ${({ padding = '0px' }) => padding};
`;

export const ButtonBar = styled.div`
    display: f;
`;

export const Title = styled.h1`
    font-size: 25px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    color: #ff3131;
    background-color: inherit;
    
    svg {
        width: 35px;
        height: 35px;
        fill: #ff3131;
    }

    &:hover { 
        color: #c31919;
        svg { fill: #c31919; }
    }

    &:active { 
        color: #ff0000;
        svg { fill: #ff0000; }
    }
`;