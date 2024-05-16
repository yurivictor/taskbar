import { run } from "uebersicht";

const formatIcon = ( data ) => {
  if ( data.includes( 'muted:true' ) === false ) {
    return 'fas fa-volume-up';
  } else {
    return 'fas fa-volume-mute grey';
  }
};

const handleVolume = ( output ) => {
}

const toggleMute = () => {
  run( `osascript -e 'get volume settings'` ).then( ( output ) => { 
    if ( output.includes( 'muted:false' ) ) {
      console.log( 'turn it down' );
      run(
        `osascript -e "set Volume 0"`
      )
    } else {
      console.log( 'turn it up' );
      run(
        `osascript -e "set Volume 2"`
      )
    }
  } );
};

const render = ( { data } ) => (
  <li key="sound" onClick={ () => { toggleMute() } }>
      <i className={formatIcon( data )}></i>
  </li>
);

export default render;