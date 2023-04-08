import React, { useState } from 'react'
import styles from './Pagination.module.css';

type PaginationType = {
	pageSize: number,
	children?: React.ReactNode,
	onPageChange: (firstNumber: number, sercondNumber: number) => void,
	quantityUsers: number,
	currentPage: number,
	portionSize: number,
}

const Pagination = (props: PaginationType) => {

	let { quantityUsers, pageSize, currentPage, portionSize} = props;


	let [portionNumber, setPortionNumber] = useState(1);

	let pagesCount = Math.ceil(quantityUsers / pageSize);
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / pageSize);


	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;




	return (
		<section className={styles.pagination}>
			<div className='container'>

				{
					portionNumber > 1 ? <button className={styles.paginationLeft} onClick={() => {
						setPortionNumber(portionNumber - 1)
					}}>PREV</button>
						:
						<button className={styles.paginationLeft} disabled>PREV</button>
				}

				<div className={styles.paginationBtnWrapper} >
					{
						pages.filter((e: number) => e >= leftPortionPageNumber && e <= rightPortionPageNumber)
							.map((item: number, i) => {
								return (
									<span className={currentPage === item ? styles.activeCurrentBtn : styles.paginationBtn} key={i} onClick={() => props.onPageChange(item, i)} >{item}</span>
								)
							})
					}
				</div>

				{portionCount > portionNumber &&
					<button className={styles.paginationRight} onClick={() => {
						setPortionNumber(portionNumber + 1)
					}}>Next</button>
				}

			</div>
		</section>
	)
}

export default Pagination