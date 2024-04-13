import { cubicOut } from 'svelte/easing';

export function expand(
	node: Element,
	params: {
		delay?: number | undefined;
		duration?: number | undefined;
		easing?: ((t: number) => number) | undefined;
	}
) {
	const { delay = 0, duration = 400, easing = cubicOut } = params;

	const w = parseFloat(getComputedStyle(node).strokeWidth);

	return {
		delay,
		duration,
		easing,
		css: (t: number) => `opacity: ${t}; stroke-width: ${t * w}`
	};
}
