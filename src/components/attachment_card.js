import React, {Component} from 'react'

export default class AttachmentCard extends Component {
    render() {
        return <div className="card card-attachment mb-2 bg-white rounded col-sm-4">
            <a href={this.props.url} target="_blank">
                {
                    this.props.type === 'image' ? <img src={this.props.url} className="card-img"
                                                      alt={this.props.id}/> :
                        <iframe width="560" height="315" src={this.props.url}
                                frameBorder="0" allowFullScreen/>
                }

            </a>
        </div>
    }
}
