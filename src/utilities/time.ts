/**
 * Utility methods for working with time data.
 */
export class Time {
    /**
     * Converts seconds to milliseconds.
     *
     * @param seconds
     */
    public static toMilliseconds(seconds: number): number {
        return seconds * 1000;
    }

    /**
     * Converts milliseconds to seconds.
     *
     * @param milliseconds
     */
    public static toSeconds(milliseconds: number): number {
        return milliseconds / 1000;
    }
}
