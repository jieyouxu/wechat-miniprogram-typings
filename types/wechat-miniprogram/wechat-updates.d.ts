declare namespace wx {
    function getUpdateManager(): UpdateManager;

    class UpdateManager {
        applyUpdate: () => void;

        onCheckForUpdate: (callback: CheckForUpdateCallback) => void;
        onUpdateFailed: (callback: () => void) => void;
        onUpdateReady: (callback: () => void) => void;
    }

    type CheckForUpdateCallback = (response: CheckForUpdateResponse) => void;

    interface CheckForUpdateResponse {
        hasUpdate: boolean;
    }
}
