/// <reference path="../API.ts" />

namespace std
{
	/* =========================================================
		HEAPS
	========================================================= */
	export function make_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator): void;

	export function make_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, comp: (x: T, y: T) => boolean): void;

	export function make_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, comp: (x: T, y: T) => boolean = less): void
	{
		let heap_compare = function (x: T, y: T): boolean
		{
			return !comp(x, y);
		};
		sort(first, last, heap_compare);
	}

	export function push_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator): void;

	export function push_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, comp: (x: T, y: T) => boolean): void;

	export function push_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, comp: (x: T, y: T) => boolean = less): void
	{
		let last_item_it = last.prev();
		let less_it: RandomAccessIterator = null;
		
		for (let it = first; !it.equals(last_item_it); it = it.next())
		{
			if (comp(it.value, last_item_it.value))
			{
				less_it = it;
				break;
			}
		}

		if (less_it != null)
			iter_swap(less_it, last_item_it);
	}

	export function pop_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator): void;

	export function pop_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, comp: (x: T, y: T) => boolean): void;

	export function pop_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, comp: (x: T, y: T) => boolean = less): void
	{
		if (is_heap(first, last, comp) == false)
			throw new std.InvalidArgument("Elements are not sorted by heap.");
		
		iter_swap(first, last);
	}

	export function is_heap<T, ForwardIterator extends Readonly<IForwardIterator<T, ForwardIterator>>>
		(first: ForwardIterator, last: ForwardIterator): boolean;

	export function is_heap<T, ForwardIterator extends Readonly<IForwardIterator<T, ForwardIterator>>>
		(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean): boolean;

	export function is_heap<T, ForwardIterator extends Readonly<IForwardIterator<T, ForwardIterator>>>
		(first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean = less): boolean
	{
		let it = is_heap_until(first, last, compare);

		return it.equals(last);
	}

	export function is_heap_until<T, ForwardIterator extends Readonly<IForwardIterator<T, ForwardIterator>>>
		(first: ForwardIterator, last: ForwardIterator): ForwardIterator;

	export function is_heap_until<T, ForwardIterator extends Readonly<IForwardIterator<T, ForwardIterator>>>
		(first: ForwardIterator, last: ForwardIterator, comp: (x: T, y: T) => boolean): ForwardIterator;

	export function is_heap_until<T, ForwardIterator extends Readonly<IForwardIterator<T, ForwardIterator>>>
		(first: ForwardIterator, last: ForwardIterator, comp: (x: T, y: T) => boolean = less): ForwardIterator
	{
		let prev = first;
		for (let it = first.next(); !it.equals(last); it = it.next())
		{
			if (comp(prev.value, it.value) == true)
				return it;

			prev = it;
		}
		return last;
	}

	export function sort_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator): void;

	export function sort_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean): void;

	export function sort_heap<T, RandomAccessIterator extends General<IRandomAccessIterator<T, RandomAccessIterator>>>
		(first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean = less): void
	{
		sort(first, last, compare);
	}
}