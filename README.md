<p align="center">
  <a href="https://arifszn.github.io/reddit-image-fetcher" target="_blank"><img src="https://arifszn.github.io/reddit-image-fetcher/img/logo/logo.png" alt="Reddit Image Fetcher" title="Reddit Image Fetcher" width="80"></a>
</p>
<h1 align="center">Reddit Image Fetcher</h1>
<p align="center">A JavaScript package for fetching reddit images, memes, wallpapers and more.</p>
<p align="center"><a href="https://arifszn.github.io/reddit-image-fetcher">https://arifszn.github.io/reddit-image-fetcher</a></p>

<p align="center">
    <a href="https://www.npmjs.com/package/reddit-image-fetcher"><img src="https://img.shields.io/npm/v/reddit-image-fetcher"/></a>
    <img src="https://img.shields.io/bundlephobia/min/reddit-image-fetcher"/>
    <a href="https://github.com/arifszn/reddit-image-fetcher/blob/master/LICENSE"><img src="https://img.shields.io/github/license/arifszn/reddit-image-fetcher"/></a>
    <a href="https://arifszn.github.io/"><img src="https://img.shields.io/badge/maintainer-arifszn-informational" alt="Maintainer arifszn"/></a>
</p>

<p align="center">
  <a href="https://arifszn.github.io/reddit-image-fetcher">
    <img src="https://arifszn.github.io/reddit-image-fetcher/img/preview.gif" width="60%"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="60%"/></a>
</p>

- Bulk images
- Bulk memes
- Bulk wallpapers
- Customizable
- Lightweight <small><code><20KB</code></small>

PHP version: <a href="https://github.com/arifszn/reddit-image-fetcher-php">Reddit Image Fetcher</a>


## Table of Contents

* [Resources](#resources)
* [Installation](#installation)
* [Usage](#usage)
* [Result](#result)
* [Options](#options)
* [Contribute](#contribute)
* [Supporters](#supporters)
* [Support](#support)
* [License](#license)


## Resources

- [Demo](https://memedb.netlify.app)
- [Documentation](https://arifszn.github.io/reddit-image-fetcher)


# Installation

Install via <a href="https://www.npmjs.com/package/reddit-image-fetcher">NPM</a>
```
npm install --save reddit-image-fetcher
```

Install via <a href="https://yarnpkg.com/package/reddit-image-fetcher">Yarn</a>
```
yarn add reddit-image-fetcher
```


## Usage

Available function:
- fetch()

```js

//use with await
await redditImageFetcher.fetch({type: 'meme'}); //returns 1 meme 
await redditImageFetcher.fetch({type: 'wallpaper'}); //returns 1 wallpaper


//use with callback
redditImageFetcher.fetch({type: 'meme'})
.then(result => { }); //returns 1 meme


//options
await redditImageFetcher.fetch({ type: 'wallpaper', total: 50 }); //returns 50 wallpapers 
 
await redditImageFetcher.fetch({
    type: 'meme',
    total: 50, 
    addSubreddit: ['memes', 'funny'], 
    removeSubreddit: ['dankmemes']
}); //returns 50 memes by filtering


//custom image fetch from given subreddits
await redditImageFetcher.fetch({
    type: 'custom',
    total: 50, 
    subreddit: ['cats', 'Catswhoyell', 'sleepingcats'] 
}); //returns 50 cat images
```


## Result

The functions are asynchronous and return array.
```
[
  {
    id: "hfh51v",
    type: "wallpaper",
    title: "Illuminated City at Night [1920 x 1200]",
    postLink: "https://redd.it/hfh51v",
    image: "https://i.redd.it/b6x9i2n830751.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/mLCk8Bh0N4M8hZafHsbAmw8rM7JEEznsT2nRZSo3GsU.jpg",
    subreddit: "wallpaper",
    NSFW: false,
    spoiler: false,
    createdUtc: 1593066557,
    upvotes: 1899,
    upvoteRatio: 1.0
  },
  {
    id: "h9glhi",
    type: "wallpaper",
    title: "Missing Home by Just Jaker",
    postLink: "https://redd.it/h9glhi",
    image: "https://cdnb.artstation.com/p/assets/images/images/027/020/665/large/just-jaker-galax-noise.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/4utBLNbsIDDLl46z494PCRkDhmAnapQq9FL7l-07aJo.jpg",
    subreddit: "ImaginaryFuturism",
    NSFW: false,
    spoiler: false,
    createdUtc: 1592228591,
    upvotes: 462,
    upvoteRatio: 1.0
  }
]
```


## Options

| Property            |  Type   | Description                                               | Default |
| :-----------        | :---:   | :-------------------------------------                    | :----:  |
| type               | string  | meme, wallpaper or custom image to fetch                         | 'meme'       |
| total               | number  | How many images to get. Max is 50                         | 1       |
| subreddit        | [string]   | Custom subreddit libray                    |   [ ]   |
| addSubreddit        | [string]   | Add subreddits to subreddit library                    | [ ]     |
| removeSubreddit     | [string]   | Remove subreddits from subreddit library               | [ ]     |


## Contribute

To contribute, clone this repo locally and commit your code on a new branch. Feel free to create an issue or make a pull request.


## Supporters

[![Stargazers repo roster for @arifszn/reddit-image-fetcher](https://reporoster.com/stars/arifszn/reddit-image-fetcher)](https://github.com/arifszn/reddit-image-fetcher/stargazers)
[![Forkers repo roster for @arifszn/reddit-image-fetcher](https://reporoster.com/forks/arifszn/reddit-image-fetcher)](https://github.com/arifszn/reddit-image-fetcher/network/members)

## Support

Show your ❤️ and support by giving a <a href="https://github.com/arifszn/reddit-image-fetcher">star</a>.


## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2020.</p>
