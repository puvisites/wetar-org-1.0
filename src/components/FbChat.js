import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
      <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>
`; // Put your JS here:

const customJs = `
        var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "109054494772046");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
`;

const FacebookChatbox = ({
	children,
	...props
}) => {
	const refHTML = useRef(null);
	const refJS = useRef(null);
	useLayoutEffect(() => {
		refHTML.current.innerHTML = customHtml;
		const script = document.createElement("script");
		script.innerHTML = customJs;
		refJS.current.appendChild(script);
	}, []);
	return <div {...props}>
		            
		<div ref={refHTML} />
		            
		<div ref={refJS} />
		        
	</div>;
};

export default atomize(FacebookChatbox)({
	name: "FacebookChatbox",
	normalize: true,
	mixins: true
});