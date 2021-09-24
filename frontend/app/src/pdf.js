import labelmake from "labelmake";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import Navbar from './Components/navbar';
import ProfileHeader from './Components/profileHeader';
import ProfileContent from './Components/profileContent';
import LoadingL from './Components/loadingL';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies'
var fs = require('fs');


class PDF extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			redirect: null
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		var token = cookie.load('login-token')
		console.log(token);
		
		fetch("http://localhost:2000/homepage/",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then((datas) => {
				//console.log(datas);
				console.log(datas.Firstname);
				console.log(datas.Lastname);
				console.log(datas.AboutMe);
				console.log(datas.ProfilePic);
				console.log(datas.Job_JobName);
				
				this.setState({ render: true });
				
				$('#fetch-name').text(datas.Firstname+' '+datas.Lastname);
				$('#fetch-desc').text(datas.AboutMe);
				$('#avatar').attr("src", datas.ProfilePic);
				datas.Job_JobName.forEach((entry) => {
					console.log('HHHH');
					$('#tags-container').append('<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">'+entry+'</a>');
				});
				
                (async () => {
                    // You can also use Uint8Array or ArrayBuffer as a basePdf
                    // const basePdf = fs.readFileSync("path/to/your.pdf")
                    // const basePdf = await fetch("path/to/your.pdf").then((res) => res.arrayBuffer());
                    const template = {
                      "basePdf": "data:application/pdf;base64,JVBERi0xLjQKJfbk/N8KMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKL01hcmtJbmZvIDw8Ci9UeXBlIC9NYXJrSW5mbwovTWFya2VkIHRydWUKPj4KL1N0cnVjdFRyZWVSb290IDMgMCBSCi9WaWV3ZXJQcmVmZXJlbmNlcyA0IDAgUgovTGFuZyAoZW4pCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9DcmVhdG9yIChDYW52YSkKL1Byb2R1Y2VyIChDYW52YSkKL0NyZWF0aW9uRGF0ZSAoRDoyMDIxMDkyMzEyNDQyMCswMCcwMCcpCi9Nb2REYXRlIChEOjIwMjEwOTIzMTI0NDIwKzAwJzAwJykKL0tleXdvcmRzIChEQUVxMVBKcmU1cyxCQUNlazIyNk5ZaykKL0F1dGhvciAoU2lyYXBvcCBDaGF5YWpldCkKL1RpdGxlIChTS0lMTFMpCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbNiAwIFJdCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RUcmVlUm9vdAovSyA3IDAgUgovUGFyZW50VHJlZU5leHRLZXkgMQovUGFyZW50VHJlZSA4IDAgUgovSURUcmVlIDkgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9EaXNwbGF5RG9jVGl0bGUgdHJ1ZQo+PgplbmRvYmoKNiAwIG9iago8PAovVHlwZSAvUGFnZQovUmVzb3VyY2VzIDw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRXh0R1N0YXRlIDw8Ci9HMyAxMCAwIFIKL0c0IDExIDAgUgo+PgovRm9udCA8PAovRjUgMTIgMCBSCj4+Cj4+Ci9NZWRpYUJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9Db250ZW50cyAxMyAwIFIKL1N0cnVjdFBhcmVudHMgMAovUGFyZW50IDIgMCBSCi9CbGVlZEJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9UcmltQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KPj4KZW5kb2JqCjcgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RvY3VtZW50Ci9MYW5nIChlbikKL1AgMyAwIFIKL0sgWzE0IDAgUl0KL0lEIChub2RlMDAxMjU5MTQpCj4+CmVuZG9iago4IDAgb2JqCjw8Ci9UeXBlIC9QYXJlbnRUcmVlCi9OdW1zIFswIFsxNSAwIFIgMTYgMCBSIDE3IDAgUiAxOCAwIFJdCl0KPj4KZW5kb2JqCjkgMCBvYmoKPDwKL0tpZHMgWzE5IDAgUl0KPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9jYSAxCi9CTSAvTm9ybWFsCj4+CmVuZG9iagoxMSAwIG9iago8PAovQ0EgMQovY2EgMQovTEMgMQovTEogMAovTFcgMQovTUwgNAovU0EgdHJ1ZQovQk0gL05vcm1hbAo+PgplbmRvYmoKMTIgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUwCi9CYXNlRm9udCAvT3BlblNhbnMtUmVndWxhcgovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMjAgMCBSXQovVG9Vbmljb2RlIDIxIDAgUgo+PgplbmRvYmoKMTMgMCBvYmoKPDwKL0xlbmd0aCAyOTc3Ci9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQ0KeJytmlurHccRhd/nV8xzIK2+VN9ACCJZNnkwxIkgP0DEDiEK2Pn/kFU9U11r5NiRHOno6Owze093dV3W112jkMtcf86Ir98H+nXUGGKfs53vPxw/Hvp+llFCwZ+zVIlBesznT387/vq781/4RAkp95bLWGM9f8MQ6dSvP39zXi9++uF48U05f/j3GrlPOVMqa7jv6Uou15Xv8PVzG1IOJaf6RW343BlniCKt5jUFfmlF4tQJ8TLWWWadOnNoCZ4Mo6YzzNKLGvGza097xgijx5T6WUYPNUkeZtqPRwpYWexRrrXRrzB25JFyPXOMYUZY+2srz1Xv/3BkqfjwqHWtOIWRZh1nSDGWPhoWn0sPvZSIiwVWFV3XkUsJDcvHxRrTmCW1M+cZausiWFrMffQsuFaDzNqTWhrLSCPr3TkFQcoNXG2wXWY6c+qhNKmYEJPXWgpGTAhA6qXjWo8VIya9O06sGimIN2PL+DBWXEOWmPMpIcYqfWKYiClzLxPXRiytq91p9pCTwO6KmdPAEs80Cz5Yej8bbB1ROuwamKMKMqPjWk6j6cxpYBq8zOcIAudkKfhkCkUQeyRB7T1rvqSOu/LAWlMMvWF5cC9u7wXhLHidUpg119n6mdoMLU9Yh8XmUltSk1oNvXek3ZkE6QJXZXVcargx14yCSQjbzJgZN9YBl8GHcKE0KQP2V0HCTk2ihORcgdP7UdtYVdKw4hUiDfckaXDQHLiWsehSKm4S1BCKIiII6tLc+pq/zCBIMawMgYV9U40t+nKuzEO+TgwFAwrCWCMcf2paIOGH3p8H5kdhnQUZgPrCTBgfc8PsEzkF8/E2LuLtLnALak+TasjyPxY44U4UDpKydUyJAeChGmdBAcO6gUVFdXCCS7okOQWGFJjcdYDYNZEQhFMkSKytwf4IXzWUWT/hCZSTTpaQPRELxAQyA9YJB2MApE8fYyBaFalbauntnJhfvS4nnJ5q6sjrCftjUqdVDCm9DHU/KhuiNKWedSJpMlQAGZUkDVRXyyEiM+GnAYsTXH42gTk5RzW9I4zIVnikdV3vqGdv+FwrMKZHCFXMGKWvXFbH+Svc7O/ve3wYH3nPt014f5Bd21Y331e01+lrf3+QR9xLt+fy6d40H1d2/PvjjgeEnINEkfNw7ihb6FfBcEZcaVKeueMJtfOMkg8DUE56onryWj7vJKfEh1RRPXiRUOV4Oe0qo9JTpfSK3FXqlevl7FVOpa+S44pgIkHCQXLiMkPioxVPorSViuTr1rTOUmf6py4gVdxKeatngVO3ot46WxtpL5LvVmQhlWblNjXfEn+rvt7LKLjwUB7IuCiSiS3OG3ieKGRkIloRwYxrzrr3BxNwU9FJ6fQ0pDplcTPBdxNZ6UykBr3fH/oTq5xImQexNdTwx6ThUcW5tblscztaC6hEyUxsaIWgkhqvrGvtaO0hIdwHHcmP8sxMbAgHihurJa+OFtrIa99A/p/IF2STMLIhEiiSdc3iOQeSMS9+euChZVAOaAghGwPjk8hUQnbRpBS914FdkOo9qRB5apY0Qqt1VM7iguJDNNNFnp3xJbc11gPYiFwoXfdcVEilCHIxX+jyqitlQOFEtWJXZ9E4I7iJCrkg3q3rNd3zWM0XSKVUveragBhCPiMqy2UEhgXVVr15C05pGGf0IkRqpLYWhw5oGgbPBw2xJuPWutLxqva1ANPE0ivg0NYW2eSzaFogf7T4XWkLEiOWSoguQ8sF+2bS7qJ7X1UkLd8t82VipVMQO+cz9tdItIFPOp7hdciZdF2z4xl1D5FIkFOHEQZGklfdBm5swQVwydKsjTdB3JFSSHGnIPYUWMJAqB2XgkiOMVfpb64KgoY8hOo4fqEZ+CAKhPAseSVuU81yPGP+gIJFLTifUZfqskhbBKwiLFVEim88C/wOC+Bu5zOEFyneZiU+w6VIIa116PTmsyDvhgzkPfFZhmkgbYyAnxHTtbEmPletixn7g88VCTIXR53PSKcwmqajVtjmsyBLk0RFsfNZmh7BhiLH+Yw0VLFaBeZ4FsgaFq+A23xGuQUYAscToEW1Dsq3FuCAlg43R4STAY0ZUSYdSUGAlq5lDXnSATagkYFIqqYgdEDjVgyKYRnQmBzrm+tQtAEtCC7Mr5n5DMlFZXflrONZEHLUgB7VD6czxEk1rCSCsyARoJJ0NoFFytmipagnG2Mz8gvvI4yOZixAh4GeOpqhsAgXzFiHKkOz4NWiC6MZmYXKRDpsNiOgqNm2tpfOZr06UebMZplgxzojO5tFh55LVR3NehF5ruDZaAYZMDMO0IRmvYYgrs2Ro1mmiggqwsmslxQtg9Cs1xCtoYt2MuvVof0SB7Re0nZKX6CuMS4VNlTzu0ZqH2ST2mZbJ+ZNarJrk9rN36B+rHODmjyyQU2e26C+XbwOHgRqD4aD2oO2SW3hXQTYpLY8ECK15UvbpLa8Wpv3TWrPQCf1TlTn9JXR8IbevDHtue+UvmskD4L0XU1j3b0ZbYUnxOi7QhWFm9F3KS8xdEZb1VditMkDMdp0ZK16M9okJxOjTZuEIG0y1hZxjdKueE5pU8ZGlL41NKoIG6VNbBNT+lJlnMWc0ibgaR21NqVvrX9Q+oaCEKWZH05pR41T2pG0Kc3sckw75RzTTkPHNGHTMe14dUw7hh3TDGx+f99D4/jY94S8VWDLtrW0Al+VrZU2KewT95P77vLnJC/fntddnTOaQ2SI5lAaoR9bsw1oTg/jsyfRDWfeETqbLSsfiXolbyMyW5qr5jqYuSCMy1w4hmXaBTuVuRQNylSym8m8AXcoswwYk2+56ImQbMKysmQj2SRosCyRVBmSTdTW3VvpbvEbD0F0kTQk+7HHgcyia0BmcTYi84GLxd0F3yHgYLiJzEc95oqzZvPnwaSLVHzMJKQx5W7yPWh4EZlPuA7TB1+NucZh5fJ1kKZ3Hwy/sc6kv4jMx3XeKfDu4TKf9hh7ndQo4D2K71u25x77m4vI3KSgYFhTnHdRuym+gexNcb3ZgMybNQMyb+oMydyZ4U2hbxT33nFvJzeSvSmu9eDbUeuJO5J5K2tIfjSlnMmPHbJBmXbSxuRHU8yh/NifG5V5I29YfjTlnMuP84GB+XGSMDI/2oJ0GKEDiqH5cZIxNj+ako7nxwHJ+EwdcQc0dcRV/o3QjyOaIfpxmDN6PBuzGzR8RtznRjpLGrm4K+yMo/Opn1npHHtDk9rRDlc6F/tZmc7PBmluhNP5m87kBmk/um9IcwueTv7UDTBIe9PAGM2tf+o4UBfCGO0t8c1o74jr1mozejfEidHeKPGNGT30cEZz8+Vux3iDZkOan7hsSHPPxyDtraHNaHrWQ30l6jXt/pP3pAzR/KCJOlre5fLOF3XDDNH8mIu6ad5h24h+tOKM0Y/HbA5pbvF534+bgYbpx5M+BzX3GA3U3v42UHvzW09MBmpvfjuovQdK5y1/vskdVO+qGqep+7pB/XiySt3b3dHdoObOr4H68VR3k5q6yd5hpq6zkZofKHvPmhvZhuoL1Irqv9uD8KoSogeG9Rx8FUiCZ+g5eIIjENWqO94Ph+q/nPyvPor/2cX1hFz0CXmo6wE5tApOLuvZ/j+Pv3zq5LhnqsbWLz33L/1XhwxqYiPUl9MVS2l+7tTrPwa8fne8+NP58uWLb9/88SvM8OrV66/eHC++1qQ5331/pOu/jOiPEs93H46XiFdD5b5F9PTn19d3aa/Od/843n775nj77lctB36RMX2BH+IYVTD/b8PTJxmeB747jNWfarxo8l0LAXdjSR8vQoONzK+o449iP1VDwDgUOGQa2zQ9OPz22MMVqDPdMDzz7n9Njt0P9Kljr/ClZ/+l+GFbCtrAV7ACcAYuP3vq/xLA/GkBRMAgDVewxgoe/ll/EdxPzUBfwZdMwfJptfOH2/q6amiZrmlZXuPbXte7tvR1ulP1o9V9d/wH+u5r0g0KZW5kc3RyZWFtCmVuZG9iagoxNCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDcgMCBSCi9LIFsyMiAwIFJdCi9JRCAobm9kZTAwMTI1OTE5KQo+PgplbmRvYmoKMTUgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL05vblN0cnVjdAovUCAyMyAwIFIKL0sgWzI0IDAgUl0KL0lEIChub2RlMDAxMjU5NDYpCj4+CmVuZG9iagoxNiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTm9uU3RydWN0Ci9QIDI1IDAgUgovSyBbMjYgMCBSXQovSUQgKG5vZGUwMDEyNTk1MSkKPj4KZW5kb2JqCjE3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9Ob25TdHJ1Y3QKL1AgMjcgMCBSCi9LIFsyOCAwIFJdCi9JRCAobm9kZTAwMTI1OTYwKQo+PgplbmRvYmoKMTggMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL05vblN0cnVjdAovUCAyOSAwIFIKL0sgWzMwIDAgUl0KL0lEIChub2RlMDAxMjU5NjUpCj4+CmVuZG9iagoxOSAwIG9iago8PAovTGltaXRzIFsobm9kZTAwMTI1OTE0KSAobm9kZTAwMTI1OTY1KV0KL05hbWVzIFsobm9kZTAwMTI1OTE0KSA3IDAgUiAobm9kZTAwMTI1OTE2KSAyNSAwIFIgKG5vZGUwMDEyNTkxNykgMjcgMCBSIChub2RlMDAxMjU5MTgpIDI5IDAgUiAobm9kZTAwMTI1OTE5KSAxNCAwIFIKKG5vZGUwMDEyNTkyMCkgMjIgMCBSIChub2RlMDAxMjU5MjEpIDMxIDAgUiAobm9kZTAwMTI1OTIyKSAzMiAwIFIgKG5vZGUwMDEyNTkyMykgMzMgMCBSIChub2RlMDAxMjU5MjQpIDM0IDAgUgoobm9kZTAwMTI1OTI1KSAzNSAwIFIgKG5vZGUwMDEyNTk0MSkgMzYgMCBSIChub2RlMDAxMjU5NDIpIDM3IDAgUiAobm9kZTAwMTI1OTQzKSAzOCAwIFIgKG5vZGUwMDEyNTk0NCkgMzkgMCBSCihub2RlMDAxMjU5NDUpIDIzIDAgUiAobm9kZTAwMTI1OTQ2KSAxNSAwIFIgKG5vZGUwMDEyNTk0NykgNDAgMCBSIChub2RlMDAxMjU5NDgpIDQxIDAgUiAobm9kZTAwMTI1OTQ5KSA0MiAwIFIKKG5vZGUwMDEyNTk1MCkgNDMgMCBSIChub2RlMDAxMjU5NTEpIDE2IDAgUiAobm9kZTAwMTI1OTU2KSA0NCAwIFIgKG5vZGUwMDEyNTk1NykgNDUgMCBSIChub2RlMDAxMjU5NTgpIDQ2IDAgUgoobm9kZTAwMTI1OTU5KSA0NyAwIFIgKG5vZGUwMDEyNTk2MCkgMTcgMCBSIChub2RlMDAxMjU5NjEpIDQ4IDAgUiAobm9kZTAwMTI1OTYyKSA0OSAwIFIgKG5vZGUwMDEyNTk2MykgNTAgMCBSCihub2RlMDAxMjU5NjQpIDUxIDAgUiAobm9kZTAwMTI1OTY1KSAxOCAwIFJdCj4+CmVuZG9iagoyMCAwIG9iago8PAovVHlwZSAvRm9udAovRm9udERlc2NyaXB0b3IgNTIgMCBSCi9CYXNlRm9udCAvT3BlblNhbnMtUmVndWxhcgovU3VidHlwZSAvQ0lERm9udFR5cGUyCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKL0NJRFN5c3RlbUluZm8gPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgovVyBbMCBbNjAwLjA5NzY2IDAgMCAyNTkuNzY1NjNdCiAzNiBbNjMyLjgxMjUgNjQ3Ljk0OTIyIDYzMC44NTkzOCA3MjkuMDAzOTEgNTU2LjE1MjM0XQogNDYgWzYxMy43Njk1MyA1MTkuMDQyOTcgOTAyLjgzMjAzIDc1My45MDYyNSA3NzguODA4NTkgNjAyLjA1MDc4IDAgNjE4LjE2NDA2IDU0OC44MjgxMyA1NTMuMjIyNjYKNzI4LjAyNzM0IDAgOTI1Ljc4MTI1IDU3Ny4xNDg0NF0KIDkxOCBbMjc4LjgwODU5XQpdCi9EVyAwCj4+CmVuZG9iagoyMSAwIG9iago8PAovTGVuZ3RoIDI3NgovRmlsdGVyIC9GbGF0ZURlY29kZQo+PgpzdHJlYW0NCnicXVFNa8QgEL37K+a4PSwmJtt2IQi72xZy6AdN+wOMTlKhMWLMIf++RtMtdEDhvXlvZhzppX6ojfZA39woG/TQaaMcTuPsJEKLvTYkZ6C09BuKtxyEJTSYm2XyONSmG0lVAdD3kJ28W2B3UmOLN4S+OoVOmx52n5cm4Ga29hsHNB4ywjko7EKlZ2FfxIBAo21fq5DXftkHz5/iY7EILOI8TSNHhZMVEp0wPZIqC8GhegrBCRr1L8+Sq+3kl3BRXQR1lrGMB1QcbyMqj9G7qcpfz7UFK5PpPqlzHsnHiIpUsDxHsjgkMikPLJGnRJ4Tebc1S+XXmdfdXhciZ+fCLuIHxCWsz9cGr39kR7u61vMDCj+LvA0KZW5kc3RyZWFtCmVuZG9iagoyMiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDE0IDAgUgovSyBbMzEgMCBSXQovSUQgKG5vZGUwMDEyNTkyMCkKPj4KZW5kb2JqCjIzIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDM5IDAgUgovSyBbMTUgMCBSXQovSUQgKG5vZGUwMDEyNTk0NSkKPj4KZW5kb2JqCjI0IDAgb2JqCjw8Ci9UeXBlIC9NQ1IKL1BnIDYgMCBSCi9NQ0lEIDAKPj4KZW5kb2JqCjI1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDQzIDAgUgovSyBbMTYgMCBSXQovSUQgKG5vZGUwMDEyNTkxNikKPj4KZW5kb2JqCjI2IDAgb2JqCjw8Ci9UeXBlIC9NQ1IKL1BnIDYgMCBSCi9NQ0lEIDEKPj4KZW5kb2JqCjI3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDQ3IDAgUgovSyBbMTcgMCBSXQovSUQgKG5vZGUwMDEyNTkxNykKPj4KZW5kb2JqCjI4IDAgb2JqCjw8Ci9UeXBlIC9NQ1IKL1BnIDYgMCBSCi9NQ0lEIDIKPj4KZW5kb2JqCjI5IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDUxIDAgUgovSyBbMTggMCBSXQovSUQgKG5vZGUwMDEyNTkxOCkKPj4KZW5kb2JqCjMwIDAgb2JqCjw8Ci9UeXBlIC9NQ1IKL1BnIDYgMCBSCi9NQ0lEIDMKPj4KZW5kb2JqCjMxIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMjIgMCBSCi9LIFszMiAwIFJdCi9JRCAobm9kZTAwMTI1OTIxKQo+PgplbmRvYmoKMzIgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAzMSAwIFIKL0sgWzMzIDAgUl0KL0lEIChub2RlMDAxMjU5MjIpCj4+CmVuZG9iagozMyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDMyIDAgUgovSyBbMzQgMCBSXQovSUQgKG5vZGUwMDEyNTkyMykKPj4KZW5kb2JqCjM0IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMzMgMCBSCi9LIFszNSAwIFJdCi9JRCAobm9kZTAwMTI1OTI0KQo+PgplbmRvYmoKMzUgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAzNCAwIFIKL0sgWzM2IDAgUiA0MCAwIFIgNDQgMCBSIDQ4IDAgUl0KL0lEIChub2RlMDAxMjU5MjUpCj4+CmVuZG9iagozNiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDM1IDAgUgovSyBbMzcgMCBSXQovSUQgKG5vZGUwMDEyNTk0MSkKPj4KZW5kb2JqCjM3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMzYgMCBSCi9LIFszOCAwIFJdCi9JRCAobm9kZTAwMTI1OTQyKQo+PgplbmRvYmoKMzggMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAzNyAwIFIKL0sgWzM5IDAgUl0KL0lEIChub2RlMDAxMjU5NDMpCj4+CmVuZG9iagozOSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDM4IDAgUgovSyBbMjMgMCBSXQovSUQgKG5vZGUwMDEyNTk0NCkKPj4KZW5kb2JqCjQwIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMzUgMCBSCi9LIFs0MSAwIFJdCi9JRCAobm9kZTAwMTI1OTQ3KQo+PgplbmRvYmoKNDEgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCA0MCAwIFIKL0sgWzQyIDAgUl0KL0lEIChub2RlMDAxMjU5NDgpCj4+CmVuZG9iago0MiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDQxIDAgUgovSyBbNDMgMCBSXQovSUQgKG5vZGUwMDEyNTk0OSkKPj4KZW5kb2JqCjQzIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgNDIgMCBSCi9LIFsyNSAwIFJdCi9JRCAobm9kZTAwMTI1OTUwKQo+PgplbmRvYmoKNDQgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAzNSAwIFIKL0sgWzQ1IDAgUl0KL0lEIChub2RlMDAxMjU5NTYpCj4+CmVuZG9iago0NSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDQ0IDAgUgovSyBbNDYgMCBSXQovSUQgKG5vZGUwMDEyNTk1NykKPj4KZW5kb2JqCjQ2IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgNDUgMCBSCi9LIFs0NyAwIFJdCi9JRCAobm9kZTAwMTI1OTU4KQo+PgplbmRvYmoKNDcgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCA0NiAwIFIKL0sgWzI3IDAgUl0KL0lEIChub2RlMDAxMjU5NTkpCj4+CmVuZG9iago0OCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDM1IDAgUgovSyBbNDkgMCBSXQovSUQgKG5vZGUwMDEyNTk2MSkKPj4KZW5kb2JqCjQ5IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgNDggMCBSCi9LIFs1MCAwIFJdCi9JRCAobm9kZTAwMTI1OTYyKQo+PgplbmRvYmoKNTAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCA0OSAwIFIKL0sgWzUxIDAgUl0KL0lEIChub2RlMDAxMjU5NjMpCj4+CmVuZG9iago1MSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDUwIDAgUgovSyBbMjkgMCBSXQovSUQgKG5vZGUw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MDAwIG4NCjAwMDAwMDExNzIgMDAwMDAgbg0KMDAwMDAwMTI1MSAwMDAwMCBuDQowMDAwMDAxMzk1IDAwMDAwIG4NCjAwMDAwMDQ0NDggMDAwMDAgbg0KMDAwMDAwNDUzNiAwMDAwMCBuDQowMDAwMDA0NjMxIDAwMDAwIG4NCjAwMDAwMDQ3MjYgMDAwMDAgbg0KMDAwMDAwNDgyMSAwMDAwMCBuDQowMDAwMDA0OTE2IDAwMDAwIG4NCjAwMDAwMDU2OTAgMDAwMDAgbg0KMDAwMDAwNjEzNyAwMDAwMCBuDQowMDAwMDA2NDg4IDAwMDAwIG4NCjAwMDAwMDY1NzcgMDAwMDAgbg0KMDAwMDAwNjY2NCAwMDAwMCBuDQowMDAwMDA2NzE1IDAwMDAwIG4NCjAwMDAwMDY4MDIgMDAwMDAgbg0KMDAwMDAwNjg1MyAwMDAwMCBuDQowMDAwMDA2OTQwIDAwMDAwIG4NCjAwMDAwMDY5OTEgMDAwMDAgbg0KMDAwMDAwNzA3OCAwMDAwMCBuDQowMDAwMDA3MTI5IDAwMDAwIG4NCjAwMDAwMDcyMTggMDAwMDAgbg0KMDAwMDAwNzMwNyAwMDAwMCBuDQowMDAwMDA3Mzk2IDAwMDAwIG4NCjAwMDAwMDc0ODUgMDAwMDAgbg0KMDAwMDAwNzU5NSAwMDAwMCBuDQowMDAwMDA3Njg0IDAwMDAwIG4NCjAwMDAwMDc3NzMgMDAwMDAgbg0KMDAwMDAwNzg2MiAwMDAwMCBuDQowMDAwMDA3OTUxIDAwMDAwIG4NCjAwMDAwMDgwNDAgMDAwMDAgbg0KMDAwMDAwODEyOSAwMDAwMCBuDQowMDAwMDA4MjE4IDAwMDAwIG4NCjAwMDAwMDgzMDcgMDAwMDAgbg0KMDAwMDAwODM5NiAwMDAwMCBuDQowMDAwMDA4NDg1IDAwMDAwIG4NCjAwMDAwMDg1NzQgMDAwMDAgbg0KMDAwMDAwODY2MyAwMDAwMCBuDQowMDAwMDA4NzUyIDAwMDAwIG4NCjAwMDAwMDg4NDEgMDAwMDAgbg0KMDAwMDAwODkzMCAwMDAwMCBuDQowMDAwMDA5MDE5IDAwMDAwIG4NCjAwMDAwMDkyNjYgMDAwMDAgbg0KdHJhaWxlcgo8PAovU2l6ZSA1NAovUm9vdCAxIDAgUgovSW5mbyA1IDAgUgovSUQgWzxCNDU0QjQxQkEwQUM1REVBODJGNjREODA2N0UzREEyMT4gPEI0NTRCNDFCQTBBQzVERUE4MkY2NEQ4MDY3RTNEQTIxPl0KPj4Kc3RhcnR4cmVmCjEzMjc3CiUlRU9GCg==",
                      "schemas": [
                          {
                              "field1": {
                                  "type": "text",
                                  "position": {
                                      "x": 89.86,
                                      "y": 20.79
                                  },
                                  "width": 100,
                                  "height": 29.29,
                                  "alignment": "center",
                                  "fontSize": 55,
                                  "characterSpacing": 0,
                                  "lineHeight": 1,
                                  "fontColor": "#538ac1"
                              },
                              "field2": {
                                  "type": "text",
                                  "position": {
                                      "x": 81.12,
                                      "y": 54.84
                                  },
                                  "width": 99.73,
                                  "height": 11.42,
                                  "alignment": "left",
                                  "fontSize": 20,
                                  "characterSpacing": 0,
                                  "lineHeight": 1
                              },
                              "field3": {
                                  "type": "image",
                                  "position": {
                                      "x": 14.3,
                                      "y": 23.83
                                  },
                                  "width": 37.63,
                                  "height": 41.64
                              },
                              "field4": {
                                  "type": "text",
                                  "position": {
                                      "x": 80.18,
                                      "y": 91.12
                                  },
                                  "width": 120.46,
                                  "height": 36.1,
                                  "alignment": "center",
                                  "fontSize": 12,
                                  "characterSpacing": 0,
                                  "lineHeight": 1
                              },
                              "field5": {
                                  "type": "text",
                                  "position": {
                                      "x": 10.85,
                                      "y": 79.47
                                  },
                                  "width": 47.17,
                                  "height": 49.34,
                                  "alignment": "center",
                                  "fontSize": 12,
                                  "characterSpacing": 0,
                                  "lineHeight": 1
                              },
                              "field6": {
                                  "type": "text",
                                  "position": {
                                      "x": 11.12,
                                      "y": 156.47
                                  },
                                  "width": 46.11,
                                  "height": 54.09,
                                  "alignment": "center",
                                  "fontSize": 12,
                                  "characterSpacing": 0,
                                  "lineHeight": 1
                              },
                              "field7": {
                                  "type": "text",
                                  "position": {
                                      "x": 11.65,
                                      "y": 238.5
                                  },
                                  "width": 46.1,
                                  "height": 51.71,
                                  "alignment": "center",
                                  "fontSize": 12,
                                  "characterSpacing": 0,
                                  "lineHeight": 1
                              },
                              "field8": {
                                  "type": "text",
                                  "position": {
                                      "x": 81.76,
                                      "y": 156.73
                                  },
                                  "width": 119.4,
                                  "height": 133.73,
                                  "alignment": "center",
                                  "fontSize": 12,
                                  "characterSpacing": 0,
                                  "lineHeight": 1
                              }
                          }
                      ]
                  };
                    const inputs = [{"field1":datas.Firstname,"field2":datas.Job_JobName,"field3":datas.ProfilePic,"field4":datas.AboutMe,"field5":"ข้อมูลทั่วไป","field6":"ข้อมูลการศึกษา","field7":"ข้อมูลทักษะ","field8":"ประวัติการทำงาน"}];             
                    const pdf = await labelmake({ template, inputs });
                    // Node
                    //console.log(pdf)
                    //fs.writeFileSync('./1.pdf', pdf);
                    //fs.writeFile('./1.pdf', pdf);
                    // Browser
                    const blob = new Blob([pdf.buffer], { type: "application/pdf" });
                    document.getElementById("iframe").src = URL.createObjectURL(blob);
                    
                  })();
				
			}).catch((error) => {
				console.log('Token Error!');
				//this.setState({ redirect: "/landing" });
			});		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	}
	render (){
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		
		if(this.state.render) {
			return (
            <html>
            <body>
            <h2>PDF ก่อตัวในในฉัน</h2>
            <img id="image" src="https://hilight.kapook.com/img_cms2/user/juthamat/jutha03/3_28.jpg" />
            </body>
            </html>
			)
		}else{
			return (
			  <LoadingL />
			)
		}
	}
}

export default PDF;

