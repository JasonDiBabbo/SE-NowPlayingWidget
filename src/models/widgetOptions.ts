import { ArtMode } from '@models';

export interface WidgetOptions {
    artMode: ArtMode;
    apiPollFrequency: number;
    lastFmApiKey: string;
    lastFmUsername: string;
    showAlbum: boolean;
    showArtist: boolean;
    showTitle: boolean;
}
