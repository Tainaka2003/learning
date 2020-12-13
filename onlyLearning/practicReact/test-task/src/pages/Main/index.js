import React, {Component} from "react"
import Card from './../../components/Card/index'
import './styles.css'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            cards: []
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
        const {cards} = this.state;

        return (
            <div className={"main"}>
                {cards.map(card =>
                    <Card
                        img={card.img}
                        name={card.name}
                        isNew={card.isNew}
                        description={card.description}
                    />
                )}
            </div>
        )
    }
}