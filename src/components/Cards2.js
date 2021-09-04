import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"margin-top": "40px",
	"flex-wrap": "wrap",
	"align-items": "center",
	"justify-content": "center",
	"display": "flex"
};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "50%",
			"sm-width": "100%"
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
			"as": "h3",
			"font": "--headline2",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"padding": "20px 0px 0px 0px",
			"children": "WEBSITE"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/web%20development.svg?v=2021-07-03T14:57:22.597Z) 50% 0/cover no-repeat"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				Dynamic & Static Websites, Full support, Free upgrade to other plans.
				<br />
				{"\n\n"}
			</>
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹100 /Hr"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#ffc3b6",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline2",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"padding": "20px 0px 0px 0px",
			"children": "CUSTOM BUSINESS APPS"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/build%20%20product.svg?v=2021-07-03T15:08:44.889Z) 50% 0/cover no-repeat"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				Powerful apps built on zoho creator, App Sheet.
				<br />
				{"\n\n"}
			</>
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹100 /Hr"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#ffb74b",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline2",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"padding": "20px 0px 0px 0px",
			"children": "SOCIAL MEDIA MARKETING"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"height": "0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/016.png?v=2021-07-12T15:23:07.974Z) 50% 0/cover no-repeat",
			"padding": "0px 0px 554PX 0px",
			"margin": "0px 0px 20PX 0px"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": "Facebook, Instagram Marketing"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹100 /Hr"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#dee3ff",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline2",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"padding": "20px 0px 0px 0px",
			"children": "EMAIL AND SMS MARKETING"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/market%20research%20colored.svg?v=2021-07-03T15:25:45.686Z) 50% 0/cover no-repeat"
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				Costs at 0.25 INR per Sms & o.o35 per Email.
				<br />
				{"\n\n"}
			</>
		}
	},
	"text11": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹100 /Hr"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride4": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#7dcdfc",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text12": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline2",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"padding": "20px 0px 0px 0px",
			"children": "FACEBOOK CHATBOTS"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/chatbot.svg?v=2021-07-03T15:31:24.442Z) 50% 0/cover no-repeat"
		}
	},
	"text13": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				Starts from ₹850 per month as per customer counts. Ecommerce Chat.
				<br />
				Automate, acquire and grow audience.{"\n\n"}
			</>
		}
	},
	"text14": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹100 /Hr"
		}
	},
	"stackItem5": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride5": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#28eca5",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text15": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline2",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"padding": "20px 0px 0px 0px",
			"children": "WHATSAPP CHATBOT"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/chatting%20using%20apps.svg?v=2021-07-03T15:57:52.920Z) 50% 0/cover no-repeat"
		}
	},
	"text16": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				Official and Unofficial bots. Starts from ₹400 per month for 500 customers.
				<br />
				+2k for server cost. Ecommerce chat & best support.{"\n\n"}
			</>
		}
	},
	"text17": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹100 /Hr"
		}
	}
};

const Cards2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Text {...override("text")} />
			<Box {...override("box")} />
			<Text {...override("text1")} />
			<Text {...override("text2")} />
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Override {...override("stackItemOverride1")} />
			<Text {...override("text3")} />
			<Box {...override("box1")} />
			<Text {...override("text4")} />
			<Text {...override("text5")} />
		</StackItem>
		<StackItem {...override("stackItem2")}>
			<Override {...override("stackItemOverride2")} />
			<Text {...override("text6")} />
			<Box {...override("box2")} />
			<Text {...override("text7")} />
			<Text {...override("text8")} />
		</StackItem>
		<StackItem {...override("stackItem3")}>
			<Override {...override("stackItemOverride3")} />
			<Text {...override("text9")} />
			<Box {...override("box3")} />
			<Text {...override("text10")} />
			<Text {...override("text11")} />
		</StackItem>
		<StackItem {...override("stackItem4")}>
			<Override {...override("stackItemOverride4")} />
			<Text {...override("text12")} />
			<Box {...override("box4")} />
			<Text {...override("text13")} />
			<Text {...override("text14")} />
		</StackItem>
		<StackItem {...override("stackItem5")}>
			<Override {...override("stackItemOverride5")} />
			<Text {...override("text15")} />
			<Box {...override("box5")} />
			<Text {...override("text16")} />
			<Text {...override("text17")} />
		</StackItem>
		{children}
	</Stack>;
};

Object.assign(Cards2, { ...Stack,
	defaultProps,
	overrides
});
export default Cards2;