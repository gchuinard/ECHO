import React, { useEffect, useRef } from 'react';

export default function Map({ options, onMount, className }) {
  const ref = useRef();

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(ref.current, options);
      const marker = new google.maps.Marker({
        position: options.center,
        map: map,
        title: 'Hello World!'
      });
      if (typeof onMount === 'function') {
        onMount(map);
      }
    };
    onLoad();
  }, [onMount, options]);

  return (
    <div
      style={{ height: '230px', borderRadius: '0.5em', width: '500px' }}
      {...{ ref, className }}
    />
  )
}


Map.defaultProps = {
  options: {
    center: (new google.maps.LatLng()),
    zoom: 5,
  },
};
