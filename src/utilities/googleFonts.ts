import { SettingsService } from '@services';
import { Guard } from '@utilities';

/**
 * A helper class for configuring Google fonts in the widget.
 */
export class GoogleFonts {
    /**
     * Prepares the DOM for importing Google fonts.
     *
     * @param settingsService The settings service.
     */
    public static PrepareGoogleFontImports(settingsService: SettingsService): void {
        Guard.mustNotBeNullOrUndefined(
            settingsService,
            'Settings service dependency must be provided.'
        );

        Guard.mustNotBeNullOrUndefined(
            settingsService.fontFamily,
            'A font family must be specified.'
        );

        Guard.mustNotBeNullOrUndefined(
            settingsService.fontWeights,
            'Font weights must be specified.'
        );

        Guard.mustContainAtLeast(
            settingsService.fontWeights,
            1,
            'At least one font weight must be specified.'
        );

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

        GoogleFonts.ImportGoogleFont(settingsService.fontFamily, settingsService.fontWeights);
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
    private static ImportGoogleFont(fontFamily: string, fontWeights: string[]): void {
        const uri =
            'https://fonts.googleapis.com/css2?family=' +
            fontFamily.replace(' ', '+') +
            ':wght@' +
            fontWeights.join(';');

        const googleFontElement: HTMLLinkElement = document.createElement('link');
        googleFontElement.rel = 'stylesheet';
        googleFontElement.href = uri;

        document.head.appendChild(googleFontElement);
    }
}
