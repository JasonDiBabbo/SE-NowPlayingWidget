export class Guard {
    public static mustNotBeNullOrUndefined(obj: unknown, message: string): void {
        if (!obj) {
            throw new Error(message);
        }
    }

    public static mustBeGreaterThanOrEqualTo(
        obj: number,
        lowerLimit: number,
        message: string
    ): void {
        if (obj < lowerLimit) {
            throw new Error(message);
        }
    }
}
