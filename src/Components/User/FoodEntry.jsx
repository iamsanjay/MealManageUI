import {Container, Row, Col, Form, Button} from "react-bootstrap";
import React, { useState , Fragment, useEffect} from "react";
import DatePicker from "react-datepicker";
import {Alert} from "react-bootstrap";
export default function FoodEntry({saveFoodEntry, mealEntry, foodEntry_EditMode}){
	
	const [error, setError] = useState('');
	const [foodEntry, setFoodEntry] = useState({
		name:'',
		calories:'',
		date: new Date()
	});
	const [disableEditMeal, setDisableEditMeal] = useState(false);

	useEffect(() => {
		
		if(foodEntry_EditMode && "foodId" in foodEntry_EditMode){
			
			foodEntry_EditMode['date'] = new Date(foodEntry_EditMode['date']);
			mealEntry = foodEntry_EditMode['mealEntry']
			setFoodEntry(foodEntry => ({
				...foodEntry_EditMode,
				...mealEntry
			}))
		}
		else if(mealEntry && "mealId" in mealEntry){
			setDisableEditMeal(true);
			setFoodEntry(mealEntry);
			setFoodEntry(foodEntry => ({
				...foodEntry,
				'date': new Date()
			})) 
		} else {
			setFoodEntry({
				name:'',
				calories:'',
				date: new Date()
			});
			setDisableEditMeal(false)
		}
	}, [mealEntry, foodEntry_EditMode])
	

	const handleSubmit = (e) => {
		e.preventDefault();
		if(error){
			return;
		}
		setError()
		e.preventDefault();
		if(!foodEntry.name){
			setError('Food Name can not be empty.')
			return;
		}	
		if(!foodEntry.calories){
			setError('Food Calories can not be empty.')
			return;
		}
		if(!foodEntry.date){
			setError('Entry Date can not be empty.')
			return;
		}

		let newFoodEntry = {}
	 	newFoodEntry['date'] = strpTime(foodEntry.date);
	 	
	 	if(foodEntry.foodId){
	 		newFoodEntry['foodId'] = foodEntry.foodId
	 	}
	 	
	 	newFoodEntry['mealEntry'] = {
	 		'name': foodEntry.name,
	 		'calories': foodEntry.calories
	 	}
	 	if(foodEntry.mealId){
	 		newFoodEntry['mealEntry']['mealId'] = foodEntry.mealId;
	 	}
	 	if(foodEntry.mealType){
	 		newFoodEntry['mealEntry']['mealType'] = foodEntry.mealType;
	 	}
	 	console.log(newFoodEntry)
		saveFoodEntry(newFoodEntry);
		setFoodEntry({
			name:'',
			calories:'',
			date: new Date()
		});

	}
	const handleCaloriesChange = (e) => {
		setError()
		let key = e.target.name;
		
		if(e.target.value == ""){
			setFoodEntry(foodEntry => ({
				...foodEntry,
				[key]: ""
			}))
			return;
		}

		let val = parseFloat(e.target.value);
		if(!val){
			setError('Calories should be a number')
			return;
		}
		if(val < 0){
			setError('Calories should not be less than ZERO')
			return;
		}
		if(val > 2**20){
			setError('Calories should not be greater than MAX value')
		}
		setFoodEntry(foodEntry => ({
			...foodEntry,
			[key]: val
		}))
	}
	const handleChange = (e) => {
		console.log(e)

		let key = e.target.name;
		let val = e.target.value;
		console.log(key)
		setFoodEntry(foodEntry => ({
			...foodEntry,
			[key]: val
		}))
		console.log(foodEntry);
	}
	const strpTime = (date) => {
		date.setMinutes(0);
		date.setHours(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date;
	}
	const handleDateChange = (date) => {
		if(!date){
			return;
		}
		setFoodEntry(foodEntry => ({
			...foodEntry,
			'date': date
		}))
	}
	return (
			<Row className="md-auto">
			<Col xs = {4}></Col>
			<Col xs={4} style={{"padding":"20px"}} className="md-auto">
				{error && <Alert variant="danger"  className="mt-3" >{error}</Alert>}
				<Form onSubmit={handleSubmit}>
        			<Form.Group controlId="formName">
            			<Form.Label>Name</Form.Label>
            			<Form.Control type="text" value={foodEntry.name} placeholder="Enter name" name="name" onChange={(e) => handleChange(e)} disabled={disableEditMeal}/>
        			</Form.Group>
        			<Form.Group className="mt-3">
        				<Form.Label>Calories</Form.Label>
            			<Form.Control type="text" value={foodEntry.calories} placeholder="Enter Calories" name="calories" onChange={(e) => handleCaloriesChange(e)} disabled={disableEditMeal}/>
        			</Form.Group>
        			<Form.Group className="mt-3">
        				<DatePicker selected={foodEntry.date} onChange={(date:Date) => handleDateChange(date)} />
        			</Form.Group>
        			<Button variant="primary" type="submit" className="mt-3">
    					Submit
  					</Button>
      			</Form>
      		</Col>
      		<Col xs = {4}></Col>
			</Row>
		)
}