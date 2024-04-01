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

