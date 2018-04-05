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
		} = this.props

		if (!activeColor) activeColor = color
		if (!hoverColor) hoverColor = color
		if (!activeHoverColor) activeHoverColor = hoverColor

		const height = lineSpacing * 2 + lineHeight * 3
		const curColor = active ? activeColor : color
		const curHoverColor = active ? activeHoverColor : hoverColor

		return (
			<div role='button' className={`Burger ${active ? 'BurgerActive' : ''}`} onClick={onClick}>
				<div className='BurgerInner' />
				<style jsx global>{`
					.Burger{
						cursor: pointer;
						width: ${width}px;
						height: ${height}px;
						position: relative;
						display: inline-block;

						&:hover{
							.BurgerInner{
								&,
								&:before,
								&:after{
									background-color: ${curHoverColor}
								}
							}
						}
					}

					.BurgerInner{
						top: 50%;
						margin-top: ${(lineHeight / 2) * -1}px;

						&:before,
						&:after{
							content: '';
							display: block;
						}

						&,
						&:before,
						&:after{
							position: absolute;
							width: 100%;
							background-color: ${curColor};
							height: ${lineHeight}px;
							border-radius: ${borderRadius}px;
							transition-property: transform;
							transition-duration: 0.15s;
							transition-timing-function: ease;
						}

						&:before{
							top: ${(lineSpacing + lineHeight) * -1}px;
						}

						&:after{
							bottom: ${(lineSpacing + lineHeight) * -1}px;
						}
					}
				`}</style>
			</div>
		)
	}
}

Base.defaultProps = defaultProps

export default Base