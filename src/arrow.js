import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class Arrow extends React.Component{
	render(){
		let { width } = this.props

		return (
			<div className='BurgerArrow'>
				<Base {...this.props} />
				<style jsx global>{`
					.BurgerArrow{
						display: inline-block;
						& .BurgerActive{
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
			</div>
		)
	}
}

Arrow.defaultProps = defaultProps

export default Arrow