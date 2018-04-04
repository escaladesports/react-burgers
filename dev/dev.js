import React from 'react'
import { render } from 'react-dom'
import Img from '../src/index'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

render(
	<Img
		src='http://via.placeholder.com/500x1000'
		width={500}
		height={1000}
	/>,
	containerEl
)