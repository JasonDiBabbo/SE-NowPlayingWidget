import { ArtStack } from 'components';
import { LastFmTrack, WidgetOptions } from '@models';
import { LastFmService } from '@services';
import { Time } from '@utilities';

class NowPlayingWidget {
    private readonly apiPollFrequency: number;

    private readonly artStack: ArtStack;

    private readonly lastFmService: LastFmService;

    private readonly user: string;

    private readonly showArtist: boolean;

    private readonly showAlbum: boolean;

    private readonly showTitle: boolean;

    private currentTrack: LastFmTrack;

    private set album(value: string) {
        this.albumElement.innerText = value;
    }

    private set artist(value: string) {
        this.artistElement.innerText = value;
    }

    private set title(value: string) {
        this.titleElement.innerText = value;
    }

    private albumElement: HTMLElement;

    private artistElement: HTMLElement;

    private titleElement: HTMLElement;

    constructor(options: WidgetOptions) {
        if (!options) {
            throw new Error(
                `NowPlayingWidget::Constructor - Parameter 'options was not provided. Options must be provided.`
            );
        }

        if (!options.lastFmUsername) {
            throw new Error(
                `NowPlayingWidget::Constructor -  Options value for 'lastFmUsername' was not provided. A valid username must be provided.`
            );
        }

        if (options.apiPollFrequency < 10000) {
            throw new Error(
                `NowPlayingWidget::Constructor - Options value for 'apiPollFrequency' cannot be less than 10 seconds.`
            );
        }

        this.user = options.lastFmUsername;
        this.apiPollFrequency = options.apiPollFrequency;
        this.showAlbum = options.showAlbum;
        this.showArtist = options.showArtist;
        this.showTitle = options.showTitle;
        this.lastFmService = new LastFmService(options.lastFmApiKey);
        this.artStack = new ArtStack(document.querySelector('.art-stack') as HTMLElement);
        this.albumElement = document.querySelector('.album');
        this.artistElement = document.querySelector('.artist');
        this.titleElement = document.querySelector('.title');

        this.removeUnusedDomElements();
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

    private removeUnusedDomElements(): void {
        if (!this.showAlbum) {
            this.albumElement.remove();
        }

        if (!this.showArtist) {
            this.artistElement.remove();
        }

        if (!this.showTitle) {
            this.titleElement.remove();
        }
    }

    private updateCurrentTrack(track: LastFmTrack): void {
        this.updateCurrentTrackArtwork(track);
        this.updateCurrentTrackInformation(track);
    }

    private updateCurrentTrackArtwork(track: LastFmTrack): void {
        this.artStack.artwork = track.albumArtExtraLarge;
    }

    private updateCurrentTrackInformation(track: LastFmTrack): void {
        if (this.showAlbum) {
            this.album = track.album;
        }

        if (this.showArtist) {
            this.artist = track.artist;
        }

        if (this.showTitle) {
            this.title = track.title;
        }
    }
}

let nowPlayingWidget: NowPlayingWidget;

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj['detail']['fieldData'];

    const lastFmApiKey: string = fieldData.lastFmApiKey as string;
    const lastFmUsername: string = fieldData.lastFmUsername as string;
    const apiPollFrequency: number = Time.toMilliseconds(
        fieldData.lastFmApiPollFrequency as number
    );

    const showAlbum = (fieldData.showAlbum as string) === 'true';
    const showArtist = (fieldData.showArtist as string) === 'true';
    const showTitle = (fieldData.showTitle as string) === 'true';

    const options: WidgetOptions = {
        apiPollFrequency,
        lastFmApiKey,
        lastFmUsername,
        showAlbum,
        showArtist,
        showTitle,
    };

    nowPlayingWidget = new NowPlayingWidget(options);
    nowPlayingWidget.start();
});
