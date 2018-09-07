import React from 'react'

export default class Base extends React.Component{
	render(){
		let {
			width,
			lineHeight,
			color,
			active,
			onClick,
			borderRadius,
			lineSpacing,
			padding,
			className,
			children,
		} = this.props

		const height = lineSpacing * 2 + lineHeight * 3;
		const widthWithPx = this.getSizeWithPx(width);
		const heightWithPx = this.getSizeWithPx(height);

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
					}

					.BurgerBox{
						width: ${width};
						height: ${height};
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
				`}</style>
			</button>
		)
	}
	getSizeWithPx = (size) => {
		isNaN(parseInt(size)) ? size : `${size}px`;
	}
}