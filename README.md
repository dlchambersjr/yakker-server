## Lab-42: Yakker

### David Chambers / CF Instruction Team

### Links and Resources
* [repo](https://github.com/dlchambersjr/yakker-server)
* [CF back-end](https://js-401-socket-io-server.herokuapp.com)


### Modules
#### `index.js` -> `<App>`
##### Exported Values and Methods
Renders the contents of `<App>`

#### `app.js` -> `<Messaging>
##### Exported Values and Methods
Renders the contents of `messages.js`

#### `messages.js` -> incoming and outgoing messages
##### Exported Values and Methods

###### `updateWords(words) -> string`
Stores the incoming messages, their details, and color in state

###### `handleSubmit(event) -> string`
Stores the outgoing messages, their details, and color  in state

###### `handleNewWords(event) -> string`
Stores words as they are type in state

### Setup
#### Running the app
* `npm run start` from cloned repo directory

#### Tests
I would test for the following:
* Does a word get sent.
* Does a word get received.
* Does the time stamp get rendered.
* Do message display newest to oldest?
* Do message get removed from the display after 30 seconds.

#### UML
[Yakker-UML](https://raw.githubusercontent.com/dlchambersjr/yakker-server/master/yakker-uml.jpg)
