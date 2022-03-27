import styled from 'styled-components';
import { TitleMain } from 'shared/label/syled';

const ConetentCardMain = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1%;
	width: 30%;
	@media (max-width: 768px) {
		width: 100%;
		margin: 4% 0;
		flex-direction: column-reverse;
	}
	.redirect {
		color: ${({ theme, color }) => (color ? color : theme.colors.colorMain.hue)};
		font-family: 'Nunito', sans-serif;
		font-size: ${({ theme }) => theme.fontSize.description};
		line-height: ${({ theme }) => theme.lineSpacing.description};
	}
`;

const ConetentCardChildRight = styled.div`
	background-color: white;
	width: 50%;
	height: 100%;
	border-radius: 16px;
	padding: 5%;
	box-shadow: rgb(219 219 219 / 25%) 0px 4px 4px;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

type ConetentCardChildLeftProps = {
	backgroundImage?: string;
};

const ConetentCardChildLeft = styled.div<ConetentCardChildLeftProps>`
	background-color: yellow;
	width: 40%;
	height: 170px;
	border-radius: 0 16px 16px 0;
	padding: 5%;
	background: ${({ backgroundImage }) =>
		backgroundImage
			? `url(${backgroundImage}) no-repeat center`
			: `url('https://image.tmdb.org/t/p/w185_and_h278_bestv2/hpohdtx5ABjZs1BIyYUzwq9CYxJ.jpg') no-repeat center`};
	@media (max-width: 768px) {
		width: 80%;
		border-radius: 16px 16px 0 0;
		flex-direction: column-reverse;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

const ContentHeadCard = styled.div`
	margin: 0 0 5%;
	height: auto;
	word-wrap: break-word;
`;

const ContentFooterCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2% 0 0;
`;

const Title = styled(TitleMain)``;

export { ConetentCardMain, ConetentCardChildRight, ConetentCardChildLeft, ContentHeadCard, ContentFooterCard, Title };
