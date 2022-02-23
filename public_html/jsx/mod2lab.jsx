function getTrivia (index) {
    const trivia = [
        {
            q: "What color is the sun?",
            a: ["blue","green","yellow","black"],
            correct: 2
        },
        {
            q: "What is the capital of France?",
            a: ["Paris","Moscow","Delhi","Bogota"],
            correct: 0               
        },
        {
            q: "The value of Pi?",
            a: ["5","10.1","3.14","4 550 211"],
            correct: 2               
        },
        {
            q: "4x2?",
            a: ["2","4","13","8"],
            correct: 3               
        },
        {
            q: "The former CEO of Apple was?",
            a: ["Jones","Jons","Jobs","Jorges"],
            correct: 2               
        },
        {
            q: "Which one is a programming language?",
            a: ["a","b","c","d"],
            correct: 2               
        },
        {
            q: "Which country won the Soccer World Cup last time?",
            a: ["Germany","Brazil","Egypt","USA"],
            correct: 0               
        },
        {
            q: "What planet is closest to the sun?",
            a: ["Venus","Earth","Jupiter","Mercury"],
            correct: 3               
        },
        {
            q: "The capital of which country is Washington?",
            a: ["Salvador","Norway","Canada","USA"],
            correct: 3               
        },
        {
            q: "Who is the current Disc Golf World Champion?",
            a: ["Wysock","Wysocka","Wysocki","Wysockos"],
            correct: 2               
        }
    ]
    return trivia[index];    
}

class QuestionBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="w3-container w3-half">
                <div className="w3-center w3-padding w3-large w3-red">{this.props.question}</div>
                <div className="w3-block w3-button" onClick = {() => this.props.handleClick(0)}>{this.props.answer[0]}</div>
                <div className="w3-block w3-button" onClick = {() => this.props.handleClick(1)}>{this.props.answer[1]}</div>
                <div className="w3-block w3-button" onClick = {() => this.props.handleClick(2)}>{this.props.answer[2]}</div>
                <div className="w3-block w3-button" onClick = {() => this.props.handleClick(3)}>{this.props.answer[3]}</div>
            </div>
        );
    }      
}

class ResultBlock  extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="w3-container w3-half">
                <div></div>
                <div className="w3-panel">Correct: {this.props.correctCount}</div>
                <div></div>            
                <div className="w3-panel">Incorrect: {this.props.incorrectCount}</div>
                <div></div>
            </div>
        );
    }     
}

class TriviaApp extends React.Component {
    constructor(props){
        super(props);
        this.triviaIndex = 0;
        this.state = {q:"",a:["","","",""],corrCount:0,incorrCount:0};
        this.handleClick = this.handleClick.bind(this)        
    }
    componentDidMount () {
        var nextTrivia = getTrivia (this.triviaIndex);
        this.setState ({
            q:nextTrivia.q,
            a:nextTrivia.a
        });
    }
    handleClick(selection){
        const MAX_INDEX = 9;
        // IF not trivia ended THEN
        if (this.triviaIndex <= MAX_INDEX) {
            // Get current trivia question
            var currentTrivia = getTrivia (this.triviaIndex);
            // IF answer is correct THEN Increment correct counter state
            if (currentTrivia.correct == selection) this.setState({corrCount: this.state.corrCount+1});
            // ELSE increment incorrect counter state
            else this.setState({incorrCount: this.state.incorrCount+1});
            // IF not the end of trivia THEN
            if (this.triviaIndex < MAX_INDEX) {
                // Get next trivia question
                this.triviaIndex = this.triviaIndex+1;
                currentTrivia = getTrivia (this.triviaIndex);
                // Update trivia state
                this.setState ({
                    q: currentTrivia.q,
                    a: currentTrivia.a
                });
            }
            // ELSE trivia end
            else {this.triviaIndex++; this.setState ({q: "FINAL RESULT", a: ["","","",""]});}
        }
    }    
    render(){
        return (
            <div className = "w3-row">
                <QuestionBlock 
                    question={this.state.q}
                    answer={this.state.a}
                    handleClick = {this.handleClick}
                />
                <ResultBlock
                    correctCount={this.state.corrCount}
                    incorrectCount={this.state.incorrCount}
                />
            </div>
        );
    }    
}

ReactDOM.render(
    <TriviaApp />,
    document.getElementById("root")
)
