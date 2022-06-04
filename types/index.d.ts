export {};

declare global {
    interface Window {
        dataLayer: [string, any];
    }
}