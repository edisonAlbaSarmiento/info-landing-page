import styled from 'styled-components';

const ContentBody = styled.main`
	padding: 6% 0;
	min-height: 100vh;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.colorMain.salmon};
	@media (max-width: 768px) {
		padding: 26% 0;
	}
`;

const ContentCardsMain = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

export { ContentBody, ContentCardsMain };
