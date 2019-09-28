import jsonLd from './json-ld';

const { requestIdleCallback } = self;

if (requestIdleCallback) {
    requestIdleCallback(() => jsonLd().catch(handleError));
} else {
    setTimeout(() => jsonLd().catch(handleError), 0);
}

function handleError(error: Error) {
    console.error(error);
}