import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = { lat: null, long: null, errorMessage: ''}; 

  getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude
      }),
      err => this.setState({
        errorMessage: err.message
      })
    );
  }

  componentDidMount() {
    this.getPosition();
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>A bad thing happened</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('#root'));
