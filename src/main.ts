import { NowPlayingWidget } from './nowPlayingWidget';

let nowPlayingWidget: NowPlayingWidget;

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj['detail']['fieldData'];
    const apiKey = fieldData.lastFmApiKey;
    const user = fieldData.lastFmUsername;

    nowPlayingWidget = new NowPlayingWidget(apiKey, user);
    nowPlayingWidget.start();
});