import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Strong } from "@quarkly/widgets";
import Menu3 from "./Menu3";
const defaultProps = {};
const overrides = {
	"strong": {
		"kind": "Strong",
		"props": {
			"children": "WETAR SITES"
		}
	}
};

const Menu31 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Menu3 {...rest}>
		<Override slot="text" font="normal 500 28px/1.2 --fontFamily-googleIbmPlexMono" letter-spacing="1.5px">
			<Strong {...override("strong")} />
		</Override>
		{children}
	</Menu3>;
};

Object.assign(Menu31, { ...Menu3,
	defaultProps,
	overrides
});
export default Menu31;