$(document).ready(function () {
    $("button").click(function (event) {
        event.preventDefault()
        CopyToClipboard("tst value" , true,"Copied Successfully!");
    });
})
function CopyToClipboard(value,showNotification,notificationText){
    var $temp = $("<input>") 
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();
    if(typeof showNotification === 'undefined'){
        showNotification = true;
    }
    if(typeof showNotification === 'undefined'){
        notificationText = "Copied to Clipboard"
    }

    var notificationTag = $("div.copy-notification")
    if(showNotification && notificationTag.length ==0 ){
        notificationTag = $("<div>", {"class":"copy-notification" ,text:notificationText})
    $("body").append(notificationTag)

    notificationTag.fadeIn("slow",function () {
        setTimeout(function() {
            notificationTag.fadeOut("slow",function () {
                notificationTag.remove()
            })
        }, 1000);
    })
    }
    
}