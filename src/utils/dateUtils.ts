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

    return [`${currentDate[1]} ${currentDate[2]} ${currentDate[3]}, ${currentDate[5]}`, `${currentDate[6]}`]
}