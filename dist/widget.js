'use strict';

class LastFmTrack {
    constructor(json) {
        this.album = json?.['album']?.['#text'];
        this.artist = json?.['artist']?.['#text'];
        this.nowPlaying = json?.['@attr']?.['nowplaying'] ? true : false;
        this.title = json?.['name'];
        const images = json?.['image'];
        if (Array.isArray(images)) {
            this.albumArtSmall = images.find((x) => x?.size === 'small')?.['#text'];
            this.albumArtMedium = images.find((x) => x?.size === 'medium')?.['#text'];
            this.albumArtLarge = images.find((x) => x?.size === 'large')?.['#text'];
            this.albumArtExtraLarge = images.find((x) => x?.size === 'extralarge')?.['#text'];
        } else {
            this.albumArtSmall = null;
            this.albumArtMedium = null;
            this.albumArtLarge = null;
            this.albumArtExtraLarge = null;
        }
    }
    equals(track) {
        if (!track) {
            return false;
        }
        return (
            this.album === track.album && this.artist === track.artist && this.title === track.title
        );
    }
}

class LastFmService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        if (!this.apiKey) {
            throw new Error(
                `LastFmService::Constructor - Parameter 'apiKey' was not provided. An API key must be provided.`
            );
        }
    }
    async getMostRecentTrack(user) {
        return this.getRecentTracks(user, 1);
    }
    async getRecentTracks(user, limit) {
        if (!user) {
            throw new Error(
                `LastFmService::getRecentTracks - Parameter 'user' cannot be null or undefined.`
            );
        }
        if (limit < 1 || limit > 200) {
            throw new Error(
                `LastFmService::getRecentTracks - Parameter 'limit' must be a positive integer with a maximum value of 200.`
            );
        }
        const apiMethod = 'user.getrecenttracks';
        const format = 'json';
        const url = `https://ws.audioscrobbler.com/2.0/?method=${apiMethod}&user=${user}&limit=${limit}&api_key=${this.apiKey}&format=${format}`;
        return fetch(url, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'SameSite': 'Strict',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const trackJson = json?.['recenttracks']?.['track']?.[0];
                return new LastFmTrack(trackJson);
            });
    }
}

class NowPlayingWidget {
    constructor(apiKey, user) {
        this.user = user;
        this.apiPollingInterval = 20000;
        this.lastFmService = new LastFmService(apiKey);
        if (!this.user) {
            throw new Error(
                `NowPlayingWidget::Constructor - Parameter 'user' was not provided. A user must be provided.`
            );
        }
    }
    checkNowPlaying() {
        this.lastFmService
            .getMostRecentTrack(this.user)
            .then((track) => {
                if (track.nowPlaying && !track.equals(this.currentTrack)) {
                    this.currentTrack = track;
                    this.updateNowPlayingTrack(this.currentTrack);
                }
            })
            .finally(() => {
                setTimeout(() => this.checkNowPlaying(), this.apiPollingInterval);
            });
    }
    start() {
        this.checkNowPlaying();
    }
    updateNowPlayingTrack(track) {
        this.updateNowPlayingTrackAlbum(track.album);
        this.updateNowPlayingTrackArt(track.albumArtExtraLarge);
        this.updateNowPlayingTrackArtist(track.artist);
        this.updateNowPlayingTrackTitle(track.title);
    }
    updateNowPlayingTrackArt(src) {
        const element = document.querySelector('img.track-art');
        element.setAttribute('src', src);
    }
    updateNowPlayingTrackTitle(title) {
        const element = document.querySelector('.track-title');
        element.innerText = title;
    }
    updateNowPlayingTrackArtist(artist) {
        const element = document.querySelector('.track-artist');
        element.innerText = artist;
    }
    updateNowPlayingTrackAlbum(album) {
        const element = document.querySelector('.track-album');
        element.innerText = album;
    }
}

let nowPlayingWidget;
window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj['detail']['fieldData'];
    const apiKey = fieldData.lastFmApiKey;
    const user = fieldData.lastFmUsername;
    nowPlayingWidget = new NowPlayingWidget(apiKey, user);
    nowPlayingWidget.start();
    debugger;
});
