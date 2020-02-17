import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';
import {updateRating} from "../../Actions/updateActions";
import { StyledItemsList } from './ItemsList.sc';

class ItemsList extends PureComponent {

    generateSortableList = (data) => {
         return data.sort((x, y) => x.rating < y.rating).map((item, index) => {
                 return (
                    <ItemCard
                        key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        rating={item.rating}
                        imgUrl={item.url}
                    />
                 )
        })
    }
    render() {
        const { rating, itemsList } = this.props;
        return (
            <StyledItemsList
                rating={rating}
            >
               {this.generateSortableList(itemsList)}
            </StyledItemsList>
        )
    }
}

export const mapStateToProps = (store) => ({
    itemsList: store.items
});

export const mapDispatchToProps = (dispatch) => ({
    updateRating: (rating, id) => dispatch(updateRating(rating, id))
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
