import {Row, Col, Table} from "react-bootstrap";
export default function UserTable({data, cData, switchView}){
	console.log(switchView)
	const columns = ['User', 'Avg Calories (Last 7 Days)'];
	const something = (user) => {
		console.log(user)
	}
	return(
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
		   					<td><p onClick={() => switchView(data)} style={{"cursor":"pointer"}}><u>{data.username}</u></p></td>
		   					<td>{cData[data.username]?cData[data.username]:"NaN"}</td>
		   				</tr>)}
		   			</tbody>
		   		</Table>
		     </Col>
		     </Row>
	)
}