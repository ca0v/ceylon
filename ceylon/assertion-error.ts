export interface IAssertionErrorOptions {
    message: string;
    expected?: Object;
    actual?: Object;
    showDiff?: boolean;
}

export default function({ message, expected, actual, showDiff }: IAssertionErrorOptions): Error {
    const error = new Error(message) as any;

    // Properties used by Mocha and other frameworks to show errors
    (<any>error)["expected"] = expected;
    (<any>error)["actual"] = actual;
    (<any>error)["showDiff"] = showDiff;

    // Set the error name to an AssertionError
    error.name = "AssertionError";

    return error as Error;
}