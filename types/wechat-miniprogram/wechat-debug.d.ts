declare namespace wx {
    function setEnableDebug(optionAndCallbacks: DebugOptionsAndCallbacks): void;

    interface DebugOptionsAndCallbacks {
        enableDebug: boolean;
        success?: () => void;
        fail?: () => void;
        complete?: () => void;
    }

    function getLogManager(options: LoggingOptions): LogManager;

    interface LoggingOptions {
        level?: 0 | 1;
    }

    class LogManager {
        debug: (...args: any[]) => void;
        info: (...args: any[]) => void;
        log: (...args: any[]) => void;
        warn: (...args: any[]) => void;
    }
}
