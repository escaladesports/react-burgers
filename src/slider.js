import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class Slider extends React.Component{
	render(){
		let {
			lineHeight,
			lineSpacing,
			width,
		} = this.props

		let yOffset = lineSpacing + lineHeight

		return (
			<Base {...this.props} css={`
				.BurgerInner{
					top: ${lineHeight / 2}px;
				}
				.BurgerInner:before{
					top: ${lineHeight + lineSpacing}px;
					transition-property: transform, opacity;
					transition-timing-function: ease;
					transition-duration: 0.15s;
				}
				.BurgerInner:after{
					top: ${lineHeight * 2 + lineSpacing * 2}px;
				}

				.BurgerActive .BurgerInner{
					transform: translate3d(0, ${yOffset}px, 0) rotate(45deg);
				}
				.BurgerActive .BurgerInner:before{
					transform: rotate(-45deg) translate3d(${width / -7}px, -${lineSpacing}px, 0);
					opacity: 0;
				}
				.BurgerActive .BurgerInner:after{
					transform: translate3d(0, ${yOffset * -2}px, 0) rotate(-90deg);
				}
			`} />
		)
	}
}

Slider.defaultProps = defaultProps

export default Slider