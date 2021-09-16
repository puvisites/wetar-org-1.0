import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Image, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"howwework"} />
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
		<Components.Menu2 />
		<Section
			sm-padding="40px 0"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			align-items="flex-start"
		>
			<Override slot="SectionContent" flex="1 1 auto" align-items="flex-start" justify-content="center" />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				color="#0505ff"
				max-width="850px"
				display="flex"
				align-items="center"
				justify-content="center"
				width="100% border-box"
			>
				Let’s build your next digital product{"\n\n"}
			</Text>
		</Section>
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px">
			Choose your page template
		</Text>
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px" color="#2c01f7">
			Local Business & Professional service
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
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-8.png?v=2021-09-03T16:04:57.724Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						THEME 01
					</Strong>
				</Text>
				<Link
					href="https://competent-yonath-444c36.netlify.app/"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
					<Strong>
						Health, Class
						<br />
					</Strong>
					add your own components

  ⟶{"\n\n"}
				</Link>
			</StackItem>
			<StackItem lg-width="50%" sm-width="100%" width="50%">
				<Override
					slot="StackItemContent"
					flex-direction="column"
					border-style="solid"
					border-width="3px"
					text-align="center"
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-2.png?v=2021-09-03T16:00:21.211Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						THEME 02
					</Strong>
				</Text>
				<Link
					href="https://confident-goldwasser-d1ecc3.netlify.app/"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
					<Strong>
						Sports, Gym
					</Strong>
					,{" "}
					<br />
					add your own components

  ⟶{"\n\n"}
				</Link>
			</StackItem>
		</Stack>
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
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-3.png?v=2021-09-03T16:03:32.378Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						THEME 03
					</Strong>
				</Text>
				<Link
					href="https://serene-nightingale-a98382.netlify.app/"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
					<Strong>
						Restaurant and Food portfolios
					</Strong>
					,{" "}
					<br />
					add your own components

  ⟶{"\n\n"}
				</Link>
			</StackItem>
			<StackItem lg-width="50%" sm-width="100%" width="50%">
				<Override
					slot="StackItemContent"
					flex-direction="column"
					border-style="solid"
					border-width="3px"
					text-align="center"
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-6.png?v=2021-09-03T16:04:04.625Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						THEME 04
					</Strong>
				</Text>
				<Link
					href="https://amazing-carson-15e600.netlify.app/"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
					<Strong>
						Interior, Construction
					</Strong>
					,{" "}
					<br />
					add your own components

  ⟶{"\n\n"}
				</Link>
			</StackItem>
		</Stack>
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px" color="#2c01f7">
			Portfolios
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
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-7.png?v=2021-09-03T16:06:14.893Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						THEME 05
					</Strong>
				</Text>
				<Link
					href="https://clever-einstein-7104eb.netlify.app/"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
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
				</Link>
			</StackItem>
			<StackItem lg-width="50%" sm-width="100%" width="50%">
				<Override
					slot="StackItemContent"
					flex-direction="column"
					border-style="solid"
					border-width="3px"
					text-align="center"
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-5.png?v=2021-09-03T16:06:51.320Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						THEME 06
					</Strong>
				</Text>
				<Link
					href="https://admiring-golick-f60b5f.netlify.app"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
					<Strong>
						Portfolios
					</Strong>
					,{" "}
					<br />
					add your own components

  ⟶{"\n\n"}
				</Link>
			</StackItem>
		</Stack>
		<Text font="normal 500 30px/1.2 --fontFamily-sans" text-align="left" padding="0px 0px 0px 30px" color="#2c01f7">
			Community and Non Profit
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
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Untitled%20story%20%2815%29.png?v=2021-09-03T16:02:10.655Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						THEME 07
					</Strong>
				</Text>
				<Link
					href="https://condescending-rosalind-807f57.netlify.app/"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
					<Strong>
						Community, Studio
					</Strong>
					,{" "}
					<br />
					add your own components

  ⟶{"\n\n"}
				</Link>
			</StackItem>
			<StackItem lg-width="50%" sm-width="100%" width="50%">
				<Override
					slot="StackItemContent"
					flex-direction="column"
					border-style="solid"
					border-width="3px"
					text-align="center"
					background="#0505ff"
				/>
				<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/scene-4.png?v=2021-09-03T16:09:27.441Z" display="flex" width="500p" />
				<Text
					color="#ffdb59"
					font="--headline3"
					letter-spacing="inherit"
					margin="5px 0px 0px 15px"
					text-align="left"
				>
					<Strong>
						THEME 08
					</Strong>
				</Text>
				<Link
					href="https://pedantic-shaw-82d326.netlify.app/"
					color="#fefeff"
					font="--headline3"
					text-align="left"
					text-decoration-line="initial"
					background="#0505ff"
					padding="10px 0px 10px 15px"
					target="_blank"
				>
					<Strong>
						Non Profit
					</Strong>
					,{" "}
					<br />
					add your own components

  ⟶{"\n\n"}
				</Link>
			</StackItem>
		</Stack>
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
			<script defer={false} src={""} place={"endOfHead"} rawKey={"6142eafbf283b1b34c331efb"}>
				{"<!-- ManyChat -->\n<script src=\"//widget.manychat.com/109054494772046.js\" defer=\"defer\"></script>\n<script src=\"https://mccdn.me/assets/js/widget.js\" defer=\"defer\"></script>"}
			</script>
		</RawHtml>
	</Theme>;
});