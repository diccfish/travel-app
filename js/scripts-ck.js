// Me Scripts
// Swipe Events
function getresults(){var e=$(".romance:checked").val(),t=$(".adventure:checked").val(),n=$(".weather:checked").val(),r=$(".budget:checked").val();$.ajax({type:"Post",url:"current.php",data:{romance:e,adventure:t,weather:n,budget:r}}).done(function(e){$("#current-results-map-wrap").html(e)})}$(function(){function e(e){$(e.target).scrollTo("#stage2")}$("#stage1").on("swipeleft",e)});var width=$(window).width();width<685?$("body").css("overflow-x","auto"):$("body").css({"overflow-x":"hidden","overflow-y":"hidden"});$(".show-current-results").click(function(){$(".show-current-results").toggleClass("close-current-results");$("#current-results").toggleClass("current-results-open");$("#container > div").toggleClass("container-up");return!1});$("#container").fullContent({stages:"div",mapPosition:[{v:1,h:1},{v:1,h:2},{v:1,h:3},{v:1,h:4}],stageStart:0,speedTransition:500,idComplement:"_page"});var map=L.mapbox.map("map","diccfish.map-uvbdj3pk");map.markerLayer.setGeoJSON(geoJson);map.markerLayer.on("ready",function(e){this.eachLayer(function(e){var t=e.feature,n='<a target="_blank" class="popup" href="'+t.properties.url+'">'+'<img src="'+t.properties.image+'">'+"<h3>"+t.properties.city+"</h3>"+"</a>";e.bindPopup(n,{closeButton:!0,minWidth:200})})});map.setView([40,0],2);