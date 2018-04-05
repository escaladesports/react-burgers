import React from 'react'

import Base from './base'
import defaultProps from './default-props'

class ArrowAlt extends React.Component{
	render(){
		let {
			width,
		} = this.props

		return (
			<div className='BurgerArrowAlt'>
				<Base {...this.props} />
				<style jsx global>{`
					.BurgerArrowAlt{
						display: inline-block;

						.BurgerInner {
							&:before {
								transition: top 0.1s 0.1s ease,
								transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
							}

							&:after {
								transition: bottom 0.1s 0.1s ease,
								transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
							}
						}

						.BurgerActive {
							.BurgerInner {
								&:before {
									top: 0;
									transform: translate3d(${width * -0.2}px, ${width * -0.25}px, 0) rotate(-45deg) scale(0.7, 1);
									transition: top 0.1s ease,
										transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
								}

								&:after {
									bottom: 0;
									transform: translate3d(${width * -0.2}px, ${width * 0.25}px, 0) rotate(45deg) scale(0.7, 1);
									transition: bottom 0.1s ease,
										transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
								}
							}
						}
					}
				`}</style>
			</div>
		)
	}
}

ArrowAlt.defaultProps = defaultProps

export default ArrowAlt