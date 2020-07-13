export const signup = user => {
		return fetch("http://locahols:8080/signup", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type":"application/json"
			},
			body:JSON.stringify(user)
		})
			.then(response => {
				return response.json()
			})
			.catch(err => console.log(err))
	}
