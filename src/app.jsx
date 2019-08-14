import './styles/main.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Header } from './scripts/components/header.jsx';
import { Form } from './scripts/components/form.jsx';
import { Explanations } from './scripts/components/explanations.jsx';
import { Footer } from './scripts/components/footer.jsx';

class App extends Component {
			componentDidMount() {
				    const s = document.createElement('script');
				    s.type = 'text/javascript';
				    s.async = true;
				    s.innerHTML = "var YANDEX_METRIKA_ID = 53784595;(function(w, d, s, h, id) {w.roistatProjectId = id; w.roistatHost = h;var p = d.location.protocol == \"https:\" ? \"https://\" : \"http://\";var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? \"/dist/module.js\" :\"/api/\site/1.0/\"+id+\"/init\";var js = d.createElement(s); js.charset=\"UTF-8\"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, 'script', 'cloud.roistat.com', '2eddbbf2f2e2a8cd7b11edbc44e38d1c');"+"(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");ym(YANDEX_METRIKA_ID,\"init\",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});document.getElementsByClassName('next-step')[0].addEventListener('click', function(){ym(YANDEX_METRIKA_ID, 'reachGoal', 'step_1')});document.getElementsByClassName('sent')[0].addEventListener('click', function(){ym(YANDEX_METRIKA_ID, 'reachGoal', 'sent')});! function(f, b, e, v, n, t, s) {	if(f.fbq) return;n = f.fbq = function() {n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)};if(!f._fbq) f._fbq = n;n.push = n;n.loaded = !0;n.version = '2.0';n.queue = [];t = b.createElement(e);t.async = !0;t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s)}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1236784053129872');fbq('track', 'PageView');";
					this.instance.appendChild(s);
					}
	render() {
		return (
			<div className="wrapper">
				<Header />
				<main id="main">
					<Form />
					<Explanations />
				</main>
				<Footer />
				<div ref={el => (this.instance = el)} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));