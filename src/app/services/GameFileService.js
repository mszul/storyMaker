export const gameFileService  = {

  saveStory: function (story) {
      var file = new Blob([JSON.stringify(story)], {type: "application/octet-stream}"});
      var url = window.URL.createObjectURL(file);
      var tempLink = document.createElement('a');
      document.body.appendChild(tempLink);
      tempLink.href = url;
      tempLink.download  = "game.story"
      tempLink.click();
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(url);
  }

}
