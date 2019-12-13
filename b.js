function injectStyles( rule ) {
    var div = $("<div />", {
      html: '&shy;<style>' + rule + '</style>'
    }).appendTo("head");
  }