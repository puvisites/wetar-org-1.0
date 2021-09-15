import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section
			background="linear-gradient(0deg,#28eca5 100%,rgba(0,0,0,1) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/55156-confetti.gif?v=2021-07-03T12:18:01.207Z) 0/contain repeat scroll"
			position="static"
			height="52px"
			align-items="center"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				flex-direction="row"
				padding="0px 10px 0px 10px"
				align-items="center"
				justify-content="center"
				height="32px"
			/>
			<Text font="--lead" background="#ffdb59" padding="2px 3px 2px 3px" sm-font="normal 500 12px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
				<Strong>
					CURRENT OFFER
				</Strong>
			</Text>
			<Text
				font="--lead"
				padding="0px 0px 0px 10px"
				sm-flex="1 1 0%"
				sm-font="normal 300 12px/1 --fontFamily-sans"
				sm-text-align="left"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Run your Business websites at Rs.100 per month*   | 
Expires October 25, 2021
				</Strong>
			</Text>
		</Section>
		<Components.Menu2 />
		<Section
			background="#1808da"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			height="700px"
			opacity="3"
			lazy-load
			md-align-items="center"
		>
			<Override
				slot="SectionContent"
				sm-flex-direction="column"
				sm-align-items="center"
				flex-direction="column"
				align-items="center"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/growth%202.svg?v=2021-07-03T06:59:48.880Z) 0% 0% /auto repeat scroll content-box"
				width="100%"
				height="100%"
				display="flex"
			/>
			<Components.QuarklycommunityKitAnimation iteration="once" animation="Blink" test={false} duration="2s">
				<Text
					as="h1"
					font="normal 1000 92px/1 --fontFamily-googleMontserrat"
					md-font="--headline2"
					margin="10px 0"
					display="block"
					text-align="center"
					border-color="#ffdb59"
					color="#ffdb59"
				>
					WEBSITES FOR EVERYONE.
				</Text>
			</Components.QuarklycommunityKitAnimation>
			<Text
				lg-background="#ffdb59"
				lg-color="#000"
				lg-font="--headline2"
				lg-padding="10px 5px 10px 5px"
				lg-border-style="solid"
				lg-border-width="2px"
				background="#ffdb59"
				padding="10px 5px 10px 5px"
				color="#000002"
				font="--headline2"
				border-style="solid"
				border-width="2px"
				flex="0 0 auto"
				text-align="center"
			>
				BRAND WITH US{" "}
			</Text>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="#1808da"
			align-items="flex-end"
			justify-content="center"
		>
			<Override slot="SectionContent" display="flex" />
			<Text
				as="h1"
				font="normal 1000 72px/1.2 --fontFamily-googleMontserrat"
				md-font="--headline2"
				margin="0 auto 5px auto"
				text-align="center"
				display="flex"
				width="fit-content"
				min-width="min-content"
				color="#28eca5"
			>
				Our Customers
			</Text>
			<Stack
				margin-top="40px"
				sm-flex-direction="row"
				sm-display="flex"
				sm-flex-wrap="wrap"
				sm-order="0"
				sm-flex="0 1 auto"
				sm-align-content="center"
				sm-width="100%"
				flex-direction="row"
			>
				<StackItem width="25%" lg-width="50%" border-width="3px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Components.QuarklycommunityKitAnimation iteration="once" animation="Fade In">
						<Image height="64px" src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/8090%20cafe.png?v=2021-07-20T12:47:38.439Z" />
					</Components.QuarklycommunityKitAnimation>
				</StackItem>
				<StackItem width="25%" lg-width="50%" border-width="3px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Components.QuarklycommunityKitAnimation iteration="once" animation="Fade In">
						<Image height="65px" src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Thamizh%20Stores.png?v=2021-07-20T12:52:13.021Z" />
					</Components.QuarklycommunityKitAnimation>
				</StackItem>
				<StackItem width="25%" lg-width="50%" border-width="3px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Components.QuarklycommunityKitAnimation iteration="once" animation="Fade In">
						<Image height="44px" src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/eyalorg.png?v=2021-07-20T12:43:01.876Z" />
					</Components.QuarklycommunityKitAnimation>
				</StackItem>
				<StackItem width="25%" lg-width="50%" border-width="3px">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Components.QuarklycommunityKitAnimation iteration="once" animation="Fade In">
						<Image height="44px" src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/YAzh.png?v=2021-07-20T12:45:09.806Z" />
					</Components.QuarklycommunityKitAnimation>
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="#7dfef1"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			height="700px"
			opacity="3"
			lazy-load
			md-align-items="center"
		>
			<Override
				slot="SectionContent"
				sm-flex-direction="column"
				sm-align-items="center"
				flex-direction="column"
				align-items="center"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/conifer-searching.png?v=2021-07-10T12:20:30.067Z) 0% 0% /auto repeat scroll content-box"
				width="100%"
				height="100%"
				display="flex"
			/>
			<Components.QuarklycommunityKitAnimation
				iteration="once"
				animation="Beat"
				test
				timingFunction="ease"
				duration="0.2s"
			>
				<Text
					as="h1"
					font="normal 1000 92px/1 --fontFamily-googleMontserrat"
					md-font="--headline2"
					display="block"
					text-align="center"
					border-color="#120e00"
					color="#e4533b"
					padding="30px 0px 50px 0px"
				>
					REACH PEOPLES
					<br />
					WITH US
				</Text>
			</Components.QuarklycommunityKitAnimation>
			<Text
				lg-background="#ffdb59"
				lg-color="#000"
				lg-font="--headline2"
				lg-padding="10px 5px 10px 5px"
				lg-border-style="solid"
				lg-border-width="2px"
				background="#ffdb59"
				padding="10px 5px 10px 5px"
				color="#000002"
				font="--headline2"
				border-style="solid"
				border-width="2px"
				margin="0px 0px 0px 0px"
				text-align="center"
			>
				BUILD. MARKET YOUR BRAND
			</Text>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/conifer-1082.png?v=2021-07-12T17:29:05.839Z) 50% 50% /auto no-repeat scroll padding-box"
		>
			<Text
				as="h1"
				font="normal 900 36px/1.2 --fontFamily-sans"
				md-font="--headline2"
				margin="0 auto 5px auto"
				text-align="left"
				display="block"
				width="fit-content"
				min-width="min-content"
				background="#1808da"
				color="#eef2f5"
				padding="20px 20px 20px 20px"
				sm-font="--headline3"
				sm-border-style="solid"
				sm-border-width="5px"
				sm-border-color="#021019"
			>
				A creative
				<br />
				web design and branding agency based in Tamil Nadu and Pondicherry
				<br />
				<br />
				We create world-class digital products.
			</Text>
			<Stack
				margin-top="40px"
				justify-content="space-between"
				flex-direction="row-reverse"
				display="flex"
				lg-flex-direction="row-reverse"
				flex="0 0 auto"
				gap="0.5px"
			>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					border-style="solid"
					border-width="3px"
					sm-font="--base"
					sm-background="#feda59"
					background="#fedb59"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Text font="--headline1">
						150
					</Text>
					<Text
						as="h3"
						font="--headline3"
						margin="5px 0 20px 0"
						text-align="center"
						color="#2c01f7"
						sm-font="normal 500 20px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						PEOPLES{" "}
						<br />
						WITH US
					</Text>
				</StackItem>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					background="#28eca5"
					border-style="solid"
					border-width="3px"
					sm-background="#28eba5"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Text font="--headline1">
						5
					</Text>
					<Text
						as="h3"
						font="--headline3"
						margin="5px 0 20px 0"
						text-align="center"
						color="#2c01f7"
						sm-font="normal 500 20px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						YEARS OF EXPERINECE
					</Text>
				</StackItem>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					background="#7dfef0"
					border-style="solid"
					border-width="3px"
					sm-background="#7dfef0"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Text font="--headline1">
						8
					</Text>
					<Text
						as="h3"
						font="--headline3"
						margin="5px 0 20px 0"
						text-align="center"
						color="#2c01f7"
						sm-font="normal 500 20px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						OF EXPERINCED
						<br />
						TEAM
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="#2c01f7"
			display="flex"
			flex-direction="column"
			font="10px sans-serif"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Override slot="StackItemContent" display="block" text-align="center" />
					<Text
						as="h1"
						margin="0px"
						font="normal 600 52px/1.2 --fontFamily-googlePoppins"
						md-font="--headline2"
						color="--light"
						text-transform="uppercase"
					>
						We make on Top Class Clouds
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background="#ffb74b"
		>
			<Override slot="SectionContent" align-self="auto" />
			<Stack padding="30px 0px 0px 0px" justify-content="center" align-items="center">
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Text
						as="h1"
						font="normal 300 28px/1.2 --fontFamily-googleRoboto"
						md-font="--headline2"
						margin="10px 0"
						sm-font="--base"
						color="#010d18"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Fastest network:
						</Strong>
						{" "}run your site on faster than competing platforms.

 milliseconds from end users.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Incredibly scalable:
						</Strong>
						{" "}with absorb traffic from the most visited sites.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Always secure:
						</Strong>
						{" "}SSL works out of the box, so you never have to worry about provisioning certificates.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Stay ahead of the curve:
						</Strong>
						{" "}support for the latest web standards with HTTP/3, QUIC, image compression out of the box, and more.
					</Text>
					<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/global-network.svg?v=2021-06-26T08:30:04.378Z" sm-display="block" padding="80px 0px 0px 0px" />
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="--color-red url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/conifer-searching.png?v=2021-07-10T12:20:30.067Z) center/cover repeat-x scroll"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			display="flex"
			height="800px"
			align-items="center"
			border-color="#00070d"
			border-style="solid"
		>
			<Override slot="SectionContent" transition="all 3s ease-in 0s" />
			<Text
				font="normal 900 72px/1.2 --fontFamily-googleMontserrat"
				text-align="center"
				background="#ffdb59"
				border-style="solid"
				border-width="5px"
				border-color="#000408"
				padding="5px 05px 5px 5px"
				color="#000b15"
				sm-font="normal 900 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
			>
				BUILD CUSTOM WEB APPS{" "}
			</Text>
		</Section>
		<Section
			id="pricing"
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			justify-content="space-between"
			align-content="space-around"
			flex-wrap="wrap"
		>
			<Override slot="SectionContent" lg-display="block" />
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
				border-color="#0162ea"
			>
				<Strong>
					wetar
				</Strong>
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Services and Pricings
			</Text>
			<Stack margin-top="40px" flex-wrap="wrap">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#ffdb59"
						border-style="solid"
						border-width="3px"
					/>
					<Text as="h3" font="normal 600 36px/1 --fontFamily-googleOpenSans" margin="5px 0 20px 0" text-align="center">
						PAGES
					</Text>
					<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Remote1.png?v=2021-07-20T11:18:52.623Z" padding="40px 0px 40px 0px" />
					<Text color="#002ba5" margin="0" text-align="center">
						For personal sites, Hobby sites, Business sites, Product sites.
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="center">
						Static website,
						<br />
						Free SSL,
						<br />
						Unlimited Bandwidth
						<br />
						10gb storage,
						<br />
						CDN Bandwidth,
						<br />
						Best support,
						<br />
						Free Upgrade
						<br />
						99.9 % Uptime Guaranteed.
						<br />
						<br />
					</Text>
					<Text font="900 70px --fontFamily-googleOpenSans" text-align="center">
						₹99
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#28eca5"
						border-style="solid"
						border-width="3px"
					/>
					<Text as="h3" font="normal 600 36px/1 --fontFamily-googleOpenSans" margin="5px 0 20px 0" text-align="center">
						PAGES +
					</Text>
					<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Office-Chillout.png?v=2021-07-20T11:18:52.610Z" padding="20px 0px 20px 0px" />
					<Text color="#002ba5" margin="0" text-align="center">
						Optimized for small and Medium Business, Blogs
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="center">
						Dynamic website,
						<br />
						Free SSL
						<br />
						10gb Bandwidth
						<br />
						10gb storage
						<br />
						CDN Bandwidth,
						<br />
						Best support,
						<br />
						Free Upgrade,
						<br />
						99.9 % Uptime Guaranteed.
						<br />
					</Text>
					<Text font="900 70px --fontFamily-googleOpenSans" text-align="center" margin="30px 0px 16px 0px">
						₹129
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						border-style="solid"
						border-width="3px"
						background="#7dfff1"
					/>
					<Text as="h3" font="normal 600 36px/1 --fontFamily-googleOpenSans" margin="5px 0 20px 0" text-align="center">
						STORES
					</Text>
					<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/E-Commerce2.png?v=2021-07-20T11:18:52.611Z" padding="20px 0px 20px 0px" />
					<Text color="#002ba5" margin="0" text-align="center">
						Start selling online and Start your business.
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="center">
						Unlimited products,
						<br />
						Free SSL,
						<br />
						25,000 visits,
						<br />
						Woo commerce powered
						<br />
						CDN Bandwidth,
						<br />
						Best support,
						<br />
						Free Upgrade,
						<br />
						99.9 % Uptime Guaranteed.
						<br />
					</Text>
					<Text font="900 70px --fontFamily-googleOpenSans" text-align="center" margin="40px 0px 16px 0px">
						₹199
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#ffb74b"
						border-style="solid"
						border-width="3px"
					/>
					<Text as="h3" font="normal 600 36px/1 --fontFamily-googleOpenSans" margin="5px 0 20px 0" text-align="center">
						PAGES UX
					</Text>
					<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/Work-Essentials.png?v=2021-07-20T11:18:52.620Z" padding="40px 0px 40px 0px" />
					<Text color="#002ba5" margin="0" text-align="center">
						UX powered sites .Powerful business. Powerful Hosting.
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0" text-align="center">
						Static & Dyamic website,
						<br />
						Free SSL
						<br />
						Storage & Bandwidth as per requirement
						<br />
						CDN Bandwidth,
						<br />
						Best support,
						<br />
						Free Upgrade.
						<br />
						Daily Backup,
						<br />
						Powerful Animations & Interactions,
						<br />
						Easy CMS & Ecommerce,
						<br />
						Powerful SEO.
						<br />
					</Text>
					<Text font="900 40px --fontFamily-googleOpenSans" text-align="center">
						Cloud
						<br />
						Hosting
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="--color-secondary url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/conifer-189%20%281%29.png?v=2021-07-12T17:25:04.033Z) center/contain repeat-x scroll"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			display="flex"
			height="800px"
			align-items="center"
			border-style="solid"
			border-color="#000508"
		>
			<Override slot="SectionContent" transition="all 3s ease-in 0s" />
			<Text
				font="--headline1"
				text-align="center"
				background="#28eba4"
				border-style="solid"
				border-width="5px"
				border-color="#000408"
				padding="5px 05px 5px 5px"
				color="#010e1c"
				sm-font="normal 900 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
			>
				RUN BRAND MARKETING
				<br />
				HASSLE FREE{" "}
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			justify-content="space-between"
			align-content="space-around"
			flex-wrap="wrap"
		>
			<Override slot="SectionContent" lg-display="block" />
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
				border-color="#0162ea"
			>
				<Strong>
					wetar
				</Strong>
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				BUILD PRICINGS
			</Text>
			<Components.Cards2 />
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background="#1808da"
		>
			<Stack>
				<StackItem lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" width="100% border-box" />
					<Components.QuarklycommunityKitAnimation iteration="once" animation="Grow In" duration="0.2s">
						<Text
							as="h1"
							font="normal 1000 74px/1.2 --fontFamily-googleMontserrat"
							md-font="--headline2"
							margin="10px 0"
							color="#ffdb59"
						>
							We grow businesses by creating unified brand experiences people love.
						</Text>
					</Components.QuarklycommunityKitAnimation>
					<Components.QuarklycommunityKitAnimation iteration="once" animation="Grow In" duration="0.2s">
						<Image src="https://uploads.quarkly.io/60d350285179a1001e683fe8/images/idea.svg?v=2021-07-03T16:23:52.620Z" />
					</Components.QuarklycommunityKitAnimation>
					<Text
						as="h1"
						font="normal 500 72px/1.2 --fontFamily-sans"
						md-font="--headline2"
						margin="10px 0"
						text-align="left"
					>
						Talk with us to Start
					</Text>
				</StackItem>
			</Stack>
			<Link
				href="https://api.whatsapp.com/send?phone=919176552266&text=Hi,"
				color="#0ae38c"
				font="normal 900 52px/1.2 --fontFamily-sans"
				text-decoration-line="underline"
				flex="0 0 auto"
				display="block"
			>
				TELEGRAM
			</Link>
			<Link
				href="https://tawk.to/chat/60d8c7fa7f4b000ac039d03f/1f97cqap3"
				color="#f5f5f7"
				font="normal 900 52px/1.2 --fontFamily-sans"
				text-decoration-line="underline"
				text-transform="uppercase"
			>
				or Chat
			</Link>
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
			<script defer={true} src={"src=\"https://mccdn.me/assets/js/widget.js"} place={"endOfHead"} rawKey={"61421d70944b78bfa43fc719"}>
				{"src=\"//widget.manychat.com/109054494772046.js\""}
			</script>
		</RawHtml>
	</Theme>;
});