import type { NextPage } from 'next';
import Head from 'next/Head';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { GetDataMovies } from 'hooks';
import theme from 'theme';
import { HeadMain, Body, Footer } from 'components';

const Home: NextPage = () => {
	const [changePagination, SetPagination] = useState<number>(1);
	const [dataMain, SetDataMain] = useState<any>(null);

	const data = GetDataMovies(changePagination, 'es-ES');

	useEffect(() => {
		if (data) {
			console.log('data', data);

			SetDataMain(data);
		}
	}, [changePagination, data]);
	// console.log(dataMain);
	console.log(changePagination);
	const pagination = () => {
		console.log('ENTRO');
		SetPagination(dataMain.page + 1);
	};
	return (
		<div>
			<Head>
				<title>Movies</title>
				<meta name='description' content='Mostrar peliculas' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HeadMain />
			<Body data={dataMain} setPagination={pagination} />
			<Footer />
		</div>
	);
};

export default Home;
