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
			padding,
			className,
			children,
		} = this.props

		if (!activeColor) activeColor = color
		if (!hoverColor) hoverColor = color
		if (!activeHoverColor) activeHoverColor = hoverColor

		const height = lineSpacing * 2 + lineHeight * 3

		const classes = ['Burger']
		if(active) classes.push('BurgerActive')
		if(className) classes.push(className)

		return (
			<button className={classes.join(' ')} onClick={onClick}>
				<div className='BurgerBox'>
					<div className='BurgerInner' />
				</div>
				{children}
				<style jsx global>{`
					.Burger{
						padding: ${padding};
						display: inline-block;
						cursor: pointer;

						font: inherit;
						color: inherit;
						text-transform: none;
						background-color: transparent;
						border: 0;
						margin: 0;
						overflow: visible;
						outline: 0;

						&:hover{
							.BurgerInner{
								&,
								&:before,
								&:after{
									background-color: ${hoverColor}
								}
							}
						}
					}

					.BurgerBox{
						width: ${width}px;
						height: ${height}px;
						display: inline-block;
						position: relative;
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
							background-color: ${color};
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

					.BurgerActive{
						.BurgerInner{
							&,
							&:before,
							&:after{
								background-color: ${activeColor};
							}
						}
						&:hover{
							.BurgerInner{
								&,
								&:before,
								&:after{
									background-color: ${activeHoverColor}
								}
							}
						}
					}
				`}</style>
			</button>
		)
	}
}

Base.defaultProps = defaultProps

export default Base