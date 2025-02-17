declare type BinarySearchComparison<T> = (candidate: T) => -1 | 0 | 1;
declare const BinarySearch: {
    /**
     * Searches for an item in an array which matches a certain condition.
     * This requires the condition to only match one item in the array,
     * and for the array to be ordered.
     *
     * @param {Array<T>} list The array to search.
     * @param {BinarySearchComparison<T>} comparisonFn
     *      Called and provided a candidate item as the first argument.
     *      Should return:
     *          > -1 if the item should be located at a lower index than the provided item.
     *          > 1 if the item should be located at a higher index than the provided item.
     *          > 0 if the item is the item you're looking for.
     *
     * @return {T | null} The object if it is found or null otherwise.
     */
    search: <T>(list: T[], comparisonFn: BinarySearchComparison<T>) => T | null;
};
export default BinarySearch;
//# sourceMappingURL=binary-search.d.ts.map