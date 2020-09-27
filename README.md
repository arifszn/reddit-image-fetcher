# Reddit Image Fetcher

A javascript package for fetching bulk reddit memes, wallpapers and more.

Features:

- Bulk memes
- Bulk wallpapers
- Customizable
- Lightweight

PHP package is available at <a href="https://packagist.org/packages/arifszn/random-image-php">Packagist</a>.

> <p><strong><a href="https://memewall.netlify.app">Homepage</a></strong></p>

# Installation

Install via <a href="https://www.npmjs.com/package/reddit-image-fetcher">NPM</a>
```
npm install --save reddit-image-fetcher
```

## Usage

Available functions:
- getMemes()
- getWallpapers()

```js
import redditImageFetcher from 'reddit-image-fetcher';
#or
var redditImageFetcher = require('reddit-image-fetcher');

-------------------
-------------------


//use with await
await redditImageFetcher.getMemes(); //returns 1 meme 
await redditImageFetcher.getWallpapers(); //returns 1 wallpaper


//use with callback
redditImageFetcher.getMemes().then(response => {}); //returns 1 meme
redditImageFetcher.getWallpapers().then(response => {});//returns 1 wallpaper


//options
await redditImageFetcher.getWallpapers({ total: 50 }); //returns 50 wallpapers 
 
await redditImageFetcher.getMemes({ 
    total: 50, 
    addSubReddit: ['memes', 'funny'], 
    removeSubReddit: ['dankmemes'] 
}); //returns 50 memes by filtering


//can be use other than fetching memes and wallpapers
//use as cat image fetcher
await redditImageFetcher.getMemes({ 
    total: 50, 
    removeAllSubReddit: true, 
    addSubReddit: ['cats', 'Catswhoyell', 'sleepingcats'] 
}); //returns 50 cat images
```
## Result

The functions are asynchronous functions and return array.
```
[
  {
    id: "hfh51v",
    title: "Illuminated City at Night [1920 x 1200]",
    postLink: "https://redd.it/hfh51v",
    image: "https://i.redd.it/b6x9i2n830751.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/mLCk8Bh0N4M8hZafHsbAmw8rM7JEEznsT2nRZSo3GsU.jpg",
    subreddit: "wallpaper",
    NSFW: false,
    spoiler: false,
    createdUtc: 1593066557,
    
  },
  {
    id: "h9glhi",
    title: "Missing Home by Just Jaker",
    postLink: "https://redd.it/h9glhi",
    image: "https://cdnb.artstation.com/p/assets/images/images/027/020/665/large/just-jaker-galax-noise.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/4utBLNbsIDDLl46z494PCRkDhmAnapQq9FL7l-07aJo.jpg",
    subreddit: "ImaginaryFuturism",
    NSFW: false,
    spoiler: false,
    createdUtc: 1592228591
  }
]
```

## Options

| Property            |  Type   | Description                                     | Default |
| :-----------        | :---:   | :-------------------------------------          | :----:  |
| total                 | int     | How many images to get. Max is 50.    | 1       |
| addSubReddit        | array   | Add subreddits to subreddit library.            | [ ]     |
| removeSubReddit     | array   | Remove subreddits from subreddit library.       | [ ]     |
| removeAllSubReddit  | boolean | Remove all subreddits from subreddit library.   | false   |
| searchLimit         | int     | Max reddit posts to search. Max is 100.         | 100     |


## Browser Compatibility

| Browser | Works? |
| :------ | :----: |
| Chrome  |   ✔   |
| Firefox |   ✔   |
| Safari  |   ✔   |
| IE 11   |   ✔   |

## Demo

<p>See the package in action <a href="https://memewall.netlify.app">Here</a>.</p>
<p>Try it on <a href="https://npm.runkit.com/reddit-image-fetcher">RunKit</a></p>

## Support

Support us by :star: on <a href="https://github.com/arifszn/reddit-image-fetcher">Github</a>

## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2020.</p>
