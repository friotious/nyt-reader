const apiKey = process.env.REACT_APP_API_KEY

const getArticles = (section) => {
	return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
    .then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			throw new Error();
		}
    })
    .catch(err => alert(err));
}

export default getArticles