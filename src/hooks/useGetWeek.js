import { useState } from "react";

Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;   
};

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

// хук получения информауии о неделе
export function useGetWeek() {
    const [date, setDate] = useState(new Date()); // стейт текущей даты

    date.setDate(date.getDate() - (date.getDay() + 6) % 7); // установка текущей даты не понедельник
    
    // получение дней недели
    const dateList = Array(7) 
                    .fill()
                    .map((v, i) => ({ 
                        name: dayNames[i], 
                        date: date.addDays(i).getDate()
                    })
                );
    
    
    return {
        year: date.getFullYear(),
        month: monthNames[date.getMonth()],
        dateList
    };
}