import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class ArrowReverse extends React.Component{
	render(){
		let width = this.props.width * .2
		return (
			<Base className='BurgerArrowReverse' {...this.props}>
				<style jsx global>{`
					.BurgerArrowReverse{
						&.BurgerActive{
							.BurgerInner {
								&:before {
									transform: translate3d(${width}px, 0, 0) rotate(45deg) scale(0.7, 1);
								}

								&:after {
									transform: translate3d(${width}px, 0, 0) rotate(-45deg) scale(0.7, 1);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

ArrowReverse.defaultProps = defaultProps

export default ArrowReverse