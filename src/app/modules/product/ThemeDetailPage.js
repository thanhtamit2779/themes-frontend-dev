import React, {Component} from 'react';

import ThemeDetailContainer from './containers/ThemeDetailContainer';

class ThemeDetailPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <React.Fragment>
        <ThemeDetailContainer id={id}/>
      </React.Fragment>
    );
  }
}

export default ThemeDetailPage;