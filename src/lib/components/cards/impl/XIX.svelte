<script lang="ts">
	import Card from '../index';
	import type { GenericPropsType } from './types';

	const bg = '#d1eaeb';

	const props: GenericPropsType = {
		title: 'XIX',
		year: 2022,
		iconName: 'xix_color.svg'
	};

	const cardBodyProps = {
		title: props.title,
		year: props.year,
		href: props.href,
		light: true
	};
</script>

<Card.Body {...cardBodyProps}>
	<div class="size-full" style="background-color: {bg};">
		<div class="size-full group bg transition">
			<div class="h-full w-full flex flex-col justify-center">
				<div class="relative p-16 select-none flex items-center justify-center">
					<img src={`./logos/${props.iconName}`} alt={props.title} draggable="false" />
				</div>
			</div>
		</div>
	</div>
</Card.Body>

<style lang="postcss">
	img {
		@apply select-none w-full h-full;
	}
</style>
