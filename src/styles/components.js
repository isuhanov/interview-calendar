import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 740px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
`;

export const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction = 'row' }) => direction};
    align-items: ${({ align = 'center' }) => align};
    justify-content: ${({ justify = 'center' }) => justify};
    gap: ${({ gap = '0px' }) => gap};
    padding: ${({ padding = '0px' }) => padding};
`;

export const GridRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
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
    color: ${({ theme }) => theme.colors.primary};
    background-color: inherit;
    
    svg {
        width: 35px;
        height: 35px;
        fill: ${({ theme }) => theme.colors.primary};
    }

    &:hover { 
        color: ${({ theme }) => theme.colors.primaryHover};
        svg { fill: ${({ theme }) => theme.colors.primaryHover}; }
    }

    &:active { 
        color: ${({ theme }) => theme.colors.primaryActive};
        svg { fill: ${({ theme }) => theme.colors.primaryActive}; }
    }
`;

export const WeekContainer = styled(FlexContainer)`
    border: 1px ${({ theme }) => theme.colors.fontSecondary};
    border-style: solid none;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
`;

export const WeekDate = styled.p`
    font-size: 17px;
    padding: 7px;
    border-radius: 50%;
    color: white;
    /* color: ${({ theme }) => theme.colors.font}; */
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const WeekDay = styled(FlexContainer)`
    font-size: 12px;
`;

export const WeekBtnBar = styled(GridRow)`
    grid-template-columns: 1fr 1fr 5fr 1fr;

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const WeekMonth = styled(FlexContainer)`
    font-size: 17px;
`;


export const Calendar = styled(FlexContainer)`
    flex-grow: 1;
    overflow: auto;
`;

export const CalendarCell = styled.div`
    height: 35px;
    padding: 2px;
    border: 1px ${({ theme }) => theme.colors.fontSecondary};
    border-style: none solid solid none;

    div {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const CalendarTime = styled.p`
    font-size: 13px;
    padding: 2px;
    text-align: end;
    color: ${({ theme }) => theme.colors.fontSecondary};
`;