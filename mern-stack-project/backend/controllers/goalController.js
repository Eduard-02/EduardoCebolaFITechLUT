const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({messsage:'Get goals'})
})

// @desc Create Goal
// @route POST /api/goals
// @access Private
const postGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('Please add a text field')
	}

	res.status(200).json({messsage:'Set goal'})
})

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const putGoal = asyncHandler(async (req, res) => {
	res.status(200).json({messsage: `Update goal ${req.params.id}`})
})

// @desc Delete Goal
// @route GET /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({messsage: `Delete goal ${req.params.id}`})
})

module.exports = {
	getGoals,
	postGoal,
	putGoal,
	deleteGoal,
}