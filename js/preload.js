document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          ".content").style.display = "none";
        document.querySelector(
          ".overlay-pre").style.visibility = "visible";
          
    } else {
        document.querySelector(
          ".overlay-pre").style.display = "none";
          document.querySelector(".content").style.visibility = "visible";
         
          
    }
};