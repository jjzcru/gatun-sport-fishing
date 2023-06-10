'use client';
import { useRef, useState, MutableRefObject } from 'react';
import styles from '../page.module.css';

const DIALOG_CONTAINER_ID = 'dialog-container;';

export default function Fish() {
	const data = getData();
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [fish, setFish] = useState<FishData | null>(null);

	const onSelectFish = (fish: FishData) => {
		if (!dialogRef || !dialogRef.current) {
			return;
		}

		setFish(fish);

		dialogRef.current.showModal();
	};
	return (
		<section className={styles.fish}>
			<h2>Fish</h2>
			<p>Random description</p>
			<div className={styles.images}>
				{data.map((d, i) => (
					<Item key={`${d.id}-${i}`} onSelect={onSelectFish} {...d} />
				))}
			</div>
			<dialog ref={dialogRef}>
				<FishForm fish={fish} dialogRef={dialogRef} />
			</dialog>
		</section>
	);
}

function Item(props: ItemProps) {
	const { id, label, primaryImage, onSelect, description, images } = props;
	return (
		<figure
			id={`fish-${id}`}
			className={styles.item}
			onClick={() => {
				onSelect({
					id,
					label,
					description,
					primaryImage,
					images,
				});
			}}
		>
			<img src={primaryImage} alt={label} />
			<figcaption>{label}</figcaption>
		</figure>
	);
}

interface ItemProps extends FishData {
	onSelect: (fish: FishData) => void;
}

function FishForm(props: DialogProps) {
	const { fish, dialogRef } = props;
	if (!fish) {
		return;
	}
	const { label, description, primaryImage, images } = fish;
	const onClickOutside = (e: any) => {
		if (!dialogRef || !dialogRef.current) {
			return;
		}

		if (e.target.id === DIALOG_CONTAINER_ID) {
			dialogRef.current.close();
		}
	};

	if (images.length === 0) {
		return (
			<div id={DIALOG_CONTAINER_ID} onClick={onClickOutside}>
				<form method="dialog" className={styles['single']}>
					<div>
						<h3>{label}</h3>
						{description.map((d, i) => (
							<p key={i}>{d}</p>
						))}
						<button />
					</div>
					<div>
						<img src={primaryImage} alt={label} />
					</div>
				</form>
			</div>
		);
	}

	return (
		<div id={DIALOG_CONTAINER_ID} onClick={onClickOutside}>
			<form method="dialog" className={styles['multiple']}>
				<div>
					<h3>{label}</h3>
					<img src={primaryImage} alt={label} />
					{description.map((d, i) => (
						<p key={i}>{d}</p>
					))}
					<button />
				</div>
				<div>
					{images.map((d, i) => (
						<div key={`${d}-${i}`}>
							<img src={d} alt={`${label} ${i}`} />
						</div>
					))}
				</div>
			</form>
		</div>
	);
}

interface DialogProps {
	fish: FishData | null;
	dialogRef: MutableRefObject<HTMLDialogElement | null>;
}

function getData(): Array<FishData> {
	return [
		{
			id: 'bass',
			label: 'Sea bass',
			description: [
				'La lubina pavo real es uno de los peces de agua dulce más populares del mundo. Desde los gigantes sudamericanos que acechan en el Amazonas hasta el sur de Florida, se les considera uno de los peces de agua dulce más coloridos y de mayor resistencia en el mundo. Parte de la razón por la que son tan apreciados en todo el mundo es porque en realidad no son lubinas sino cíclidos. ',
				'La lubina pavo real es uno de los peces de agua dulce más populares del mundo. Desde los gigantes sudamericanos que acechan en el Amazonas hasta el sur de Florida, se les considera uno de los peces de agua dulce más coloridos y de mayor resistencia en el mundo. Parte de la razón por la que son tan apreciados en todo el mundo es porque en realidad no son lubinas sino cíclidos. ',
			],
			primaryImage: '/images/fish/sea-bass.jpeg',
			images: [
				'/images/fish/sea-bass.jpeg',
				'/images/fish/sea-bass.jpeg',
				'/images/fish/sea-bass.jpeg',
				'/images/fish/sea-bass.jpeg',
				'/images/fish/sea-bass.jpeg',
				'/images/fish/sea-bass.jpeg',
				'/images/fish/sea-bass.jpeg',
				'/images/fish/sea-bass.jpeg',
			],
		},
		{
			id: 'Tarpon',
			label: 'Tarpon',
			description: [
				'El sábalo real o bien tarpón (especie Megalops atlanticus), es un pez osteíctio elopiforme de la familia de los megalópidos.',
			],
			primaryImage: '/images/fish/sea-bass.jpeg',
			images: [],
		},
		{
			id: 'Snook',
			label: 'Snook',
			description: [
				'Excelente especie para la pesca deportiva, se capturan en todas las temporadas del año y muchas personas vienen al lago gatun en busca de esta especie. Después le agrego algo mas aquí',
			],
			primaryImage: '/images/fish/sea-bass.jpeg',
			images: [],
		},
		{
			id: 'Jurel',
			label: 'Jurel',
			description: [
				'El Jurel es una especie de pez que pertenece a la familia Carangidae. Se encuentra en aguas templadas y tropicales de todo el mundo, y es muy común en el Océano Atlántico y el Pacífico.',
			],
			primaryImage: '/images/fish/sea-bass.jpeg',
			images: [],
		},
		{
			id: 'Snook2',
			label: 'Snook',
			description: [
				'Excelente especie para la pesca deportiva, se capturan en todas las temporadas del año y muchas personas vienen al lago gatun en busca de esta especie. Después le agrego algo mas aquí',
			],
			primaryImage: '/images/fish/sea-bass.jpeg',
			images: [],
		},
		{
			id: 'Jurel2',
			label: 'Jurel',
			description: [
				'El Jurel es una especie de pez que pertenece a la familia Carangidae. Se encuentra en aguas templadas y tropicales de todo el mundo, y es muy común en el Océano Atlántico y el Pacífico.',
			],
			primaryImage: '/images/fish/sea-bass.jpeg',
			images: [],
		},
	];
}

interface FishData {
	id: string;
	description: Array<string>;
	label: string;
	primaryImage: string;
	images: Array<string>;
}
