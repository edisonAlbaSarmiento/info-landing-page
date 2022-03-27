import React from 'react';
import Link from 'next/link';

import { Subtitle, Description } from 'shared/label/syled';

import {
	ConetentCardMain,
	ConetentCardChildRight,
	ConetentCardChildLeft,
	ContentHeadCard,
	ContentInfoCard,
	ContentFooterCard,
	ContentScrrollImages,
	Image,
	Title,
	Redirect,
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
				{/* <ContentInfoCard>
					<div>Casting:</div>
					<ContentScrrollImages>
						<Image src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/hpohdtx5ABjZs1BIyYUzwq9CYxJ.jpg' alt='Vercel Logo' />
						<Image src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/hpohdtx5ABjZs1BIyYUzwq9CYxJ.jpg' alt='Vercel Logo' />
						<Image src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/hpohdtx5ABjZs1BIyYUzwq9CYxJ.jpg' alt='Vercel Logo' />
						<Image src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/hpohdtx5ABjZs1BIyYUzwq9CYxJ.jpg' alt='Vercel Logo' />
						<Image src='/vercel.svg' alt='Vercel Logo' />
						<Image src='/vercel.svg' alt='Vercel Logo' />
						<Image src='/vercel.svg' alt='Vercel Logo' />
					</ContentScrrollImages>
				</ContentInfoCard> */}
				<ContentFooterCard>
					<Description>Puntuacion: {vote_average}</Description>
					<Description>Idioma: {original_language}</Description>
				</ContentFooterCard>
				<Description>Fecha de Estreno: {release_date}</Description>
				<Link href={`/detail/${id}`}>
					<a className='redirect'>Ver mas</a>
				</Link>
			</ConetentCardChildRight>
			<ConetentCardChildLeft backgroundImage={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} />
		</ConetentCardMain>
	);
}

export default Card;
