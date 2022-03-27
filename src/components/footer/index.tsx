import React from 'react';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';

function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<a href='https://edisonalbasarmiento.github.io/Landing-Resume-Design/' target='_blank' rel='noopener noreferrer'>
				Powered by <span className={styles.logo}>Edison</span>
			</a>
		</footer>
	);
}

export default Footer;
