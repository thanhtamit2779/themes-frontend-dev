import React, {Component} from 'react';

import ThemeFeaturedContainer from './ThemeFeaturedContainer';
import ThemeLatestContainer from './ThemeLatestContainer';
import ThemeViewedContainer from './ThemeViewedContainer';

class ThemeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="bgwhite p-t-40 p-b-40">
                    <div className="container">
                        <div className="sec-title p-b-22">
                            <h3 className="m-text5 t-center">
                                THEME MỚI NHẤT
                            </h3>
                        </div>
                        <div className="sec-content">
                            <div className="owl-stage owl-carousel owl-carousel-latest owl-theme">
                                <ThemeLatestContainer/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bgwhite p-t-40 p-b-40">
                    <div className="container">
                        <div className="sec-title p-b-22">
                            <h3 className="m-text5 t-center">
                                THEME NỔI BẬT
                            </h3>
                        </div>
                        <div className="sec-content">
                            <div className="owl-stage owl-carousel owl-carousel-featured owl-theme">
                                <ThemeFeaturedContainer/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bgwhite p-t-40 p-b-105">
                    <div className="container">
                        <div className="sec-title p-b-22">
                            <h3 className="m-text5 t-center">
                                THEME XEM NHIỀU
                            </h3>
                        </div>
                        <div className="sec-content">
                            <div className="owl-stage owl-carousel owl-carousel-viewed owl-theme">
                                <ThemeViewedContainer/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ThemeContainer;
