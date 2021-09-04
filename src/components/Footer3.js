import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Link, Strong, Section } from "@quarkly/widgets";
const defaultProps = {
	"background-color": "--dark",
	"text-align": "center",
	"border-color": "#2c01f7",
	"display": "block",
	"lazy-load": true,
	"background": "#2c01f7",
	"padding": "0px 0 px 0",
	"margin": "-40px 0 0 0"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"margin-top": "40px",
			"flex-wrap": "wrap",
			"justify-content": "center",
			"display": "flex",
			"margin": "0px -16px 0px -16px",
			"align-items": "center",
			"lg-display": "flex",
			"lg-align-items": "flex-start",
			"lg-justify-content": "center",
			"lg-flex-direction": "row",
			"lg-text-align": "left"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "%",
			"lg-width": "30%",
			"sm-width": "100%",
			"display": "block",
			"padding": "0 16px 16px 16px"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"text-transform": "uppercase",
			"border-color": "#2c01f7",
			"color": "#2c01f7"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"color": "#fff",
			"text-decoration-line": "initial",
			"text-align": "left",
			"sm-font": "8px sans-serif",
			"children": <>
				<br />
				<Strong>
					WETAR © 2021 All Rights Reserved.{"\n\n"}
				</Strong>
			</>
		}
	}
};

const Footer3 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			color="#fff6f6"
			display="block"
			sm-display="flex"
			sm-align-items="stretch"
			sm-justify-content="center"
		/>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Link {...override("link")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Footer3, { ...Section,
	defaultProps,
	overrides
});
export default Footer3;