import React from 'react'
import { render } from 'react-dom'
import { ElasticReverse as Burger } from '../src/index'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

class BurgerToggle extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			active: false
		}
	}
	render(){
		return(
			<div>
				<Burger
					active={this.state.active}
					onClick={() => this.setState({ active: !this.state.active })}
				/>
			</div>
		)
	}
}

render(
	<BurgerToggle />,
	containerEl
)