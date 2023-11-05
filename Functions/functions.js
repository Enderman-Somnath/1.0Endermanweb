// homeWeb() classicChatWeb() youtubeWeb() PopUp() donationWeb() closeWindow()
function homeWeb(){
    window.location="/index.html"
}
function classicChatWeb(){
    window.location="/ClassicChat/ClassicChatLogin.html"
}
function youtubeWeb(){
    window.location="/Youtube/youtube.html"
}
function PopUp(url){
    popupWindow = window.open(url,'popUpWindow','height=550,width=550,');
}
function donationWeb(){
    popupWindow = window.open('/Donation/Donation.html','popUpWindow','height=800,width=1000,');
}