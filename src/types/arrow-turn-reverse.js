import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class ArrowTurnReverse extends React.Component{
	render(){
		return (
			<Base className='BurgerArrowTurnReverse' {...this.props}>
				<style jsx global>{`
					.BurgerArrowTurnReverse{
						&.BurgerActive{
							.BurgerInner {
								transform: rotate(-180deg);
								&:before {
									transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
								}
								&:after {
									transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

ArrowTurnReverse.defaultProps = defaultProps