export const convertDateTime = (concertDate: string) => {

    const date = new Date(concertDate);
    const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: "2-digit",
        minute: "2-digit"
    };

    const currentDate = date.toLocaleDateString('es-MX', options).split(" ");

    return {
        dayName: currentDate[0],
        dayNumber: currentDate[1],
        month: currentDate[3],
        year: currentDate[5].split(',')[0],
        time: currentDate[6], 
    }
}