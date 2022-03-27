import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { GetDataMovies } from 'hooks';
import { HeadMain, Body, Footer } from 'components';
const Home: NextPage = () => {
	const [changePagination, SetPagination] = useState<number>(1);
	const [dataMain, SetDataMain] = useState<any>(null);
	const data = GetDataMovies(changePagination, 'es-ES');

	useEffect(() => {
		if (data) {
			SetDataMain(data);
		}
	}, [changePagination, data]);

	const paginationAfter = () => {
		if (dataMain.page > 1) {
			SetPagination(changePagination - 1);
		}
	};

	const paginationPrev = () => {
		if (dataMain.total_pages >= changePagination) {
			SetPagination(dataMain.page + 1);
		}
	};
	return (
		<div>
			<head>
				<title>Movies</title>
				<meta name='description' content='Mostrar peliculas' />
				<link rel='icon' href='/favicon.ico' />
			</head>
			<HeadMain />
			<Body data={dataMain} setPaginationPrev={paginationPrev} setPaginationAfter={paginationAfter} />
			<Footer />
		</div>
	);
};

export default Home;
