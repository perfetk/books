import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import { Card, CardContent, CardTitle, CardDescription, CardImage } from './ItemCard.sc'


class ItemCard extends PureComponent {

    render() {
        const { title, description, id, rating, imgUrl} = this.props;
        return (
           <Card>
               <CardContent>
                   <CardTitle>
                       {title}
                   </CardTitle>
                   <CardDescription>
                       { description }
                   </CardDescription>
               </CardContent>
               <CardImage>
                   <img src={imgUrl} />
               </CardImage>
               <Rating
                   id={id}
                   rating={rating}
               />
           </Card>

        )
    }
}

ItemCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    imgUrl: PropTypes.string
}

export default ItemCard;