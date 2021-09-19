import React from "react";
import theme from "theme";
import { Theme, Link, Image, Strong, Box, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"templates"} />
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
		<Box
			display="flex"
			padding="12px 15px 12px 20px"
			justify-content="flex-start"
			align-items="center"
			flex-direction="row"
			md-flex-direction="column"
			background="#1808da"
			align-content="center"
		>
			<Image width="64px" height="64px" src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/party-popper_1f389%20%281%29.png?v=2021-09-04T16:18:14.730Z" />
			<Link
				color="#fff"
				padding="0px 20px 0px 20px"
				text-decoration-line="initial"
				href="https://wetar.org"
				font="30px --fontFamily-googleIbmPlexMono"
			>
				<Strong>
					WETAR SITES
				</Strong>
				{"\n\n"}
			</Link>
			<Link color="#fff" padding="0px 20px 0px 20px" text-decoration-line="initial" href="/index#pricing">
				Pricing
			</Link>
			<Link color="#fff" padding="0px 20px 0px 20px" text-decoration-line="initial" href="/howwework">
				Templates
			</Link>
		</Box>
		<Components.TempHeading />
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px">
			Choose your page template
		</Text>
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px" color="#2c01f7">
			Local Business & Professional service
		</Text>
		<Components.Template1 />
		<Components.Temp2 />
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px" color="#2c01f7">
			Portfolios
		</Text>
		<Components.Temp3 />
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px" color="#2c01f7">
			Community and Non Profit
		</Text>
		<Components.Temp4 />
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="#28eca5"
		>
			<Stack margin-top="40px" flex-wrap="wrap">
				<StackItem width="25%" lg-width="50%" sm-width="100%" height="auto">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#ffdb59"
						border-style="solid"
						border-width="3px"
						align-items="center"
						justify-content="flex-start"
					/>
					<Text font="900 32px --fontFamily-googleOpenSans" text-align="center">
						WETAR
					</Text>
					<Image width="64px" height="64px" src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/party-popper_1f389%20%281%29.png?v=2021-09-04T16:18:14.730Z" />
					<Text text-align="center" padding="30 0px 0px 0px">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							#D47, PHB, PDY - 11
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#28eca5"
						border-width="3px"
						align-items="flex-start"
						padding="0px 0px 10px 20px"
					/>
					<Text font="200 30px --fontFamily-googleOpenSans" text-align="center" color="#2c01f7">
						<Strong>
							PRODUCTS
						</Strong>
					</Text>
					<Text
						as="h3"
						font="--headline3"
						margin="20px 0 5px 0"
						text-align="center"
						sm-font="normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						Pages
					</Text>
					<Text
						as="h3"
						font="--headline3"
						margin="20px 0 5px 0"
						text-align="center"
						sm-font="normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						Pages +
					</Text>
					<Text
						as="h3"
						font="--headline3"
						margin="20px 0 5px 0"
						text-align="center"
						sm-font="normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						Stores
					</Text>
					<Text
						as="h3"
						font="--headline3"
						margin="20px 0 5px 0"
						text-align="center"
						sm-font="normal 500 18px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						Pages Ux
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#28eca5"
						border-width="3px"
						align-items="flex-start"
						padding="0px 0px 0px 20px"
					/>
					<Text font="200 30px --fontFamily-googleOpenSans" text-align="center" color="#2c01f7">
						<Strong>
							SOCIAL
						</Strong>
					</Text>
					<Link
						href="https://discord.gg/bbZpThwCye"
						font="--headline3"
						color="#000008"
						hover-color="#0808d6"
						text-decoration-line="initial"
					>
						Discord
					</Link>
					<Link
						href="https://discord.gg/bbZpThwCye"
						font="--headline3"
						color="#000008"
						hover-color="#0808d6"
						text-decoration-line="initial"
					>
						Telegram
					</Link>
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer3 />
		<Components.FbChat />
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
		</RawHtml>
	</Theme>;
});