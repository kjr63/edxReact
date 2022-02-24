class ListItem extends React.Component {
    constructor (props) {
        super (props);
        this.formatRestrictions = this.formatRestrictions.bind(this);
        this.restrictions = this.formatRestrictions (this.props.diet, this.props.physical, this.props.medical);
    }
    formatRestrictions (diet, physical, medical) {
        let retval ="";
        if (diet) retval += "a";
        if (physical) retval += "b";
        if (medical) retval += "c";
        return retval;
    }
    render () {
        return (
            <tr>
                <td><button className="w3-button w3-circle w3-teal" onClick = {this.props.removeItem}>x</button></td>                
                <td>{this.props.fname}</td>
                <td>{this.props.lname}</td>
                <td>{this.props.activity}</td>
                <td>{this.restrictions}</td>
            </tr>
        )
    }    
}
class StudentList extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="w3-panel">
                <table className="w3-table-all">
                    <thead>
                        <tr className="w3-red">
                            <th>Remove</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Activity</th>
                            <th>Restrictions</th>
                        </tr>
                    </thead>                    
                    {
                        this.props.sList.map((item,index) => 
                            <ListItem key = {index} 
                                  fname = {item.valueFirst} 
                                  lname = {item.valueLast}
                                  activity = {item.valueSelect}
                                  diet = {item.checkedDiet}
                                  physical ={item.checkedPhysical}
                                  medical ={item.checkedMedical}
                                  removeItem = {() => this.props.removeItem(index)}
                            />
                         )
                     }
                </table>
            </div>            
        )
    }
}
export default class Students extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueFirst:"",
            valueLast:"",
            valueSelect:"Science Lab",
            checkedDiet: false,
            checkedPhysical: false,
            checkedMedical:false,
            items : []
        };
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDietChange = this.handleDietChange.bind(this);
        this.handlePhysicalChange = this.handlePhysicalChange.bind(this);
        this.handleMedicalChange = this.handleMedicalChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.resetForm = this.resetForm.bind(this);
    } 
    handleFirstChange(event){ this.setState({valueFirst:event.target.value}); }
    handleLastChange(event){ this.setState({valueLast:event.target.value}); }
    handleSelectChange(event){ this.setState({valueSelect:event.target.value}); }
    handleDietChange(event){ this.setState({checkedDiet:event.target.checked}); }
    handlePhysicalChange(event){ this.setState({checkedPhysical:event.target.checked}); }
    handleMedicalChange(event){ this.setState({checkedMedical:event.target.checked}); }
    addItem(){
        var itemsCopy = this.state.items.slice()
        itemsCopy.push({
            valueFirst: this.state.valueFirst,
            valueLast: this.state.valueLast,
            valueSelect: this.state.valueSelect,
            checkedDiet:  this.state.checkedDiet,
            checkedPhysical:  this.state.checkedPhysical,
            checkedMedical: this.state.checkedMedical
        })
        this.setState({items:itemsCopy});
        this.resetForm();
    }
    removeItem(index){
        var itemsCopy = this.state.items.slice()
        itemsCopy.splice(index,1);
        this.setState({items:itemsCopy})
    }    
    resetForm () {
        this.setState ({
            valueFirst:"",
            valueLast:"",
            valueSelect:"Science Lab",
            checkedDiet: false,
            checkedPhysical: false,
            checkedMedical:false
        });       
    }    
    render(){
        return (
            <div className="w3-container">
                <div className="w3-container w3-teal w3-xxlarge">Course Sign-Up</div>
                <div className="w3-card-4 w3-padding">
                    <div className="w3-panel">
                        <div className="w3-text-teal">First name</div>
                        <input value = {this.state.valueFirst} onChange = {this.handleFirstChange}/>
                        <div className="w3-margin-top w3-text-teal">Last name</div>
                        <input value = {this.state.valueLast} onChange = {this.handleLastChange}/>
                    </div>
                    <div className="w3-panel w3-row">
                        <div className="w3-half">
                            <div className="w3-margin-bottom w3-text-teal">Check all that apply:</div>                
                            <input type="checkbox" checked = {this.state.checkedDiet} onChange = {this.handleDietChange}/> Dietary Restrictions<br/>
                            <input type="checkbox" checked = {this.state.checkedPhysical} onChange = {this.handlePhysicalChange}/> Physical Disabilities<br/>
                            <input type="checkbox" checked = {this.state.checkedMedical} onChange = {this.handleMedicalChange}/> Medical Needs<br/>
                        </div>
                        <div className="w3-half">
                            <div className="w3-margin-bottom w3-text-teal">Select Activity:</div>
                            <select value={this.state.valueSelect} onChange={this.handleSelectChange}>
                                <option value="Science Lab">Science Lab</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Painting">Painting</option>
                            </select>
                       </div>
                    </div>
                    <div className="w3-panel"><button onClick = {this.addItem}>Submit</button></div>
                </div>
                <StudentList sList = {this.state.items} removeItem = {this.removeItem}/>
            </div>
        )
    }
}
