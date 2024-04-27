<script lang="ts">
	import Card from '../index';

	import type { GenericPropsType } from './types';

	const props: GenericPropsType = {
		title: 'XX',
		year: 2023,
		iconName: 'xx_color.svg'
	};

	const cardBodyProps = {
		title: props.title,
		year: props.year,
		href: props.href
	};

	import { draw, fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let drawCondition = false;
	let firstDraw = true;

	onMount(() => {
		setTimeout(() => {
			drawCondition = !drawCondition;
			firstDraw = false;
		}, 1000);
	});
</script>

<Card.Body {...cardBodyProps}>
	<div class="size-full" style="background-color: #001429;">
		<div class="size-full group bg transition">
			<div class="h-full w-full flex flex-col justify-center">
				<div class="relative p-8 select-none z-40">
					{#if drawCondition}
						<img
							transition:fade={{ duration: 1000, delay: 1000 }}
							src={`./logos/${props.iconName}`}
							alt={props.title}
							draggable="false"
						/>
					{/if}
				</div>
			</div>
			{#if drawCondition}
				<img
					transition:fade={{ duration: 1000 }}
					class="absolute top-0 left-0 h-full w-full object-cover"
					alt="pattern"
					src="/pattern.svg"
				/>
			{/if}
		</div>
	</div>
</Card.Body>

<style lang="postcss">
	.bg {
		background: radial-gradient(
			70.02% 70.02% at 50% 50%,
			rgba(112, 255, 131, 0) 50%,
			rgba(60, 134, 160, 0) 100%
		);
		position: relative;
		padding: 16px 24px;
		z-index: 10;
		color: white;
		display: inline-block;
		text-decoration: none;
		border-radius: 8px;
	}
	.bg:after {
		background: radial-gradient(
			70.02% 70.02% at 50% 50%,
			rgba(112, 255, 131, 0) 50%,
			rgba(60, 134, 160, 0.3) 100%
		);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		width: 100%;
		z-index: -10;
		transition: opacity 0.5s;
	}
	.bg:hover:after {
		opacity: 1;
	}

	img {
		@apply select-none w-full h-full;
	}
</style>
