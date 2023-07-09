/**
 * A class for providing parameter state checking functions.
 */
export class Guard {
    /**
     * Ensures that the parameter object is not null or undefined.
     *
     * @param obj The object to verify.
     * @param message The error message to show if verification fails.
     */
    public static mustNotBeNullOrUndefined(obj: unknown, message: string): void {
        if (obj === null || obj === undefined) {
            throw new Error(message);
        }
    }

    /**
     * Verifies that the input number is greater than or equal to a lower limit.
     *
     * @param obj The number to verify.
     * @param lowerLimit The number lower limit.
     * @param message The error message to show if verification fails.
     */
    public static mustBeGreaterThanOrEqualTo(
        obj: number,
        lowerLimit: number,
        message: string
    ): void {
        if (obj < lowerLimit) {
            throw new Error(message);
        }
    }

    /**
     * Verifies that the input array has a minimum of a certain number of elements.
     *
     * @param obj The array to verify.
     * @param minimumCount The minimum number of elements in the array.
     * @param message The error message to show if verification fails.
     */
    public static mustContainAtLeast(obj: unknown[], minimumCount: number, message: string): void {
        if (obj.length < minimumCount) {
            throw new Error(message);
        }
    }
}
