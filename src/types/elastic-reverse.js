import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class ElasticReverse extends React.Component{
	render() {
		let {
			lineHeight,
			lineSpacing,
		} = this.props

		let yOffset = lineSpacing + lineHeight

		return (
			<Base typeClassName='BurgerElasticReverse' {...this.props}>
				<style jsx global>{`
					.BurgerElasticReverse {
						.BurgerInner {
							top: lineHeight / 2;
							transition-duration: 0.275s;
							transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

							&:before {
								top: ${yOffset}px;
								transition: opacity 0.125s 0.275s ease;
							}

							&:after {
								top: ${yOffset * 2}px;
								transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transform: translate3d(0, ${yOffset}px, 0) rotate(-135deg);
								transition-delay: 0.075s;

								&:before {
									transition-delay: 0s;
									opacity: 0;
								}

								&:after {
									transform: translate3d(0, ${yOffset * -2}px, 0) rotate(270deg);
									transition-delay: 0.075s;
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

ElasticReverse.defaultProps = defaultProps