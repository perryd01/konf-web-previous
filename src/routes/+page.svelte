<script lang="ts">
	import { XX, XVIII, XIX, XXI } from '$lib/components/cards/impl';
	import Generic from '$lib/components/cards/impl/Generic.svelte';

	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Simonyi Konferencia az előző években"
	description="Ez előző évek Simonyi Konferenciáinak összefoglalója. Itt megtalálod az előző évek programjait, előadóit és minden fontos információt."
/>

<div class="grid gap-16">
	<section>
		<h1 class="text-7xl font-semibold tracking-tight text-center font-dm-sans">
			Simonyi Konferencia
		</h1>
		<h2 class="text-center tracking-wider text-xl">az előző években</h2>
	</section>

	<section class="pageLayout">
		<XXI />
		<XX />
		<XIX />
		<XVIII />
	</section>
</div>

<style lang="postcss">
	.pageLayout {
		@apply grid md:grid-cols-2 gap-8 w-full;
	}
</style>
