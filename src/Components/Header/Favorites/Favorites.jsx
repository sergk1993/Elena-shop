import React from 'react';
import styles from './Favorites.module.css';

function Favorites(){
	return (
		<a className={styles.favorites} href="/" aria-label="favorites link">
			<svg className={styles.favoritesSvg} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" strokeMiterlimit="3.8637" />
			</svg>
			<span className={styles.favoritesCounter}>0</span>
		</a>
	)
}
export default Favorites;