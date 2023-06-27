import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Loading...',
      author: 'markus paolo'
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {this.setState({ quote: data.content, author: data.author});
      console.log(data)})
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <h1 id="text">{this.state.quote}</h1>
          <p id="author">{this.state.author}</p>
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
          <br></br>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet">Post to twitter</a>
        </div>
      </div>
    );
  }
}

export default App;
