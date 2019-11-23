import {
    CustomEventName,
    HandleJsonLdAction
} from 'vamtiger-browser-method/build/types';
import { key } from './types';
import getData from './get-data';

const eventName = 'vamtiger-browser-method' as CustomEventName.vamtigerBrowserMethod;
const action = 'vamtiger-browser-method-handle-json-ld-loaded' as HandleJsonLdAction.dequeue;
const eventParams = {
    bubbles: true
};

export default async function() {
    const data = await getData();
    const params = {
        key,
        ...data
    };
    const event = new CustomEvent(eventName, {
        ...eventParams,
        detail: {
            action,
            params
        }
    });

    dispatchEvent(event);
}