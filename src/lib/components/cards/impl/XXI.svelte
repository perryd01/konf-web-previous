<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../index';
	import type { GenericPropsType } from './types';

	const bg = '#000';

	const props: GenericPropsType = {
		title: 'XXI',
		year: 2024,
		iconName: 'xxi.svg',
		href: 'https://konferencia.simonyi.bme.hu'
	};

	const cardBodyProps = {
		title: props.title,
		year: props.year,
		href: props.href
	};

	let draw = false;

	onMount(() => {
		draw = true;
	});
</script>

<Card.Body {...cardBodyProps}>
	<div class="size-full" style="background-color: {bg};">
		<div class="size-full group bg transition">
			<div class="h-full w-full flex flex-col justify-center">
				<div class="relative p-16 lg:p-24 select-none flex items-center justify-center">
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
