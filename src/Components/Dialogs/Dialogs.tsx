
import { MutableRefObject, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { addNewMessageAC } from '../../Redux/Dialogs-reducer';
import { getDialogs } from '../../Redux/selectors/Dialogs-selectors';
import { RootType } from '../../Redux/redux-store';
import { DialogsPageInterface } from '../../types/types';
import WithAuthRedirect from '../common/withAuthRedirect/WithAuthRedirect';
import styles from './Dialogs.module.css';


type DialogsType = {
	dialogsPage: DialogsPageInterface
	addNewMessageAC: (item: string | undefined) => void,
}




function Dialogs(props: DialogsType) {
	const refUser = useRef<HTMLTextAreaElement | null>(null);

	const addMessage = () => {
		props.addNewMessageAC(refUser.current?.value);
		if (refUser.current !== null) {
			refUser.current.value = '';
		}
	}



	return (
		<div className='container'>
			<section className={styles.dialogs}>
				<h3 className={styles.dialogsTitle}>Диалоги</h3>
				<div className={styles.dialogsBox}>
					<div className={styles.dialogsContacts}>
						{
							props.dialogsPage.users.map((e) => {
								return (
									<Link className={styles.dialogsUsersBox} to='/dialogs' key={e.id}>
										<img className={styles.dialogsUserImg} src={e.img} alt="" />
										<div className={styles.dialogsUserMessageBox}>
											<h3 className={styles.dialogsUserName}>{e.name}</h3>
											<div className={styles.dialogsUserMessage}>{e.message}</div>
										</div>
									</Link>
								);
							})
						}

					</div>
					<div className={styles.dialogsMessageBox}>
						{
							props.dialogsPage.message.map((e, id: number) => {
								return (
									<div className={styles.dialogsMessage} key={id}>
										{e}
									</div>
								);
							})
						}
						<div className={styles.dialogsWrapperTextArea}>
							<textarea ref={refUser} className={styles.dialogsTextarea}
								name="" id="" placeholder='Написать сообщение'>
							</textarea>
							<button className={styles.dialogsTextAreaBtn} onClick={addMessage}>push</button>
						</div>
					</div>
				</div>
			</section >
		</div>
	)
}


const mapStateToProps = (state: RootType) => {

	return {
		dialogsPage: getDialogs(state)
	}

}




export default compose(
	WithAuthRedirect,
	connect(mapStateToProps, { addNewMessageAC })
)(Dialogs)