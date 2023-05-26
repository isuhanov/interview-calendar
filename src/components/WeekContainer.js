import { ReactComponent as ArrowBack } from '../assets/icons/arrowBack.svg';
import { ReactComponent as ArrowForward } from '../assets/icons/arrowForward.svg';

import * as S from '../styles/components';

const WeekContainer = () => {
    return (        
        <S.WeekContainer padding=' 10px 0' direction='column' gap='10px'>
            <S.GridRow>
                <p></p>
                <S.WeekDay direction='column' gap='5px'>
                    <p>M</p>
                    <S.WeekDate>25</S.WeekDate>
                </S.WeekDay>
                <S.WeekDay direction='column' gap='5px'>
                    <p>M</p>
                    <S.WeekDate>25</S.WeekDate>
                </S.WeekDay>
                <S.WeekDay direction='column' gap='5px'>
                    <p>M</p>
                    <S.WeekDate>25</S.WeekDate>
                </S.WeekDay>
                <S.WeekDay direction='column' gap='5px'>
                    <p>M</p>
                    <S.WeekDate>25</S.WeekDate>
                </S.WeekDay>
                <S.WeekDay direction='column' gap='5px'>
                    <p>M</p>
                    <S.WeekDate>25</S.WeekDate>
                </S.WeekDay>
                <S.WeekDay direction='column' gap='5px'>
                    <p>M</p>
                    <S.WeekDate>25</S.WeekDate>
                </S.WeekDay>
                <S.WeekDay direction='column' gap='5px'>
                    <p>M</p>
                    <S.WeekDate>25</S.WeekDate>
                </S.WeekDay>
            </S.GridRow>
            <S.WeekBtnBar>
                <p></p>
                <S.Button>
                    <ArrowBack />
                </S.Button>
                <S.WeekMonth>
                    March 2019
                </S.WeekMonth>
                <S.Button>
                    <ArrowForward />
                </S.Button>
            </S.WeekBtnBar>
        </S.WeekContainer>
    );
}

export default WeekContainer;