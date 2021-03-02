import React, { Component } from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.hasError) {

      return <h1 className="result-error">Something went wrong</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;