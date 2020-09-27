const shuffle   = require('shuffle-array');
const utils     = require('./utils');
var config  = require('./../config/index');

const maxRetryLimit = 50;

/**
 * Get memes
 * 
 * @param {Object} options | optional. 
 * @return {Array} array of memes
 */
const getMemes = async (options = {}) => {
    try {
        let   total         = 1;
        let   searchLimit   = 100;
        let   memeSubReddit  = config.memeSubreddit;
        
        if (typeof options === "object") {
            if (typeof options.total === "number" && options.total <= 50 && options.total > 0)
                total = options.total;
            if (typeof options.removeAllSubReddit === "boolean" && options.removeAllSubReddit === true)
                memeSubReddit = [];
            if (typeof options.addSubReddit !== 'undefined' && Array.isArray(options.addSubReddit))
                memeSubReddit = memeSubReddit.concat(options.addSubReddit);
            if (typeof options.removeSubReddit !== 'undefined' && Array.isArray(options.removeSubReddit)) {
                options.removeSubReddit.forEach(element => {
                    let index = memeSubReddit.indexOf(element);
                    if (index !== -1) memeSubReddit.splice(index, 1);
                });
            }
        }
        
        if (!memeSubReddit.length) {
            memeSubReddit = config.memeSubreddit;
        }
        return await getRandomPosts(parseInt(total), 'meme', memeSubReddit, searchLimit);
    } catch (error) {
        throw Error(error);
    }
}

/**
 * Get wallpapers
 * 
 * @param {Object} options | optional. 
 * @return {Array} array of wallpapers
 */
const getWallpapers = async (options = {}) => {
    try {
        let total              = 1;
        let searchLimit        = 100;
        let wallpaperSubReddit = config.wallpaperSubreddit;

        if (typeof options === "object") {
            if (typeof options.total === "number" && options.total <= 50 && options.total > 0)
                total = options.total;
            if (typeof options.removeAllSubReddit === "boolean" && options.removeAllSubReddit === true)
                wallpaperSubReddit = [];
            if (typeof options.addSubReddit !== 'undefined' && Array.isArray(options.addSubReddit))
                wallpaperSubReddit = wallpaperSubReddit.concat(options.addSubReddit);
            if (typeof options.removeSubReddit !== 'undefined' && Array.isArray(options.removeSubReddit)) {
                options.removeSubReddit.forEach(element => {
                    let index = wallpaperSubReddit.indexOf(element);
                    if (index !== -1) wallpaperSubReddit.splice(index, 1);
                });
            }
        }
        
        if (!wallpaperSubReddit.length) {
            wallpaperSubReddit = config.wallpaperSubreddit;
        }
        return await getRandomPosts(parseInt(total), 'wallpaper', wallpaperSubReddit, searchLimit);
    } catch (error) {
        throw Error(error);
    }
}

/**
 * Get n random posts where n = total
 * 
 * @param {number} total 
 * @param {String} type
 * @param {Array} subReddit 
 * @param {number} searchLimit 
 * @param {number} counter 
 * @param {Array} fetchedPost
 */
const getRandomPosts = async (total, type, subReddit, searchLimit, counter = 0, fetchedPost = []) => {
    //retry limit check
    counter++;
    if (counter == maxRetryLimit)
        throw Error('Maximum retry limit exceeded');
    try {
        //get request
        let rand     = utils.randomNumber(0, subReddit.length);
        var response = await utils.getRequest('https://api.reddit.com/r/' + subReddit[rand] + '/' + shuffle.pick(config.searchType, { 'picks': 1 }) + '?limit=' + searchLimit);
    } catch (error) {
        //retry if error occurs
        return await getRandomPosts(total, type, subReddit, searchLimit, counter);
    }

    //push image only post to post array
    let postArray = response.data.data.children;
    postArray.forEach(post => {
        let includeGif = true;
        if (type === 'wallpaper')
            includeGif = false;
        if (typeof post.data !== "undefined" && typeof post.data.url !== "undefined" && utils.isImageUrl(post.data.url, includeGif))
            fetchedPost.push(utils.formatPost(post.data));
    });

    //if total is not reached, retry with already fetched data 
    if (fetchedPost.length < total)
        fetchedPost = await getRandomPosts(total, type, subReddit, searchLimit, counter, fetchedPost);

    //return result as array
    if (total === 1)
        return [shuffle.pick(fetchedPost, { 'picks': total })];

    return shuffle.pick(fetchedPost, { 'picks': total });
}

module.exports.getMemes = getMemes;
module.exports.getWallpapers = getWallpapers;