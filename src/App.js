import { ReactComponent as AddLogo } from './assets/icons/add.svg';
import Calendar from './components/Calendar';
import * as S from './styles/components';
import WeekContainer from './components/WeekContainer';
import { useGetWeek } from './hooks/useGetWeek';

function App() {

    const week = useGetWeek();

    return (
        <S.Container>
            <S.FlexContainer justify='space-between' padding='20px'>
                <S.Title>Interview Calendar</S.Title>
                <S.Button>
                    <AddLogo />
                </S.Button>
            </S.FlexContainer>

            <WeekContainer {...week}/>

            <Calendar />
            
            <S.FlexContainer justify='space-between' padding='20px'>
                <S.Button>Today</S.Button>
                <S.Button>Delete</S.Button>
            </S.FlexContainer>
        </S.Container>
    );
}

export default App;