import React from 'react'
import { render } from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import titleCase from 'title-case'

import Template from './template'
import Burger from '../src/index'
import defaultProps from '../src/default-props'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

class BurgerToggle extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			type: 'Slider',
			...defaultProps,

		}
		this.changeProp = this.changeProp.bind(this)
	}
	changeProp(e){
		let val = e.target.value
		if(e.target.type === 'number'){
			val = Number(val)
		}
		this.setState({
			[e.target.name]: val,
			active: false,
		})
	}
	render(){
		const CurBurger = Burger[this.state.type]
		const props = []
		for(let i in defaultProps){
			if(this.state[i] !== defaultProps[i]){
				let str = `${i}=`
				if(typeof this.state[i] === 'string'){
					str += `'${this.state[i]}'`
				}
				else{
					str += `{${this.state[i]}}`
				}
				props.push(str)
			}
		}

		return(
			<section>
				<label>
					<span>Type:</span>
					<select
						name='type'
						onChange={this.changeProp}
						value={this.state.type}>
						{Object.keys(Burger).map(opt => (
							<option key={`opt-${opt}`}>{opt}</option>
						))}
					</select>
				</label>
				{Object.keys(defaultProps).map(name => {
					if(name === 'active') return null
					let val = defaultProps[name]
					return (
						<label key={`label-${name}`}>
							<span>{titleCase(name)}:</span>
							<input
								type={typeof val}
								name={name}
								value={this.state[name]}
								onChange={this.changeProp}
							/>
						</label>
					)
				})}
				<div className='buttonCont'>
					<CurBurger
						{...this.state}
						onClick={() => this.setState({ active: !this.state.active })}
					/>
				</div>
				<div className='code'>
					<SyntaxHighlighter language='jsx' style={docco}>{`import { ${this.state.type} } from 'react-burgers'

...

<${this.state.type}${props.length ? '\n   ' + props.join('\n   ') : ''} />`}</SyntaxHighlighter>
				</div>
				<style jsx>{`
					.buttonCont{
						text-align: center;
						margin-top: 23px;
					}
					label{
						display: block;
						margin-bottom: 7px;
						span{
							display: inline-block;
							width: 130px;
							text-align: right;
							padding-right: 10px;
							font-size: .9em;
						}
					}
					select, input{
						width: 120px;
					}
					.code{
						text-align: left;
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