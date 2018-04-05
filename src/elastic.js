import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class Elastic extends React.Component{
	render() {
		let {
			lineHeight,
			lineSpacing,
		} = this.props

		let yOffset = lineSpacing + lineHeight

		return (
			<div className='BurgerElastic'>
				<Base {...this.props} />
				<style jsx global>{`
					.BurgerElastic {
						.BurgerInner {
							top: ${lineHeight / 2}px;
							transition-duration: 0.275s;
							transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

							&:before {
								top: ${lineHeight + lineSpacing}px;
								transition: opacity 0.125s 0.275s ease;
							}

							&:after {
								top: ${(lineHeight * 2) + (lineSpacing * 2)}px;
								transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
							}
						}

						.BurgerActive {
							.BurgerInner {

								transform: translate3d(0, ${yOffset}px, 0) rotate(135deg);
								transition-delay: 0.075s;

								&:before {
									transition-delay: 0s;
									opacity: 0;
								}

								&:after {
									transform: translate3d(0, ${yOffset * -2}px, 0) rotate(-270deg);
									transition-delay: 0.075s;
								}
							}
						}
					}
				`}</style>
			</div>
		)
	}
}

Elastic.defaultProps = defaultProps

export default Elastic