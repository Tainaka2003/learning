import React, {Component} from "react"
import Card from './../../components/Card/styles.css'
import './styles.css'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://dev-test-black.ru/testTask/data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                            isLoaded: true,
                        cards: result.cards
                        }
                    );
                },
                (error) => {
                    this.state({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, cards} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if(!isLoaded) {
            return <p>Success</p>
        } else {
            return (
                <div>
                    {cards
                        .map(cards => (
                            <Card />
                    ))}
                </div>
            )
        }
    }
}