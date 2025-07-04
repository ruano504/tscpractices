type NumericArray = Array<number>;

type StatFunction = (values: NumericArray) => number;

declare module "stats" {
  export function getMaxIndex<T>(input: T[], comparator: (a: T, b: T) => number): number;

  export function getmaxElement<T>(input: T[], comparator: (a: T, b: T) => number): T | null;

  export function getMinIndex<T>(input: T[], comparator: (a: T, b: T) => number): number;

  export function getMinElement<T>(input: T[], comparator: (a: T, b: T) => number): T | null;

  export function getMaxElement<T>(input: T[], comparator: (a: T, b: T) => number): T | null;

  export function getMedianIndex<T>(input: T[], comparator: (a: T, b: T) => number): number;

  export function getMedianElement<T>(input: T[], comparator: (a: T, b: T) => number): T | null;

  export function getAverageValue<T>(input: T[], getValue: (item: T) => number): number | null;
}
