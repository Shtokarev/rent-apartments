interface ElementRect {
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly width: number;
}

export enum OrientationTypes {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

export const getElementRect = (element: HTMLElement): ElementRect | DOMRect => {
  if (!element) {
    return {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    };
  }

  return element.getBoundingClientRect();
};

export const isBrowser = typeof window !== 'undefined';
export const localStorage = isBrowser ? window.localStorage : null;

export const checkDeviceScreenOrientation = (orientation: OrientationTypes): boolean =>
  window?.matchMedia(`(orientation: ${orientation})`).matches;

export const safeWindowOpen = (url: string): void => {
  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = url;
};

export const isImageLoaded = (img: HTMLImageElement): boolean =>
  img.complete || img.width + img.height > 0;
