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
  const id = parseInt(req.params.id);
  try {
    const image = await db.getImage(id);
    const score = await db.addScore(id)
    res.status(200).json({image, score})
  } catch (err) {
    throw (err)
  }
}
const checkCharacter = async (req, res) =>{
  const imageId = parseInt(req.params.imageId);
  const scoreId = parseInt(req.params.scoreId);
  const characterName = req.body.character;
  const xguess = req.body.xguess;
  const yguess = req.body.yguess;
  try {
    const character = await db.checkCharacter(imageId, characterName);
    const x = (parseInt(character.xcoordinate) - parseInt(xguess));
    const y = (parseInt(character.ycoordinate) - parseInt(yguess));
    if (x<60 && y<60){
      const score = await db.findCharacter(scoreId, characterName);
      const image = await db.getImage(imageId);
      if (score.found.length === image.characters.length) {
        const completionTime = Math.abs(new Date() - score.createdAt)
        const complete = await db.complete(scoreId, completionTime);
        res.status(200).json({image, score: complete});
      } else {
        res.status(200).json({image, score});
      }
    } else {
      res.json(false);
    }
  } catch (err) {
    throw(err)
  }
}
const addName = async (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  try {
    const score = await db.addName(id, name)
    const image = await db.getImage(score.imageid);
    res.status(200).json({image, score});
  } catch (err) {
    throw (err)
  }
}

module.exports = { getAllImages, getImage, checkCharacter, addName }