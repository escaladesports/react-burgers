import React from 'react'
import { render } from 'react-dom'
import Template from './template'
import Burger from '../src/index'

console.log(Burger)

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

class BurgerToggle extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			active: false,
			type: 'Slider',
		}
		this.typeChange = this.typeChange.bind(this)
	}
	typeChange(){

	}
	render(){
		const CurBurger = Burger[this.state.type]
		return(
			<section>
				<label>
					<span>Type:</span>
					<select onChange={this.typeChange}>
						{Object.keys(Burger).map(opt => (
							<option>{opt}</option>
						))}
					</select>
				</label>
				<div className='buttonCont'>
					<CurBurger
						active={this.state.active}
						onClick={() => this.setState({ active: !this.state.active })}
					/>
				</div>
				<style jsx>{`
					.buttonCont{
						text-align: center;
						margin-top: 30px;
					}
					label{
						span{
							display: inline-block;
							width: 60px;
						}
					}
				`}</style>
			</section>
		)
	}
}

render(
	<Template>
		<BurgerToggle />
	</Template>,
	containerEl
)