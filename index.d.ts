
export interface RedditImageFetcherOptions {
    /**
     * How many images to get.
     * Default: 1.
     * Max: 50.
     */
    total?: int;

    /**
     * Add subreddits to subreddit library.
     * Default: [].
     */
    addSubReddit?: array;

    /**
     * Remove subreddits from subreddit library.
     * Default: [].
     */
    removeSubReddit?: array;

    /**
     * Remove all default subreddits from subreddit library.
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