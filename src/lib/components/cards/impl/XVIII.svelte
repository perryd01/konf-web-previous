<script lang="ts">
	import Card from '../index';

	const bg = '#273343';

	const props = {
		title: 'XX',
		year: 2021,
		iconName: 'xviii.svg'
	};
</script>

<Card.Body {...props}>
	<div class="size-full" style="background-color: {bg};">
		<div class="size-full group bg transition">
			<div class="h-full w-full flex flex-col justify-center">
				<div class="relative p-24 select-none flex items-center justify-center">
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
