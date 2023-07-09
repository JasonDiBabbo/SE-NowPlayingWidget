import { FieldData, GoogleFontSettings } from '@models';

/**
 * A helper class for configuring Google fonts in the widget.
 */
export class GoogleFonts {
    /**
     * Gets the Google Font settings specified in field data.
     *
     * @param fieldData
     * @returns The Google Font settings
     */
    public static GetGoogleFontSettings(fieldData: FieldData): GoogleFontSettings {
        if (!fieldData) {
            throw new Error(`Parameter 'fieldData' is null or undefined.`);
        }

        if (!fieldData.fontFamily) {
            throw new Error(`Field data entry for 'fontFamily' is missing.`);
        }

        if (!fieldData.albumFontWeight) {
            throw new Error(`Field data entry for 'albumFontWeight' is missing.`);
        }

        if (!fieldData.artistFontWeight) {
            throw new Error(`Field data entry for 'artistFontWeight' is missing.`);
        }

        if (!fieldData.titleFontWeight) {
            throw new Error(`Field data entry for 'titleFontWeight' is missing.`);
        }

        const fontFamily: string = fieldData.fontFamily as string;
        const albumFontWeight: string = fieldData.albumFontWeight as string;
        const artistFontWeight: string = fieldData.artistFontWeight as string;
        const titleFontWeight: string = fieldData.titleFontWeight as string;

        const fontWeightSet: Set<string> = new Set<string>([
            albumFontWeight,
            artistFontWeight,
            titleFontWeight,
        ]);

        return {
            fontFamily,
            fontWeights: [...fontWeightSet].sort((a, b) => {
                return parseInt(a) - parseInt(b);
            }),
        };
    }

    /**
     * Prepares the DOM for importing Google fonts.
     */
    public static PrepareGoogleFontImports(googleFontSettings: GoogleFontSettings): void {
        if (!googleFontSettings) {
            throw new Error(`Parameter 'googleFontSettings' is null or undefined.`);
        }

        if (!googleFontSettings.fontFamily) {
            throw new Error(`A font family must be provided.`);
        }

        if (!googleFontSettings.fontWeights) {
            throw new Error(`A font weights array must be provided.`);
        }

        if (googleFontSettings.fontWeights.length < 1) {
            throw new Error(`At least one font weight must be specified.`);
        }

        if (this.GoogleFontsIsPrepared()) {
            return;
        }

        const preconnectLink = document.createElement('link');
        preconnectLink.id = 'googleFontsPreconnect1';
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = 'https://fonts.googleapis.com';

        const crossOriginPreconnectLink = document.createElement('link');
        crossOriginPreconnectLink.id = 'googleFontsPreconnect2';
        crossOriginPreconnectLink.rel = 'preconnect';
        crossOriginPreconnectLink.href = 'https://fonts.gstatic.com';
        crossOriginPreconnectLink.crossOrigin = 'anonymous';

        document.head.appendChild(preconnectLink);
        document.head.appendChild(crossOriginPreconnectLink);

        GoogleFonts.ImportGoogleFont(googleFontSettings);
    }

    /**
     * Determines if the necessary Google Font preconnect links are present in the head element.
     *
     * @returns True if the necessary preconnect links are present and false otherwise.
     */
    private static GoogleFontsIsPrepared(): boolean {
        return (
            document.getElementById('googleFontsPreconnect1') != null &&
            document.getElementById('googleFontsPreconnect2') != null
        );
    }

    /**
     * Imports a Google font into the DOM.
     *
     * @param googleFontSettings
     */
    private static ImportGoogleFont(googleFontSettings: GoogleFontSettings): void {
        const uri =
            'https://fonts.googleapis.com/css2?family=' +
            googleFontSettings.fontFamily.replace(' ', '+') +
            ':wght@' +
            googleFontSettings.fontWeights.join(';');

        const googleFontElement: HTMLLinkElement = document.createElement('link');
        googleFontElement.rel = 'stylesheet';
        googleFontElement.href = uri;

        document.head.appendChild(googleFontElement);
    }
}
