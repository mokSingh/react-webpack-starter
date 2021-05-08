import React from 'react';
import ReactDOM from 'react-dom';
import "@momentum-ui/web-components";

const HelloWorld = () => {
    return (
        <h1>
         <md-button variant="primary" tab-index="-1" color="violet"><span slot="text">no disabled</span></md-button>
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));