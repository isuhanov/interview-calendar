import { ReactComponent as AddLogo } from './assets/icons/add.svg';
import * as S from './styles/components';

function App() {
    return (
        <S.Container>
            <S.FlexContainer justify='space-between' align='center' padding='20px'>
                <S.Title>Interview Calendar</S.Title>
                <S.Button>
                    <AddLogo />
                </S.Button>
            </S.FlexContainer>
            <S.FlexContainer justify='space-between' align='center' padding='20px'>
                <S.Button>Today</S.Button>
                <S.Button>Delete</S.Button>
            </S.FlexContainer>
        </S.Container>
    );
}

export default App;