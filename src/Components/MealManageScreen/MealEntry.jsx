import {Container, Row, Col, Form, Button} from "react-bootstrap";
import React, { useState , Fragment, useEffect} from "react";
import DatePicker from "react-datepicker";
import {Alert} from "react-bootstrap";

export default function MealEntry({saveMealEntry, editMealEntry}){

	useEffect(() => {
		if(editMealEntry && editMealEntry.mealId){
			setMealEntry(editMealEntry)
		} else {
			setMealEntry({
				name:'',
				calories:'',
				mealType: 'Lunch'
			})
		}
	}, [editMealEntry])

	const [error, setError] = useState('');
	const [mealEntry, setMealEntry] = useState({
		name:'',
		calories:'',
		mealType: 'Lunch'
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if(error){
			return;
		}
		setError()
		e.preventDefault();
		console.log(mealEntry.name)
		if(!mealEntry.name){
			setError('Food Name can not be empty.')
			return;
		}	
		if(!mealEntry.calories){
			setError('Food Calories can not be empty.')
			return;
		}
		saveMealEntry(mealEntry);

	}
	const handleCaloriesChange = (e) => {
		setError()
		let key = e.target.name;
		if(e.target.value == ""){
			setMealEntry(mealEntry => ({
				...mealEntry,
				[key]: ""
			}))
			return;
		}
		let val = parseFloat(e.target.value);
		if(!val && e.target.value != ""){
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
		setMealEntry(mealEntry => ({
			...mealEntry,
			[key]: val
		}))
	}
	const handleChange = (e) => {
		//console.log(e)

		let key = e.target.name;
		let val = e.target.value.trim();
		console.log(key," ",val)
		setMealEntry(mealEntry => ({
			...mealEntry,
			[key]: val
		}))
		//console.log(mealEntry);
	}
	return (
			<Row>
			<Col xs="4" style={{"padding":"20px"}} className="mx-auto">
				{error && <Alert variant="danger"  className="mt-3" >{error}</Alert>}
				<Form onSubmit={handleSubmit}>
        			<Form.Group controlId="formName">
            			<Form.Label>Name</Form.Label>
            			<Form.Control type="text" value={mealEntry.name} placeholder="Enter name" name="name" onChange={(e) => handleChange(e)}/>
        			</Form.Group>
        			<Form.Group className="mt-3">
        				<Form.Label>Calories</Form.Label>
            			<Form.Control type="text" value={mealEntry.calories} placeholder="Enter Calories" name="calories" onChange={(e) => handleCaloriesChange(e)}/>
        			</Form.Group>
        			<Form.Select className="mt-3" value={mealEntry.mealType} name="mealType" onChange={(e) => handleChange(e)}>
  						<option value="Breakfast">Breakfast</option>
  						<option value="Lunch">Lunch</option>
  						<option value="Dinner">Dinner</option>
					</Form.Select>
        			<Button variant="primary" type="submit" className="mt-3">
    					Submit
  					</Button>
      			</Form>
      		</Col>
			</Row>
		)
}