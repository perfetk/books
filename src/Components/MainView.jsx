import React, { PureComponent, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {loadData, updateRating} from "../Actions/updateActions";
import ItemsList from "./ItemsList/ItemsList";
import List from '../itemsLists.json';
import { StyledButton } from './MainView.sc';

class MainView extends PureComponent {

    invokeRandomRating = () => {
        const { updateRating, itemsList } = this.props;
        const maxRating = 6;
        const elementsIds = itemsList.map((item) => {
            return item.id;
        });

        const randomRating = Math.floor(Math.random() * Math.floor(maxRating));
        const randomItemId =  elementsIds[Math.floor(Math.random()*elementsIds.length)];
        updateRating(randomRating, randomItemId);

    };

    randomIntervalRating = () => {
       const timeArray = [20000, 30000, 15000, 25000, 20000, 36000, 10000, 15000];
       const newTime = timeArray[Math.floor(timeArray.length * Math.random())];
       const timer =  setInterval(this.invokeRandomRating, 2000);
        clearInterval(timer);
        setInterval(this.invokeRandomRating, newTime);
    };

    componentDidMount() {
        const { loadData } = this.props;
        loadData(List);
    }

    render() {
        return (
            <Fragment>
                <ItemsList/>
                <StyledButton
                    onClick={this.invokeRandomRating}
                    text="Random Rating"
                />

                {/*{this.randomIntervalRating()}*/}
            </Fragment>
        )
    }
}

export const mapStateToProps = (store) => ({
    itemsList: store.items,
});

export const mapDispatchToProps = (dispatch) => ({
    loadData: (data) => dispatch(loadData(data)),
    updateRating: (rating, id) => dispatch(updateRating(rating, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);