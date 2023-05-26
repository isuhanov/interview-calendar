import { useState, useEffect } from 'react';
import { ReactComponent as AddLogo } from './assets/icons/add.svg';
import Calendar from './components/Calendar';
import * as S from './styles/components';
import WeekContainer from './components/WeekContainer';

function App() {
    const [currentDay, setCurrentDay] = useState(null);

    useEffect(() => {
        setCurrentDay(new Date());
    }, []);

    return (
        <S.Container>
            <S.FlexContainer justify='space-between' padding='20px'>
                <S.Title>Interview Calendar</S.Title>
                <S.Button>
                    <AddLogo />
                </S.Button>
            </S.FlexContainer>

            <WeekContainer />

            <Calendar />
            
            <S.FlexContainer justify='space-between' padding='20px'>
                <S.Button>Today</S.Button>
                <S.Button>Delete</S.Button>
            </S.FlexContainer>
        </S.Container>
    );
}

export default App;