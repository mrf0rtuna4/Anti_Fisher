
const urlInput = document.getElementById("url-input");
const checkButton = document.getElementById("check-button");
const clearButton = document.getElementById("clear-button");
const result = document.getElementById("result");

checkButton.addEventListener("click", function() {
  const url = urlInput.value;

  if (!isValidUrl(url)) {
    result.textContent = "Некорректный URL-адрес!";
    return;
  }

  if (isSuspicious(url)) {
    result.textContent = "Это подозрительная ссылка!";
  } else {
    result.textContent = "Это безопасная ссылка.";
  }
});

clearButton.addEventListener("click", function() {
  urlInput.value = "";
  result.textContent = "";
});

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

