import React from 'react';
import styles from './SocialSideMenu.module.css'
import socialSideMenu from '../../assets/img/SocialSideMenu/arrowUp.png';


type SocialSideMenuType = {
	SocialSideMenuBtnToTop: () => void
}

function SocialSideMenu(props: SocialSideMenuType): JSX.Element {
	return (
		<>

			<section className={styles.SocialSideMenuWrapper}>

				<button className={styles.arrowUpBox}  onClick={props.SocialSideMenuBtnToTop}>
					<svg className={styles.arrowUp} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 2" id="Layer_2"><path d="M9.05,10.05a1,1,0,0,0,1.42,0l4.6-4.6V29a1,1,0,0,0,2,0V5.48l4.57,4.57a1,1,0,0,0,1.41-1.41L16.69,2.27a.9.9,0,0,0-1.27,0L9.05,8.64A1,1,0,0,0,9.05,10.05Z" /></g></svg>


					<h2 className={styles.menuText}>
						<span className={styles.menuTextSlash}>
							/
						</span>
						вверх
					</h2>

				</button>


				<button className={styles.SocialSideMenuPhone} aria-label='phone icon call the main office'>
					<span></span>
				</button>

				<button className={styles.SocialSideMenuMessage} aria-label='phone message call the main office'>
					<span></span>
				</button>

			</section>

		</>
	)
}

export default SocialSideMenu