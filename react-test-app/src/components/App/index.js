import React from 'react'
import Card from '../Card'


class App extends React.Component {
    state = {
        index: 0
    }
    render() {

        const { index } = this.state

        return <div>
            <Card 
                header="Заголовок 1"
                description="Описание 2"
            />
        </div>
    }
}

export default App