// Type definitions for Reddit Image Fetcher
// Project https://github.com/arifszn/reddit-image-fetcher
// Author: Ariful Alam <swazan.arif@gmail.com>

export interface RedditImageFetcherOptions {
    /**
     * How many images to get.
     * 
     * Default: 1.
     * 
     * Max: 50.
     */
    total?: number;

    /**
     * Add subreddits to subreddit library.
     * 
     * Default: [].
     */
    addSubReddit?: Array<string>;

    /**
     * Remove subreddits from subreddit library.
     * 
     * Default: [].
     */
    removeSubReddit?: Array<string>;

    /**
     * Remove all default subreddits from subreddit library.
     * 
     * Default: false.
     */
    removeAllSubReddit?: boolean;

}

export interface RedditImageFetcher {
    /**
     * Returns array of memes.
     */
    getMemes<T = any, R = Array<T>>(options?: RedditImageFetcherOptions): Promise<R>;

    /**
     * Returns array of wallpapers.
     */
    getWallpapers<T = any, R = Array<T>>(options?: RedditImageFetcherOptions): Promise<R>;
}

declare const RedditImageFetcher: RedditImageFetcher;

export default RedditImageFetcher;