import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Strong, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "64px 0",
	"sm-padding": "40px 0",
	"font": "--base",
	"color": "--dark",
	"background": "#28eca5"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"margin-top": "40px",
			"flex-wrap": "wrap"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%",
			"height": "auto"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#ffdb59",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "900 32px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "WETAR.ORG"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"text-align": "center",
			"padding": "30 0px 0px 0px",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				#D47, PHB, PDY - 11
			</Strong>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#28eca5",
			"border-width": "3px",
			"align-items": "flex-start",
			"padding": "0px 0px 10px 20px"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "200 30px --fontFamily-googleOpenSans",
			"text-align": "center",
			"color": "#2c01f7",
			"children": <Strong>
				PRODUCTS
			</Strong>
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"sm-font": "normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Pages"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"sm-font": "normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Pages +"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"sm-font": "normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Stores"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"sm-font": "normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Pages Ux"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#28eca5",
			"border-width": "3px",
			"align-items": "flex-start",
			"padding": "0px 0px 0px 20px"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "200 30px --fontFamily-googleOpenSans",
			"text-align": "center",
			"color": "#2c01f7",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				TEAM
			</Strong>
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"sm-font": "normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Blog"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"sm-font": "normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Support"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#28eca5",
			"border-width": "3px",
			"align-items": "flex-start",
			"padding": "0px 0px 0px 20px"
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"font": "200 30px --fontFamily-googleOpenSans",
			"text-align": "center",
			"color": "#2c01f7",
			"children": <Strong>
				SOCIAL
			</Strong>
		}
	},
	"text11": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"sm-font": "normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"children": "Facebook"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://discord.gg/bbZpThwCye",
			"font": "--headline3",
			"color": "#000008",
			"hover-color": "#0808d6",
			"text-decoration-line": "initial",
			"children": "Discord"
		}
	}
};

const Footer1 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Text {...override("text")} />
				<Text {...override("text1")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Text {...override("text2")} />
				<Text {...override("text3")} />
				<Text {...override("text4")} />
				<Text {...override("text5")} />
				<Text {...override("text6")} />
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Text {...override("text7")} />
				<Text {...override("text8")} />
				<Text {...override("text9")} />
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
				<Text {...override("text10")} />
				<Text {...override("text11")} />
				<Link {...override("link")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Footer1, { ...Section,
	defaultProps,
	overrides
});
export default Footer1;