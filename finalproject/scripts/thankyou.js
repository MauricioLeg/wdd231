const myInfo = new URLSearchParams(window.location.search);

const results = document.querySelector('#results');
if (results) {
    results.innerHTML = `<p>Name ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    <p>Your email is: ${myInfo.get('email')}<p>
    <p>Date you expect to travel: From ${myInfo.get('start-date')} to ${myInfo.get('end-date')}
    <p>Your expectations: ${myInfo.get('description')}</p>
    <p>Soon will be contacting you!</p>
    `;
}