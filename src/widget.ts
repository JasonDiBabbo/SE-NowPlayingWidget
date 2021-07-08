import { LastFmTrack } from '@models';
import { LastFmService } from '@services';

class NowPlayingWidget {
    private readonly apiPollingInterval = 20000;

    private lastFmService: LastFmService;

    private currentTrack: LastFmTrack;

    constructor(apiKey: string, private user: string) {
        this.lastFmService = new LastFmService(apiKey);

        if (!this.user) {
            throw new Error(
                `NowPlayingWidget::Constructor - Parameter 'user' was not provided. A user must be provided.`
            );
        }
    }

    public checkNowPlaying(): void {
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

    public start(): void {
        this.checkNowPlaying();
    }

    private updateNowPlayingTrack(track: LastFmTrack): void {
        this.updateNowPlayingTrackAlbum(track.album);
        this.updateNowPlayingTrackArt(track.albumArtExtraLarge);
        this.updateNowPlayingTrackArtist(track.artist);
        this.updateNowPlayingTrackTitle(track.title);
    }

    private updateNowPlayingTrackArt(src: string): void {
        const element = document.querySelector('img.track-art') as HTMLElement;
        element.setAttribute('src', src);
    }

    private updateNowPlayingTrackTitle(title: string): void {
        const element = document.querySelector('.track-title') as HTMLElement;
        element.innerText = title;
    }

    private updateNowPlayingTrackArtist(artist: string): void {
        const element = document.querySelector('.track-artist') as HTMLElement;
        element.innerText = artist;
    }

    private updateNowPlayingTrackAlbum(album: string): void {
        const element = document.querySelector('.track-album') as HTMLElement;
        element.innerText = album;
    }
}

let nowPlayingWidget: NowPlayingWidget;

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj['detail']['fieldData'];
    const apiKey = fieldData.lastFmApiKey;
    const user = fieldData.lastFmUsername;

    nowPlayingWidget = new NowPlayingWidget(apiKey, user);
    nowPlayingWidget.start();
});
