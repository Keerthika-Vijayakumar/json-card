import './style.css';

import React, { Component } from 'react';

import APIService from '../../Utils/api-utils';
import CardComponent from '../../components/cardComponent';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [],
            loading: true
        };
    }

    componentDidMount() {
        return APIService.getInstance().getCardsJson().then((res) => {
            if (!res || !res.data | !Object.keys(res.data).length) {
                return ""
            }
            const { children } = res.data;
            const cardData = children.map((post) => post.data);
            this.setState({ cardData })
            return;
        }).catch((err) => {
            return err;
        }).finally(() => {
            this.setState({ loading: false })
        })
    }

    renderNoData = () => {
        return (
            <div className="no-data" style={{ height: "100%" }}>
                <span className="noAccess">{`No Data available`}</span>
            </div>
        )
    }

    renderLoader = () => {
        return (
            <div className='loader'></div>
        )
    }

    render() {
        const { cardData, loading } = this.state;

        return (
            <div className="App">
                <div className='header_wrapper'><h1 className='header_style'>ReactJS Reddit Posts</h1></div>
                <div className="card-container">
                    {
                        loading ? this.renderLoader() :
                            cardData && cardData.length ? cardData.map((post) => (
                                <CardComponent key={post.id} post={post} />
                            )) : <>{this.renderNoData()}</>}
                </div>
            </div>
        );
    }
}

export default Cards;
