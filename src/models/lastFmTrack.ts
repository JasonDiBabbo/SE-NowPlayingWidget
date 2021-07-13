export class LastFmTrack {
    /**
     * The name of the album.
     */
    public album: string;

    /**
     * The URI of the small (34x34) image.
     */
    public albumArtSmall: string;

    /**
     * The URI of the medium (64x64) image.
     */
    public albumArtMedium: string;

    /**
     * The URI of the large (100x100) image.
     */
    public albumArtLarge: string;

    /**
     * The URI of the extra large (300x300) image.
     */
    public albumArtExtraLarge: string;

    /**
     * The name of the artist.
     */
    public artist: string;

    /**
     * Whether the track is now playing.
     */
    public nowPlaying: boolean;

    /**
     * The title of the track.
     */
    public title: string;

    constructor(json: unknown) {
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

    public equals(track: LastFmTrack): boolean {
        if (!track) {
            return false;
        }

        return (
            this.album === track.album && this.artist === track.artist && this.title === track.title
        );
    }
}
