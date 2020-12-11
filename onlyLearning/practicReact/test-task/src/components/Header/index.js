import React, {Component} from "react"
import Svg from './svg/svg';
import './styles.css'

export default class Header extends Component {
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
                            userData: result.userData
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
        const {error, isLoaded, userData} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Success</p>
        } else {
            return (
                <div>
                    <div>
                        <Svg />
                    </div>
                    <div>
                        <h2>Hi {userData.name} Here’s your weekly updates 👀️</h2>
                    </div>
                </div>
            )
        }
    }
}