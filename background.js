chrome.omnibox.onInputEntered.addListener((text) => {
  // Encode user input for special characters , / ? : @ & = + $ #
  const newURL = 'https://{your-url}.atlassian.net/browse/' + encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});
