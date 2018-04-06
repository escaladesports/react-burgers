import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class Stand extends React.Component{
	render() {
		return (
			<Base className='BurgerStand' {...this.props}>
				<style jsx global>{`
					.BurgerStand {
						.BurgerInner {
							transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
											background-color 0s 0.075s linear;

							&:before {
								transition: top 0.075s 0.075s ease-in,
												transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
							}
							&:after {
								transition: bottom 0.075s 0.075s ease-in,
												transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transform: rotate(90deg);
								background-color: transparent;
								transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),
												background-color 0s 0.15s linear;

								&:before {
									top: 0;
									transform: rotate(-45deg);
									transition: top 0.075s 0.1s ease-out,
													transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
								}
								&:after {
									bottom: 0;
									transform: rotate(45deg);
									transition: bottom 0.075s 0.1s ease-out,
													transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

Stand.defaultProps = defaultProps