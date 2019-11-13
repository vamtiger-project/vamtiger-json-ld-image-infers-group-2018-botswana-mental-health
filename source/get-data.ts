import { image } from './config.js';
import text from './text';
import imageSize from './image-size';
import json from './json';

const jsonLdBase = {
    '@context': 'http://schema.org/',
    '@type': 'ImageObject'
};

export default function () {
    const jsonLd = {
        ...jsonLdBase,
        name: text['name.txt'],
        description: text['description.txt'],
        image: image.map((contentUrl, index) => ({
            type: jsonLdBase['@type'],
            contentUrl,
            width: imageSize[index].width,
            height: imageSize[index].height
        }))
    };
    const data = {
        jsonLd,
        json
    };

    return data;
}