chrome.commands.onCommand.addListener(async (command) => {
  console.log('Command:', command);
  // https://stackoverflow.com/a/56380458
  chrome.runtime.reload();
});
