'use client';
import { useRef, useState, MutableRefObject, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext, FishData } from '../App.context';
import styles from '../page.module.css';

const DIALOG_CONTAINER_ID = 'dialog-container';

export default function Fish() {
	const { fishes, title, description } = useContext(AppContext).fish;
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
			<h2>{title}</h2>
			<p>{description}</p>
			<div className={styles.images}>
				{fishes.map((f, i) => (
					<Item key={`${f.id}-${i}`} onSelect={onSelectFish} {...f} />
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
	useEffect(() => {
		if (!fish) {
			return;
		}

		const isMobile = window.innerHeight < 767;

		console.log(`Is mobile: ${isMobile}`);

		if (isMobile) {
			const form = document.querySelector('#dialog-container form');
			if (form) {
				form.scrollTop = 0;
			}
			return;
		}

		const nodes = document.querySelectorAll('#dialog-container form > div');
		if (!nodes) {
			return;
		}

		for (const node of nodes) {
			node.scrollTop = 0;
		}
	}, [fish]);
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
