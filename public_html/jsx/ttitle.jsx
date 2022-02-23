function TransportingTitle(props){
    return (
        <div>
            <h2>Welcome to React Transportation</h2>
            The best place to buy vehicles online<p/>

            <h2>Choose Options</h2>
            <p>
                New Only 
                <input type="checkbox" checked  />
            </p>
            <p>
                Select Type
                <select>
                    <option value ="All">All</option>
                    <option value ="Cars">Cars</option>
                    <option value ="Trucks">Trucks</option>
                    <option value ="Convertibles">Convertibles</option>
                </select>
            </p>
        </div>
    ) 
}
