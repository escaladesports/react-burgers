import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class PerspectiveXYReverse extends React.Component{
	render() {
		let {
			width,
			lineHeight,
			lineSpacing,
		} = this.props
		let offset = lineHeight + lineSpacing
		return (
			<Base typeClassName='BurgerPerspectiveXYReverse' {...this.props}>
				<style jsx global>{`
					.BurgerPerspectiveXYReverse{
						.BurgerBox{
							perspective: ${width * 2}px;
						}

						.BurgerInner {
							transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
											background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);

							&:before,
							&:after {
								transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
							}
						}

						&.BurgerActive {
							.BurgerInner {
								background-color: transparent;
								transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);

								&:before {
									transform: translate3d(0, ${offset}px, 0) rotate(45deg);
								}
								&:after {
									transform: translate3d(0, ${offset * -1}px, 0) rotate(-45deg);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

PerspectiveXYReverse.defaultProps = defaultProps