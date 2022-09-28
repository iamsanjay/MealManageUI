export function getFoodEntries(user){
	console.log("Entered into getFoodEntries")
	return fetch('/sca_back/foodentries', {
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

export function createFoodEntry(user, foodentry){
	return  fetch('/sca_back/foodentry/create', {
		method: 'POST',
		headers: {
			'access_token': user.token,
			'user': user.username,
			'content-type':'application/json',
			'accept': 'application/json'
		},
		body: JSON.stringify(foodentry)
	})
    .then((response) => {
  		if (!response.ok) {
			  return Promise.reject({
			    code: response.status,
			    message: response && response.message ? response.message : response.statusText
			  });
  		}
	})
	
}


export function createMealEntry(user, mealEntry){
	console.log("In create meal entry",mealEntry);
	return fetch('/sca_back/mealentry/create', {
		method: 'POST',
		headers: {
			'access_token': user.token,
			'user': user.username,
			'content-type':'application/json',
			'accept': 'application/json'
		},
		body: JSON.stringify(mealEntry)
	})
}

export function getMealEntries(user){
	return fetch(`/sca_back/mealentries`, {
		method: 'GET',
		headers: {
			'access_token': user.token,
			'user': user.username,
			'content-type':'application/json',
			'accept': 'application/json'
		}
	})
    .then(data => data.json())
}

export function getDailyReport(user){
	return fetch(`/sca_back/daywiseconsumption`, {
		method: 'GET',
		headers: {
			'access_token': user.token,
			'user': user.username,
			'content-type':'application/json',
			'accept': 'application/json'
		}
	})
    .then(data => data.json())
}