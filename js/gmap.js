var map, infoWindow, directionsService, directionsDisplay, start, stop;
      function initMap() {
        
        
        
        var onClickHandler = function() {
            
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 6.59651 , lng: 3.34205},
              zoom: 15
            });
            infoWindow = new google.maps.InfoWindow;
              
             // Try HTML5 geolocation.
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    };
                    //console.log(pos);                    
        
                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Location found.');
                    infoWindow.open(map);
                    map.setCenter(pos);
                    
                  }, function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                  });
                } else {
                  // Browser doesn't support Geolocation
                  handleLocationError(false, infoWindow, map.getCenter());
                }
        };
        
        
        
        // For the route
        
        
            
    
            var onChangeHandler = function() {
                
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 6.59651 , lng: 3.34205},
                    zoom: 15
                });
            
                                                
            
             directionsService = new google.maps.DirectionsService;
             directionsDisplay = new google.maps.DirectionsRenderer;
            
             stop = {'placeId': 'ChIJeYR3B76eOxARpw6_MtdStkA'};
             directionsDisplay.setMap(map);
             MYcalculateAndDisplayRoute(directionsService, directionsDisplay, stop);
            };
            
           
            document.getElementById('rroute').addEventListener('click', onChangeHandler);
            document.getElementById('sshow').addEventListener('click', onClickHandler);
            
            
           
       
      }
      
      function initMap2() {
         
            
            
            map = new google.maps.Map(document.getElementById('map2'), {
                    mapTypeControl: false,
                    center: {lat: 6.59651 , lng: 3.34205},
                    zoom: 15
                    
            });
            
                                                
             new AutocompleteDirectionsHandler(map);
             
      }
      
      
      /**
        * @constructor
       */
      function AutocompleteDirectionsHandler(map) {
        this.map = map;
        this.originPlaceId = null;
        this.destinationPlaceId = null;
        this.travelMode = 'WALKING';
        var originInput = document.getElementById('origin-input');
        var destinationInput = document.getElementById('destination-input');
        var modeSelector = document.getElementById('mode-selector');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);

        var originAutocomplete = new google.maps.places.Autocomplete(
            originInput, {placeIdOnly: true});
        var destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput, {placeIdOnly: true});

        this.setupClickListener('changemode-walking', 'WALKING');
        this.setupClickListener('changemode-transit', 'TRANSIT');
        this.setupClickListener('changemode-driving', 'DRIVING');

        this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
        this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
      }
      
      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
        var radioButton = document.getElementById(id);
        var me = this;
        radioButton.addEventListener('click', function() {
          me.travelMode = mode;
          me.route();
        });
      };

      AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
        var me = this;
        autocomplete.bindTo('bounds', this.map);
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }
          if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
          } else {
            me.destinationPlaceId = place.place_id;
          }
          me.route();
        });

      };
      
      function MYcalculateAndDisplayRoute(directionsService, directionsDisplay, end) {
            
            // Try HTML5 geolocation.
                if (navigator.geolocation) {
                
                  navigator.geolocation.getCurrentPosition(function(position) {
                    var pos1 = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    };
                    //console.log(pos1);
                    var poslat = pos1.lat;
                    //console.log( poslat);
                    var poslng = pos1.lng;
                    //console.log( poslng);
                    var start = new google.maps.LatLng(poslat, poslng);
                    //console.log(start)
                    //console.log(begin);
        
                    calculateAndDisplayRoute(directionsService, directionsDisplay, start, end);
                  }, function() {
                    //handleLocationError(true, infoWindow, map.getCenter());
                    
                  });
                } else {
                  //Browser doesn't support Geolocation
                  handleLocationError(false, infoWindow, map.getCenter());
                }
   
        
      }
      
      AutocompleteDirectionsHandler.prototype.route = function() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        var me = this;

        this.directionsService.route({
          origin: {'placeId': this.originPlaceId},
          destination: {'placeId': this.destinationPlaceId},
          travelMode: this.travelMode
        }, function(response, status) {
          if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      };
      
      
      
      
      function calculateAndDisplayRoute(directionsService, directionsDisplay, begin, end) {
        


            directionsService.route({
               
               origin: begin,
               destination: end,
               travelMode: 'DRIVING'
            }, function(response, status) {
              if (status === 'OK') {
                directionsDisplay.setDirections(response);
              } else {
                window.alert('Directions request failed due to ' + status);
              }
            });
          }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }