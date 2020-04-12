import React, {Component} from 'react'
import AttachmentCard from "./attachment_card";

export default class AttachmentList extends Component {
    render() {
        return <div>
            <div className="row mb-5">
                <div className="col-12 app_list">
                    <div className="container-fluid">
                        <div className="row flex-row flex-nowrap">
                            {this.props.attachments && this.props.attachments.map(app => (
                                    <AttachmentCard {...app} key={app.id}/>
                                )
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}
