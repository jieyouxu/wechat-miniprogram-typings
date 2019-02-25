declare namespace wx {
    function getLaunchOptionsSync(): LaunchOptions;

    interface LaunchOptions {
        path: string;
        scene: SupportedSceneNumber;
        query: object;
        shareTicket: string;
        referrerInfo?: ReferrerInfo;
    }

    // See
    // https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html
    type SupportedSceneNumber = 1001
                                | 1005
                                | 1006
                                | 1007
                                | 1008
                                | 1011
                                | 1012
                                | 1013
                                | 1014
                                | 1017
                                | 1019
                                | 1020
                                | 1022
                                | 1023
                                | 1024
                                | 1025
                                | 1026
                                | 1027
                                | 1028
                                | 1029
                                | 1030
                                | 1031
                                | 1032
                                | 1034
                                | 1035
                                | 1036
                                | 1037
                                | 1038
                                | 1039
                                | 1042
                                | 1043
                                | 1044
                                | 1045
                                | 1046
                                | 1047
                                | 1048
                                | 1049
                                | 1052
                                | 1053
                                | 1054
                                | 1056
                                | 1057
                                | 1058
                                | 1059
                                | 1064
                                | 1067
                                | 1068
                                | 1069
                                | 1071
                                | 1072
                                | 1073
                                | 1074
                                | 1077
                                | 1078
                                | 1079
                                | 1081
                                | 1082
                                | 1084
                                | 1089
                                | 1090
                                | 1091
                                | 1092
                                | 1095
                                | 1096
                                | 1097
                                | 1099
                                | 1102
                                | 1103
                                | 1104;

    interface ReferrerInfo {
        appId?: string;
        extraData?: object;
    }
}
