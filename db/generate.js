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
}

main();