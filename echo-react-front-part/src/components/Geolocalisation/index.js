import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HANDLE_ECHO_CREATION_INPUT } from 'src/store/actions';


export default function Geolocalisation({ options, onMount }) {
  const ref = useRef();
  const dispatch = useDispatch();

  const locatePoint = useSelector((state) => state.create.adress);

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(ref.current, options)
      const geocoder = new window.google.maps.Geocoder(ref.current);

      geocoder.geocode({ address: locatePoint }, function (results, status) {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);

          let name = 'latitude';
          let coordinate = results[0].geometry.location.lat()
          dispatch({ type: HANDLE_ECHO_CREATION_INPUT, name, coordinate });
          name = 'longitude';
          coordinate = results[0].geometry.location.lng()
          dispatch({ type: HANDLE_ECHO_CREATION_INPUT, name, coordinate });

          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
        } else {
        }
      })


      if (typeof onMount === 'function') onMount(map, geocoder)
    }
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`;
      document.head.append(script);
      script.addEventListener('load', onLoad);
      return () => script.removeEventListener('load', onLoad);
    } else onLoad();

  })

  return (
    <div
      style={{
        height: '300px', margin: '1em 0', borderRadius: '0.5em', width: '400px'
      }}
      {...{ ref }}
    />
  );
}

Geolocalisation.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 10,
  },
};
