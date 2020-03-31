import React from "react";
import MyInput from "./components/input";
import MyList from "./components/list";
import { Provider } from "react-redux";
import store from "./redux/store";
import Data from "./components/data";
import AmountTaken from "./components/amount_taken";

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
				</div>
			</Provider>
		);
	}
}

const styles = {
	container: {
		display: "flex",
		padding: "20px",
		float: "left"
	},
	inputItem: {
		backgroundColor: "#f7e9d2",
		border: "2px solid black",
		padding: "5px",
		margin: "5px"
	},
	list: {
		width: "200px"
	},
	data: {
		margin: "5px"
	}
};

export default App;
