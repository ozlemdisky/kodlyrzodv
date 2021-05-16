function zaman() {
  let date = new Date() 
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  let day = new Intl.DateTimeFormat('tr-TR', { weekday: 'long' }).format(date)

  hour = updateTime(hour)
  min = updateTime(min)
  sec = updateTime(sec)
  day = updateTime(day)

  document.getElementById('saatim').innerText =
    hour + ' : ' + min + ' : ' + sec + ' ' + day 
  let t = setTimeout(function() {
    zaman()
  }, 1000) 
}

function updateTime(k) {
  if (k < 10) {
    return '0' + k
  } else {
    return k
  }
}

function getIsim() {
    const isim = window.prompt('Lütfen adınızı giriniz',"Ör: Zehra Diskaya")

    if (isim == null || isim == "") {
        window.alert('Lütfen isminizi giriniz!!')
      }

    document.getElementById('isim').innerText = isim
}

zaman() 
getIsim()