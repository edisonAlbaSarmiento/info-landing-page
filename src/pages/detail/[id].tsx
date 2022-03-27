import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetDataMoviesById } from 'hooks';
import { HeadMain, DetailComponent, Footer } from 'components';

const Detail: NextPage = () => {
	const { query } = useRouter();
	const id = query.id;
	const databyID = GetDataMoviesById(id, 'es-ES');
	return (
		<div>
			<HeadMain />
			<DetailComponent data={databyID} />
			<Footer />
		</div>
	);
};

export default Detail;
