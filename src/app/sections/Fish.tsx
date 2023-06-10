import styles from '../page.module.css';

export default function Fish() {
	return <section className={styles.fish}></section>;
}

function getData() {
	return [
		{
			id: 'bass',
			description:
				'La lubina pavo real es uno de los peces de agua dulce más populares del mundo. Desde los gigantes sudamericanos que acechan en el Amazonas hasta el sur de Florida, se les considera uno de los peces de agua dulce más coloridos y de mayor resistencia en el mundo. Parte de la razón por la que son tan apreciados en todo el mundo es porque en realidad no son lubinas sino cíclidos. ',
			primaryImage: '',
			images: [],
		},
		{
			id: 'Tarpon',
			description:
				'El sábalo real o bien tarpón (especie Megalops atlanticus), es un pez osteíctio elopiforme de la familia de los megalópidos.',
			primaryImage: '',
			images: [],
		},
		{
			id: 'Snook',
			description:
				'Excelente especie para la pesca deportiva, se capturan en todas las temporadas del año y muchas personas vienen al lago gatun en busca de esta especie. Después le agrego algo mas aquí',
			primaryImage: '',
			images: [],
		},
		{
			id: 'Jurel',
			description:
				'El Jurel es una especie de pez que pertenece a la familia Carangidae. Se encuentra en aguas templadas y tropicales de todo el mundo, y es muy común en el Océano Atlántico y el Pacífico.',
			primaryImage: '',
			images: [],
		},
	];
}
