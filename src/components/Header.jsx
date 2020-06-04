import React, { Component } from 'react'

export class Header extends Component {
    state = {
        search: null
    }
    render() {
        return (
            <header class="header">
            <a href="/"
              ><img
                src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
                alt="netflix-font"
                border="0"
            /></a>
            <form id="search" class="search">
              <input type="search" placeholder="Search for a title..." value="" />
            </form>
          </header>
        )
    }
}

export default Header
