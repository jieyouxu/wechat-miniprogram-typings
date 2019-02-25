declare namespace wx {
    function getSystemInfo(request: SystemInfoRequest);

    interface SystemInfoRequest {
        success?: (response: SystemInfoResponse) => void;
        fail?: () => void;
        complete?: () => void;
    }

    interface SystemInfoResponse {
        brand: string;
        model: string;

        pixelRatio: number;
        screenWidth: px;
        screenHeight: px;
        windowWidth: px;
        windowHeight: px;
        statusBarHeight: px;

        fontSizeSetting: px;

        language: string;

        version: string;
        system: string;
        platform: string;
        SDKVersion: string;

        benchmarkLevel: number;
    }

    type px = number;
}
