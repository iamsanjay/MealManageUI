export  function getUserData(user){
	return fetch('/sca_back/admin/users', {
		method: 'GET',
		headers: {
			'access_token': user.token,
			'user': user.username,
			'content-type':'application/json',
			'accept':'application/json'
		}
	})
	.then(data => data.json())
}

export function getAvgConsumptionPerUser(user){
	return fetch('/sca_back/admin/report1', {
		method: 'GET',
		headers: {
			'access_token': user.token,
			'user': user.username,
			'content-type':'application/json',
			'accept':'application/json'
		}
	})
	.then(data => data.json())
}


export function getFoodEntriesStat(user){
	return fetch('/sca_back/admin/report2', {
		method: 'GET',
		headers: {
			'access_token': user.token,
			'user': user.username,
			'content-type':'application/json',
			'accept':'application/json'
		}
	})
	.then(data => data.json())
}
