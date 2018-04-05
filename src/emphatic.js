import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class Emphatic extends React.Component{
	render() {
		let {
			lineHeight,
			lineSpacing,
			width,
			padding,
		} = this.props

		let doubleWidth = width * 2
		let negativeDoubleWidth = doubleWidth * -1

		return (
			<Base className='BurgerEmphatic' {...this.props}>
				<style jsx global>{`
					.BurgerEmphatic {
						overflow: hidden;

						.BurgerInner {
							transition: background-color 0.125s 0.175s ease-in;

							&:before {
								left: 0;
								transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
												top 0.05s 0.125s linear,
												left 0.125s 0.175s ease-in;
							}

							&:after {
								top: ${lineHeight + lineSpacing}px;
								right: 0;
								transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
												top 0.05s 0.125s linear,
												right 0.125s 0.175s ease-in;
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transition-delay: 0s;
								transition-timing-function: ease-out;
								background-color: transparent !important;

								&:before {
									left: ${negativeDoubleWidth}px;
									top: ${negativeDoubleWidth}px;
									transform: translate3d(${doubleWidth}px, ${doubleWidth}px, 0) rotate(45deg);
									transition: left 0.125s ease-out,
													top 0.05s 0.125s linear,
													transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
								}

								&:after {
									right: ${negativeDoubleWidth}px;
									top: ${negativeDoubleWidth}px;
									transform: translate3d(${negativeDoubleWidth}px, ${doubleWidth}px, 0) rotate(-45deg);
									transition: right 0.125s ease-out,
													top 0.05s 0.125s linear,
													transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

Emphatic.defaultProps = defaultProps

export default Emphatic