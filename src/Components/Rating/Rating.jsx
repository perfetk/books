import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateRating } from '../../Actions/updateActions';
import StarIcon from '../StarIcon/StarIcon';
// import PropTypes from 'prop-types';
import {RatingContainer} from './Rating.sc';

class Rating extends PureComponent {
    updateRatingStars = (number) => {
        const { updateRating, id } = this.props;
        console.log(`number and id ${number}, ${id}`);
        updateRating(number, id);
    }

    generateStars = () =>{
       const { rating } = this.props;
       const stars = [];
        for(let i = 0; i < 5; i++){
           stars.push(
                <StarIcon
                    key={i}
                    number={i+1}
                    onClick={this.updateRatingStars}
                    isSelected={i < rating}
                />
            )
        }
        return stars;
    }

    render() {
        return (
            <RatingContainer
            >
                {this.generateStars()}
            </RatingContainer>
        )
    }

}

export const mapStateToProps = (store) => ({
    // list: store.list
});

export const mapDispatchToProps = (dispatch) => ({
    updateRating: (rating, id) => dispatch(updateRating(rating, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
