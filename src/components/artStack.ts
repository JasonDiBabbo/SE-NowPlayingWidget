export class ArtStack {
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

    constructor(private artStackElement: HTMLElement) {
        if (!this.artStackElement) {
            throw new Error(
                `ArtStack::Constructor - DOM element with class 'art-stack' could not be found.`
            );
        }
    }

    private appendImage(src: string): void {
        const nextImage: HTMLImageElement = document.createElement('img');
        nextImage.classList.add('art');
        nextImage.classList.add('transparent');
        nextImage.src = src;

        this.artStackElement.appendChild(nextImage);
        this.requestBrowserAnimation(nextImage);
    }

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

    private requestBrowserAnimation(element: HTMLElement): void {
        void element.offsetWidth;
    }
}
