import { ArtStack } from 'components';
import { LastFmTrack, WidgetOptions } from '@models';
import { LastFmService } from '@services';
import { Time } from '@utilities';

class NowPlayingWidget {
    private readonly apiPollFrequency: number;

    private readonly artStack: ArtStack;

    private readonly lastFmService: LastFmService;

    private readonly lastFmUsername: string;

    private readonly showArt: boolean;

    private readonly showArtist: boolean;

    private readonly showAlbum: boolean;

    private readonly showTitle: boolean;

    private currentTrack: LastFmTrack;

    private set album(value: string) {
        if (this.albumElement) {
            this.albumElement.innerText = value;
        }
    }

    private set artist(value: string) {
        if (this.artistElement) {
            this.artistElement.innerText = value;
        }
    }

    private set title(value: string) {
        if (this.titleElement) {
            this.titleElement.innerText = value;
        }
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

        this.lastFmUsername = options.lastFmUsername;
        this.apiPollFrequency = options.apiPollFrequency;
        this.showArt = options.showArt;
        this.showAlbum = options.showAlbum;
        this.showArtist = options.showArtist;
        this.showTitle = options.showTitle;
        this.lastFmService = new LastFmService(options.lastFmApiKey);

        this.albumElement = document.querySelector('.album');
        this.artistElement = document.querySelector('.artist');
        this.titleElement = document.querySelector('.title');

        if (this.showArt) {
            const artStackElement = document.querySelector('.art-stack') as HTMLElement;
            this.artStack = new ArtStack(artStackElement);
        }

        this.removeUnusedDomElements();
    }

    public checkNowPlaying(): void {
        this.lastFmService
            .getMostRecentTrack(this.lastFmUsername)
            .then((track) => {
                const isSameTrack = track.equals(this.currentTrack);

                if (track.nowPlaying && !isSameTrack) {
                    const isSameAlbum = this.currentTrack
                        ? track.album === this.currentTrack.album
                        : false;

                    this.currentTrack = track;
                    if (isSameAlbum) {
                        this.updateInformation(this.currentTrack);
                    } else {
                        this.update(this.currentTrack);
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
        if (!this.showArt) {
            document.querySelector('.art-stack').remove();
        }

        if (!this.showAlbum && this.albumElement) {
            this.albumElement.remove();
        }

        if (!this.showArtist && this.artistElement) {
            this.artistElement.remove();
        }

        if (!this.showTitle && this.titleElement) {
            this.titleElement.remove();
        }
    }

    private update(track: LastFmTrack): void {
        this.updateArt(track);
        this.updateInformation(track);
    }

    private updateArt(track: LastFmTrack): void {
        if (this.showArt) {
            this.artStack.artwork = track.albumArtExtraLarge;
        }
    }

    private updateInformation(track: LastFmTrack): void {
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
    const showArt = (fieldData.showArt as string) === 'true';
    const showArtist = (fieldData.showArtist as string) === 'true';
    const showTitle = (fieldData.showTitle as string) === 'true';

    const options: WidgetOptions = {
        apiPollFrequency,
        lastFmApiKey,
        lastFmUsername,
        showAlbum,
        showArt,
        showArtist,
        showTitle,
    };

    nowPlayingWidget = new NowPlayingWidget(options);
    nowPlayingWidget.start();
});
