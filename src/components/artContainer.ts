import { ArtStack } from '@components';
import { ArtMode } from '@models';
import { SettingsService } from '@services';
import { Guard, SVG } from '@utilities';

/**
 * The class definition of the art container, responsible for displaying album art of custom art.
 */
export class ArtContainer {
    /**
     * The art stack for showing album art.
     */
    private artStack: ArtStack;

    /**
     * Initializes a new instance of the ImageContainer class.
     *
     * @param artContainerElement
     */
    constructor(
        private artContainerElement: HTMLElement,
        private settingsService: SettingsService
    ) {
        Guard.mustNotBeNullOrUndefined(
            this.artContainerElement,
            `ArtContainer::constructor - Parameter 'artContainerElement' is null or undefined.`
        );

        Guard.mustNotBeNullOrUndefined(
            this.settingsService,
            `ArtContainer::constructor - Parameter 'settingsService' is null or undefined.`
        );

        if (this.settingsService.artMode === ArtMode.Custom) {
            this.configureCustomArt();
        } else if (this.settingsService.artMode === ArtMode.Premade) {
            this.configurePremadeArt();
        } else {
            this.configureAlbumArt();
        }
    }

    /**
     * Shows album artwork in the art container.
     *
     * @param source The album artwork source.
     */
    public showAlbumArtwork(source: string): void {
        if (this.settingsService.artMode == ArtMode.AlbumArt) {
            this.artStack.artwork = source;
        } else {
            throw new Error(
                `ArtContainer::showAlbumArtwork - This method should only be when art mode is set to 'AlbumArt'.`
            );
        }
    }

    /**
     * Configures the art container for showing album art.
     */
    private configureAlbumArt(): void {
        const artStackElement: HTMLElement = document.createElement('div');
        artStackElement.classList.add('art-stack');

        this.artContainerElement.appendChild(artStackElement);
        this.artStack = new ArtStack(artStackElement);
    }

    /**
     * Configures the art container for showing custom art.
     */
    private configureCustomArt(): void {
        const imageElement: HTMLImageElement = document.createElement('img');
        imageElement.src = this.settingsService.customArtSource;
        imageElement.classList.add('custom-art');
        imageElement.style.height = '100%';
        imageElement.style.width = '100%';

        this.artContainerElement.appendChild(imageElement);
    }

    /**
     * Configures the art container for showing premade art.
     */
    private configurePremadeArt(): void {
        if (!this.settingsService.premadeArtSelection) {
            throw new Error(
                'ArtContainer::configurePremadeArt - A premade art selection was not specified.'
            );
        }

        if (this.settingsService.premadeArtSelection === 'none') {
            throw new Error(
                'ArtContainer::configurePremadeArt - Please select a valid premade art selection.'
            );
        }

        const svgMarkup = SVG.getPremadeArtSVG(this.settingsService.premadeArtSelection);
        this.artContainerElement.innerHTML = svgMarkup;
    }
}
