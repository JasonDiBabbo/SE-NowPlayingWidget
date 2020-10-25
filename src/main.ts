import { NowPlayingFeed } from './nowPlayingWidget';

let nowPlayingWidget: NowPlayingFeed;

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj['detail']['fieldData'];
    const apiKey = fieldData.lastFmApiKey;
    const user = fieldData.lastFmUsername;

    nowPlayingWidget = new NowPlayingFeed(apiKey, user);
    nowPlayingWidget.start();
});