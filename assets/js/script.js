

   
   let map;

   function initMap() {
    // const { Map } = await google.maps.importLibrary("maps");
   
     map = new google.maps.Map(document.getElementById("map"), {
       center: { lat: 52.1148117, lng: -0.4490071 },
       zoom: 12,
     });
   }
   
   window.initMap= initMap;
   
