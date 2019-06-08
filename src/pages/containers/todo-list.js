import React, {Component} from 'react';
import {connect} from "react-redux";
import TodoItem from "../../components/todo-item";
import NewItem from "../../components/new-item";
import {bindActionCreators} from "redux";
import {addTodoItem, removeTodoItem, updateTodoItem} from "../../services/todo-list/actions";

const mapStateToProps = state => {
    return {
        todoItems: state.items
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addTodoItem,
            removeTodoItem,
            updateTodoItem
        },
        dispatch
    )
};

class TodoList extends Component {

    handleItemSubmit = (text) => {
        this.props.addTodoItem({text})
    };

    handleItemStatusChange = (item) => {
        this.props.updateTodoItem(item);
    };

    handleRemove = (item) => {
        this.props.removeTodoItem(item);
    };

    render() {
        console.log(this.props.todoItems);
        return (
            <div>
                <NewItem
                    onSubmit={this.handleItemSubmit}
                />
                {this.props.todoItems.map(item =>
                    <TodoItem
                        key={item.id}
                        item={item}
                        handleChange={(value) => this.handleItemStatusChange({...item, checked: value})}
                        handleRemove={() => this.handleRemove(item)}
                    />
                )}
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);