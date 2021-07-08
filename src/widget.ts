import { LastFmTrack } from '@models';
import { LastFmService } from '@services';

class NowPlayingWidget {
    private readonly apiPollingInterval = 20000;

    private lastFmService: LastFmService;

    private currentTrack: LastFmTrack;

    private set album(value: string) {
        if (!this.albumElement) {
            this.albumElement = document.querySelector('.track-album');
        }

        if (this.albumElement) {
            this.albumElement.innerText = value;
        }
    }

    private set artist(value: string) {
        if (!this.artistElement) {
            this.artistElement = document.querySelector('.track-artist');
        }

        if (this.artistElement) {
            this.artistElement.innerText = value;
        }
    }

    private set title(value: string) {
        if (!this.titleElement) {
            this.titleElement = document.querySelector('.track-title');
        }

        if (this.titleElement) {
            this.titleElement.innerText = value;
        }
    }

    private albumElement: HTMLElement;

    private artistElement: HTMLElement;

    private titleElement: HTMLElement;

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
                    this.updateTrack(this.currentTrack);
                }
            })
            .finally(() => {
                setTimeout(() => this.checkNowPlaying(), this.apiPollingInterval);
            });
    }

    public start(): void {
        this.checkNowPlaying();
    }

    private updateArt(src: string): void {
        const element = document.querySelector('img.track-art') as HTMLElement;
        element.setAttribute('src', src);
    }

    private updateTrack(track: LastFmTrack): void {
        this.album = track.album;
        this.artist = track.artist;
        this.title = track.title;

        this.updateArt(track.albumArtExtraLarge);
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
