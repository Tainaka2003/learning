import React, {Component} from 'react'
import Form from './components/Form/index'

class App extends Component{

    state = {
        cars: [
            {name: 'Ford', year: '2018'},
            {name: 'Audi', year: '2016'}
        ],
        title: 'Привет, я с Донбаса, но продам тебе машины',
    }

    changeTitleHandler = () => {
        console.log ('Clicked');

        const newTitle = "Ничего я тебе не продам чёрт!"

        this.setState({
            title: newTitle
        })


    }

    render() {

        const cars = this.state.cars

        return (
            <div>
                <h3 style={{textAlign: 'center'}}>{this.state.title}</h3>
                <button onClick={this.changeTitleHandler} style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>Изменить</button>
                <Form name={cars[0].name} year={cars[0].year}/>
                <Form name={cars[1].name} year={cars[1].year}/>
            </div>
        )
    }
}

export default App;
