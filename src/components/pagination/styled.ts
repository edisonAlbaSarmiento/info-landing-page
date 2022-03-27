import styled from 'styled-components';

const ContentLink = styled.a`
	cursor: pointer;
	:hover {
		transform: translateX(4px);
	}
`;

const Content = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	@media (max-width: 768px) {
		width: 60%;
	}
`;

export { Content, ContentLink };
