const formatIcon = ( data ) => {
  let weather = data.toLowerCase();
  if ( weather.includes( 'sun' ) ) {
    return 'sun';
  } else if ( weather.includes( 'rain' ) ) {
    return 'cloud-rain';
  } else if ( weather.includes( 'rain' ) ) {
    return 'snow';
  } else if ( weather.includes( 'cloud' ) ) {
    return 'cloud';
  } else {
    return 'cloud';
  }
};

const render = ( { data } ) => {
  if ( 'properties' in data ) {
    return (
      <li key="weather">
        <i className={`fas fa-${formatIcon( data.properties.periods[0].shortForecast )}`}></i> { Math.round( data.properties.periods[0].temperature ) }
      </li>
    );
  } else {
    console.log( data );
    return (
      <li key="weather">
        E
      </li>
    )
  }
}

export default render;