import {Fragment, useState, useEffect} from "react";
import MealEntry from './MealEntry.jsx';
import MealEntryTable from './MealEntryTable.jsx';
import {createMealEntry, getMealEntries} from '../../Services/UserService.js';

export default function MealScreen({user, addMealEntryToFoodEntry}){
	
	const [mealEntries, setMealEntries] = useState([]);
	const [toggle, setToggle] = useState(false);
	const [editMealEntry, setEditMealEntry] = useState({});

	useEffect(() => {
		console.log("Inside the useEffect")
		getMealEntries(user)
			.then(results => {
				console.log(results)
				setMealEntries(results)
			})
	}, [toggle])

	const saveMealEntry = (mealEntry) => {
		console.log(mealEntry)
		let newMealEntry = mealEntry;
		newMealEntry['userId'] = user.username;
		createMealEntry(user, mealEntry)
			.then(r => {
				setToggle(!toggle)
				setEditMealEntry({})
			})
	}

	const editMeal = (mealEntry) => {
		setEditMealEntry(mealEntry)
	}

	return (
		<Fragment>
			<MealEntry saveMealEntry={saveMealEntry} editMealEntry={editMealEntry}/>
			<MealEntryTable data={mealEntries} addMealEntryToFoodEntry={addMealEntryToFoodEntry} editMeal={editMeal}/>
		</Fragment>
	)
}