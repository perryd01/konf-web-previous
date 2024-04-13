<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../index';
	import type { GenericPropsType } from './types';
	import { draw, scale } from 'svelte/transition';
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

	const svgProps = paths['18'];
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
								d={svgProps.path.one}
								style="stroke:#fff; stroke-width: 1.5"
								out:draw={{ duration: 1000 }}
							/>

							<path
								in:expand={{ duration: 1000, easing: quintOut, delay: 3000 }}
								style="fill: #fff"
								d={svgProps.path.one}
								out:expand={{ duration: 300, easing: quintOut }}
							/>

							<path
								in:draw={{ duration: 3000 }}
								d={svgProps.path.eight}
								style="stroke:#fff; stroke-width: 1.5"
								out:draw={{ duration: 1000 }}
							/>

							<path
								in:expand={{ duration: 1000, easing: quintOut, delay: 3000 }}
								style="fill: #fff"
								d={svgProps.path.eight}
								out:expand={{ duration: 300, easing: quintOut }}
							/>
						</svg>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div class="absolute top-0 left-0 size-full z-0">
		{#if !firstDraw}
			<svg
				height="112"
				width="112"
				fill={svgProps.colors.green.DEFAULT}
				class="absolute -top-4 -right-16 group-hover:scale-150 transition-transform"
				in:scale={{ duration: 1000 }}
			>
				<circle cx="50%" cy="50%" r="55" />
			</svg>
			<svg
				height="400"
				width="400"
				fill={svgProps.colors.red.DEFAULT}
				class="absolute -bottom-32 -left-32 group-hover:scale-150 transition-transform"
				in:scale={{ duration: 1000 }}
			>
				<circle cx="50%" cy="50%" r="145" />
			</svg>
			<svg
				height="250"
				width="255"
				fill={svgProps.colors.yellow.DEFAULT}
				class="absolute -bottom-32 -right-32 group-hover:scale-150 transition-transform"
				in:scale={{ duration: 1000 }}
			>
				<circle cx="50%" cy="50%" r="100" />
			</svg>
		{/if}
	</div>
</Card.Body>
