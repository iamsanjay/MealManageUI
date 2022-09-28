export   function login(user, token){
	return fetch('/sca_back/greeting', {
		method: 'GET',
		headers: {
			'access_token': token,
			'user': user,
			'content-type':'application/json',
			'accept': 'application/json'
		}
	})
	.then((response) => {
  		if (!response.ok) {
			  return Promise.reject({
			    code: response.status,
			    message: response && response.message ? response.message : response.statusText
			  });
  		}else {
  			return response.json();
  		}
	})
    //.then(data => data.json())
}
