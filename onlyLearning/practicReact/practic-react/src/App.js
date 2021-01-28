import React, {Component} from 'react'
import Form from './components/Form/index'

class App extends Component{

    state = {
        cars: [
            {
                count: 0,
                name: 'Ford',
                year: '2018'},
            {
                count: 1,
                name: 'Audi',
                year: '2016'}
        ],

        title: 'Привет, я с Донбаса, но продам тебе машины',

    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            title: newTitle
        })
    }

    render() {

        const cars = this.state.cars

        return (
            <div>
                <h3
                    style={{textAlign: 'center'}}>
                    {this.state.title}
                </h3>
                <button
                    onClick={this.changeTitleHandler.bind(this, 'Не продам я тебе ничего, чертила!')}
                    style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
                    Ладно
                </button>
                <Form
                    name={cars[0].name}
                    year={cars[0].year}
                    onChange={this.changeTitleHandler.bind(this, 'Захотел ' + cars[0].name + ' ' + cars[0].year + ' года выпуска? Не получишь!')}
                />
                <Form
                    name={cars[1].name}
                    year={cars[1].year}
                    onChange={() => { this.changeTitleHandler('Захотел ' + cars[1].name + ' ' + cars[1].year + ' года выпуска? Не получишь!')}}
                />
            </div>
        )
    }
}

export default App;
