   $(document).ready(function () {

		   //Google Map

			var mapCanvas = document.getElementById('map-canvas');
			var myLatlng = new google.maps.LatLng(23.040436, 72.501708); //your latitude and longitude here
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: myLatlng,
				styles:[{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#cacdcf"},{"lightness":"60"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dbe5ba"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b5dbef"}]}]
			}
			var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
			var map = new google.maps.Map(mapCanvas, mapOptions)
			var marker = new google.maps.Marker({
				position: myLatlng,
				icon: image, 
				styles:[{"width":"0.5%"}],
				map: map,
				title: ''
			});
		});