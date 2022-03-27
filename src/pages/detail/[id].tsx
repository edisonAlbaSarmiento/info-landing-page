import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetDataMoviesById } from 'hooks';
import { HeadMain, DetailComponent } from 'components';

const Detail: NextPage = () => {
	const { query } = useRouter();
	console.log('query', query.id);
	const id = query.id;
	const databyID = GetDataMoviesById(id, 'es-ES');
	console.log(databyID);

	return (
		<div>
			<HeadMain />
			<DetailComponent data={databyID} />
		</div>
	);
};

export default Detail;
