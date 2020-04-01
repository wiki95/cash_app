import React from "react";
import { List, Avatar } from "antd";
import delete_icon from "../icons/delete_icon.png";
import { connect } from "react-redux";
import { removeItem } from "../redux/actions/inputAction";
import { calculate_remaining } from "../redux/actions/amount_taken";

class MyList extends React.Component {
	removeItem = (e, ind) => {
		e.preventDefault();
		var total = 0;
		const filterData = this.props.addList.filter((val, i) => {
			return i !== ind;
		});
		filterData.forEach(element => {
			total = total + parseFloat(element.title);
		});
		this.props.removeItem(filterData, total);
		this.props.calculate_remaining(total);
	};
	render() {
		return (
			<List
				itemLayout="horizontal"
				dataSource={this.props.addList}
				renderItem={(item, ind) => (
					<List.Item style={{ height: "35px" }}>
						{ind + 1}
						<List.Item.Meta
							avatar={
								<Avatar
									onClick={e => this.removeItem(e, ind)}
									style={{ cursor: "pointer" }}
									size={20}
									src={delete_icon}
								/>
							}
							title={item.title.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
						/>
					</List.Item>
				)}
			/>
		);
	}
}

const mapStateToProps = state => ({
	addList: state.addList.listData
});
export default connect(mapStateToProps, { removeItem, calculate_remaining })(
	MyList
);
