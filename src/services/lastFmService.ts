import { LastFmTrack } from '@models';
import { Guard } from '@utilities';

/**
 * A class containing functionality for querying the Last.fm API
 */
export class LastFmService {
    /**
     * Initializes a new instance of the LastFmService class.
     *
     * @param apiKey The Last.fm API key.
     */
    constructor(private apiKey: string) {
        Guard.mustNotBeNullOrUndefined(
            apiKey,
            `LastFmService::constructor - Parameter 'apiKey' is null or undefined.`
        );
    }

    /**
     * Gets the most recent track a user listened to.
     *
     * @param user The Last.fm username.
     * @returns The most recent track.
     */
    public async getMostRecentTrack(user: string): Promise<LastFmTrack> {
        Guard.mustNotBeNullOrUndefined(
            user,
            `LastFmService::getMostRecentTrack - Parameter 'user' is null or undefined.`
        );

        return this.getRecentTracks(user, 1).then((tracks) => {
            if (tracks && tracks.length > 0) {
                return tracks[0];
            } else {
                return null;
            }
        });
    }

    /**
     * Gets a number of recent tracks a user listened to.
     *
     * @param user The Last.fm username.
     * @param limit The number of tracks to request.
     * @returns The recently listened to tracks.
     */
    public async getRecentTracks(user: string, limit: number): Promise<LastFmTrack[]> {
        Guard.mustNotBeNullOrUndefined(
            user,
            `LastFmService::getRecentTracks - Parameter 'user' is null or undefined.`
        );

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
