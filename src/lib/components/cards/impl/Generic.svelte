<script lang="ts">
	import Base from '../Base.svelte';

	export let title = 'Generic';
	export let year = 2023;
	export let iconName = 'xx.svg';
</script>

<a href="https://{year}.konferencia.simonyi.bme.hu" target="_blank">
	<Base class=" relative group">
		<div
			class="h-full w-full flex flex-col justify-center bg-[#222222] hover:bg-[#333333] transition-colors"
		>
			<div class="relative p-16 select-none">
				<img src={`./logos/${iconName}`} alt={title} draggable="false" />
			</div>
		</div>
		<div class="absolute bottom-0 left-0 p-4 text-lg font-bold">
			<h1>{title} ({year})</h1>
		</div>
	</Base>
</a>

<style lang="postcss">
	a {
		@apply hover:scale-105 transition-transform;
	}

	img {
		@apply select-none w-full h-full;
	}
</style>
