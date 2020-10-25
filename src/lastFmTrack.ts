export class LastFmTrack {
    public album: string;

    public albumArtSmall: string;

    public albumArtMedium: string;

    public albumArtLarge: string;

    public albumArtExtraLarge: string;

    public artist: string;

    public nowPlaying: boolean;

    public title: string;

    constructor(json: unknown) {
        this.album = json?.['album']?.['#text'];
        this.artist = json?.['artist']?.['#text'];
        this.nowPlaying = json?.["@attr"]?.["nowplaying"] ? true : false
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
        
        return this.album === track.album &&
               this.artist === track.artist &&
               this.title === track.title;
    }
}