import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class CollapseReverse extends React.Component{
	render(){
		let {
			lineHeight,
			lineSpacing,
		} = this.props

		return (
			<Base typeClassName='BurgerCollapseReverse' {...this.props}>
				<style jsx global>{`
					.BurgerCollapseReverse {
						.BurgerInner {
							top: auto;
							bottom: 0;
							transition-duration: 0.13s;
							transition-delay: 0.13s;
							transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

							&:after {
								top: ${(lineSpacing * 2 + lineHeight * 2) * -1}px;
								transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
												opacity 0.1s linear;
							}

							&:before {
								transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
												transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transform: translate3d(0, ${(lineSpacing + lineHeight) * -1}px, 0) rotate(45deg);
								transition-delay: 0.22s;
								transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

								&:after {
									top: 0;
									opacity: 0;
									transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
													opacity 0.1s 0.22s linear;
								}

								&:before {
									top: 0;
									transform: rotate(90deg);
									transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
													transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

CollapseReverse.defaultProps = defaultProps