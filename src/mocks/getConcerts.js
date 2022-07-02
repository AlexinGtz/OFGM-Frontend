const getConcerts = [
    {
        id: "c759738c-4449-44e2-9454-907c2ceccbf1",
        concertTitle: "Schubert Hommage",
        concertLocationName: "Centro Cultural Constitucion",
        concertLocationURL: "https://goo.gl/maps/r2VXWGXW3VqxXogh8",
        concertDate: "2021-12-10T19:00:00-06:00",
        concertThumbnailKey: "2022/concerts/thumbnails/some-key.jpg",
        concertPhotoKey: "2022/concerts/pictures/some-key.jpg",
        conductor: "Alex Gutierrez",
        concertType: 'paid',
        soloists: [],
        program: {
          composers: [
            {
              id: "1",
              name: "Ludwig Van Beethoven",
              shortName: "Beethoven",
            },
            {
              id: "2",
              name: "Franz Liszt",
              shortName: "Liszt",
            }
          ],
          pieces: [
            {
              composerId: "1",
              name: "Sinfonía No. 5 en Do menor",
              duration: "28:30",
              pieceOrder: 1,
              movements: [
                {
                  movementOrder: 1,
                  name: "I. Allegro con Brio",
                },
                {
                  movementOrder: 2,
                  name: "II. Andante Con Moto",
                },
                {
                  movementOrder: 3,
                  name: "III. Scherzo (Allegro)",
                },
                {
                  movementOrder: 4,
                  name: "IV. Allegro",
                },
              ],
            },
            {
              composerId: "2",
              name: "Les Preludes",
              duration: "17:20",
              pieceOrder: 2,
              movements: [],
            },
          ],
        },
    },
    {
        id: "fa2c6747-076c-466f-a9ee-d4bcc1400b32",
        concertTitle: "Talento Local",
        concertLocationName: "Centro Cultural Constitucion",
        concertLocationURL: "https://goo.gl/maps/r2VXWGXW3VqxXogh8",
        concertDate: "2022-09-12T15:00:00-06:00",
        concertThumbnailKey: "2022/concerts/thumbnails/some-key.jpg",
        concertPhotoKey: "2022/concerts/pictures/some-key.jpg",
        conductor: "Alex Gutierrez",
        concertType: 'free',
        soloists: [
            {
                "name": "Alejo Rodriguez",
                "instrument": "Clarinete"
            },
            {
                "name": "Jorge Flores",
                "instrument": "Violoncello"
            },
        ],
        program: {
          composers: [
            {
              id: "1",
              name: "Wolfgang Amadeus Mozart",
              shortName: "Mozart",
            },
            {
              id: "2",
              name: "Gabriel Faure",
              shortName: "Faure",
            }
          ],
          pieces: [
            {
              composerId: "1",
              name: "Concierto para clarinete en La Mayor ",
              duration: "28:20",
              pieceOrder: 1,
              movements: [
                {
                  movementOrder: 1,
                  name: "I. Allegro",
                },
                {
                  movementOrder: 2,
                  name: "II. Adagio",
                },
                {
                  movementOrder: 3,
                  name: "III. Rondo. Allegro",
                },
              ],
            },
            {
              composerId: "2",
              name: "Elegia, Op. 24 en Do menor",
              duration: "7:12",
              pieceOrder: 2,
              movements: [],
            },
          ],
        },
      }
];

export default getConcerts;
