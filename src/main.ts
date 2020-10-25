import { NowPlayingFeed } from './nowPlayingWidget';

let nowPlayingFeed: NowPlayingFeed;

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj['detail']['fieldData'];
    const apiKey = fieldData.lastFmApiKey;
    const user = fieldData.lastFmUsername;

    nowPlayingFeed = new NowPlayingFeed(apiKey, user);
    nowPlayingFeed.start();
});