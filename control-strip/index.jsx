import { run, css } from "uebersicht"

export const refreshFrequency = 600000;

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

export const render = () => {
  return (
    <div className="controlStrip">
      test
    </div>
  );
};

export const className = `
  bottom: 100px;
`;