import React, {Fragment} from "react";
import { useTable } from 'react-table';
import {Row, Col, Table} from "react-bootstrap";
export default function FoodEntryTable({data, editFoodEntry}){
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

  const columns = ['Name', 'Calories', 'Date'];

  return(
   	<Fragment>
   	<Row>
   	<Col xs="4" className="mx-auto">
   		<Table>
   			<thead>
   				<tr>
   					{columns.map((columns, i) => <th key={i}>{columns}</th>)}
   				</tr>
   			</thead>
   			<tbody>
   				{data.map((data, i) => <tr key={i}>
   					<td>{data.mealEntry.name}</td>
   					<td>{data.mealEntry.calories}</td>
   					<td>{new Date(data.date).toDateString()}</td>
            <td onClick={() => editFoodEntry(data)} style={{"cursor":"pointer"}}><u>Edit</u></td>
   				</tr>)}
   			</tbody>
   		</Table>
     </Col>

     </Row>
     </Fragment>
   )

}