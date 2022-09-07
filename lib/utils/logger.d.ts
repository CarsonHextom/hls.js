export interface ILogFunction {
    (message?: any, ...optionalParams: any[]): void;
}
export interface ILogger {
    trace: ILogFunction;
    debug: ILogFunction;
    log: ILogFunction;
    warn: ILogFunction;
    info: ILogFunction;
    error: ILogFunction;
}
export declare function enableLogs(debugConfig: boolean | ILogger): void;
export declare const logger: ILogger;
//# sourceMappingURL=logger.d.ts.map