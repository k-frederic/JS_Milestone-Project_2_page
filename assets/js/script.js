window.addEventListener('pageshow', function(event) {

  var historyTraversal = event.persisted || 
  (typeof window.performance != 'undefined' && 
   window.performance.navigation.type === 2);

  if (historyTraversal) {
      // Perform actions to refresh the page or update content
      window.location.reload();
  }

   // Function to prevent back/forward arrow navigation
 function preventBackForwardNavigation() {
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, null, window.location.href);
  };
}

// Call the function to prevent back/forward arrow navigation
preventBackForwardNavigation();
}); 
// This code above was found by questioning chatgpt  
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
   
