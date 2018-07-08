class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOptionOne = this.handleDeleteOptionOne.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: props.options
		};
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	// handleDeleteOptionOne(optionToRemove) {
	// 	this.setState((prevState) => ({
	//         options: prevState.options.filter((option) => optionToRemove !== option)
	//     }))
	// }

	handleDeleteOptionOne(optionToRemove) {
		this.setState((prevState) => {
			return {
				options: prevState.options.filter((option) => optionToRemove !== option)
			};
		});
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter some value inside!';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exist';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}

	// pick 1 option to be alerted
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOptionOne={this.handleDeleteOptionOne}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision App'
};

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.map((option) => (
				<Option key={option} optionText={option} handleDeleteOptionOne={props.handleDeleteOptionOne} />
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
				// Why we cannot just use {props.handle...(props.optionText)} ?
				/* Because you're invoking the function in the first example 
            meaning you're passing its return value to the onClick handler 
            which won't work. onClick requires a reference to a function, 
            so you need to pass it a function and not the return value of one */
				onClick={(e) => {
					props.handleDeleteOptionOne(props.optionText);
				}}
			>
				remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));
	}
	render() {
		return (
			<div>
				{this.state.error && <p> {this.state.error} </p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

const Action = (props) => {
	return (
		<div>
			<div>
				<button onClick={props.handlePick} disabled={!props.hasOptions}>
					What should I do?
				</button>
			</div>
		</div>
	);
};

/* stateless functional component */
// Useful for component that only uses props
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age} </p>
//         </div>
//     )
// }

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
