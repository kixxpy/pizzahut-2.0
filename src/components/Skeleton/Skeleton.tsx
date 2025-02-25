import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={427}
		viewBox='0 0 280 427'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<circle cx='133' cy='128' r='121' />
		<rect x='34' y='263' rx='8' ry='8' width='191' height='26' />
		<rect x='-3' y='301' rx='10' ry='10' width='270' height='73' />
		<rect x='145' y='385' rx='15' ry='15' width='130' height='40' />
		<rect x='0' y='386' rx='15' ry='15' width='130' height='40' />
	</ContentLoader>
);

export default Skeleton;
