import FoodEntry from './User/FoodEntry.jsx';
import FoodEntryTable from './User/FoodEntryTable.jsx';
import MealScreen from './MealManageScreen/MealScreen.jsx';
import Report from './DailyReport/Report.jsx';
import {Fragment, useEffect, useState} from "react";
import {getFoodEntries, createFoodEntry} from '../Services/UserService.js';
import {Tabs, Tab} from "react-bootstrap";
export default function UserScreen({user}){
	
	 const [foodEntries, setFoodEntries] = useState([]); 
	 const [count, setCount] = useState(0);
	 const [key, setKey] = useState('home');
	 const [mealEntry, setMealEntry] = useState({});
	 const [foodEntry, setFoodEntry] = useState({});

	 const [toggle, setToggle] = useState(false);
	 const saveFoodEntry = (foodEntry) => {
	 	

	 	foodEntry['userId'] = user.username;
	 	foodEntry['mealEntry']['userId'] = user.username;

	 	createFoodEntry(user, foodEntry)
	 		.then(r => {
	 			console.log("Here in then", r)
	 			resetData();
	 		})
	 		.catch(results => {
	 			console.log("Here in error", results)
	 			if(results.code == 409){
	 				alert("User exceeds limit.")
	 			}
	 			//resetData();
	 		})

	 	
	 }

	const addMealEntryToFoodEntry = (mealEntry) => {
		setKey("home")
		setMealEntry(mealEntry)
	}
	const editFoodEntry = (foodEntry) => {
		console.log(foodEntry);
		setFoodEntry(foodEntry)
	}
	const resetData = () => {
		setToggle(!toggle);
		setMealEntry({})
		setFoodEntry({})
	}
	useEffect(() => {
		console.log("Inside the useEffect")
		getFoodEntries(user)
			.then(results => {
				console.log("results", results);
				setFoodEntries(results)
			})
	}, [toggle])

	return (

		<Fragment>
			<Tabs
      			id="controlled-tab-example"
      			activeKey={key}
      			onSelect={(k) => {setKey(k);resetData()}}
      			className="mb-3">
      			<Tab eventKey="home" title="Home">
        			<FoodEntry saveFoodEntry={saveFoodEntry} mealEntry={mealEntry} foodEntry_EditMode={foodEntry}/>
        			<FoodEntryTable data={foodEntries} editFoodEntry={editFoodEntry}/>
      			</Tab>
      			<Tab eventKey="meal_manage" title="Meal Management">
        			<MealScreen user={user} addMealEntryToFoodEntry={addMealEntryToFoodEntry}/>
      			</Tab>	
      			<Tab eventKey="report" title="Report">
      				<Report user={user}/>
      			</Tab>
    		</Tabs>
			
		</Fragment>
	);
}