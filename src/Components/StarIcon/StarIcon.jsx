import React from 'react';
import StyledStarIcon from './StarIcon.sc';

class StarIcon extends React.PureComponent {

    clickHandler = () => {
        const { onClick, number } = this.props;
        onClick(number);
    }
    render() {
        const {isSelected, number } = this.props;
        return (
            <StyledStarIcon
                isSelected={isSelected}
                key={number}
                onClick={this.clickHandler}
            />
        )
    }
}

export default StarIcon;