import React, {Component} from 'react';

import ThemeCategoryContainer from './containers/ThemeCategoryContainer';

class ThemeCategoryPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <React.Fragment>
        <ThemeCategoryContainer id={id}/>
      </React.Fragment>
    );
  }
}

export default ThemeCategoryPage;