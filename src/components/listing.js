import React, {Component} from 'react'
import {startFetchingApps} from "../actions/listingActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import LoadingApp from "./loading";
import AppList from "./app_list";

class Listing extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.startFetchingApps();
    }

    render() {
        return (
            <div>
                <div className="row title">
                    <div className="col-12">
                        <h1 className="text-center"><b>Top Charts</b></h1>
                    </div>
                </div>
                {this.props.isLoadingApps ? <LoadingApp/> : <AppList appsList={this.props.appsList}/>}
            </div>
        )
    }
}

Listing.propTypes = {
    appsList: PropTypes.array.isRequired,
    isLoadingApps: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    appsList: state.listingReducer.appsList,
    isLoadingApps: state.listingReducer.isLoadingApps,
});

export default connect(mapStateToProps, {startFetchingApps,})(Listing);
