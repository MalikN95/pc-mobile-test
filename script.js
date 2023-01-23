if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {

    alert("Вы используете мобильное устройство (телефон или планшет).")

} else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    alert("Вы используете Safari браузер.");
    
} else alert("Вы используете ПК.")

alert(window.navigator.userAgent)