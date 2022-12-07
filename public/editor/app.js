
iframe_load();
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
  iframeDocument.designMode = "on";
  iframeDocument.body.contentEditable = "true";
  iframeDocument.querySelector('body').addEventListener("click", loader);
});
function loader(e) {
    var randCssClass = random(10);
    window.localStorage.setItem("randCssClass",randCssClass);
    e.target.classList.add(window.localStorage.getItem("randCssClass"));
    console.log(window.localStorage.getItem("randCssClass"));
var modH = `
<div class="" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
`;
var modHead =`
<div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Link Discription</h5>
            <button onclick="displaynon()" type="button" class="btn-close cut" data-bs-dismiss="modal" aria-label="Close"></button>
</div>`;
var modFoot =`
<div class="modal-footer">
            <button class="btn btn-secondary cut" onclick="displaynon()" type="button" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-primary save" onclick="edit_simple()" type="button">Save</button>
</div>
`;
var modF = `
</div>
</div>
</div>
`;
  var HTMLnode = e.target.nodeName;
  var HTMLnodes = HTMLnode.toString().toLowerCase();
  if (HTMLnodes == "img") {
        var par_child = e.target.parentNode.nodeName.toString().toLowerCase();
        console.log(par_child);
        console.log(HTMLnodes);
      if(par_child == "a"){
          console.log("attribut a in set");
          display();
          var atr = e.target.getAttribute('src');
          var atr_parent = e.target.parentNode.getAttribute('href');
          console.log(atr);
          var modL =`
                 <div class="modal-body">
                    <form>
                       <div class="mb-3">
                         <label for="recipient-name" class="col-form-label">Link URL:</label>
                         <input class="form-control lnk-2" value="${atr_parent}" type="text" placeholder="https://image or url link" id="recipient-name">
                       </div>
                       <div class="mb-3">
                         <label for="recipient-name" class="col-form-label">Image URL:</label>
                         <input class="form-control lnk" value="${atr}" type="text" placeholder="https://image or url link" id="recipient-name">
                       </div>
                    </form>
                 </div>
                 `;
          document.querySelector(".mod").innerHTML = modH+modHead+modL+modFoot+modF;
      }else{
          display();
          var atr = e.target.getAttribute('src');
          console.log(atr);
          var modL =`
                 <div class="modal-body">
                    <form>
                       <div class="mb-3">
                         <label for="recipient-name" class="col-form-label">Image URL:</label>
                         <input class="form-control lnk" value="${atr}" type="text" placeholder="https://image or url link" id="recipient-name">
                       </div>
                    </form>
                 </div>
                 `;
          document.querySelector(".mod").innerHTML = modH+modHead+modL+modFoot+modF;
      }
  } else if(HTMLnodes == "p"){
    console.log(HTMLnodes);
    display();
    //var nodVal = e.target.firstChild.nodeValue;
    var nodVal;
    (e.target.firstChild != null)?(nodVal = e.target.firstChild.nodeValue):(nodVal = "#");
    console.log(nodVal);
    var modText =`
<div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">P Text:</label>
                <textarea class="form-control tx">${nodVal}</textarea>
              </div>
            </form>
</div>
`;
    document.querySelector(".mod").innerHTML = modH+modHead+modText+modFoot+modF;
  } else if(HTMLnodes == "a"){
    console.log(HTMLnodes);
    display();
    var atr = e.target.getAttribute('href');
    var nodVal = e.target.firstChild.nodeValue;
    console.log(nodVal);
    if ((nodVal == '')||(nodVal == null)) {
      nodVal = '#';
    }
      var modbody = `
      <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Link URL:</label>
                      <input class="form-control lnk" type="text" placeholder="https://image or url link" value="${atr}" id="recipient-name">
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Text:</label>
                      <textarea class="form-control tx">${nodVal}</textarea>
                    </div>
                  </form>
      </div>
      `;
    document.querySelector(".mod").innerHTML = modH+modHead+modbody+modFoot+modF;
  }else if((HTMLnodes == "h1")||(HTMLnodes == "h2")||(HTMLnodes == "h3")||(HTMLnodes == "h4")||(HTMLnodes == "h5")||(HTMLnodes == "h6")){
    console.log(HTMLnodes);
    display();
    //var nodVal = e.target.firstChild.nodeValue;
    var nodVal;
    (e.target.firstChild != null)?(nodVal = e.target.firstChild.nodeValue):(nodVal = "#");
    console.log(nodVal);
    var modText =`
<div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">H Text:</label>
                <textarea class="form-control tx">${nodVal}</textarea>
              </div>
            </form>
</div>
`;
    document.querySelector(".mod").innerHTML = modH+modHead+modText+modFoot+modF;
  } else{
    console.log("that is not define");
    console.log(e.target.nodeName);
    console.log(HTMLnodes);
  }
}
function displaynon(e) {
  var lsic = window.localStorage.getItem("randCssClass");
  var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
  var qsif = iframeDocument.querySelector("."+lsic);
  var clc = qsif.classList.contains(lsic);
  qsif.classList.remove(lsic);
  console.log(clc);
  document.querySelector(".mod").style.display ="none";
  localStorage.removeItem("randCssClass");
}
function display() {
  document.querySelector(".mod").style.display ="block";
}
const random = (length = 8) => {
    return "E"+Math.random().toString(16).substr(2, length);
};
function edit_simple(e) {
  var lsic = window.localStorage.getItem("randCssClass");
  var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
  var qsif = iframeDocument.querySelector("."+lsic);
  var qsifnn = qsif.nodeName.toString().toLowerCase();
  var clc = qsif.classList.contains(lsic);
    if(qsifnn == "img"){
        var qsif_parr = qsif.parentElement;
        var qsif_parr_nn = qsif_parr.nodeName.toString().toLowerCase();
        if(qsif_parr_nn == "a"){
            console.log("parrent Node is img to a tag");
            console.log("that is img");
            var lnk =document.querySelector(".lnk").value;
            var lnk_2 =document.querySelector(".lnk-2").value;
            qsif.setAttribute("src",lnk);
            qsif_parr.setAttribute("href",lnk_2);
            console.log(lnk);
        }else{
            console.log("that is img");
            var lnk =document.querySelector(".lnk").value;
            qsif.setAttribute("src",lnk);
            console.log(lnk);
        }
    }else if(qsifnn == "a"){
      console.log("that is a tag");
      var lnk =document.querySelector(".lnk").value;
      var tx =document.querySelector(".tx").value;
      qsif.setAttribute("href",lnk);
      qsif.innerHTML = tx;
    }else if(qsifnn == "p"){
      console.log("that is p tag");
      var tx =document.querySelector(".tx").value;
      qsif.innerHTML = tx;
    }else if((qsifnn == "h1")||(qsifnn == "h2")||(qsifnn == "h3")||(qsifnn == "h4")||(qsifnn == "h5")||(qsifnn == "h6")){
      console.log("that is H tag");
      var tx =document.querySelector(".tx").value;
      qsif.innerHTML = tx;
    }else{
      console.log("not define");
    }
  qsif.classList.remove(lsic);
  console.log(clc);
  document.querySelector(".mod").style.display ="none";
  localStorage.removeItem("randCssClass");
}
document.querySelector(".download").addEventListener("click",download_html);
function download_html(e){
    console.log('download html');
    var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
    var array = ['<!DOCTYPE html>'+iframeDocument.doctype.nextSibling.outerHTML];
    const blob = new Blob(array, {type : 'text/html'}); // the blob
    var link_a = document.createElement("a");
    const file_url = URL.createObjectURL(blob);
    link_a.setAttribute('href',file_url);
    link_a.setAttribute('download','HTMLemailTemplates.html');
    link_a.style.display ="none";
    document.body.appendChild(link_a);
    link_a.click();
    document.body.removeChild(link_a);
}
function iframe_load(e) {
  var obj= JSON.parse(window.localStorage.getItem('ifram_link'));
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src","../"+obj.url);
  iframe.setAttribute("id","frame");
  document.querySelector(".iframe").appendChild(iframe);
}