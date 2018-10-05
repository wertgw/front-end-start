console.log('1boon');
var count = 1;


function aaaa() {
    getUrlData(function(json){
        console.log(json);
    
        var str = '';
    
        for(var i=0; i < json.data.length; i++){
    
            var title = json.data[i].title;
            var path = json.data[i].path;
            str += '<a href="https://1boon.kakao.com/'+path+'" target ="_blank">' + title + '</a><br>';
        }
    
        document.getElementById('wrap').innerHTML += str;
        count++;
    })
}

function getUrlData(callback) {
    var url = 'https://1boon.kakao.com/ch/enter.json?page=' + count + '&pagesize=10';
    console.log(url);
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
           // console.log('json data:', data);
            callback(data)
        });
})
.catch(function(err){
    console.log('Fetch Error : -S', err);
});
}
var btn = document.querySelector("button");
btn.addEventListener("click", aaaa);

aaaa();
