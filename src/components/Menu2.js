import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Link, Strong, Box } from "@quarkly/widgets";
const defaultProps = {
	"display": "flex",
	"padding": "12px 15px 12px 20px",
	"justify-content": "flex-start",
	"align-items": "center",
	"flex-direction": "row",
	"md-flex-direction": "column",
	"background": "#1808da",
	"align-content": "center"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px",
			"src": "https://uploads.quarkly.io/60d350285179a1001e683fe8/images/party-popper_1f389%20%281%29.png?v=2021-09-04T16:18:14.730Z"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"color": "#fff",
			"padding": "0px 20px 0px 20px",
			"text-decoration-line": "initial",
			"href": "/index#pricing",
			"font": "30px --fontFamily-googleIbmPlexMono",
			"children": <>
				<Strong>
					WETAR SITES
				</Strong>
				{"\n\n"}
			</>
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"color": "#fff",
			"padding": "0px 20px 0px 20px",
			"text-decoration-line": "initial",
			"href": "/index#pricing",
			"children": "Pricing"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"color": "#fff",
			"padding": "0px 20px 0px 20px",
			"text-decoration-line": "initial",
			"href": "/howwework",
			"children": "Templates"
		}
	}
};

const Menu2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Link {...override("link")} />
		<Link {...override("link1")} />
		<Link {...override("link2")} />
		{children}
	</Box>;
};

Object.assign(Menu2, { ...Box,
	defaultProps,
	overrides
});
export default Menu2;