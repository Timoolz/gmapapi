            <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCILNwbmDz-aNDplMtXk9gbP2yFXRhRYWw&libraries=places&callback=initMap2">
            </script>
            
            <div class="mapwrap">
            <input id="origin-input" class="controls" type="text" placeholder="Enter an origin location"/>

            <input id="destination-input" class="controls" type="text" placeholder="Enter a destination location">
        
            <div id="mode-selector" class="controls">
              <input type="radio" name="type" id="changemode-walking" checked="checked">
              <label for="changemode-walking">Walking</label>
        
              <input type="radio" name="type" id="changemode-transit"/>
              <label for="changemode-transit">Transit</label>
        
              <input type="radio" name="type" id="changemode-driving"/>
              <label for="changemode-driving">Driving</label>
            </div>
            
            </div>
            <div  class="map" id="map2" align="centre">
            </div>