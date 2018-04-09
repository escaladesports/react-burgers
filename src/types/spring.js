import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class Spring extends React.Component{
	render() {
		let {
			lineHeight,
			lineSpacing,
		} = this.props
		let top = lineHeight + lineSpacing

		return (
			<Base className='BurgerSpring' {...this.props}>
				<style jsx global>{`
					.BurgerSpring{
						.BurgerInner {
							top: ${lineHeight / 2}px;
							transition: background-color 0s 0.13s linear;

							&:before {
								top: ${top}px;
								transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
												transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
							}

							&:after {
								top: ${top * 2}px;
								transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
												transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transition-delay: 0.22s;
								background-color: transparent;

								&:before {
									top: 0;
									transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
													transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
									transform: translate3d(0, ${top}px, 0) rotate(45deg);
								}

								&:after {
									top: 0;
									transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
													transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
									transform: translate3d(0, ${top}px, 0) rotate(-45deg);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

Spring.defaultProps = defaultProps