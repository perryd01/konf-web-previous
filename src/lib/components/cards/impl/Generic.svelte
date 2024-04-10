<script lang="ts">
	import CardBase from '../CardBase.svelte';

	export let title = 'Generic';
	export let year = 2023;
	export let iconName = 'xx.svg';
</script>

<a href="https://{year}.konferencia.simonyi.bme.hu" target="_blank">
	<CardBase class="bg-[#222222] relative group">
		<div class="h-full w-full flex flex-col justify-center">
			<div class="relative p-16 select-none">
				<img src={`./logos/${iconName}`} alt={title} draggable="false" />
			</div>
		</div>
		<div class="absolute bottom-0 left-0 pb-2 pl-2">
			<h1>{title} {year}</h1>
		</div>
	</CardBase>
</a>

<style lang="postcss">
	img {
		@apply select-none w-full h-full;
		@apply fill-green-400;
	}
</style>
