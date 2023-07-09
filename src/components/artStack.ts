import { Guard } from '@utilities';

/**
 * The class definition of the art stack component for showing album art and displaying transitions between new and old artworks.
 */
export class ArtStack {
    /**
     * Sets the artwork shown by the art stack.
     */
    public set artwork(value: string) {
        this.appendImage(value);

        if (this.artStackElement.children.length === 1) {
            this.fadeInImage(0);
        } else {
            Promise.all([this.fadeOutImage(0), this.fadeInImage(1)]).then(() => {
                const topImageElement = this.artStackElement.children[0];
                this.artStackElement.removeChild(topImageElement);
            });
        }
    }

    /**
     * Initializes a new instance of the ArtStack class.
     *
     * @param artStackElement The HTML element of the art stack.
     */
    constructor(private artStackElement: HTMLElement) {
        Guard.mustNotBeNullOrUndefined(
            this.artStackElement,
            `ArtStack::constructor - Parameter 'artStackElement' is null or undefined.`
        );
    }

    /**
     * Appends an image to the art stack.
     *
     * @param source The new image source.
     */
    private appendImage(source: string): void {
        const nextImage: HTMLImageElement = document.createElement('img');
        nextImage.classList.add('art');
        nextImage.classList.add('transparent');
        nextImage.src = source;

        this.artStackElement.appendChild(nextImage);
        this.requestBrowserAnimation(nextImage);
    }

    /**
     * Fades in a new image.
     *
     * @param index The art stack entry index.
     * @returns A promise fulfilled when the transition finishes.
     */
    private fadeInImage(index: number): Promise<void> {
        if (this.artStackElement.children.length <= index) {
            throw new Error(
                `ArtStack::fadeInImage - Parameter 'index' with value '${index}' is out of bounds.`
            );
        }

        const image: HTMLImageElement = this.artStackElement.children[index] as HTMLImageElement;
        return new Promise<void>((resolve) => {
            const handler = (event: TransitionEvent) => {
                if (event.propertyName === 'opacity') {
                    image.removeEventListener('transitionend', handler);
                    resolve();
                }
            };

            image.addEventListener('transitionend', handler);
            image.classList.remove('transparent');
        });
    }

    /**
     * Fades out an old image.
     *
     * @param index The art stack entry index.
     * @returns A promise fulfilled when the transition finishes.
     */
    private fadeOutImage(index: number): Promise<void> {
        if (this.artStackElement.children.length <= index) {
            throw new Error(
                `ArtStack::fadeOutImage - Parameter 'index' with value '${index}' is out of bounds.`
            );
        }

        const image: HTMLImageElement = this.artStackElement.children[index] as HTMLImageElement;

        return new Promise<void>((resolve) => {
            const handler = (event: TransitionEvent) => {
                if (event.propertyName === 'opacity') {
                    image.removeEventListener('transitionend', handler);
                    resolve();
                }
            };

            image.addEventListener('transitionend', handler);
            image.classList.add('transparent');
        });
    }

    /**
     * Requests an animation refresh from the browser.
     *
     * @param element The element animating.
     */
    private requestBrowserAnimation(element: HTMLElement): void {
        void element.offsetWidth;
    }
}
