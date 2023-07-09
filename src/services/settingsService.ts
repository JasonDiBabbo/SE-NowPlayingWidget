import { ArtMode, FieldData } from '@models';
import { Guard, Time } from '@utilities';

/**
 * A service class for providing type-safe ways to access all widget settings.
 */
export class SettingsService {
    /**
     * The art mode of the widget.
     */
    public artMode: ArtMode;

    /**
     * The custom art source, if specified.
     */
    public customArtSource: string;

    /**
     * The widget font family.
     */
    public fontFamily: string;

    /**
     * Font weights of the specified font family.
     */
    public fontWeights: string[];

    /**
     * The Last.fm username.
     */
    public lastFmUsername: string;

    /**
     * The Last.fm API key.
     */
    public lastFmApiKey: string;

    /**
     * The polling interval in milliseconds for querying the Last.fm API.
     */
    public lastFmApiPollInterval: number;

    /**
     * The premade art selection, if any.
     */
    public premadeArtSelection: string;

    /**
     * Whether to show the track album name.
     */
    public showAlbum: boolean;

    /**
     * Whether to show the track artist.
     */
    public showArtist: boolean;

    /**
     * Whether to show the track title.
     */
    public showTitle: boolean;

    /**
     * Initializes a new instance of the SettingsService class.
     *
     * @param fieldData The field data provided by StreamElements.
     */
    constructor(fieldData: FieldData) {
        this.artMode = this.parseArtMode(fieldData.artMode as string);
        this.customArtSource = fieldData.artCustomSource as string;
        this.lastFmUsername = fieldData.lastFmUsername as string;
        this.lastFmApiKey = fieldData.lastFmApiKey as string;

        this.lastFmApiPollInterval = Time.toMilliseconds(
            fieldData.lastFmApiPollFrequency as number
        );

        this.premadeArtSelection = fieldData.artPremadeSelection as string;
        this.showAlbum = (fieldData.showAlbum as string) === 'true';
        this.showArtist = (fieldData.showArtist as string) === 'true';
        this.showTitle = (fieldData.showTitle as string) === 'true';

        this.fontFamily = fieldData.fontFamily as string;
        this.parseFontWeights(fieldData);
    }

    /**
     * Parses the string value of the art mode selected by the user.
     *
     * @param artMode The art mode string value.
     * @returns The art mode enum value.
     */
    private parseArtMode(artMode: string): ArtMode {
        switch (artMode) {
            case 'none':
                return ArtMode.None;
            case 'albumArt':
                return ArtMode.AlbumArt;
            case 'premade':
                return ArtMode.Premade;
            case 'custom':
                return ArtMode.Custom;
            default:
                throw new Error(
                    `SettingsService::parseArtMode - An unknown string '${artMode}' was provided for art mode.`
                );
        }
    }

    /**
     * Parses the font weights selected by the user.
     *
     * @param fieldData The field data provided by StreamElements.
     */
    private parseFontWeights(fieldData: FieldData): void {
        const albumFontWeight: string = fieldData.albumFontWeight as string;
        const artistFontWeight: string = fieldData.artistFontWeight as string;
        const titleFontWeight: string = fieldData.titleFontWeight as string;

        const fontWeightSet: Set<string> = new Set<string>([
            albumFontWeight,
            artistFontWeight,
            titleFontWeight,
        ]);

        this.fontWeights = [...fontWeightSet].sort((a, b) => {
            return parseInt(a) - parseInt(b);
        });
    }
}
