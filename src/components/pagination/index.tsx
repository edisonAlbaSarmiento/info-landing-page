import React from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Description } from 'shared/label/syled';

import { Content, ContentLink } from './styled';

type PaginationProps = {
	setPaginationAfter?: any;
	setPaginationPrev?: any;
	paginationInit?: number;
	paginationPrev?: number;
};
function Pagination({ paginationInit, paginationPrev, setPaginationAfter, setPaginationPrev }: PaginationProps): JSX.Element {
	return (
		<Content>
			<Description>
				Mostrando pagina {paginationInit} de {paginationPrev}
			</Description>
			<ContentLink onClick={() => setPaginationAfter()}>
				<ArrowBackIos fontSize='small' />
			</ContentLink>
			<ContentLink onClick={() => setPaginationPrev()}>
				<ArrowForwardIosIcon fontSize='small' />
			</ContentLink>
		</Content>
	);
}

export default Pagination;
