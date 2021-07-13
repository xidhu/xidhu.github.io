document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          ".content").style.display = "none";
        document.querySelector(
          ".overlay-pre").style.display = "flex";
          
    } else {
        document.querySelector(
          ".overlay-pre").style.display = "none";
          document.querySelector(".content").style.display = "block";
         
          
    }
};