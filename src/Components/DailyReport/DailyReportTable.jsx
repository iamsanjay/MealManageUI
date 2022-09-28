import {Fragment} from 'react';
import {Row, Col, Table} from 'react-bootstrap';
export default function DailyReportTable({data, limit}){
	
	const columns = ['Date', 'Total Calories'];
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
		   					<td>{new Date(data.date).toDateString()}</td>
		   					<td className={data.totalCalories >= limit ? "bg-danger":"bg-success"}>{data.totalCalories}</td>
		   				</tr>)}
		   			</tbody>
		   		</Table>
		     </Col>
		     </Row>
     	</Fragment>
	)
}