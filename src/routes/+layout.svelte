<script lang="ts">
	import '../app.css';

	import { Footer } from '$lib/components/layout';

	const version = __PACKAGE__.version as string;

	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Simonyi Konferencia az előző években"
	description="Az előző évek Simonyi Konferenciáinak összefoglalója. Itt megtalálod az előző évek programjait, előadóit és minden fontos információt."
	openGraph={{
		title: 'Simonyi Konferencia az előző években',
		description:
			'Az előző évek Simonyi Konferenciáinak összefoglalója. Itt megtalálod az előző évek programjait, előadóit és minden fontos információt.',
		image: '/preview.webp'
	}}
/>

<div>
	<main>
		<slot />
	</main>

	<Footer {version} />
</div>

<style lang="postcss">
	div {
		@apply font-inter bg-[#111111] text-white flex flex-col justify-between px-6 py-8 min-h-screen gap-8;
	}

	main {
		@apply grow max-w-screen-lg mx-auto;
	}
</style>
