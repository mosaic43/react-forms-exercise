class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            tasks: [],
            completedTasks: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   
    }
  
    handleChange = (changeEvent) => {
        console.log(changeEvent.target.value, changeEvent.target.name)
        this.setState({
          [changeEvent.target.name]: changeEvent.target.value
        })
      }

    // handleChange(changeEvent) {
    //     console.log(changeEvent)

    // //     let updatedList = Object.assign([], this.state.tasks);
    // //         updatedList.push(changeEvent.target.value);
    // //    this.setState({tasks: updatedList})
    // }
    handleSubmit(submitEvent) {
        submitEvent.preventDefault();
    const newTasks = [...this.state.tasks]
    newTasks.push({
      task: this.state.task,
    })

    this.setState({
      tasks: newTasks,
      task: "",
    })

    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter Tasks:
                    <br />
                    <textarea value={this.state.task} onChange={this.handleChange} name="task" />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
            <br />
                <h4>Tasks</h4>              
                    <div>
                    <ul>
                        {this.state.tasks.map((item) => <li>{item.task}</li>)}
                    </ul>
                    </div>
              </div>
        );
    }

}

const App = function(){
    return <div className="todo">
        <h1>ToDo List</h1>
        <ToDoList/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))



