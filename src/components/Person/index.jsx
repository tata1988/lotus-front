import { Component } from 'react';
import './index.css';

class Person extends Component {
    constructor(props) {
        super(props);
    }

    render() {

            return (
                <div className="tr">
                    <div className="td">{this.props.data.name}</div>
                    <div className="td">{this.props.data.birth_year}</div>
                    <div className="td">{this.props.data.eye_color}</div>
                    <div className="td">{this.props.data.gender}</div>
                    <div className="td">{this.props.data.hair_color}</div>
                    <div className="td">{this.props.data.height}</div>
                    <div className="td">{this.props.data.mass}</div>
                </div>
            )
        }
    }

export default Person

