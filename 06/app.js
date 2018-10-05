console.log('app')

var appkey = '52fb81a4f5db05e31bda4553e0454237';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;


var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK 52fb81a4f5db05e31bda4553e0454237');
var options = {
    headers : myHeaders
};

fetch(url,options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })