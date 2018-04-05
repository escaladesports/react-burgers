import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class ArrowTurn extends React.Component{
	render(){
		return (
			<div className='BurgerArrowTurn'>
				<Base {...this.props} />
				<style jsx global>{`
					.BurgerArrowTurn{
						display: inline-block;

						.BurgerActive{
							.BurgerInner {
								transform: rotate(-180deg);

								&:before {
									transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
								}

								&:after {
									transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
								}
							}
						}
					}
				`}</style>
			</div>
		)
	}
}

ArrowTurn.defaultProps = defaultProps

export default ArrowTurn