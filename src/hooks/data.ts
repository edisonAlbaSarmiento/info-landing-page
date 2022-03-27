import { useState, useEffect } from 'react';

const BASE_API = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=259ca4808a9892a64dfbead7a0cbcfc7';

const GetDataMovies = (page: number, lenguage: string): any => {
	const [myData, setData] = useState<Array<any>>([]);
	useEffect(() => {
		fetch(`${BASE_API}popular?${API_KEY}&language=${lenguage}&page=${page}`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, [lenguage, page]);

	return myData;
};

const GetDataMoviesById = (id: any = 1, lenguage: string): any => {
	const [myData, setData] = useState(null);

	useEffect(() => {
		fetch(`${BASE_API}${id}?${API_KEY}&language=${lenguage}`)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, [id, lenguage]);

	return myData;
};

export { GetDataMovies, GetDataMoviesById };
