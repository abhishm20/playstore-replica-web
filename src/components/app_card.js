import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class AppCard extends Component {
    render() {
        return <a href={`/appDetails?pkg=${this.props.package_name}`} key={this.props.id} className="card_link col-4">
            <div className="card mb-2 shadow-sm bg-white rounded">
                <div className="row no-gutters">
                    <div className="col-md-4 app_icon">
                        <img src={this.props.icon_url} className="card-img"
                             alt={this.props.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-title">{this.props.app_name}</h6>
                            <small className="card-text">{this.props.developer_name}</small>
                        </div>
                    </div>
                </div>
            </div>
            </a>
    }
}
