import React from 'react'

import defaultProps from './default-props'

class Base extends React.Component{
	render(){
		let {
			width,
			lineHeight,
			color,
			hoverColor,
			activeColor,
			activeHoverColor,
			active,
			onClick,
			borderRadius,
			lineSpacing,
			css,
		} = this.props

		if (!activeColor) activeColor = color
		if (!hoverColor) hoverColor = color
		if (!activeHoverColor) activeHoverColor = hoverColor

		const height = lineSpacing * 2 + lineHeight * 3
		const halfHeight = height / 2
		const halfLineHeight = lineHeight / 2
		const curColor = active ? activeColor : color
		const curHoverColor = active ? activeHoverColor : hoverColor

		return (
			<div role='button' className={`Burger ${active ? 'BurgerActive' : ''}`} onClick={onClick}>
				<div className='BurgerInner' />
				<style dangerouslySetInnerHTML={{ __html: `
					.Burger{
						cursor: pointer;
						width: ${width}px;
						height: ${height}px;
						position: relative;
						display: inline-block;
					}
					.BurgerInner:before,
					.BurgerInner:after{
						content: '';
						display: block;
					}
					.BurgerInner,
					.BurgerInner:before,
					.BurgerInner:after{
						position: absolute;
						width: 100%;
						background-color: ${curColor};
						height: ${lineHeight}px;
						border-radius: ${borderRadius}px;
						transition-property: transform;
						transition-duration: 0.15s;
						transition-timing-function: ease;
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

					${css}
				`}} />
			</div>
		)
	}
}

Base.defaultProps = defaultProps

export default Base