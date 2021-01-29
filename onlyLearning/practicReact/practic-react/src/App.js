import React, { Component } from 'react'
import Form from './components/Form/index'

class App extends Component{

    state = {
        cars: [
            {
                count: 0,
                name: 'Ford',
                year: '2018'
            },
            {
                count: 1,
                name: 'Audi',
                year: '2016'
            }
        ],

        title: 'Привет, я с Донбаса, но продам тебе машины',
        showCars: false,

    }

    onChangeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    onDeleteName(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        })
    }

    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }

    render() {

        const cars = this.state.cars //???

        return (
            <div>
                <h3
                    style={{ textAlign: 'center' }}>
                    {this.state.title}
                </h3>

                <button
                    onClick={this.toggleCarsHandler}
                    style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
                    Ладно
                </button>

                { this.state.showCars
                    ? this.state.cars.map((car, index) => {
                    return(
                        <Form
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                            onDeleteName={this.onDeleteName.bind(this, index)}/>
                    )
                })
                    : null
                }

                    {/*<Form*/}
                    {/*    name={cars[0].name}*/}
                    {/*    year={cars[0].year}*/}
                    {/*    onChange=*/}
                    {/*        {this.changeTitleHandler.bind(this, 'Захотел ' + cars[0].name + ' ' + cars[0].year + ' года выпуска? Не получишь!')}*/}
                    {/*/>*/}
                    {/*<Form*/}
                    {/*    name={cars[1].name}*/}
                    {/*    year={cars[1].year}*/}
                    {/*    onChange={() =>*/}
                    {/*    { this.changeTitleHandler('Захотел ' + cars[1].name + ' ' + cars[1].year + ' года выпуска? Не получишь!')}}*/}
                    {/*/>*/}



                    </div>
                    )
                }
                    }

                    export default App;
