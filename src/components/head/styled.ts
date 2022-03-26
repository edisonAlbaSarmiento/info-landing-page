import styled from 'styled-components';
import media from 'theme/media';

const Content = styled.div`
	top: 0px;
	width: 100%;
	height: 4.5rem;
	padding: 8px 0px;
	z-index: 1100;
	position: fixed;
	box-shadow: rgb(219 219 219 / 25%) 0px 4px 4px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	${media.greaterThan('mobile')`
		width: 60%;
        background: red;
	`}
`;

export { Content };
