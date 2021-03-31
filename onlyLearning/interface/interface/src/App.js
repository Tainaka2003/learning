import React, {Component} from "react";
import Sorting from "./components/Sorting";
import Filters from "./components/Filters";
import Card from "./components/Card";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [
                {
                    caption: 'Alpha',
                    class: 'A',
                    register3: '',
                    register4: '',
                    register5: '',
                    register6: '',
                },
                {
                    caption: 'Beta',
                    class: 'B',
                    register3: '',
                    register4: '',
                    register5: '',
                    register6: '',
                },
                {
                    caption: 'Gamma',
                    class: 'G',
                    register3: '',
                    register4: '',
                    register5: '',
                    register6: '',
                },
                {
                    caption: 'Delta',
                    class: 'D',
                    register3: '',
                    register4: '',
                    register5: '',
                },
                {
                    caption: 'Epsilon',
                    class: 'E',
                    register3: '',
                    register4: '',
                    register5: '',
                }
            ],
        }
    }

    render() {
        return(
        <div
            className="App"
        >
            <div
                className="left"
            >
                <Filters />
            </div>
            <div
                className="right"
            >
                <div
                    className="up"
                >
                    <Sorting />
                </div>
                <div
                    className="down"
                >
                    {this.state.cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                caption={card.caption}
                                class={card.class}
                                register3={card.register3}
                                register4={card.register4}
                                register5={card.register5}
                                register6={card.register6}/>
                                )
                            },
                        )
                    }
                </div>
            </div>
        </div>
        )
    }
}

export default App;
