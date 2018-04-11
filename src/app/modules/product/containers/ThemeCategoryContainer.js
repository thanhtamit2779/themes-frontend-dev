
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_theme_category } from './../actions/index';

import ThemeCategory from './../components/ThemeCategory';
const total_record = 8;

class ThemeCategoryContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let cate_id = this.props.id;
        this.props.fetch_theme_category({
            cate_id,
            total_record
        });
    }

    render() {
        let { items } = this.props;
        return (<ThemeCategory items={ items }/>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        items : state.theme_category.items
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetch_theme_category: (data) => {
            dispatch(fetch_theme_category(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeCategoryContainer);