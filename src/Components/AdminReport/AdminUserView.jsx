import {Fragment} from 'react';
import UserScreen from '../UserScreen.jsx';
export default function AdminUserView({user, switchView}){
	return(
		<Fragment>
			<p className="text-center" style={{"cursor":"pointer"}} style={{"cursor":"pointer"}} onClick={() => switchView()}>back</p>
			<UserScreen user={user} />
		</Fragment>
	)
}