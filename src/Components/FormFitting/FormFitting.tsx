import { RootType } from '../../Redux/redux-store'
import styles from './FormFitting.module.css'




function FormFitting() {


	return (
		<section className={styles.formFitting}>

			<svg className={styles.formFittingSvgTop} viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18.8164 4.07109C18.8164 2.37484 20.1915 1 21.8875 1C23.5838 1 24.9588 2.37509 24.9588 4.07109C24.9588 4.94515 24.5781 5.73378 24.0079 6.29318C23.4442 6.81927 21.9995 7.28999 21.9995 9.75984" stroke="#C0A78F" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M38.2272 15.175L22.0297 9.75977L5.78516 15.175" stroke="#C0A78F" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M3.82227 13.9688C3.82227 13.9688 9.19787 18.4422 22.0326 18.4422C34.8671 18.4422 40.2094 13.9688 40.2094 13.9688" stroke="#C0A78F" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M3.88371 13.918C2.22678 16.7781 1.26555 19.5992 1 22.3807L5.54865 24.7859L7.80781 22.9767C7.80781 22.9767 12.7663 26.4008 12.3279 35.4194C11.8895 44.438 12.746 46.2214 12.746 46.2214C14.0304 47.1281 21.9991 47.3886 21.9991 47.3886C21.9991 47.3886 29.9696 47.1281 31.254 46.2214C31.254 46.2214 32.1105 44.438 31.6721 35.4194C31.2337 26.4008 35.75 22.9767 35.75 22.9767L38.4514 24.7859L43 22.3807C42.7344 19.599 41.7732 16.7781 40.1165 13.918" stroke="#C0A78F" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M22.0004 26.87C22.4386 26.87 22.7938 26.5148 22.7938 26.0766C22.7938 25.6384 22.4386 25.2832 22.0004 25.2832C21.5622 25.2832 21.207 25.6384 21.207 26.0766C21.207 26.5148 21.5622 26.87 22.0004 26.87Z" stroke="#C0A78F" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M22.0004 32.452C22.4386 32.452 22.7938 32.0968 22.7938 31.6586C22.7938 31.2204 22.4386 30.8652 22.0004 30.8652C21.5622 30.8652 21.207 31.2204 21.207 31.6586C21.207 32.0968 21.5622 32.452 22.0004 32.452Z" stroke="#C0A78F" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" strokeLinejoin="round" />
			</svg>



			<h2 className={styles.title}>ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМе</h2>


			<form className={styles.form} method='_post'>

				<div className={styles.formInputTopBox}>

					<input className={styles.inputName}  type='text' placeholder='ВВЕДИТЕ ИМя *' required />
					<input className={styles.inputPhone} type='text' placeholder='ВВЕДИТЕ ТЕЛЕФОн *' required />
					<input className={styles.inputTime} type='text' placeholder='ВВЕДИТЕ УДОБНОЕ ВРЕМя *' required />
				</div>

				<div className={styles.formInputBottomBox}>
					<textarea className={styles.formFittingArea} placeholder='ДОБАВИТЬ КОММЕНТАРИй' />
					<button className={styles.formFittingButton}>ЗАПИСАТЬСя</button>
				</div>
				<p className={styles.textSub}>Поля отмеченные “*” обязательны для заполнения</p>
			</form>


		</section>
	)
}





export default FormFitting