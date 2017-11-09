# gh-polls [![Build Status](https://travis-ci.org/bukinoshita/gh-polls.svg?branch=master)](https://travis-ci.org/bukinoshita/gh-polls)

> Create a poll with gh-polls


## Install

```bash
$ yarn add gh-polls
```


## Usage

```js
const ghPolls = require('gh-polls')

const options = ["Toki", "Loki", "Jane"]
await ghPolls(options)
```

[![](https://api.gh-polls.com/poll/01BM2ZHFZXYKQV9N3HNFXCBH3N/Tobi)](https://api.gh-polls.com/poll/01BM2ZHFZXYKQV9N3HNFXCBH3N/Tobi/vote)
[![](https://api.gh-polls.com/poll/01BM2ZHFZXYKQV9N3HNFXCBH3N/Loki)](https://api.gh-polls.com/poll/01BM2ZHFZXYKQV9N3HNFXCBH3N/Loki/vote)
[![](https://api.gh-polls.com/poll/01BM2ZHFZXYKQV9N3HNFXCBH3N/Jane)](https://api.gh-polls.com/poll/01BM2ZHFZXYKQV9N3HNFXCBH3N/Jane/vote)


## About

<img src="https://i.imgur.com/M8UCMG8.png" />

`gh-polls (js)` is a node module that returns an `object` with 3 keys `text`, `vote` and `image`. [Tj](https://github.com/tj) created [gh-polls (go)](https://github.com/apex/gh-polls) to be able to use polls on GitHub. With `gh-polls (js)` you can create polls outside GitHub, for example on your own website.


## API

### ghPolls([options])

Returns a `promise`

#### options

Type: `array`
Required

Array of options (string).


## Related


- [apex/gh-polls](https://github.com/apex/gh-polls) – polls for user feedback in GitHub issues
- [apex/up](https://github.com/apex/up) – the serverless webapp tool powering gh-polls
- [Web App](https://app.gh-polls.com/) – GH polls web app
- [GitHub App](https://github.com/apps/polls) – GH polls bot


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
