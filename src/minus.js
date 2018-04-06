import React from 'react'

import Base from './base'
import defaultProps from './default-props'

export class Minus extends React.Component{
	render() {
		return (
			<Base className='BurgerMinus' {...this.props}>
				<style jsx global>{`
					.BurgerMinus {
						.BurgerInner {
							&:before,
							&:after {
							transition: bottom 0.08s 0s ease-out,
											top 0.08s 0s ease-out,
											opacity 0s linear;
							}
						}

						&.BurgerActive {
							.BurgerInner {
								&:before,
								&:after {
									opacity: 0;
									transition: bottom 0.08s ease-out,
													top 0.08s ease-out,
													opacity 0s 0.08s linear;
								}
								&:before {
									top: 0;
								}

								&:after {
									bottom: 0;
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

Minus.defaultProps = defaultProps