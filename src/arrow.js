import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class Arrow extends React.Component{
	render(){
		let { width } = this.props
		return (
			<Base className='BurgerArrow' {...this.props}>
				<style jsx global>{`
					.BurgerArrow{
						&.BurgerActive{
							.BurgerInner{
								&:before{
									transform: translate3d(${width * -0.2}px, 0, 0) rotate(-45deg) scale(0.7, 1);
								}
								&:after{
									transform: translate3d(${width * -0.2}px, 0, 0) rotate(45deg) scale(0.7, 1);
								}
							}
						}
					}
				`}</style>
			</Base>
		)
	}
}

Arrow.defaultProps = defaultProps

export default Arrow