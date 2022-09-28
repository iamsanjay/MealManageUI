import {useEffect, useState, Fragment} from "react";
import UserTable from './UserTable.jsx';
import FoodEntriesStat from './FoodEntriesStat.jsx';
import AdminUserView from './AdminUserView.jsx';
import {getUserData, getAvgConsumptionPerUser, getFoodEntriesStat} from "../../Services/AdminService.js";

export default function ReportScreen({user}){
	const [userData, setUserData] = useState([]);
	const [consumptionData, setConsumptionData] = useState({})
	const [userInfo, setUserInfo] = useState();
	const [foodEntriesStat, setFoodEntriesStat] = useState({});

	useEffect(() => {
		getAvgConsumptionPerUser(user)
			.then(r => {
				setConsumptionData(r)
			})
		getUserData(user)
			.then(r => {
				setUserData(r)
			})
		getFoodEntriesStat(user)
			.then(r => {
				setFoodEntriesStat(r)
			})
	}, [userInfo])

	const switchView = (userInfo) => {
		console.log(userInfo);
		if(userInfo){
			setUserInfo(userInfo)
		} else{
			setUserInfo()
		}
	}
	if(!userInfo){
		return (
			<Fragment>
				<UserTable data={userData} cData={consumptionData} switchView={switchView}/> 
				<FoodEntriesStat foodEntriesStat={foodEntriesStat} /> 
			</Fragment>
		);
	} else {
		return <AdminUserView user={userInfo} switchView={switchView} />
	}

}