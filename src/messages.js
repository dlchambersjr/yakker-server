import React from 'react';
import io from 'socket.io-client';

// const url = 'http://localhost:3000';
const url = 'https://js-401-socket-io-server.herokuapp.com';
const socket = io.connect(url);

class Messaging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedInput: '',
      words: '',
      history: [],
    };

    this.updateWords = this.updateWords.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewWords = this.handleNewWords.bind(this);


    socket.on('incoming', payload => this.updateWords(payload));
  }

  updateWords(words) {
    let sentTime = new Date().getTime() / 1000;
    let plainTime = new Date(sentTime * 1000).toString().slice(16, 24);
    let history = [...this.state.history, { message: words, sentTime, plainTime, color: 'black' }];

    this.setState({ ...this.state, history });
  }

  handleSubmit(event) {
    event.preventDefault();
    socket.emit('troll', this.state.typedInput);
    let sentTime = new Date().getTime() / 1000;
    let plainTime = new Date(sentTime * 1000).toString().slice(16, 24);
    let history = [...this.state.history, { message: this.state.typedInput, sentTime, plainTime, color: 'blue' }];

    this.setState({ ...this.state, history });
  }

  handleNewWords(event) {
    this.setState({ typedInput: event.target.value });
  }

  render() {
    let messages = this.state.history.sort(function (a, b) {
      return b.sentTime - a.sentTime;
    }).filter((msg, idx) => {
      let fresh = (new Date().getTime() / 1000) - msg.sentTime;
      return fresh < 30;
    });

    return (
      <>
        <h2>What do you want to say?</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="typedInput"
            placeholder="new message"
            onChange={this.handleNewWords}
          />
        </form>
        <hr />
        <h3>The last 30 SECONDS of messages -newest to oldest:</h3>
        <ul>
          {messages.map((msg, idx) =>
            <li key={idx} className={msg.color}>{msg.plainTime} : {msg.message}</li>


          )}
        </ul>
      </>
    );
  }
}

export default Messaging;

// let fresh = (new Date().getTime() / 1000) - msg.sentTime;