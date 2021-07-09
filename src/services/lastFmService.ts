import { LastFmTrack } from '@models';

export class LastFmService {
    constructor(private apiKey: string) {
        if (!this.apiKey) {
            throw new Error(
                `LastFmService::Constructor - Parameter 'apiKey' was not provided. An API key must be provided.`
            );
        }
    }

    public async getMostRecentTrack(user: string): Promise<LastFmTrack> {
        return this.getRecentTracks(user, 1).then((tracks) => {
            if (tracks && tracks.length > 0) {
                return tracks[0];
            } else {
                return null;
            }
        });
    }

    public async getRecentTracks(user: string, limit: number): Promise<LastFmTrack[]> {
        if (!user) {
            throw new Error(
                `LastFmService::getRecentTracks - Parameter 'user' cannot be null or undefined.`
            );
        }

        if (limit < 1 || limit > 200) {
            throw new Error(
                `LastFmService::getRecentTracks - Parameter 'limit' must be a positive integer with a maximum value of 200.`
            );
        }

        const apiMethod = 'user.getrecenttracks';
        const format = 'json';
        const url = `https://ws.audioscrobbler.com/2.0/?method=${apiMethod}&user=${user}&limit=${limit}&api_key=${this.apiKey}&format=${format}`;

        return fetch(url, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'SameSite': 'Strict',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                const trackJsonArray: unknown[] = json?.['recenttracks']?.['track'];
                const tracks: LastFmTrack[] = [];

                trackJsonArray.forEach((trackJson) => tracks.push(new LastFmTrack(trackJson)));
                return tracks;
            });
    }
}
