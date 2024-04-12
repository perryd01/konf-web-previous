import Generic from './Generic.svelte';
import type { ComponentProps } from 'svelte';

export type GenericPropsType = Required<ComponentProps<Generic>> & {
	href?: string;
};
