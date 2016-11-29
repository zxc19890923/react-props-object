import React, {Component} from 'react';
import {render} from 'react-dom';

import App from './App.jsx';
var names = {};
names.boy = "zxc";
names.girl = "hp";

class person extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div></div>
        )
    }
}
render(<App {...names} />, document.getElementById('app'));
// 然后在App.jsx组件中就可以调用 {this.props.boy} {this.props.girl}
