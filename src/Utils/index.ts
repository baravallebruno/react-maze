/**
 * Create a prefixed index to use as a key for React components.
 *
 * @param index
 * @param prefix
 * @returns
 */
const createPrefixedIndex = (index: number, prefix: string): string =>
  `${prefix}-${index}`;

export { createPrefixedIndex };
