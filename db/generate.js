const prisma = require('./client.js');

async function main() {
  await prisma.image.create({
    data: {
      link: 'https://res.cloudinary.com/dwhhkaaoe/image/upload/v1732583885/avengers_bs6lvb.jpg',
      height: 853,
      width: 1280,
      characters:{
        create: [{
          name: 'thanos',
          xcoordinate: 500,
          ycoordinate: 300
        },
        {
          name: 'hulk',
          xcoordinate: 605,
          ycoordinate: 155,
        },
        {
          name: 'spiderman',
          xcoordinate: 660,
          ycoordinate: 355,
        },
        {
          name: 'ironman',
          xcoordinate: 1010,
          ycoordinate: 400,
        },
      ],
      },
    },
  })
  await prisma.image.create({
    data: {
      link: 'https://res.cloudinary.com/dwhhkaaoe/image/upload/v1732906189/mario_m1bb7b.jpg',
      height: 853,
      width: 1280,
      characters: {
        create: [{
          name: 'bowser',
          xcoordinate: 450,
          ycoordinate: 570,
        },
        {
          name: 'toad',
          xcoordinate: 630,
          ycoordinate: 535,
        },
        {
          name: 'peach',
          xcoordinate: 770,
          ycoordinate: 470,
        },
        {
          name: 'yoshi',
          xcoordinate: 1040,
          ycoordinate: 520,
        },
        {
          name: 'dk',
          xcoordinate: 880,
          ycoordinate: 500,
        },
      ],
      },
    }
  })
  await prisma.image.create({
    data: {
      link: 'https://res.cloudinary.com/dwhhkaaoe/image/upload/v1732909403/pokemon_pz9nxo.jpg',
      height: 1280,
      width: 1920,
      characters: {
        create: [{
          name: 'meowth',
          xcoordinate: 880,
          ycoordinate: 620,
        },
        {
          name: 'butterfree',
          xcoordinate: 1625,
          ycoordinate: 85,
        },
        {
          name: 'braviary',
          xcoordinate: 390,
          ycoordinate: 305,
        },
        {
          name: 'bellsprout',
          xcoordinate: 930,
          ycoordinate: 310,
        },
        {
          name: 'gligar',
          xcoordinate: 1760,
          ycoordinate: 1180,
        },
      ],
      },
    }
  })
  await prisma.image.create({
    data: {
      link: 'https://res.cloudinary.com/dwhhkaaoe/image/upload/v1732910689/league_rqdxy5.jpg',
      height: 1280,
      width: 1920,
      characters: {
        create: [{
          name: 'annie',
          xcoordinate: 620,
          ycoordinate: 600,
        },
        {
          name: 'alistar',
          xcoordinate: 970,
          ycoordinate: 410,
        },
        {
          name: 'gragas',
          xcoordinate: 1090,
          ycoordinate: 400,
        },
        {
          name: 'garen',
          xcoordinate: 740,
          ycoordinate: 600,
        },
      ],
      },
    }
  })
}

main();