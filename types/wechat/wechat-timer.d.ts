// --- Timer ---
declare function clearInterval(intervalID: number): void;

declare function clearTimeout(timeoutID: number): void;

declare function setInterval(callback: () => void,
                             delay: ms,
                             ...params: any[]): number;

declare type ms = number;

declare function setTimeout(callback: () => void,
                            delay: ms,
                            ...params: any[]): number;
