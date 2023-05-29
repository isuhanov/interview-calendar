import { ReactComponent as ArrowBack } from '../assets/icons/arrowBack.svg';
import { ReactComponent as ArrowForward } from '../assets/icons/arrowForward.svg';

import * as S from '../styles/components';

const WeekContainer = ({ year, month, dateList }) => {

    return (        
        <S.WeekContainer padding=' 10px 0' direction='column' gap='10px'>
            <S.GridRow>
                <p></p>
                { dateList.map(({ name, date }) => (
                    <S.WeekDay direction='column' gap='5px' key={date}>
                        <p>{ name }</p>
                        <S.WeekDate selected={date === new Date().getDate()}>{ date }</S.WeekDate>
                    </S.WeekDay>
                  ))
                }
            </S.GridRow>
            <S.WeekBtnBar>
                <p></p>
                <S.Button>
                    <ArrowBack />
                </S.Button>
                <S.WeekMonth>
                    {month} {year}
                </S.WeekMonth>
                <S.Button>
                    <ArrowForward />
                </S.Button>
            </S.WeekBtnBar>
        </S.WeekContainer>
    );
}

export default WeekContainer;