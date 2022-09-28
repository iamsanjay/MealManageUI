import {useState, useEffect} from 'react';
import DailyReportTable from './DailyReportTable.jsx'
import {getDailyReport} from '../../Services/UserService.js';
export default function Report({user}){
	const [reportEntries, setReportEntries] = useState([])
	const [limit, setLimit] = useState(2100);

	useEffect(() => {
		getDailyReport(user)
			.then(r => setReportEntries(r))
	})

	return(
		<DailyReportTable data={reportEntries} limit={limit}/>
	)
}