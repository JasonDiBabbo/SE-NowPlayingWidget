import { NowPlayingWidget } from '@components';
import { FieldData } from '@models';
import { GoogleFonts } from '@utilities';
import { SettingsService } from '@services';

let nowPlayingWidget: NowPlayingWidget;

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData: FieldData = obj['detail']['fieldData'];
    const settingsService: SettingsService = new SettingsService(fieldData);

    GoogleFonts.PrepareGoogleFontImports(settingsService);

    const widgetElement: HTMLElement = document.querySelector('.widget');

    nowPlayingWidget = new NowPlayingWidget(widgetElement, settingsService);
    nowPlayingWidget.start();
});
