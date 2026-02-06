const myInfo = new URLSearchParams(window.location.search);

const results = document.querySelector('#results');
if (results) {
    results.innerHTML = `<p>Name ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Organization: ${myInfo.get('title')}, ${myInfo.get('organization')}</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    <p>Your email is: ${myInfo.get('email')}<p>
    <p>Date & Time: ${myInfo.get('timestamp')}`;
}