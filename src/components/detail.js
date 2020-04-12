import React, {Component} from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import LoadingApp from "./loading";
import {getAppDetail} from "../actions/detailActions";
import * as queryString from "query-string";
import AttachmentList from "./attachment_list";

class AppDetail extends Component {
    constructor(props) {
        super(props);
        const parsed = queryString.parse(window.location.search);
        const package_name = 'pkg' in parsed? parsed['pkg']: "";
        this.state = {
            package_name: package_name
        };

    }

    componentDidMount() {
        this.props.getAppDetail(this.state.package_name);
    }

    render() {

        return (
            this.props.isLoading ?
                <LoadingApp/>
                : (
                    this.props.error ? <p>{this.props.error}</p> : <div className="title">
                        <div className="row mt-3">
                            <div className="col-12">
                            <a href="/">
                                <img height="25px" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png"/>
                            </a>
                        </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-4 icon-block">
                                <img className="icon_detail" src={this.props.app_detail.icon_url}/>
                            </div>
                            <div className="col-xs-12 col-sm-8 mt-5">
                                <div className="vertical-center">
                                    <h3>{this.props.app_detail.app_name}</h3>
                                    <p>{this.props.app_detail.rating}</p>
                                    <p>Developed by: <a target="_blank" href={this.props.app_detail.developer_site}>{this.props.app_detail.developer_name}</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <AttachmentList attachments={this.props.app_detail.attachments}></AttachmentList>
                        </div>
                    </div>
                )
        )
    }
}

AppDetail.propTypes = {
    app_detail: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    app_detail: state.detailReducer.app_detail,
    isLoading: state.detailReducer.isLoading,
    error: state.detailReducer.error,
});

export default connect(mapStateToProps, {getAppDetail,})(AppDetail);
