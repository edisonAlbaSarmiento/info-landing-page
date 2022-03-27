import React from 'react';
import Link from 'next/link';

import { Subtitle, Description } from 'shared/label/syled';

import {
	ConetentCardMain,
	ConetentCardChildRight,
	ConetentCardChildLeft,
	ContentHeadCard,
	ContentFooterCard,
	Title,
} from './styled';

type CardProps = {
	cardItem?: any;
	selectItem?: () => number | undefined | undefined;
};

function Card({ cardItem = {}, selectItem }: CardProps): JSX.Element {
	const { id, original_title, title, backdrop_path, vote_average, release_date, original_language } = cardItem;
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
				<Description>Fecha de Estreno: {release_date}</Description>
				<Link href={`/detail/${id}`}>
					<a className='redirect'>Ver mas</a>
				</Link>
			</ConetentCardChildRight>
			<ConetentCardChildLeft
				backgroundImage={backdrop_path ? `https://image.tmdb.org/t/p/w300/${backdrop_path}` : '/img/houmLogo.svg'}
			/>
		</ConetentCardMain>
	);
}

export default Card;
