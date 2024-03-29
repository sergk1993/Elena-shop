import { Link } from 'react-router-dom';
import { IProfileAuth } from '../../../types/types';
import styles from './HeaderProfile.module.css';

type HeaderProfileType = {
	profileDataTH: (item: number | null) => void,
	auth: IProfileAuth,
	profileStatusTH: (item: number | null) => void,

}

function HeaderProfile(props: HeaderProfileType) {

	return (
		<Link onClick={() => {
			props.profileDataTH(props.auth.id);
			props.profileStatusTH(props.auth.id);
		}} className={styles.profile} to='/profile' >
			<svg className={styles.profileIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.5 8.5C14.5 9.88071 13.3807 11 12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5Z" fill="#000000" />
				<path d="M15.5812 16H8.50626C8.09309 16 7.87415 15.5411 8.15916 15.242C9.00598 14.3533 10.5593 13 12.1667 13C13.7899 13 15.2046 14.3801 15.947 15.2681C16.2011 15.5721 15.9774 16 15.5812 16Z" fill="#000000" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="2" />
			</svg>
		</Link>

	)
}

export default HeaderProfile;