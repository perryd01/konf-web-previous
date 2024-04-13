<script lang="ts">
	import Base from './Base.svelte';

	export let title = 'Generic';
	export let year = 2023;
	export let light = false;

	export let href: string | undefined = undefined;
</script>

<a href={href ?? `https://${year}.konferencia.simonyi.bme.hu`} target="_blank">
	<Base class="relative group">
		<slot />
		<div class:text-black={light} class="absolute bottom-0 left-0 p-4 text-lg font-bold">
			<h1>{title} ({year})</h1>
		</div>
	</Base>
</a>

<style lang="postcss">
	a {
		@apply hover:scale-105 transition-transform;
	}
</style>
