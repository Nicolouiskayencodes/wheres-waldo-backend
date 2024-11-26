const router = require('express').Router();
const controller = require('../controllers')


router.get('/', controller.getAllImages)
router.post('/image/:id', controller.getImage)
router.post('/:imageId/guess/:scoreId', controller.checkCharacter)
router.put('/name/:id', controller.addName)

module.exports = router;