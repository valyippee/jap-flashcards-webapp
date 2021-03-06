import React from "react";

class Meaning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jap: 'type a word!', meaning: '', furigana: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMeaning = this.handleChangeMeaning.bind(this);
        this.handleChangeFurigana = this.handleChangeFurigana.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.findMeaning = this.findMeaning.bind(this);
    }

    findMeaning() {
        const Dictionary = require('japaneasy');
        const dict = new Dictionary();
        const that = this;

        if (this.state.jap) {
            dict(this.state.jap).then(function(result){
                console.log("FOUND A MEANING")
                console.log(result[0]);
                that.setState({meaning: result[0].english[0], furigana: result[0].pronunciation})
            });
        }

    }

    handleChange(event) {
        this.setState({jap: event.target.value});
    }

    handleChangeMeaning(event) {
        this.setState({meaning: event.target.value});
    }

    handleChangeFurigana(event) {
        this.setState({furigana: event.target.value});
    }

    handleSubmit(event) {
        alert('A word was submitted: ' + this.state.jap);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Japanese:
                    <input type="text" value={this.state.jap} onChange={this.handleChange} onBlur={this.findMeaning} />
                    Meaning:
                    <input type="text" value={this.state.meaning} onChange={this.handleChangeMeaning} />
                    Furigana:
                    <input type="text" value={this.state.furigana} onChange={this.handleChangeFurigana} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Meaning;