import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import ContentInput from './components/ContentInput/ContentInput';
import TermExtraction from './components/TermExtraction/TermExtraction';
import PromptInput from './components/PromptInput/PromptInput';
import Footer from './components/Footer/Footer';

const initialState = {
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
    return (
      <div>
        <Navigation />
          <div className="container-lg">
            <section>
              <div className="row">
                <ContentInput contextChange={this.contextChange} />
                <TermExtraction content={this.state.context} />
              </div>
            </section>

            <section>
              <PromptInput
                promptChange={this.promptChange}
                prompt={this.state.prompt}
                context={this.state.context}
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
