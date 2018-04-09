import React from 'react'

class Template extends React.Component{
	render(){
		return(
			<main>
				<h1>
					<a href='https://github.com/escaladesports/react-burgers/'>react-burgers</a>
				</h1>
				{this.props.children}
				<style jsx>{`
					main{
						max-width: 500px;
						padding: 30px;
						margin: auto;
						text-align: center;
					}
					small{
						display: block;
					}
				`}</style>
			</main>
		)
	}
}

export default Template