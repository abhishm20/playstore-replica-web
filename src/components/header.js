import React, {Component} from 'react'
import Listing from "./listing";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {checkScrapingStatus, scrapApps} from "../actions/listingActions";
import refresh_icon from "../images/icons8-refresh.svg";

class Header extends Component {

    componentDidMount() {
        this.props.checkScrapingStatus();
    }

    onClick = () => {
        this.props.scrapApps();
    }

    render() {
        return <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <a href="/">
                                <img src="https://cdn-www.bluestacks.com/bs-images/new-logo-white.png"
                                 className="logo"/>
                            </a>
                        </div>
                        <div className="col-6">
                            {this.props.isScraping ? <img className="refresh_icon float-right" style={{"cursor": "auto"}} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"/> : <img onClick={this.onClick} className="refresh_icon float-right" src={refresh_icon}/>}
                        </div>
                    </div>
                </div>
            </div>
    }
}

Header.propTypes = {
    // isScraping: PropTypes.bool.isRequired,
    // scrapingError: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    isScraping: state.listingReducer.isScraping,
    scrapingError: state.listingReducer.scrapingError,
});

export default connect(mapStateToProps, {scrapApps, checkScrapingStatus})(Header);

