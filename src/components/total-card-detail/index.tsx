import React from 'react';

import { Subtitle, Description } from 'shared/label/syled';

import {
	ConetentCardMain,
	ConetentCardChildRight,
	ConetentCardChildLeft,
	ContentHeadCard,
	ContentFooterCard,
	Title,
} from './styled';

type TotalCardDetailProps = {
	detailData?: any;
};

function TotalCardDetail({ detailData = {} }: TotalCardDetailProps): JSX.Element {
	const { id, original_title, title, backdrop_path, vote_average, release_date, original_language, overview } = detailData;
	return (
		<ConetentCardMain>
			<ConetentCardChildRight>
				<ContentHeadCard>
					<Title>{title}</Title>
					<Subtitle>Titulo original: {original_title}</Subtitle>
				</ContentHeadCard>
				<ContentFooterCard>
					<Description>Puntuacion: {vote_average}</Description>
					<Description>Idioma: {original_language}</Description>
				</ContentFooterCard>
				<Description>Descripcion: {overview}</Description>
				<Description>Fecha de Estreno: {release_date}</Description>
			</ConetentCardChildRight>
			<ConetentCardChildLeft
				backgroundImage={backdrop_path ? `https://image.tmdb.org/t/p/w300/${backdrop_path}` : '/img/houmLogo.svg'}
			/>
		</ConetentCardMain>
	);
}

export default TotalCardDetail;
