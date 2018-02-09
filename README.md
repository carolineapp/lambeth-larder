# LambethLarder ![](https://travis-ci.org/caralemony/lambeth-larder.svg?branch=master)

Info on emergency food.

**Our problem statement: To allow a user to quickly and easily find emergency food and advice centres in Lambeth.**

![](https://i.imgur.com/7UJwAt2.gif)

## Installation Instructions

`git clone https://github.com/caralemony/lambeth-larder.git`

`npm i`

Need a config.env file in the root directory, which needs to include

```
API_KEY=[apikey]
API_BASE=[apibase_tablenumber]
```

Need to add a config.js javascript file within client/src/ , which needs to include the following:

```
const mapboxToken = "[mapboxkey]";

module.exports = {
  key: mapboxToken
};
```

## Start Script

```
npm run dev
```

Then navigate to `http://localhost:3000/`
