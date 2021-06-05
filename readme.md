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
const rbx = require("@rasi2661/roblox.js");

async function getusername(){
  let user = new rbx.User(1); //pass userid
  let username = await user.username();
  console.log(username);
  // ROBLOX
}
getusername()
```
