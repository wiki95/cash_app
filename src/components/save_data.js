import React from "react";
import { connect } from "react-redux";
//import { saveData } from "../api";
import { emptyList } from "../redux/actions/inputAction";
import { emptyTaken } from "../redux/actions/amount_taken";
import { emptyGiven } from "../redux/actions/amount_given";

class SaveData extends React.Component {
	onSave = () => {
		// saveData(data).then((res) => {
		// 	console.log(res);
		// });
		const takenRaw = document.getElementsByClassName("denom");
		let takenFilter = {};
		for (let i = 0; i < takenRaw.length; i++) {
			if (
				takenRaw[i].value !== "" &&
				takenRaw[i].value !== "0" &&
				parseInt(takenRaw[i].value) > 0
			) {
				takenFilter[takenRaw[i].name] = takenRaw[i].value;
			}
		}
		localStorage.setItem("takenAmount", JSON.stringify(takenFilter));
	};
	onReset = (e) => {
		e.preventDefault();
		this.props.emptyList();
		document.getElementsByClassName("total_bill")[0].value = "";
		this.props.emptyTaken();
		document.getElementById("total_amount").value = "";

		for (let i = 0; i < document.getElementsByClassName("denom").length; i++) {
			document.getElementsByClassName("denom")[i].value = "";
		}
		this.props.onReset();
		this.props.emptyGiven();
		document.getElementsByClassName("total_bill")[0].focus();
	};
	render() {
		return (
			<div style={styles.container}>
				<button onClick={this.onReset} style={styles.button}>
					Reset
				</button>
				<button onClick={this.onSave} style={styles.button}>
					Save And Reset
				</button>
			</div>
		);
	}
}
const styles = {
	container: {
		marginTop: "10px",
		display: "flex",
		justifyContent: "space-between",
	},
	button: {
		cursor: "pointer",
		border: "1px solid black",
		borderRadius: "3px",
		fontSize: "18px",
	},
};

const mapStateToProps = (state) => ({
	addList: state.addList.listData,
});

export default connect(mapStateToProps, { emptyList, emptyTaken, emptyGiven })(
	SaveData
);
