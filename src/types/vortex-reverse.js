import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class VortexReverse extends React.Component{
	render() {
		return (
			<Base typeClassName='BurgerVortexReverse' {...this.props}>
				<style jsx global>{`
					.BurgerVortexReverse{
						.BurgerInner{
							transition-duration: 0.2s;
							transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);

							&:before,
							&:after {
								transition-duration: 0s;
								transition-delay: 0.1s;
								transition-timing-function: linear;
							}
							&:before {
								transition-property: top, opacity;
							}
							&:after {
								transition-property: bottom, transform;
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transform: rotate(-765deg);
								transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);

								&:before,
								&:after {
									transition-delay: 0s;
								}
								&:before {
									top: 0;
									opacity: 0;
								}
								&:after {
									bottom: 0;
									transform: rotate(-90deg);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

VortexReverse.defaultProps = defaultProps