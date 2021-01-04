/* SHOULD ALBUMID REFERENCED BELOW INSTEAD BE JUST 'ID'?????????????????? */

import React, { Component } from 'react'
import AlbumService from '../services/AlbumService'; 

class CreateAlbumComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id, 
            albumName: '', 
            artistName: '', 
            genre: '', 
            releaseYear: ''
        }

        this.changeAlbumNameHandler = this.changeAlbumNameHandler.bind(this); 
        this.changeArtistNameHandler = this.changeArtistNameHandler.bind(this); 
        this.changeGenreHandler = this.changeGenreHandler.bind(this); 
        this.changeReleaseYearHandler = this.changeReleaseYearHandler.bind(this); 
        this.saveOrUpdateAlbum = this.saveOrUpdateAlbum.bind(this); 
    }

    componentDidMount() {
        if (this.state.id === '_add') { 
            return
        } else {
            AlbumService.getAlbumById(this.state.id).then( (res) => {
                let album = res.data; 
                this.setState({
                    albumName: album.albumName, 
                    artistName: album.artistName, 
                    genre: album.genre, 
                    releaseYear: album.releaseYear
                }); 
            }); 
        }
    }

    saveOrUpdateAlbum = (e) => {
        e.preventDefault(); 
        
        if (this.state.id === '_add') {
            let album = { albumName: this.state.albumName, artistName: this.state.artistName, genre: this.state.genre, releaseYear: this.state.releaseYear }; 
            AlbumService.addAlbum(album).then( res => {
                this.props.history.push('/album-crud-frontend/albums'); 
            }); 
        } else {
            let album = { albumId: this.state.id, albumName: this.state.albumName, artistName: this.state.artistName, genre: this.state.genre, releaseYear: this.state.releaseYear }; 
            AlbumService.updateAlbum(album).then( res => {
                this.props.history.push('/album-crud-frontend/albums'); 
            }); 
        }
    }

    changeAlbumNameHandler = (event) => {
        this.setState({albumName: event.target.value}); 
    }

    changeArtistNameHandler = (event) => {
        this.setState({artistName: event.target.value}); 
    }

    changeGenreHandler = (event) => {
        this.setState({genre: event.target.value}); 
    }

    changeReleaseYearHandler = (event) => {
        this.setState({releaseYear: event.target.value}); 
    }

    cancel() {
        this.props.history.push('/album-crud-frontend/albums'); 
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Album</h3>
        } else {
            return <h3 className="text-center">Update Album</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 dark-bg-white-text">
                            {
                                this.getTitle()
                            }
                            <div className="card-body ">
                                <form>
                                    <div className="form-group">
                                        <label>Artist Name: </label>
                                        <input placeholder="Artist Name" name="artistName" className="form-control dark-bg-white-text" value={this.state.artistName} onChange={this.changeArtistNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Album Name: </label>
                                        <input placeholder="Album Name" name="albumName" className="form-control dark-bg-white-text" value={this.state.albumName} onChange={this.changeAlbumNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Genre: </label>
                                        <input placeholder="Genre" name="genre" className="form-control dark-bg-white-text" value={this.state.genre} onChange={this.changeGenreHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Release Year: </label>
                                        <input placeholder="Release Year" name="releaseYear" className="form-control dark-bg-white-text" value={this.state.releaseYear} onChange={this.changeReleaseYearHandler}/>
                                    </div>

                                    <button className="btn btn-dark" onClick={this.saveOrUpdateAlbum}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAlbumComponent