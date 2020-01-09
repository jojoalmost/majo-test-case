import React from "react";
import {connect} from "react-redux";
import {selectedTodo, deleteTodo, selectedTodoModal, updateTodo} from "../redux/Actions";

class Modal extends React.Component {
    state = {
        isEdit: false,
        title: '',
        description: '',
    }

    // componentWillMount() {
    //     document.addEventListener('mousedown', this.handleClick, false);
    // }
    //
    // componentWillUnmount() {
    //     document.addEventListener('mousedown', this.handleClick, false);
    // }
    //
    // handleClick = e => {
    //     if (this.node.contains(e.target)) {
    //         return;
    //     }
    // }
    //
    // handleClickOutside = () => {
    //     console.log('outside');
    // }

    titleInputHandler = e => this.setState({title: e.target.value})

    descriptionInputHandler = e => this.setState({description: e.target.value})

    onUpdateHandler = () => {
        const description = this.state.description;
        const title = this.state.title;
        if (description && title) {
            this.props.updateTodo(this.props.data.selectedTodo.id, title, description);
            this.setState({
                title: '',
                description: '',
                isEdit: false,
            });
            this.props.selectTodo({});
            this.props.selectedTodoModal({});
            this.props.handleClose();
        }
    }

    componentWillReceiveProps(props) {
        if (Object.keys(props.data.selectedTodo).length !== Object.keys(this.props.data.selectedTodo).length) {
            this.setState({
                isEdit: true,
                title: props.data.selectedTodo.title,
                description: props.data.selectedTodo.description
            });
        }
    }

    handleDelete = id => {
        this.props.deleteTodo(id);
        this.props.handleClose();
    }

    render() {
        const {show, todo, handleClose, selectTodo, deleteTodo} = this.props;
        const showHideClassName = show ? 'modal display-block' : 'modal display-none';
        return (
            <div className={showHideClassName} ref={node => this.node = node}>
                <div className={'modal-body'}>
                    {this.state.isEdit ? (
                        <div className='form'>
                            <form>
                                <input type="text" placeholder='Input Todo' value={this.state.title || ''}
                                       onChange={this.titleInputHandler}/>
                                <br/>
                                <textarea placeholder='Deskripsi' cols="30" rows="10"
                                          value={this.state.description || ''}
                                          onChange={this.descriptionInputHandler}/>
                                <br/>
                                <button type={"button"} onClick={this.onUpdateHandler}>Update</button>
                            </form>
                        </div>
                    ) : (
                        <table>
                            <tbody>
                            <tr>
                                <td>Title</td>
                                <td>{todo.title}</td>
                            </tr>
                            <tr>
                                <td>Deskripsi</td>
                                <td>{todo.description}</td>
                            </tr>
                            <tr>
                                <td>Created At</td>
                                <td>{todo.createdAt}</td>
                            </tr>
                            </tbody>
                        </table>
                    )}
                    <button onClick={() => selectTodo(todo)} className={this.state.isEdit ? 'hide' : 'show'}>Edit
                    </button>
                    <button onClick={() => this.handleDelete(todo.id)} className={todo.status ? 'hide' : 'show'}>Delete
                    </button>
                </div>
            </div>
        )
    }

};

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    updateTodo: (id, title, description) => dispatch(updateTodo(id, title, description)),
    selectTodo: item => dispatch(selectedTodo(item)),
    selectedTodoModal: item => dispatch(selectedTodoModal(item)),
})

const mapStateToProps = state => ({
    data: state
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)

