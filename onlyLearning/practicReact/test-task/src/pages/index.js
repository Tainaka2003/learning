import React, {Component} from "react"
import "./../styles/styles.less"


export default class Blocks extends Component {
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
                            items: result. cards
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
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if(!isLoaded) {
            return <p>Success</p>
        } else {
            return (
                <div>
                    {items.map(item => (
                        <div key={item.name}>
                            <img src={item.img} alt="sport"/>
                            {item.name}
                            {item.description}
                        </div>
                    ))}
                </div>
            )
        }
    }
}