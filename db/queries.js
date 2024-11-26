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
    select: {
      characters: true,
      scores: {
        where: {
          completionTime: {not: null},
        },
        orderBy: {
           completionTime: 'asc'
        }
      }
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
async function addScore(id) {
  const score = await prisma.score.create({
    data: {
      imageid: id
    },
    include: {
      image: {
        select: {
          id: true,
          characters: true,
        }
      }
    },
  })
  return score
}
async function findCharacter(scoreId, character) {
  const score = await prisma.score.update({
    where: {
      id: scoreId,
    },
    data: {
      found: {
        push: character
      }
    },
    include: {
      image: {
        select: {
          id: true,
          characters: true,
        }
      }
    },
  })
  return score
}
async function complete(scoreId, completionTime) {
  const score = await prisma.score.update({
    where: {
      id: scoreId,
    },
    data: {
      completionTime: completionTime
    },
  })
  return score
}
async function addName(scoreId, name) {
  const score = await prisma.score.update({
    where: {
      id: scoreId,
    },
    data: {
      name: name
    },
  })
  return score
}

module.exports = { getAllImages, getImage, checkCharacter, addScore, addName, findCharacter, complete }