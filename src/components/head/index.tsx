import React from 'react';
import Image from 'next/image';
import { Content } from './styled';

function HeadMain(): JSX.Element {
	return (
		<Content>
			<Image src='/img/houmLogo.svg' alt='Vercel Logo' width={72} height={50} />
		</Content>
	);
}

export default HeadMain;
