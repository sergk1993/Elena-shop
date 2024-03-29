import styles from './Catalog.module.css';
import { connect } from 'react-redux';
import { CatalogInterface } from '../../types/types';
import { RootType } from '../../Redux/redux-store';
import { CatalogPage } from '../../Redux/selectors/CatalogPage-selectors';




function Catalog(props: CatalogInterface): JSX.Element {

	let CatalogNames = props.catalogPage.catalogList.map((e) => {
		return (
			<a href="/" key={e.id}>
				<figure >
					<figcaption>
						{e.title}
					</figcaption>
					<picture>
						<source srcSet={e.photoImgWebp} type='image/webp' />
						<img src={e.photoImgJpeg} alt='items' />
					</picture>
				</figure>

			</a>
		);
	})


	let catalogListDown = props.catalogPage.catalogListDown.map((e) => {
		return (
			<a href="/" key={e.id}>
				<figure >
					<figcaption>
						{e.title}
					</figcaption>
					<picture>
						<source srcSet={e.photoImgWebp ? e.photoImgWebp : ''} type='image/webp' />
						<img src={e.photoImgJpeg ? e.photoImgJpeg : ''} alt="blouses img" />
					</picture>
				</figure>
			</a>
		);
	})


	return (
		<>
			<section className={styles.catalog}>
				<div className={styles.gridCatalogTop}>
					{CatalogNames}
				</div>
				
				<div className={styles.gridCatalogDown}>
					{
						catalogListDown
					}
				</div>

			</section>
		</>
	);
}


function mapStateToProps(state: RootType) {
	return {
		catalogPage: CatalogPage(state)
	}
}


export default connect(mapStateToProps)(Catalog);