import React, { Component } from 'react'
import AlbumService from '../services/AlbumService'

class ViewAlbumComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id, 
            album: {}
        }
    }

    componentDidMount() {
        AlbumService.getAlbumById(this.state.id).then( res => {
            this.setState({album: res.data}); 
        })
    }

    back(){
        this.props.history.push('/album-crud-frontend/albums');
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3 dark-bg-white-text">
                    <h3 className="text-center">Album Information</h3>
                    <div className="card-body">
                        <div className="row">
                            <div className="mb-2"><u className="font-weight-bold">Artist Name</u>: { this.state.album.artistName }</div>
                        </div>
                        <div className="row">
                            <div className="mb-2"><u className="font-weight-bold">Album Name</u>: { this.state.album.albumName }</div>
                        </div>
                        <div className="row">
                            <div className="mb-2"><u className="font-weight-bold">Genre</u>: { this.state.album.genre }</div>
                        </div>
                        <div className="row">
                            <div><u className="font-weight-bold">Release Year</u>: { this.state.album.releaseYear }</div>
                        </div>
                    </div>

                    <button className="btn btn-dark" onClick={this.back.bind(this)} style={{margin: "0 auto 0 0"}}>View All Albums</button>
                </div>
            </div>
        )
    }
}

export default ViewAlbumComponent