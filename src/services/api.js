const API = {
  subscribeToService(body) {
    return fetch('https://api.dummy.com/v1/subscribe', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
            
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(body),
    })
      .then(response => response.json());
  }
}
export default API