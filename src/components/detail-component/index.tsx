import React from 'react';
import Link from 'next/link';

import { TotalCardDetail } from 'components';
import { ContentBody, ContentCardsMain } from './styled';

type DetailComponentProps = {
	data?: any;
};

function DetailComponent({ data = [] }: DetailComponentProps): JSX.Element {
	const resultsDetail = data;
	return (
		<ContentBody>
			<ContentCardsMain>{resultsDetail && <TotalCardDetail detailData={resultsDetail} />}</ContentCardsMain>
			<Link href={`/`}>
				<a>Volver</a>
			</Link>
		</ContentBody>
	);
}

export default DetailComponent;
