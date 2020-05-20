var url = new URL(window.location.href)
if ("bolsonaro-timeline-covid19.gerardo-junior.com" === url.host) {
  url = 'https://cdn.jsdelivr.net/gh/gerardo-junior/bolsonaro-timeline-covid19@master'
} else {
  url = url.href.replace(url.hash, '')
  if ("/" === url.substring(url.length - 1)){
      url = url.substring(0, url.length - 1)
  }
}

let key = 'bolsonaro-timeline-covid19-'+ new Date().toISOString().split('T')[0]
var db = []

if (!sessionStorage.hasOwnProperty(key)) {
    sessionStorage.clear()

    const http = new XMLHttpRequest()
    http.open("GET", url+'/db.json')
    http.send()
    http.onreadystatechange = (e) => {
      db = http.responseText  
      sessionStorage.setItem(key, JSON.stringify(db))
    }

} else {
  db = JSON.parse(sessionStorage.getItem(key))
}

console.log(db);




        


$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
    location.hostname == this.hostname) {
  
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top },
        1000);
        return false;
      }
    }
  });