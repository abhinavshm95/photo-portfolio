import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import $ from 'jquery'; 

export default function SimpleMap() {

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 26.583069132639512,
    lng: 74.84841454472033
  }

  // const divStyle = {
  //   background: `white`,
  //   border: `1px solid #ccc`,
  //   padding: 15
  // }

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  const onMapInitialize = () => {
     // Prevents card from being added more than once (i.e. when page is resized and google maps re-renders)
     setTimeout(() => {
       if ( $( ".place-card" ).length === 0 ) {
        $(".gm-style").append('<div style="position: absolute; right: 0px; top: 0px;"> <div style="margin: 10px; padding: 1px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; background-color: white;"> <div> <div class="place-card place-card-large"> <div class="place-desc-large"> <div class="place-name"> Sanjana Studio </div><div class="address"> Sanjana Studio, Madanganj-Kishangarh, Rajasthan, India </div></div><div class="navigate"> <div class="navigate"> <a class="navigate-link" href="https://www.google.com/maps/dir//sanjan+studio/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x396bf0e72b9f8601:0xce22e60625f83bfa?sa=X&ved=2ahUKEwiikPXI74DxAhXCTX0KHSfxDSEQ9RcwFnoECD4QBQ" target="_blank"> <div class="icon navigate-icon"></div><div class="navigate-text"> Directions </div></a> </div></div><div class="saved-from-source-link" style="display:none"> </div><div class="maps-links-box-exp"> <div class="time-to-location-info-exp" style="display:none"> <span class="drive-icon-exp experiment-icon"></span><a class="time-to-location-text-exp" style="display:none" target="_blank"></a><a class="time-to-location-text-exp" style="display:none" target="_blank"></a> </div><div class="google-maps-link"> <a href="https://www.google.com/maps/place/SANJANA+STUDIO/@26.5829783,74.8483938,15z/data=!4m5!3m4!1s0x0:0xce22e60625f83bfa!8m2!3d26.5829783!4d74.8483938" target="_blank">View larger map</a> </div></div><div class="time-to-location-privacy-exp" style="display:none"> <div class="only-visible-to-you-exp"> Visible only to you. </div><a class="learn-more-exp" target="_blank">Learn more</a> </div></div></div></div></div>');
        }
     }, 1500);
  }

  return (
    <LoadScript className="col-map"
      googleMapsApiKey='AIzaSyB7V-mAjEzzmP6PCQda8To0ZW_o3UOCVCE'
      onLoad={onMapInitialize}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker onLoad={onLoad} position={{ 
        lat: 26.583069132639512,
        lng: 74.84841454472033
      }} animation={2} />

        {/* <InfoWindow
          onLoad={onLoad}
          position={defaultCenter}
        >
          <div>
            Sanjana Studio
          </div>
        </InfoWindow> */}
      </GoogleMap>
    </LoadScript>
  )
}