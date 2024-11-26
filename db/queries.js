const prisma = require('./client.js');

async function getAllImages() {
  const images = await prisma.image.findMany()
  return images;
}
async function getImage(id) {
  const image = await prisma.image.findUnique({
    where: {
      id: id,
    },
    include: {
      characters: true,
      scores: {
        orderBy: {
          total: 'asc'
      }},
    },
  })
  return image;
}
async function checkCharacter(id, name) {
  const character = await prisma.image.findUnique({
    where: {
      id: id,
    },
    select: {
      characters: {where: {
        name: name
      }
    }},
  })
  return character.characters[1]
}
async function addScore(id, time) {
  const score = await prisma.score.create({
    data: {
      total: time,
      imageid: id
    }
  })
  return score
}
async function addName(id, name) {
  const score = await prisma.score.update({
    where: {
      id: id,
    },
    data: {
      name: name
    }
  })
}

module.exports = { getAllImages, getImage, checkCharacter, addScore, addName }