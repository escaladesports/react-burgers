import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class Boring extends React.Component{
	render(){
		return (
			<div className='BurgerBoring'>
				<Base {...this.props} />
				<style jsx global>{`
					.BurgerBoring{
						display: inline-block;
						.BurgerInner {
							&,
							&:before,
							&:after {
								transition-property: none;
							}
						}

						.BurgerActive {
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
			</div>
		)
	}
}

Boring.defaultProps = defaultProps

export default Boring