/// <reference path="wechat-miniprogram.d.ts" />

declare namespace wx {
    // --- Life Cycle Methods ---
    function onPageNotFound(callback: PageNotFoundCallback): void;

    type PageNotFoundCallback = (response: PageNotFoundResponse) => void;

    interface PageNotFoundResponse {
        path: string;
        query: object;
        isEntryPage: boolean;
    }

    function onError(callback: ErrorCallback): void;

    type ErrorCallback = (error: string) => void;

    function onAppShow(callback: AppShowCallback): void;

    type AppShowCallback = (response: AppShowResponse) => void;

    interface AppShowResponse {
        path: string;
        scene: SupportedSceneNumber;
        query: object;
        shareTicket: string;
        referrerInfo?: ReferrerInfo;
    }

    function onAppHide(callback: () => void): void;

    function offPageNotFound(callback: () => void): void;

    function offError(callback: () => void): void;

    function offAppShow(callback: () => void): void;

    function offAppHide(callback: () => void): void;
}
