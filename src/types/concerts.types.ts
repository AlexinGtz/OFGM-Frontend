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
    program: {
      composers: Array<person>,
      pieces: Array<piece>,
    }
}

export type modalConcert = Partial<Concert>

export type person = {
    name: string,
    instrument: string,
    shortName: string
}

export type piece = {
    composerId: string,
    name: string,
    duration: string,
    pieceOrder: number,
    movements: Array<movement>,
}

export type movement = {
    movementOrder: number,
    name: string,
}