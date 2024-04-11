<script lang="ts">
	import clsx from 'clsx';
	let className = '';
	export { className as class };
</script>

<div class={clsx('card', className)}>
	<slot />
</div>

<style lang="postcss">
	.card {
		@apply rounded-xl w-full h-full min-h-96 overflow-hidden;
	}
</style>
