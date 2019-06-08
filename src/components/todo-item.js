import React, {Component} from 'react';

class TodoItem extends Component {

    handleChange = () => {
        this.props.handleChange(!this.props.item.checked);
    };

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={!!this.props.item.checked}
                    value={this.props.item.id}
                    onChange={this.handleChange}
                />
                <label>{this.props.item.text}</label>
                <button
                    onClick={this.props.handleRemove}
                >
                    Eliminar
                </button>
            </div>
        )
    }

}

export default TodoItem;