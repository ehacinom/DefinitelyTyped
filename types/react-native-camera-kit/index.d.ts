// Type definitions for react-native-camera-kit 7.3.3
// Project: https://github.com/wix/react-native-camera-kit
// Definitions by: Monica He <https://github.com/ehacinom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

declare class CameraKitCamera extends React.Component<{ children?: JSX.Element }> {
    render: string;
    static checkDeviceCameraAuthorizationStatus: object;
    static requestDeviceCameraAuthorization: void;
    capture: void;
    changeCamera: void;
    setFlashMode: void;
}

declare class CameraKitCameraScreen extends React.Component<{ children?: JSX.Element }> {
}

declare class CameraKitGallery extends React.Component<{ children?: JSX.Element }> {
}

declare class CameraKitGalleryView extends React.Component<{ children?: JSX.Element }> {
}

export {
    CameraKitCamera,
    CameraKitCameraScreen,
    CameraKitGallery, 
    CameraKitGalleryView
};
