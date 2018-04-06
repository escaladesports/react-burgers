import React from 'react'

import Base from '../base'
import defaultProps from '../default-props'

export default class ArrowTurn extends React.Component{
	render(){
		return (
			<Base className='BurgerArrowTurn' {...this.props}>
				<style jsx global>{`
					.BurgerArrowTurn{
						&.BurgerActive{
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
			</Base>
		)
	}
}

ArrowTurn.defaultProps = defaultProps