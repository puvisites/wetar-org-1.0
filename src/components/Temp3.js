import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Image, Text, Strong, Link } from "@quarkly/widgets";
const defaultProps = {
	"margin-top": "40px",
	"flex-wrap": "wrap",
	"align-items": "center",
	"justify-content": "center",
	"display": "flex",
	"grid-auto-rows": "2",
	"grid-auto-flow": "2",
	"margin": "0px 20px 0 20px"
};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"lg-width": "50%",
			"sm-width": "100%",
			"width": "50%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"border-style": "solid",
			"border-width": "3px",
			"text-align": "center",
			"background": "#0505ff"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-7.png?v=2021-09-03T16:06:14.893Z",
			"display": "flex",
			"width": "500p"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "#ffdb59",
			"font": "--headline3",
			"letter-spacing": "inherit",
			"margin": "5px 0px 0px 15px",
			"text-align": "left",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				THEME 05
			</Strong>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://clever-einstein-7104eb.netlify.app/",
			"color": "#fefeff",
			"font": "--headline3",
			"text-align": "left",
			"text-decoration-line": "initial",
			"background": "#0505ff",
			"padding": "10px 0px 10px 15px",
			"target": "_blank",
			"children": <>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Resumes and Jobs
				</Strong>
				,{" "}
				<br />
				add your own components

  ⟶{"\n\n"}
			</>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"lg-width": "50%",
			"sm-width": "100%",
			"width": "50%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"border-style": "solid",
			"border-width": "3px",
			"text-align": "center",
			"background": "#0505ff"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-5.png?v=2021-09-03T16:06:51.320Z",
			"display": "flex",
			"width": "500p"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "#ffdb59",
			"font": "--headline3",
			"letter-spacing": "inherit",
			"margin": "5px 0px 0px 15px",
			"text-align": "left",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				THEME 06
			</Strong>
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://admiring-golick-f60b5f.netlify.app",
			"color": "#fefeff",
			"font": "--headline3",
			"text-align": "left",
			"text-decoration-line": "initial",
			"background": "#0505ff",
			"padding": "10px 0px 10px 15px",
			"target": "_blank",
			"children": <>
				<Strong>
					Portfolios
				</Strong>
				,{" "}
				<br />
				add your own components

  ⟶{"\n\n"}
			</>
		}
	}
};

const Temp3 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Image {...override("image")} />
			<Text {...override("text")} />
			<Link {...override("link")} />
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Override {...override("stackItemOverride1")} />
			<Image {...override("image1")} />
			<Text {...override("text1")} />
			<Link {...override("link1")} />
		</StackItem>
		{children}
	</Stack>;
};

Object.assign(Temp3, { ...Stack,
	defaultProps,
	overrides
});
export default Temp3;