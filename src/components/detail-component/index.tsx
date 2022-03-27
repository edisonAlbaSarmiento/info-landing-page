import React from 'react';
import Link from 'next/link';

import { Card } from 'components';
import { ContentBody, ContentCardsMain } from './styled';

type DetailComponentProps = {
	data?: any;
	setPagination?: any;
};

function DetailComponent({ data = [], setPagination }: DetailComponentProps): JSX.Element {
	console.log('data Body', data);
	const results = data?.results;

	return (
		<ContentBody>
			<ContentCardsMain>
				{results?.map((result: any, index: number) => (
					<Card key={index} cardItem={result} />
				))}
			</ContentCardsMain>
			<Link href={`/`}>
				<a>Volver</a>
			</Link>
		</ContentBody>
	);
}

export default DetailComponent;
