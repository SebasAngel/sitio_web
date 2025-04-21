if('serviceWorker' in navigator){
    console.log('Service Worker es correcto');
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./dist/servicework.js')
        .then(response=>console.log('Service Worker:' + response))
        .catch(err=>console.error(err));
    });
}