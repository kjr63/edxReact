"use strict";

function ListItem(props) {
    return React.createElement(
        "p",
        null,
        React.createElement(
            "table",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "Year"
                ),
                React.createElement(
                    "th",
                    null,
                    "Model"
                ),
                React.createElement(
                    "th",
                    null,
                    "Price"
                ),
                React.createElement(
                    "th",
                    null,
                    "Buy"
                )
            ),
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    props.year
                ),
                React.createElement(
                    "td",
                    null,
                    props.model
                ),
                React.createElement(
                    "td",
                    null,
                    props.price
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        null,
                        "Buy Now"
                    )
                )
            )
        )
    );
}

function CarsList(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Cars"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(ListItem, { year: props.item1[0], model: props.item1[1], price: props.item1[2] }),
            React.createElement(ListItem, { year: props.item2[0], model: props.item2[1], price: props.item2[2] }),
            React.createElement(ListItem, { year: props.item3[0], model: props.item3[1], price: props.item3[2] })
        )
    );
}
function TrucksList(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Trucks"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(ListItem, { year: props.item1[0], model: props.item1[1], price: props.item1[2] }),
            React.createElement(ListItem, { year: props.item2[0], model: props.item2[1], price: props.item2[2] })
        )
    );
}
function ConvertiblesList(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Convertibles"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(ListItem, { year: props.item1[0], model: props.item1[1], price: props.item1[2] }),
            React.createElement(ListItem, { year: props.item2[0], model: props.item2[1], price: props.item2[2] }),
            React.createElement(ListItem, { year: props.item3[0], model: props.item3[1], price: props.item3[2] }),
            React.createElement(ListItem, { year: props.item4[0], model: props.item4[1], price: props.item4[2] })
        )
    );
}
function TransportingApp(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(TransportingTitle, null),
        React.createElement(CarsList, {
            item1: ["2013", "A", "$32000"],
            item2: ["2011", "B", "$4400"],
            item3: ["2016", "B", "$15500"]
        }),
        React.createElement(TrucksList, {
            item1: ["2014", "D", "$18000"],
            item2: ["2013", "E", "$5200"]
        }),
        React.createElement(ConvertiblesList, {
            item1: ["2009", "F", "$2000"],
            item2: ["2010", "G", "$6000"],
            item3: ["2012", "H", "$12500"],
            item4: ["2017", "M", "$50000"]
        })
    );
}

ReactDOM.render(React.createElement(TransportingApp, null), document.getElementById("root"));


