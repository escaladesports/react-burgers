import React from 'react'

import Base from './base'
import defaultProps from './default-props'

export class Boring extends React.Component{
	render(){
		return (
			<Base className='BurgerBoring' {...this.props}>
				<style jsx global>{`
					.BurgerBoring{
						.BurgerInner {
							&,
							&:before,
							&:after {
								transition-property: none;
							}
						}

						&.BurgerActive {
							.BurgerInner {
								transform: rotate(45deg);

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

Boring.defaultProps = defaultProps