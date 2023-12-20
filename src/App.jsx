import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import ContentInput from './components/ContentInput/ContentInput';
import TermExtraction from './components/TermExtraction/TermExtraction';
import PromptInput from './components/PromptInput/PromptInput';
import Footer from './components/Footer/Footer';

const initialState = {
  proxy: 'https://naga.alphacrc.com:5001',
  context: '',
  prompt: ''
}


class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  contextChange = (event) => {
    this.setState({context: event.target.value});
  }

  promptChange = (event) => {
    this.setState({prompt: event.target.value});
  }

  render() {

    const { proxy, context, prompt } = this.state;

    return (
      <div>
        <Navigation />
          <div className="container-lg">
            <section>
              <div className="row">
                <ContentInput contextChange={this.contextChange} />
                <TermExtraction proxy={proxy} content={context} />
              </div>
            </section>

            <section>
              <PromptInput
                proxy={proxy}
                promptChange={this.promptChange}
                prompt={prompt}
                context={context}
              />
            </section>

            <section>
              <Footer />
            </section>
          </div>
      </div>
    );
  }
}

export default App;
