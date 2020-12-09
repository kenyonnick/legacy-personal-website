import React from 'react'

class NavBar extends React.Component{
    render() {
        return (
            <div id="nav">
                <h1>Nicklas Kenyon</h1>
                <div id="nav-items">
                    <h2 className="nav-item">Games</h2>
                    <h2 className="nav-item">Artwork</h2>
                    <h2 className="nav-item">About</h2>
                </div>
            </div>
        );
    }
}

export default NavBar;