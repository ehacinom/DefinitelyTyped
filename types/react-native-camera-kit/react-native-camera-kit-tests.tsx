
import * as React from 'react';
import {
    CameraKitCamera,
    CameraKitCameraScreen,
    CameraKitGallery,
    CameraKitGalleryView,
} from 'react-native-camera-kit'

class TestCameraKitCamera extends React.Component {
    render() {
        return (
            <CameraKitCamera />
        );
    }
}

class TestCameraKitCameraScreen extends React.Component {
    render() {
        return (
            <CameraKitCameraScreen />
        );
    }
}

class TestCameraKitGallery extends React.Component {
    render() {
        return (
            <CameraKitGallery />
        );
    }
}

class TestCameraKitGalleryView extends React.Component {
    render() {
        return (
            <CameraKitGalleryView />
        );
    }
}

