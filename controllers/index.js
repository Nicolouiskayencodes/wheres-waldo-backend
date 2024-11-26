const { character } = require('../db/client')
const db = require('../db/queries')

const getAllImages = async (req, res) => {
  try{
    const images = await db.getAllImages()
    return res.json(images)
  } catch(err){
    throw(err)
  }
}
const getImage = async (req, res) => {
  const id = req.params.id;
  try {
    const image = await db.getImage(id);
    const score = await db.addScore(id)
    res.json(image, score)
  } catch (err) {
    throw (err)
  }
}
const checkCharacter = async (req, res) =>{
  const imageId = req.params.imageId;
  const scoreId = req.params.scoreId;
  const character = req.body.character;
  const xguess = req.body.xguess;
  const yguess = req.body.yguess;
  try {
    const character = await db.checkCharacter(imageId, character);
    const x = Math.abs(character.xcoordinate - xguess);
    const y = Math.abs(character.ycoordinate - yguess);
    if (x<60 && y<60){
      const score = await db.findCharacter(scoreId, character);
      const image = await db.getImage(imageId);
      if (score.found.length === image.characters.length) {
        const completionTime = Math.abs(newDate() - score.createdAt)
        const complete = await db.complete(scoreId, completionTime);
        res.json(complete);
      } else {
        res.json(score);
      }
    } else {
      res.json(false);
    }
  } catch (err) {
    throw(err)
  }
}
const addName = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  try {
    const score = await db.addName(id, name)
  } catch (err) {
    throw (err)
  }
}

module.exports = { getAllImages, getImage, checkCharacter, addName }