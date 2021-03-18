import React from 'react';
import './styles.css';
import Images from "./Images";

function App() {
    return (
        <div className="App">
            <div className="container">
                {Images.map(({ img, idx, title, desc, link, type }) => (
                    <div className="imgContainer">
                        <h4> {title} </h4>
                        <img
                            key={idx}
                            src={img}
                            alt="image"
                        />
                        <p> {desc} </p>
                        <a href={link} class="button" target="_blank"> Check price </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default App