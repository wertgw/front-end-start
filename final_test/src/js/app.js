console.log('app.js');

var newnote = document.querySelector('.btn-newnote');
var savenote = document.querySelector(".btn-savenote");
var notedownload = document.querySelector(".btn-notedownload");
var about = document.querySelector(".btn-about");
var full = document.querySelector(".btn-full");

var div = document.getElementById('about');
var memo = document.getElementById('memo');

window.onload = onloadFunction;
function onloadFunction(e){
  if (localStorage.length != 0) {
    memo.value = localStorage.getItem(1);
  }
}

newnote.addEventListener('click', clickedNewnote);
function clickedNewnote(e){
    memo.value = '';
}

savenote.addEventListener('click', clickedSavenote);
function clickedSavenote(e){
  if (typeof(localStorage) == 'undefined') {
    alert('localStorage .')
  }else {
    try {
      localStorage.setItem("1", memo.value);
    } catch (e) {
      if (e == QUATA_EXCEEDED_ERR) {
        alert('localStorage .')
      }//새로고침을 할 경우 가장 최근에 저장했던 노트가 화면에 표시.
    }//어떤 메모를 쓰더라도 저장하지않으면 새로고침 했을 시 최근에 저장했던 메모표시.
  }
}

//저장하지않고 다운로드하면 가장 최근에 저장했던 노트를 다운 받음.
notedownload.addEventListener('click', clickedFilesave);
function clickedFilesave(e){
  var blob = new Blob([localStorage.getItem(1)], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "Memo.txt");
}

about.addEventListener('click', clickedAbout);
function clickedAbout(e){
   document.querySelector(".A").style.display = "block";
   
}
function close(e){
    document.querySelector(".A").style.display = "none";
}//about을 누르면 어플리케이션 정보가 나옴.
//그리고 창 아무곳을 클릭하면 다시 닫힘. 
document.querySelector(".A").addEventListener("click", close );

full.addEventListener('click', clickedFull);
function clickedFull(e){
  if (screenfull.enabled) {
		screenfull.request();
	}
}