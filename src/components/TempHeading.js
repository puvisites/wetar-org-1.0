import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"sm-padding": "40px 0",
	"sm-min-height": "auto",
	"background": "--color-light",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "flex-start"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"color": "#0505ff",
			"max-width": "850px",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"width": "100% border-box",
			"children": <>
				Let’s build your next digital product{"\n\n"}
			</>
		}
	}
};

const TempHeading = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" flex="1 1 auto" align-items="flex-start" justify-content="center" />
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(TempHeading, { ...Section,
	defaultProps,
	overrides
});
export default TempHeading;