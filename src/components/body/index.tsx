import React, { useState, useEffect, useCallback } from 'react';

import { Card, Pagination } from 'components';
import { ContentBody, ContentCardsMain, Redirect, ContentInput, Input, ContentFilters, ContentNotFound } from './styled';

type BodyProps = {
	data?: any;
	setPaginationPrev?: any;
	setPaginationAfter?: any;
};

function Body({ data = [], setPaginationPrev, setPaginationAfter }: BodyProps): JSX.Element {
	const results = data?.results;
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchResults, setSearchResults] = useState<Array<any>>([]);
	const [typeFilter, setTypeFilter] = useState<string>('');
	const handleChange = (e: any) => {
		setSearchTerm(e.target.value);
	};

	const getFilterOrderLess = useCallback(async () => {
		setTypeFilter('less');
		const resultsData: any = await results?.sort((a: any, b: any) => a.vote_average - b.vote_average);
		setSearchResults(resultsData);
	}, [results]);

	const getFilterOrderHigher = useCallback(async () => {
		setTypeFilter('higher');
		const resultsData: any = await results?.sort((a: any, b: any) => b.vote_average - a.vote_average);
		setSearchResults(resultsData);
	}, [results]);

	useEffect(() => {
		switch (typeFilter) {
			case 'less':
				getFilterOrderLess();
				break;
			case 'higher':
				getFilterOrderHigher();
				break;
			default:
				setSearchResults(results);
				break;
		}
		async function getData() {
			const resultsData: any = await results?.filter((item: any) => item.title.toUpperCase().includes(searchTerm.toUpperCase()));
			setSearchResults(resultsData);
		}
		getData();
	}, [getFilterOrderHigher, getFilterOrderLess, results, searchTerm, typeFilter]);

	return (
		<ContentBody>
			<ContentFilters>
				<ContentInput>
					<Input type='text' placeholder='Buscar' value={searchTerm} onChange={handleChange} />
				</ContentInput>
				<Redirect onClick={() => getFilterOrderHigher()}>Mayor calificación</Redirect>
				<Redirect onClick={() => getFilterOrderLess()}>Menor calificación</Redirect>
			</ContentFilters>
			{searchResults?.length !== 0 && (
				<Pagination
					setPaginationAfter={setPaginationAfter}
					setPaginationPrev={setPaginationPrev}
					paginationInit={data?.page}
					paginationPrev={data?.total_pages}
				/>
			)}
			<ContentCardsMain>
				{searchResults?.length ? (
					searchResults?.map((result: any, index: number) => <Card key={index} cardItem={result} />)
				) : (
					<ContentNotFound>
						<h1>Sin resultados</h1>
					</ContentNotFound>
				)}
			</ContentCardsMain>
			{searchResults?.length !== 0 && (
				<Pagination
					setPaginationAfter={setPaginationAfter}
					setPaginationPrev={setPaginationPrev}
					paginationInit={data?.page}
					paginationPrev={data?.total_pages}
				/>
			)}
		</ContentBody>
	);
}

export default Body;
