import React, { Component } from 'react'
import Movie from './Movie';

export class Header extends Component {
    state = {
        search: "",
        movies: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?query=${this.state.search}&api_key=0b941991fb739be72fed42ae5e2a4891&language=en-US`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ movies: data.results });
            });
        this.setState({ ...this, search: "" })
    }

    handleOnChange = (e) => {
        this.setState({ ...this, search: e.target.value })
    }

    render() {
        return (
            <div>
                <header className="header">
                    <a href="/"
                    ><img
                            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
                            alt="netflix-font"
                            border="0"
                        /></a>
                    <form id="search" className="search" onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="search" placeholder="Search for a title..." name="search" value={this.state.search}
                            onChange={(e) => this.handleOnChange(e)} />
                    </form>
                </header>
                {
                    this.state.movies.length && <div className="titleList">
                        <Movie movies={this.state.movies} />
                    </div>
                }
            </div>
        )
    }
}

export default Header
