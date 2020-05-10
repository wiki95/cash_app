import React from "react";
import { getData } from "../api/index";
import { Button, Select, Input } from "antd";
const { Option } = Select;

class ViewData extends React.Component {
	state = {
		days: "All",
		userId: "",
	};
	showData = () => {
		const day = this.state.days;
		const id = this.state.userId || "Empty";
		const val = {
			day,
			id,
		};
		getData(val)
			.then((res) => {
				console.log(res);
				window.open(`http://localhost:5000/getRecord/${day}/${id}`, "_blank");
			})
			.catch((err) => {
				alert(err);
			});
	};

	handleChange = (value) => {
		this.setState({
			days: value,
		});
	};
	handleUserId = (val) => {
		this.setState({
			userId: val.target.value,
		});
	};

	render() {
		return (
			<div style={styles.container}>
				<Button style={styles.items} type="primary" onClick={this.showData}>
					View Data
				</Button>
				<Select
					defaultValue={this.state.days}
					style={styles.items}
					onChange={this.handleChange}
				>
					<Option value="All">All</Option>
					<Option value="Monday">Monday</Option>
					<Option value="Tuesday">Tuesday</Option>
					<Option value="Wednesday">Wednesday</Option>
					<Option value="Thursday">Thursday</Option>
					<Option value="Friday">Friday</Option>
					<Option value="Saturday">Saturday</Option>
					<Option value="Sunday">Sunday</Option>
				</Select>
				<Input
					value={this.state.userId}
					onChange={this.handleUserId}
					style={styles.items}
					placeholder="User Id"
				/>
			</div>
		);
	}
}
const styles = {
	container: {
		marginTop: "10px",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
	},
	items: {
		marginTop: "10px",
	},
};

export default ViewData;
