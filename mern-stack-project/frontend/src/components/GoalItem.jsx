import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { RiCloseLargeFill } from "react-icons/ri"

function GoalItem({ goal }) {
	const dispatch = useDispatch()
	return (
		<div className="goal">
			<div>
				{new Date(goal.createdAt).toLocaleString('fi')}
			</div>
			<h2>{goal.text}</h2>
			<button 
				onClick={() => dispatch(deleteGoal(goal._id))} 
				className='close'>
					<RiCloseLargeFill />
			</button>
		</div>
	)
}

export default GoalItem