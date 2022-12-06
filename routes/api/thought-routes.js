const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// GET all and POST by thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// GET, PUT, and Delete by id thoughts
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST and Delete by reactions
router.route('/:thoughtId/reactions')
  .post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;