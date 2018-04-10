import React, {Component} from 'react';

import ProductList from './../../product/components/ProductList';

class ThemeLatestCarousel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        jQuery('.owl-carousel-latest').owlCarousel({
          loop: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 3,
              nav: false
            },
            768: {
              items: 4,
              nav: true,
              loop: true,
              margin: 30,
              autoplay: true,
              dots: false,
              lazyLoad: true
            }
          }
        })
    }

    render() {
        const posts = this.props.items.posts;
        return (                     
            <React.Fragment>
                <ProductList posts={posts}/>
            </React.Fragment>   
        );
    }
}

export default ThemeLatestCarousel;