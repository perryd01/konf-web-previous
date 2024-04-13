<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../index';
	import type { GenericPropsType } from './types';
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { expand } from '$lib/utils/custom-transitions';
	import paths from './svgPaths';

	const bg = '#273343';

	const props: GenericPropsType = {
		title: 'XVIII',
		year: 2021,
		iconName: 'xviii.svg'
	};

	const cardBodyProps = {
		title: props.title,
		year: props.year,
		href: props.href
	};

	let drawCondition = false;
	let firstDraw = true;

	onMount(() => {
		setTimeout(() => {
			drawCondition = !drawCondition;
			firstDraw = false;
		}, 1000);
	});

	const svgPath = paths['18'];
</script>

<Card.Body {...cardBodyProps}>
	<div class="size-full" style="background-color: {bg};">
		<div class="size-full group bg transition">
			<div class="h-full w-full flex flex-col justify-center">
				<div class="relative p-16 select-none flex items-center justify-center">
					{#if drawCondition}
						<svg
							height="100%"
							width="100%"
							viewBox="-3 -3 80 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="z-10"
						>
							<path
								in:draw={{ duration: 3000 }}
								d={svgPath.one}
								style="stroke:#fff; stroke-width: 1.5"
								out:draw={{ duration: 1000 }}
							/>

							<path
								in:expand={{ duration: 1000, easing: quintOut, delay: 3000 }}
								style="fill: #fff"
								d={svgPath.one}
								out:expand={{ duration: 300, easing: quintOut }}
							/>

							<path
								in:draw={{ duration: 3000 }}
								d={svgPath.eight}
								style="stroke:#fff; stroke-width: 1.5"
								out:draw={{ duration: 1000 }}
							/>

							<path
								in:expand={{ duration: 1000, easing: quintOut, delay: 3000 }}
								style="fill: #fff"
								d={svgPath.eight}
								out:expand={{ duration: 300, easing: quintOut }}
							/>
						</svg>
					{/if}
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
