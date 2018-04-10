import React, {Component} from 'react';

import ProductList from './../../product/components/ProductList';

class ThemeFeaturedCarousel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        jQuery('.owl-carousel-featured').owlCarousel({
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
                    lazyLoad: true,
                    autoplayTimeout: 3000
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

export default ThemeFeaturedCarousel;