import styled from 'styled-components';

type StyledTextProps = {
	color?: string;
	size?: string;
	center?: boolean;
};

export const TitleMain = styled.p<StyledTextProps>`
	color: ${({ theme, color }) => (color ? color : theme.colors.colorMain.title)};
	font-family: 'Nunito', sans-serif;
	font-size: ${({ theme }) => theme.fontSize.title};
	line-height: ${({ theme }) => theme.lineSpacing.title};
	${({ center }) => (center ? 'text-align: center;' : '')}
`;

export const Subtitle = styled.p<StyledTextProps>`
	color: ${({ theme, color }) => (color ? color : theme.colors.colorMain.subtitle)};
	font-family: 'Nunito', sans-serif;
	font-size: ${({ theme }) => theme.fontSize.subtitle};
	line-height: ${({ theme }) => theme.lineSpacing.subtitle};
	${({ center }) => (center ? 'text-align: center;' : '')}
`;

export const Description = styled.p<StyledTextProps>`
	color: ${({ theme, color }) => (color ? color : theme.colors.colorMain.subDescription)};
	font-family: 'Nunito', sans-serif;
	font-size: ${({ theme }) => theme.fontSize.description};
	line-height: ${({ theme }) => theme.lineSpacing.description};
	${({ center }) => (center ? 'text-align: center;' : '')}
`;
