import {
    CustomEventName,
    HandleJsonLdAction
} from 'vamtiger-browser-method/build/types';
import { key } from './types';
import getData from './get-data';

const eventName = 'vamtiger-browser-method' as CustomEventName.vamtigerBrowserMethod;
const action = 'vamtiger-browser-method-dequeue' as HandleJsonLdAction.dequeue;
const params = {
    key
};
const eventParams = {
    bubbles: true
};
const data = getData();

export default async function() {
    const event = new CustomEvent(eventName, {
        ...eventParams,
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