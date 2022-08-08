export type ConcertProps = {
    concert: {
        concertName: string,
        concertLocation: string,
        concertDate: string,
        concertId: string,
        buttonText?: string,
    },
    onClick?: Function,
}

export type SingleConcertProps = {
    concert: Concert,
}

export type ConcertType = "free" | "paid";

export type Concert = {
    id: string,
    concertType: ConcertType,
    concertTitle: string,
    concertLocationName: string,
    concertLocationURL: string,
    concertDate: string,
    concertThumbnailKey: string,
    concertPhotoKey: string,
    conductor: string,
    soloists: Array<person>,
    program: Array<piece>,
}

export type PartialConcert = Partial<Concert>

export type ConcertDate = {
    dayName: string,
    dayNumber: string,
    month: string,
    year: string,
    time: string, 
}

export type person = {
    id: string,
    name: string,
    instrument: string,
    shortName: string
}

export type piece = {
    composer: person,
    name: string,
    duration: string,
    pieceOrder: number,
    movements: Array<movement>,
}

export type movement = {
    movementOrder: number,
    name: string,
}