"use strict";

function TransportingTitle(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "Welcome to React Transportation"
        ),
        "The best place to buy vehicles online",
        React.createElement("p", null),
        React.createElement(
            "h2",
            null,
            "Choose Options"
        ),
        React.createElement(
            "p",
            null,
            "New Only",
            React.createElement("input", { type: "checkbox", checked: true })
        ),
        React.createElement(
            "p",
            null,
            "Select Type",
            React.createElement(
                "select",
                null,
                React.createElement(
                    "option",
                    { value: "All" },
                    "All"
                ),
                React.createElement(
                    "option",
                    { value: "Cars" },
                    "Cars"
                ),
                React.createElement(
                    "option",
                    { value: "Trucks" },
                    "Trucks"
                ),
                React.createElement(
                    "option",
                    { value: "Convertibles" },
                    "Convertibles"
                )
            )
        )
    );
}


