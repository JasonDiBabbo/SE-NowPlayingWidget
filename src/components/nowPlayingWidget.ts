import { ArtContainer } from '@components';
import { ArtMode, LastFmTrack } from '@models';
import { LastFmService, SettingsService } from '@services';
import { Guard, Time } from '@utilities';

/**
 * The class definition of the widget.
 */
export class NowPlayingWidget {
    /**
     * The art container for displaying album art.
     */
    private readonly artContainer: ArtContainer;

    /**
     * The service for querying the Last.fm API.
     */
    private readonly lastFmService: LastFmService;

    /**
     * The current track being listened to.
     */
    private currentTrack: LastFmTrack;

    /**
     * Sets the album text.
     */
    private set album(value: string) {
        this.albumElement.innerText = value;
    }

    /**
     * Sets the artist name text.
     */
    private set artist(value: string) {
        this.artistElement.innerText = value;
    }

    /**
     * Sets the track title text.
     */
    private set title(value: string) {
        this.titleElement.innerText = value;
    }

    /**
     * The HTML element containing the album name.
     */
    private albumElement: HTMLElement;

    /**
     * The HTML element containing the art container.
     */
    private artContainerElement: HTMLElement;

    /**
     * The HTML element containing the artist name.
     */
    private artistElement: HTMLElement;

    /**
     * The HTML element containing all of the text elements.
     */
    private textAreaElement: HTMLElement;

    /**
     * The HTML element containing the track title.
     */
    private titleElement: HTMLElement;

    /**
     * Initializes a new instance of the NowPlayingWidget class.
     *
     * @param widgetElement The HTML element containing the widget.
     * @param settingsService The settings service.
     */
    constructor(widgetElement: HTMLElement, private settingsService: SettingsService) {
        Guard.mustNotBeNullOrUndefined(
            widgetElement,
            `NowPlayingWidget::constructor - Parameter 'widgetElement' is null or undefined.`
        );

        Guard.mustNotBeNullOrUndefined(
            this.settingsService,
            `NowPlayingWidget::constructor - Parameter 'settingsService' is null or undefined.`
        );

        Guard.mustNotBeNullOrUndefined(
            settingsService.lastFmUsername,
            `NowPlayingWidget::constructor - Last.fm username is null or undefined.`
        );

        Guard.mustBeGreaterThanOrEqualTo(
            settingsService.lastFmApiPollInterval,
            Time.toMilliseconds(2),
            'NowPlayingWidget::constructor - Last.fm API poll interval cannot be under 2 seconds.'
        );

        this.lastFmService = new LastFmService(settingsService.lastFmApiKey);
        this.albumElement = document.querySelector('.album');
        this.artistElement = document.querySelector('.artist');
        this.titleElement = document.querySelector('.title');

        if (
            this.settingsService.artMode === ArtMode.AlbumArt ||
            this.settingsService.artMode === ArtMode.Custom ||
            this.settingsService.artMode == ArtMode.Premade
        ) {
            this.createArtContainerElement();
            widgetElement.appendChild(this.artContainerElement);

            this.artContainer = new ArtContainer(this.artContainerElement, settingsService);
        }

        this.createTextAreaElement();
        widgetElement.appendChild(this.textAreaElement);
    }

    /**
     * Creates the art container HTML element.
     */
    public createArtContainerElement(): void {
        const artContainerElement: HTMLElement = document.createElement('div');
        artContainerElement.classList.add('art-container');

        this.artContainerElement = artContainerElement;
    }

    /**
     * Creates the HTML element containing the text labels.
     */
    public createTextAreaElement(): void {
        const textAreaElement = document.createElement('div');
        textAreaElement.classList.add('info');
        this.textAreaElement = textAreaElement;

        const childElements: HTMLElement[] = [];

        if (this.settingsService.showTitle) {
            const titleElement: HTMLElement = document.createElement('div');
            titleElement.classList.add('title');
            this.titleElement = titleElement;
            childElements.push(titleElement);
        }

        if (this.settingsService.showArtist) {
            const artistElement: HTMLElement = document.createElement('div');
            artistElement.classList.add('artist');
            this.artistElement = artistElement;
            childElements.push(artistElement);
        }

        if (this.settingsService.showAlbum) {
            const albumElement: HTMLElement = document.createElement('div');
            albumElement.classList.add('album');
            this.albumElement = albumElement;
            childElements.push(albumElement);
        }

        childElements.forEach((x) => this.textAreaElement.appendChild(x));
    }

    /**
     * Starts the widget's execution.
     */
    public start(): void {
        this.checkNowPlaying();
    }

    /**
     * Gets the most recent track from the Last.fm API and updates the widget if the track is currently being listened to.
     */
    private checkNowPlaying(): void {
        this.lastFmService
            .getMostRecentTrack(this.settingsService.lastFmUsername)
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
                setTimeout(
                    () => this.checkNowPlaying(),
                    this.settingsService.lastFmApiPollInterval
                );
            });
    }

    /**
     * Updates the current track information and art on the widget.
     *
     * @param track The current track being listened to.
     */
    private updateCurrentTrack(track: LastFmTrack): void {
        if (this.settingsService.artMode == ArtMode.AlbumArt) {
            this.artContainer.showAlbumArtwork(track.albumArtLarge);
        }

        this.updateCurrentTrackInformation(track);
    }

    /**
     * Updates the current track information on the widget.
     *
     * @param track  The current track being listened to.
     */
    private updateCurrentTrackInformation(track: LastFmTrack): void {
        if (this.settingsService.showAlbum) {
            this.album = track.album;
        }

        if (this.settingsService.showArtist) {
            this.artist = track.artist;
        }

        if (this.settingsService.showTitle) {
            this.title = track.title;
        }
    }
}
