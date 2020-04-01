import React from "react";
import { connect } from "react-redux";
import { pushItem } from "../redux/actions/inputAction";
import { calculate_remaining } from "../redux/actions/amount_taken";

class MyInput extends React.Component {
	state = {
		inputValue: ""
	};
	onChange = e => {
		//let numbers = /^[0-9]+$/;
		//if (e.target.value.match(numbers) !== null || e.target.value === "") {
		this.setState({
			inputValue: e.target.value
		});
		//}
	};
	onPressEnter = e => {
		const { inputValue } = this.state;
		const { pushItem, addList } = this.props;
		var total = 0;
		total = total + parseFloat(inputValue);
		if (e.key === "Enter") {
			if (inputValue !== "") {
				addList &&
					addList.forEach(element => {
						total = parseFloat(total) + parseFloat(element.title);
						console.log(total);
					});
				this.props.calculate_remaining(
					parseFloat(this.props.total) + parseFloat(inputValue),
					null
				);

				pushItem(inputValue, total);
				this.setState({
					inputValue: ""
				});
			}
		}
	};
	render() {
		return (
			<div style={{ display: "flex" }}>
				<input
					style={styles.input}
					placeholder="Actual Amount"
					type="number"
					onKeyPress={this.onPressEnter}
					value={this.state.inputValue}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}
const styles = {
	input: { height: "30px	", width: "200px", margin: "5px" }
};
const mapStateToProps = state => ({
	addList: state.addList.listData,
	total: state.addList.total
});
export default connect(mapStateToProps, { pushItem, calculate_remaining })(
	MyInput
);
