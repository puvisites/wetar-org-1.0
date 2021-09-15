import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"case-studies"} />
		<Helmet>
			<title>
				Wetar
			</title>
			<meta name={"description"} content={"starts at Rs.99\nWebsite , tamilnadu, pondicherry, tamil"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Untitled%20story%20%2817%29.png?v=2021-09-04T16:14:25.304Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Untitled%20story%20%2817%29.png?v=2021-09-04T16:14:25.304Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Untitled%20story%20%2817%29.png?v=2021-09-04T16:14:25.304Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Untitled%20story%20%2817%29.png?v=2021-09-04T16:14:25.304Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Untitled%20story%20%2817%29.png?v=2021-09-04T16:14:25.304Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Untitled%20story%20%2817%29.png?v=2021-09-04T16:14:25.304Z"} />
		</Helmet>
		<Components.Menu3>
			<Override slot="text" font="normal 500 28px/1.2 --fontFamily-googleIbmPlexMono" letter-spacing="1.5px">
				<Strong>
					WETAR SITES
				</Strong>
			</Override>
		</Components.Menu3>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			flex-direction="column"
		>
			<Text font="--headline1">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					CUSTOMER STORIES
				</Strong>
			</Text>
			<Stack
				margin-top="40px"
				flex-wrap="wrap"
				align-items="center"
				justify-content="center"
				display="flex"
				grid-auto-rows="2"
				grid-auto-flow="2"
				margin="0px 20px 0 20px"
			>
				<StackItem lg-width="50%" sm-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						border-style="solid"
						border-width="3px"
						text-align="center"
					/>
					<Text
						color="#1808da"
						font="--headline3"
						letter-spacing="inherit"
						margin="5px 0px 0px 15px"
						text-align="left"
						border-color="#020200"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Tamil stores
						</Strong>
					</Text>
					<Link
						href="https://wetar001.pages.dev/"
						font="--headline3"
						text-align="left"
						text-decoration-line="initial"
						padding="10px 0px 10px 15px"
						color="#000"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Quick and Modern design{" "}
							<br />
							<br />
						</Strong>
					</Link>
				</StackItem>
				<StackItem lg-width="50%" sm-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						border-style="solid"
						border-width="3px"
						text-align="center"
					/>
					<Text
						color="#1808da"
						font="--headline3"
						letter-spacing="inherit"
						margin="5px 0px 0px 15px"
						text-align="left"
						border-color="#020200"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							8090s cafe , Pondicherry
						</Strong>
					</Text>
					<Link
						href="https://wetar001.pages.dev/"
						font="--headline3"
						text-align="left"
						text-decoration-line="initial"
						padding="10px 0px 10px 15px"
						color="#000"
					>
						<Strong>
							Increased my business.
							<br />
							Thank you
						</Strong>
					</Link>
				</StackItem>
			</Stack>
			<Text font="--headline3" color="#1808da">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					More.....
				</Strong>
			</Text>
		</Section>
		<Components.Footer5 />
		<Components.Footer3 />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60d350285179a1001e683fe6"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script
				async={false}
				defer={true}
				src={"src=\"https://mccdn.me/assets/js/widget.js"}
				place={"endOfBody"}
				rawKey={"614218255bfdf70b88433342"}
			>
				{"src=\"//widget.manychat.com/109054494772046.js\""}
			</script>
		</RawHtml>
	</Theme>;
});