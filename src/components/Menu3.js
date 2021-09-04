import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
import QuarklycommunityKitMenu from "./QuarklycommunityKitMenu";
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
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 20px 0",
			"text-align": "left",
			"font": "--headline2",
			"color": "#fff",
			"padding": "0px 10px 0px 10px",
			"children": "WETAR"
		}
	},
	"quarklycommunityKitMenu": {
		"kind": "QuarklycommunityKitMenu",
		"props": {
			"display": "flex",
			"color": "#fff",
			"align-items": "center",
			"justify-content": "center",
			"align-content": "center",
			"margin": "0px 0px 0px 15px"
		}
	},
	"quarklycommunityKitMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "#f6f8f9",
			"text-decoration-line": "initial",
			"active-color": "#fff"
		}
	},
	"quarklycommunityKitMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"color": "#ffffff"
		}
	},
	"quarklycommunityKitMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item-active",
			"color": "#fff"
		}
	},
	"quarklycommunityKitMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"color": "#fff"
		}
	},
	"quarklycommunityKitMenuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "#f2f5f8"
		}
	}
};

const Menu3 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Text {...override("text")} />
		<QuarklycommunityKitMenu {...override("quarklycommunityKitMenu")}>
			<Override {...override("quarklycommunityKitMenuOverride")} />
			<Override {...override("quarklycommunityKitMenuOverride1")} />
			<Override {...override("quarklycommunityKitMenuOverride2")} />
			<Override {...override("quarklycommunityKitMenuOverride3")} />
			<Override {...override("quarklycommunityKitMenuOverride4")} />
		</QuarklycommunityKitMenu>
		{children}
	</Box>;
};

Object.assign(Menu3, { ...Box,
	defaultProps,
	overrides
});
export default Menu3;