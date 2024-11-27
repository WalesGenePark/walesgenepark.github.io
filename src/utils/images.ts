import type { ImageMetadata } from 'astro';
import type { OpenGraph, OpenGraphMedia } from '@astrolib/seo';

const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // continue regardless of error
  }
  return images;
};

let _images: Record<string, () => Promise<unknown>> | undefined = undefined;

/** */
export const fetchLocalImages = async () => {
  _images = _images || (await load());
  return _images;
};

/** */
export async function findImage(imageRoute: string): Promise<string | ImageMetadata | undefined> {
  try {
    if (typeof imageRoute !== 'string') {
      return undefined;
    }

    const cleanRoute = imageRoute.replace(/[?#].*$/, '');

    if (!cleanRoute) {
      return undefined;
    }

    if (/^https?:/i.test(cleanRoute)) {
      return cleanRoute;
    }

    const resolvedRoute = cleanRoute.charAt(0) === '/' ? cleanRoute.substring(1) : cleanRoute;

    if (!resolvedRoute) {
      return undefined;
    }

    let imageMetadata: ImageMetadata | undefined;

    for (const [path, image] of Object.entries(import.meta.glob('/src/assets/**/*'))) {
      if (typeof image !== 'function') continue;

      const normalizedPath = path.replace(/^\/src\/assets\//, '');
      if (normalizedPath === resolvedRoute) {
        imageMetadata = (await image()) as unknown as ImageMetadata;
        break;
      }
    }

    return imageMetadata;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

/** */
export const adaptOpenGraphImages = async (
  openGraph: OpenGraph = {},
  astroSite: URL | undefined = new URL('')
): Promise<OpenGraph> => {
  try {
    const images = openGraph.images || [];
    const adaptedImages = await Promise.all(
      images.map(async (image: OpenGraphMedia) => {
        if (image.url) {
          const imageUrl = new URL(image.url, astroSite);
          const foundImage = await findImage(imageUrl.pathname);
          if (foundImage && typeof foundImage !== 'string') {
            return {
              ...image,
              url: foundImage.src,
              width: foundImage.width,
              height: foundImage.height,
            } as OpenGraphMedia;
          }
          return image;
        }
        return image;
      })
    );

    return { ...openGraph, images: adaptedImages };
  } catch (e) {
    console.error(e);
    return openGraph;
  }
};
