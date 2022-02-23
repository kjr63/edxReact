
function ListItem(props){
    return (
        <p>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                <tr>
                    <td>{props.year}</td>
                    <td>{props.model}</td>
                    <td>{props.price}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </table>
        </p>        
    )
}

function CarsList(props){
    return (
        <div>
            <h3>Cars</h3>
            <ol>
                <ListItem year = {props.item1[0]} model = {props.item1[1]} price = {props.item1[2]}  />
                <ListItem year = {props.item2[0]} model = {props.item2[1]} price = {props.item2[2]}  />
                <ListItem year = {props.item3[0]} model = {props.item3[1]} price = {props.item3[2]}  />
            </ol>
        </div>
    )
}
function TrucksList(props){
    return (
        <div>
            <h3>Trucks</h3>
            <ol>
                <ListItem year = {props.item1[0]} model = {props.item1[1]} price = {props.item1[2]}  />
                <ListItem year = {props.item2[0]} model = {props.item2[1]} price = {props.item2[2]}  />
            </ol>
        </div>
    )
}
function ConvertiblesList(props){
    return (
        <div>
            <h3>Convertibles</h3>
            <ol>
                <ListItem year = {props.item1[0]} model = {props.item1[1]} price = {props.item1[2]}  />
                <ListItem year = {props.item2[0]} model = {props.item2[1]} price = {props.item2[2]}  />
                <ListItem year = {props.item3[0]} model = {props.item3[1]} price = {props.item3[2]}  />
                <ListItem year = {props.item4[0]} model = {props.item4[1]} price = {props.item4[2]}  />
            </ol>
        </div>
    )
}
function TransportingApp(props){
    return (
        <div>
            <TransportingTitle/>
            <CarsList
                item1 = {[ "2013","A","$32000"]}
                item2 = {[ "2011","B","$4400"]}
                item3 = {[ "2016","B","$15500"]}
            />
            <TrucksList
                item1 = {[ "2014","D","$18000"]}
                item2 = {[ "2013","E","$5200"]}
            />
            <ConvertiblesList
                item1 = {[ "2009","F","$2000"]}
                item2 = {[ "2010","G","$6000"]}
                item3 = {[ "2012","H","$12500"]}
                item4 = {[ "2017","M","$50000"]}
            />
        </div>
    )
}

ReactDOM.render(
    <TransportingApp />,
    document.getElementById("root")
)
