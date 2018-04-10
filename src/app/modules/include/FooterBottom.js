import React, { Component } from 'react';

class FooterBottom extends Component {
  render() {
    return (
      <div className="aa-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-footer-bottom-area">
                <p>Designed by <a href="http://www.markups.io/">MarkUps.io</a></p>
                <div className="aa-footer-payment">
                  <span className="fa fa-cc-mastercard" />
                  <span className="fa fa-cc-visa" />
                  <span className="fa fa-paypal" />
                  <span className="fa fa-cc-discover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterBottom;
