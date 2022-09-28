import React, {Fragment} from "react";
import { useTable } from 'react-table';
import {Row, Col, Table} from "react-bootstrap";
export default function MealEntryTable({data, addMealEntryToFoodEntry, editMeal}){
	/*const data = [
     {
       name: 'Apple',
       calories: '20',
       date: '19/04/2022'
     },
     {
       name: 'Banana',
       calories: '111',
       date: '19/04/2022'
     },
     {
       name: 'Cranberries',
       calories: '46',
       date: '19/04/2022'
     },
   ];*/

  const columns = ['Name', 'Calories', 'Meal Type'];

  return(
   	<Fragment>
   	<Row>
   	<Col xs="4" className="mx-auto">
   		<Table>
   			<thead>
   				<tr>
   					{columns.map((columns,i) => <th key={i}>{columns}</th>)}
   				</tr>
   			</thead>
   			<tbody>
   				{data.map((data, i) => <tr key={i}>
   					<td>{data.name}</td>
   					<td>{data.calories}</td>
   					<td>{data.mealType}</td>
            <td onClick={() => addMealEntryToFoodEntry(data)} style={{"cursor":"pointer"}}><u>Add</u></td>
            <td onClick={() => editMeal(data)} style={{"cursor":"pointer"}}><u>Edit</u></td>
   				</tr>)}
   			</tbody>
   		</Table>
     </Col>
     </Row>
     </Fragment>
   )

}