import {
    CustomEventName,
    HandleJsonLdAction
} from 'vamtiger-browser-method/build/types';
import { key } from './types';
import { image } from './config.js';
import imageSize from './image-size';
import json from './json';
import text from './text';

const eventName = 'vamtiger-browser-method-dequeue' as CustomEventName.vamtigerBrowserMethod;
const action = 'vamtiger-browser-method-dequeue' as HandleJsonLdAction.dequeue;
const params = {
    key
};
const jsonLdBase = {
    '@context': 'http://schema.org/',
    '@type': 'ImageObject'
};

export default async function() {
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
    const event = new CustomEvent(eventName, {
        detail: {
            action,
            params: {
                ...params,
                match: true,
                data
            }
        }
    });

    dispatchEvent(event);
}