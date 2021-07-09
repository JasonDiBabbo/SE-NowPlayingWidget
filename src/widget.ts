import { ArtStack } from 'components';
import { LastFmTrack } from '@models';
import { LastFmService } from '@services';
import { Time } from '@utilities';

class NowPlayingWidget {
    private readonly apiPollFrequency: number;

    private readonly artStack: ArtStack;

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

        const artStackElement = document.querySelector('.art-stack') as HTMLElement;
        this.artStack = new ArtStack(artStackElement);
    }

    public checkNowPlaying(): void {
        this.lastFmService
            .getMostRecentTrack(this.user)
            .then((track) => {
                const sameSong = track.equals(this.currentTrack);

                if (track.nowPlaying && !sameSong) {
                    const sameAlbum = this.currentTrack
                        ? track.album === this.currentTrack.album
                        : false;

                    this.currentTrack = track;
                    if (sameAlbum) {
                        this.updateCurrentTrackInformation(this.currentTrack);
                    } else {
                        this.updateCurrentTrack(this.currentTrack);
                    }
                }
            })
            .finally(() => {
                setTimeout(() => this.checkNowPlaying(), this.apiPollFrequency);
            });
    }

    public start(): void {
        this.checkNowPlaying();
    }

    private updateCurrentTrack(track: LastFmTrack): void {
        this.updateCurrentTrackArtwork(track);
        this.updateCurrentTrackInformation(track);
    }

    private updateCurrentTrackArtwork(track: LastFmTrack): void {
        this.artStack.artwork = track.albumArtExtraLarge;
    }

    private updateCurrentTrackInformation(track: LastFmTrack): void {
        // this.album = track.album;
        // this.artist = track.artist;
        // this.title = track.title;
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
