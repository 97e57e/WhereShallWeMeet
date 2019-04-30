var a =0;
function searchPlace(_keyword){
    return new Promise(function (resolve, reject) {
    fetch(`http://165.194.35.214:26656/?keyword=${_keyword}&coordinate={127.1054328,37.3595963}`)
            .then(function(res) {
                // Response as Promise
                res.json().then(body =>{
                    var placesData = JSON.parse(body).places;
                    console.log(placesData);
                    resolve(placesData);
                    
                    for(var i=0; i<placesData.length; i++) {
                    	//if(placesData[i].distance < 10000) {
                            console.log('check : '+ placesData[i].x +" "+ placesData[i].y);
                            var posit = new naver.maps.LatLng(placesData[i].y, placesData[i].x);
                        
                            var marker = new naver.maps.Marker({
                                position: posit,
                                map: map,
                                icon : markerImageList[a]
                            });

                            markerList.push(marker);
                        //}
                    }
                    a++;
                    if(a>6){a=0;}
                    
                }).catch(err=>{
                    console.error(err);
                    reject("Error fetching.")
                });
            });
    })
}

