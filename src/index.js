import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fs from 'fs';

class RUDropdown extends React.Component {
    render() {
        return (
            <div className="dropdown">
                <select>
                    <option>{this.props.name}</option>
                    <option>SE</option>
                    <option>IT</option>
                    <option>DE</option>
                    <option>FR</option>
                </select>
            </div>
        );
    }
}

class SESNDrop extends React.Component {
    render() {
        return (
            <div class="dropdown">
                <select>
                    <option>{this.props.name}</option>
                    <option>Malmö</option>
                    <option>Helsingborg</option>
                    <option>Gothenburg</option>
                    <option>Stockholm</option>
                </select>
            </div>
        );
    }
}



const element = React.createElement(RUDropdown, { name: 'Select one...', class: 'drop1' });
const element1 = React.createElement(SESNDrop, { name: 'Select one...', class: 'drop2' });

ReactDOM.render([element, element1], document.getElementById('root'))
