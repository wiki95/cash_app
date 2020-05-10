import React from "react";
import { connect } from "react-redux";
import { emptyList } from "../redux/actions/inputAction";
import { emptyTaken } from "../redux/actions/amount_taken";
import { emptyGiven } from "../redux/actions/amount_given";
import { saveData } from "../api";
import { message } from "antd";

class SaveData extends React.Component {
	onSave = () => {
		const mode = this.props.switchOn;
		//// all of our data to store in backend ////
		const userId = document.getElementById("user_id").value;
		const totalBill = this.props.total;
		const listData = this.props.addList;
		const totalTaken = this.props.toTake;
		const t_ft = document.getElementsByClassName("denom")[0].value;
		const t_ot = document.getElementsByClassName("denom")[1].value;
		const t_fh = document.getElementsByClassName("denom")[2].value;
		const t_oh = document.getElementsByClassName("denom")[3].value;
		const t_fif = document.getElementsByClassName("denom")[4].value;
		const t_twe = document.getElementsByClassName("denom")[5].value;
		const t_ten = document.getElementsByClassName("denom")[6].value;
		const t_fiv = document.getElementsByClassName("denom")[7].value;
		const t_two = document.getElementsByClassName("denom")[8].value;
		const t_one = document.getElementsByClassName("denom")[9].value;
		const modeGiven = mode ? "Manual" : "Auto";
		const totalGiven =
			document.getElementById("total_given_self").value || this.props.toGive;

		const g_ft = mode
			? document.getElementsByClassName("denomGiven")[0].value
			: document.getElementsByClassName("denomGivenAuto")[0].innerHTML;
		const g_ot = mode
			? document.getElementsByClassName("denomGiven")[1].value
			: document.getElementsByClassName("denomGivenAuto")[1].innerHTML;
		const g_fh = mode
			? document.getElementsByClassName("denomGiven")[2].value
			: document.getElementsByClassName("denomGivenAuto")[2].innerHTML;
		const g_oh = mode
			? document.getElementsByClassName("denomGiven")[3].value
			: document.getElementsByClassName("denomGivenAuto")[3].innerHTML;
		const g_fif = mode
			? document.getElementsByClassName("denomGiven")[4].value
			: document.getElementsByClassName("denomGivenAuto")[4].innerHTML;
		const g_twe = mode
			? document.getElementsByClassName("denomGiven")[5].value
			: document.getElementsByClassName("denomGivenAuto")[5].innerHTML;
		const g_ten = mode
			? document.getElementsByClassName("denomGiven")[6].value
			: document.getElementsByClassName("denomGivenAuto")[6].innerHTML;
		const g_fiv = mode
			? document.getElementsByClassName("denomGiven")[7].value
			: document.getElementsByClassName("denomGivenAuto")[7].innerHTML;
		const g_two = mode
			? document.getElementsByClassName("denomGiven")[8].value
			: document.getElementsByClassName("denomGivenAuto")[8].innerHTML;
		const g_one = mode
			? document.getElementsByClassName("denomGiven")[9].value
			: document.getElementsByClassName("denomGivenAuto")[9].innerHTML;
		const data = {
			userId,
			totalBill,
			listData,
			totalTaken,
			t_ft,
			t_ot,
			t_fh,
			t_oh,
			t_fif,
			t_twe,
			t_ten,
			t_fiv,
			t_two,
			t_one,
			mode: modeGiven,
			totalGiven,
			g_ft,
			g_ot,
			g_fh,
			g_oh,
			g_fif,
			g_twe,
			g_ten,
			g_fiv,
			g_two,
			g_one,
		};
		if (userId !== "") {
			message.loading("Please Wait! Connection Is Slow");
			saveData(data)
				.then((res, err) => {
					if (res) {
						message.destroy();
						message.success("Data Saved!");
						this.onReset();
					} else {
						message.destroy();
						message.error("Something Went Wrong");
					}
				})
				.catch((err) => {
					message.destroy();
					message.error("Something Went Wrong");
				});
			//this.onReset();
		} else {
			alert("Enter User First!!");
		}
	};
	onReset = () => {
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
	total: state.addList.total,
	toGive: state.amount_taken.toGive,
	toTake: state.amount_taken.total,
	switchOn: state.amount_given.switchOn,
});

export default connect(mapStateToProps, { emptyList, emptyTaken, emptyGiven })(
	SaveData
);
