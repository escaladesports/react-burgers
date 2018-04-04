import React from 'react'
import { render } from 'react-dom'
import Burger from '../src/index'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

class BurgerToggle extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	render(){
		return(
			<Burger
				active={this.state.active}
				onClick={() => this.setState({ active: !this.state.active })}
				/>
		)
	}
}

render(
	<BurgerToggle />,
	containerEl
)