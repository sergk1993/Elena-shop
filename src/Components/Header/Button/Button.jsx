import styles from './Button.module.css'
import React from 'react';


function Button() {
	return (
		<>
			<button className={styles.button}  aria-label="Button navigate"> 
				<span className={styles.buttonLine}></span>
				<span></span>
				<span></span>
			</button>
		</>
	);
}


export default Button;