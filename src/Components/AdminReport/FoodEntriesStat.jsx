import {Row, Col, Table} from "react-bootstrap";
export default function FoodEntriesStat({foodEntriesStat}){
	const columns = ['Today', 'Lat 7 Days', 'A week before 7 days'];
	return (
		<Row>
		   	<Col xs="4" className="mx-auto">
		   		<h2 className="text-center">Food Entries Stats</h2>
		   		<Table>
		   			<thead>
		   				<tr>
		   					{columns.map((columns,i) => <th key={i}>{columns}</th>)}
		   				</tr>
		   			</thead>
		   			<tbody>
		   				<tr>
		   					<td>{foodEntriesStat.day}</td>
		   					<td>{foodEntriesStat.lastSevenDays}</td>
		   					<td>{foodEntriesStat.weekBeforeSevenDays}</td>
		   				</tr>
		   			</tbody>
		   		</Table>
		   	</Col>
		</Row>
	)
}