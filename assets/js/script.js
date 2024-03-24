

   
  /* let map;

  async function initMap() {
    // const { Map } = await google.maps.importLibrary("maps");
   
     map = new google.maps.Map(document.getElementById("map"), {
       center: { lat: 52.1148117, lng: -0.4490071 },
       zoom: 12,
     });
   
   }
   
   window.initMap= initMap; */

   async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      center: { lat: 52.1158117, lng: -0.4490071 },
      zoom: 12,
      mapId: "6910df719e8c299b",
    });
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 52.1158117, lng: -0.4490071 },
    });
  }
  
  initMap();
   
