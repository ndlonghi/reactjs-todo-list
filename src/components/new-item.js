import React, {Component} from "react";


class NewItem extends Component {

    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({
            value: ''
        })
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <label>Ingrese el texto y presione 'Enter' para agregar un nuevo item</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </form>
        )
    }

}

export default NewItem;