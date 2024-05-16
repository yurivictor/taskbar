// Todo
// x Add weather
// x Toggle sound off/on
// x Connect/disconnect headphones
// * Add spotify
// * Connect/disconnect wifi
// x hook up battery charging

import { run, css } from "uebersicht"
import {
  Airpods,
  Apps,
  Battery,
  Date,
  Folders,
  Sound,
  Weather,
  Wifi,
} from "./widgets/index.jsx";

export const refreshFrequency = 60000;

export const command = async ( dispatch ) => {
  const commands = {
    'airpods': `/usr/local/bin/blueutil --info D0:DA:D7:31:B5:26`,
    'battery': `pmset -g batt | egrep '([0-9]+\%).*' -o`,
    'date': `date +'%a, %b %d, %H:%M'`,
    'notifications': `~/bin/dock-notification-count`,
    'running': `osascript -e 'tell application "\Finder\" to get the name of every process whose visible is true'`,
    'sound': `osascript -e 'get volume settings'`,
    'weather': `curl -s 'https://api.weather.gov/gridpoints/OKX/34,35/forecast'`,
    // 'weather': `curl -s 'https://api.forecast.io/forecast/0cf8ecb43c12b421f7bd43b17826d0c2/40.7150,-73.9843'`,
    'wifi': `sh ./scripts/wifi`,
  };
  const results = {};
  for ( const command of Object.keys( commands ) ) {
   await run( commands[command] ).then( ( result ) => {
      results[command] = result;
    } );
  }
  dispatch( results );
};

export const updateState = ( data, previousState ) => ( {
  ...previousState,
  ...data
} );

export const render = ( { 
  airpods,
  battery,
  date,
  internet,
  notifications,
  running,
  sound,
  weather,
  wifi,
} ) => {
  // Check for strange case where weather returns 502 page
  if ( weather == null || weather.includes( '502 Bad' ) ) { weather = null; }
  // Return the dock
  return (
    <div className="dock">
      {running ? <Apps data={ { running, notifications } } /> : null}
      <Folders />
      <ul className="system">
        {wifi ? <Wifi data={ wifi.split('@') } /> : null }
        {airpods ? <Airpods data={ airpods } /> : null}
        {sound ? <Sound data={ sound } /> : null}
        {battery ? <Battery data={ battery } /> : null}
        {date ? <Date data={ date } /> : null}
        {weather ? <Weather data={ JSON.parse( weather ) } /> : null }
      </ul>
    </div>
  );
};

export const className = `
  bottom: 0;
  width: calc( 100% - 30px );
`;