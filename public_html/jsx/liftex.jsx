    class Details extends React.Component{
      render(){
        return <h1>{this.props.details}</h1>
      }
    }
    class Button extends React.Component{
        render(){
            return (
              <button style = {{color: this.props.active? 'red': 'blue'}} onClick={() => {this.props.clickHandler(this.props.id,this.props.name)}}>
                {this.props.name}
              </button>
            )
        }
    }
    class App extends React.Component{
        constructor(props){
            super(props)
            this.state = {activeArray:[0,0,0,0], details:""}
            this.clickHandler = this.clickHandler.bind(this)
        }
        clickHandler(id,details){
            var arr = [0,0,0,0]
            arr[id] = 1
            this.setState({activeArray:arr,details:details})
            console.log("klikkaus",id,details)
        }
        render(){
            return (
                <div>
                    <Button id = {0} active = {this.state.activeArray[0]} clickHandler = {this.clickHandler} name="bob"/>
                    <Button id = {1} active = {this.state.activeArray[1]} clickHandler = {this.clickHandler} name="joe"/>
                    <Button id = {2} active = {this.state.activeArray[2]} clickHandler = {this.clickHandler} name="tree"/>
                    <Button id = {3} active = {this.state.activeArray[3]} clickHandler = {this.clickHandler} name="five"/>
                    <Details details = {this.state.details}/>
                </div>


            )
        }
    }



ReactDOM.render(
  <App/>,
  document.getElementById("root")
)