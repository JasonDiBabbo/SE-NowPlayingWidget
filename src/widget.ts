import { LastFmTrack } from '@models';
import { LastFmService } from '@services';
import { Time } from '@utilities';

class NowPlayingWidget {
    private readonly apiPollFrequency: number;

    private readonly user: string;

    private readonly lastFmService: LastFmService;

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

    constructor(apiKey: string, user: string, apiPollFrequency: number) {
        if (!user) {
            throw new Error(
                `NowPlayingWidget::Constructor - Parameter 'user' was not provided. A user must be provided.`
            );
        }

        if (apiPollFrequency < 10000) {
            throw new Error(
                `NowPlayingWidget::Constructor - parameter 'apiPollFrequency' cannot be less than 10 seconds.`
            );
        }

        this.user = user;
        this.apiPollFrequency = apiPollFrequency;
        this.lastFmService = new LastFmService(apiKey);
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
                setTimeout(() => this.checkNowPlaying(), this.apiPollFrequency);
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

    const apiKey: string = fieldData.lastFmApiKey as string;
    const user: string = fieldData.lastFmUsername as string;
    const pollFrequency: number = Time.toMilliseconds(fieldData.lastFmApiPollFrequency as number);

    nowPlayingWidget = new NowPlayingWidget(apiKey, user, pollFrequency);
    nowPlayingWidget.start();
});
