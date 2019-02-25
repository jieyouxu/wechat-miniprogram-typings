declare namespace wx {
    function switchTab(optionsAndCallbacks: SwitchTabOptionsAndCallbacks): void;

    interface SwitchTabOptionsAndCallbacks {
        url: string;

        success?: () => void;
        fail?: () => void;
        complete?: () => void;
    }
}

// TODO: https://developers.weixin.qq.com/miniprogram/dev/api/wx.switchTab.html
