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

const Redirect = styled.a`
	color: white;
	width: 100%;
	border: 0px;
	margin: 12px;
	display: flex;
	padding: 10px 16px;
	max-width: 256px;
	min-height: 46px;
	text-align: center;
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	align-items: center;
	border-radius: 100px;
	text-transform: none;
	justify-content: center;
	background-color: #ff452b;
	cursor: pointer;
	:hover {
		background-color: white;
		color: ${({ theme }) => theme.colors.colorMain.title};
		transform: translateX(4px);
	}
`;

const ContentInput = styled.div`
	width: 13%;
	border: 1px solid #b0bec5;
	margin: 0;
	padding: 0px 14px;
	border-radius: 50px;
	height: 46px;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		width: 74%;
	}
`;

const Input = styled.input`
	width: 100%;
	border: 0;
	height: 1.1876em;
	margin: 0;
	padding: 5% 0 5%;
	min-width: 0;
	background: none;
	box-sizing: content-box;
	animation-name: mui-auto-fill-cancel;
	letter-spacing: inherit;
	animation-duration: 10ms;
	outline: none;
`;

const ContentFilters = styled.div`
	width: 100%;
	padding: 0 5%;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

const ContentNotFound = styled.div`
	width: 100%;
	padding: 0 5%;
	display: flex;
	align-items: center;
`;

export { ContentBody, ContentCardsMain, Redirect, ContentInput, Input, ContentFilters, ContentNotFound };
