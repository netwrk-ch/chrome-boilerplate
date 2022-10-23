chrome.action.onClicked.addListener(async function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const oldIframe = document.getElementById("chrome-boilerplate");
      const oldButton = document.getElementById("toggle-chrome-boilerplate");

      if (oldIframe) {
        oldIframe.remove();
        oldButton.remove();
        return;
      }

      const iframe = document.createElement("iframe");
      iframe.setAttribute("id", "chrome-boilerplate");
      iframe.setAttribute(
        "style",
        "top: 35px; right: 10px; padding-left: 20px; padding-bottom: 25px; width: 620px; height: calc(100% - 20px);z-index: 2147483650;border: none; position:fixed;"
      );
      iframe.setAttribute("allow", "");
      iframe.src = chrome.runtime.getURL(
        "popup.html"
      );

      const button = document.createElement("button");
      var show = true;
      button.setAttribute("id", "toggle-chrome-boilerplate");
      button.innerHTML = "Hide"
      button.setAttribute(
        "style",
        "top: 5px; right: 10px; z-index: 2147483650; padding: 4px; border-width: 1px; border-color: rgb(229 231 235); position:fixed; background-color: #0c4a6e; border-radius: 0.5rem; color: #e0f2fe;"
      );
      button.onclick = function () {
        iframe.classList.toggle("hide");
        if (show) {
          console.log("hit")
          button.innerHTML = "Show";
          show = false;
        } else {
          button.innerHTML = "Hide";
          show = true;
        }
      };
      document.body.appendChild(button);
      document.body.appendChild(iframe);
    },
  });
});
