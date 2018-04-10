import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import * as _ from 'lodash';

class Banner extends Component {
    constructor(props) {
      super(props);
    }

    load(terms) {
      if(_.isEmpty(terms)) return false;

      return terms.map( (term, key) => {
          return (
            <Col xs={6} sm={4} className="m-l-r-auto" key={key}>
              <div className="block1 hov-img-zoom pos-relative m-b-30">
                <img src={term.term_thumbnail} alt={term.term_name} />
                <div className="block1-wrapbtn w-size2">
                  <a href={term.term_thumbnail} className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                    {term.term_name}
                  </a>
                </div>
              </div>
            </Col>
          )
      });
    }

    render() {
      return (
        <section className="banner bgwhite p-t-40 p-b-40">
          <div className="container">
            <Row>
              { this.load(this.props.items.terms) }
            </Row>
          </div>
        </section>
      );
    }
}
  
export default Banner;