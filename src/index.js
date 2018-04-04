import React from 'react'

class Burgers extends React.Component{
	render(){
		const {
			width,
			height,
			color,
			lineHeight,
			hoverColor,
			activeColor,
			activeHoverColor,
			active,
			onClick,
		} = this.props

		const halfHeight = height / 2
		const halfLineHeight = lineHeight / 2
		const curColor = active ? activeColor : color
		const curHoverColor = active ? activeHoverColor : hoverColor

		return (
			<div role='button' className='Burger' onClick={onClick}>
				<div className='BurgerInner' />
				<style>{`
					.Burger{
						cursor: pointer;
						width: ${width}px;
						height: ${height}px;
						position: relative;
						display: inline-block;
					}
					.BurgerInner:after, .BurgerInner:before{
						content: '';
						display: block;
					}
					.BurgerInner, .BurgerInner:after, .BurgerInner:before{
						position: absolute;
						width: 100%;
						background-color: ${curColor};
						height: ${lineHeight}px;
					}
					.BurgerInner{
						top: 50%;
						margin-top: -${halfLineHeight}px;
					}
					.BurgerInner:before{
						top: -${halfHeight - halfLineHeight}px;
					}
					.BurgerInner:after{
						top: ${halfHeight - halfLineHeight}px;
					}
					.Burger:hover .BurgerInner,
					.Burger:hover .BurgerInner:before,
					.Burger:hover .BurgerInner:after{
						background-color: ${curHoverColor}
					}
				`}</style>
			</div>
		)
	}
}

Burgers.defaultProps = {
	width: 40,
	height: 24,
	lineHeight: 4,
	color: '#000',
	hoverColor: '#666',
	activeColor: '#999',
	activeHoverColor: '#000',
}

export default Burgers