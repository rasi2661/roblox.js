# Roblox.JS

## Installation
Using npm:
```shell
$ npm i @rasi2661/roblox.js
```

Using yarn:
```shell
$ yarn add @rasi2661/roblox.js
```

## Examples
Fetching a user's username:

```js
const robloxJS = require("@rasi2661/robloxJS");

let user = new robloxJS.user(1); //pass userid
let username = user.username();
console.log(username);
```
