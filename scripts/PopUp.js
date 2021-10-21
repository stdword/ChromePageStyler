console.log('Pop.Js was loaded!');

// Initialize button with user's preferred color
let saveButton = document.getElementById("SaveButton");
let cssInput = document.getElementById("cssInput");

// When the button is clicked, inject setPageBackgroundColor into current page
saveButton.addEventListener("click", async (event) => {
  event.preventDefault();
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const myRegexp = new RegExp("^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)", "g");
  var matches = myRegexp.exec(tab.url);
  var domain = matches[1];

  let customCss = cssInput.value;
  chrome.storage.sync.set({ [domain]: customCss }, () => {
    // var style = document.getElementById('PageStylerContent');
    // if (style === null) {
    //   style = document.createElement('style')
    //   style.id = "PageStylerContent";
    // }
    // style.innerHTML = customCss;
    // document.head.appendChild(style);
  });
});