import React from "react";

class SearchBar extends React.Component {
	state = {
		term: "ANOS 80"
	};

	handleChange = (event) => {
		this.setState({
			term: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleFormSubmit(this.state.term);
	};

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div>
					<form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" onChange={this.handleChange} value={this.state.term} type="text" placeholder="Digite o nome do video" aria-label="Search"></input>
						<button onClick={this.handleSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}
export default SearchBar;
