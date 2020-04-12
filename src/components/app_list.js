import React, {Component} from 'react'
import AppCard from "./app_card";

export default class AppList extends Component {
    render() {
        const app_categories = ["TOP_FREE_APPS", "TOP_PAID_APPS", "TOP_GROSSING_APPS", "TOP_FREE_GAMES", "TOP_PAID_GAMES", "TOP_GROSSING_GAMES"]
        return <div>
            {app_categories.map((category) => (
                <div className="row mb-5">
                    <div className="col-12">
                        <h5 className="font-bold"><b>{category.replace(/\_/g, " ")}</b></h5>
                    </div>
                    <div className="col-12 app_list">
                        <div className="container-fluid">
                            <div className="row flex-row flex-nowrap">
                                {this.props.appsList && this.props.appsList.map(app => (
                                        app.category === category ? <AppCard {...app} key={app.id}/> : ""
                                    )
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>

    }
}
