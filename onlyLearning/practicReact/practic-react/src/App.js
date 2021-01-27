import React, {Component} from 'react'
import Form from './components/Form/index'

class App extends Component{
    render() {
        return (
            <div>
                <Form name={'Ford'} year={'2018'}/>
                <Form name={'Audi'} year={'2016'}/>
            </div>
        )
    }
}

export default App
