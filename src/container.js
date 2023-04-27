const urlInput = document.getElementById
("url-input");
const checkButton = document.getElementById("check-button");
const clearButton = document.getElementById("clear-button");
const result = document.getElementById("result");

checkButton.addEventListener("click", function() {
const url = urlInput.value;
if (isValidUrl(url)) {
if (isSuspicious(url)) {
  result.textContent = "Ссылка подозрительна!";
  result.className = "warning";
} else {
  result.textContent = "Ссылка безопасна.";
  result.className = "";
}
} else {
result.textContent = "Введите корректный URL-адрес.";
result.className = "warning";
}
});

clearButton.addEventListener("click", function() {
urlInput.value = "";
result.textContent = "";
result.className = "";
});

function isValidUrl(url) {
return url.includes("http://") || url.includes("https://");
}

function isSuspicious(url) {
if (url.includes("hack") || url.includes("scam") || url.includes("fishing")) {
return true;
} else {
return false;
}
}