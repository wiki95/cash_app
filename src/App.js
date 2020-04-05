import React from "react";
import MyInput from "./components/input";
import MyList from "./components/list";
import { Provider } from "react-redux";
import store from "./redux/store";
import Data from "./components/data";
import AmountTaken from "./components/amount_taken";
import AmountGiven from "./components/amount_given";
import bg from "./images/bg4.jpg";

class App extends React.Component {
	state = {
		typingVal: ""
	};
	typing = e => {
		this.setState({
			typingVal: e.target.value
		});
	};
	render() {
		return (
			<Provider store={store}>
				<div style={styles.container}>
					<div style={styles.inputItem}>
						<MyInput />
						<div style={styles.list}>
							<MyList />
						</div>
					</div>
					<div style={styles.data}>
						<AmountTaken />
						<Data />
					</div>
					<div style={styles.amount_given}>
						<AmountGiven />
					</div>
				</div>
			</Provider>
		);
	}
}

const styles = {
	container: {
		display: "flex",
		padding: "20px",
		justifyContent: "center",
		backgroundImage: `url(${bg})`,
		backgroundSize: "cover"
	},
	inputItem: {
		border: "2px solid black",
		borderRadius: "10px",
		backgroundColor: "#f7e9d2",
		padding: "5px",
		margin: "10px"
	},
	list: {
		width: "200px"
	},
	data: {
		margin: "10px"
	},
	amount_given: {
		border: "2px solid black",
		borderRadius: "10px",
		backgroundColor: "#f7e9d2",
		margin: "10px",
		padding: "10px",
		width: "250px"
	}
};

export default App;
