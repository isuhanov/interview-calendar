import * as S from '../styles/components';

import CalendarCell from './CalendarCell';

const CalendarRow = () => {
    return (
    <S.GridRow>
        <S.CalendarTime>12:00</S.CalendarTime>
        <CalendarCell />
        <CalendarCell />
        <CalendarCell />
        <CalendarCell />
        <CalendarCell />
        <CalendarCell />
        <CalendarCell />
    </S.GridRow>
    )
}

export default CalendarRow;