import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class SliderReverse extends React.Component{
	render(){
		let {
			lineHeight,
			lineSpacing,
			width,
		} = this.props

		let yOffset = lineSpacing + lineHeight

		return (
			<Base typeClassName='BurgerSliderReverse' {...this.props}>
				<style jsx global>{`
					.BurgerSliderReverse{
						.BurgerInner {
							top: ${lineHeight / 2}px;

							&:before {
								top: ${yOffset}px;
								transition-property: transform, opacity;
								transition-timing-function: ease;
								transition-duration: 0.15s;
							}
							&:after {
								top: ${yOffset * 2}px;
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transform: translate3d(0, ${yOffset}px, 0) rotate(-45deg);

								&:before {
									transform: rotate(45deg) translate3d(${width / 7}px, ${lineSpacing * -1}px, 0);
									opacity: 0;
								}
								&:after {
									transform: translate3d(0, ${yOffset * -2}px, 0) rotate(90deg);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

SliderReverse.defaultProps = defaultProps