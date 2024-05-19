import React from "react";

type ItemProps = {
	img: any;
	label: string;
};
const Item = (props: ItemProps) => {
	const { img, label } = props;
	return (
		<React.Fragment>
			<div
				style={{ width: "25%", height: "120px", cursor: "pointer" }}
				className="">
				<div className="p-2">
					<img
						src={img}
						alt=""
						style={{ height: "100px", width: "100%", borderRadius: "9px" }}
					/>
				</div>
				<p className="text-dark text-center fw-bold">{label}</p>
			</div>
		</React.Fragment>
	);
};

export default Item;

// each item in the recording options
