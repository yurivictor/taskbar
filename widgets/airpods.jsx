import { run } from "uebersicht";

const ID = '40-e6-4b-55-37-e7';

const formatIcon = ( data ) => {
  if ( data.includes( 'not connected' ) === false ) {
    return 'far fa-headphones-alt';
  } else {
    return 'far fa-headphones-alt grey';
  }
};

const toggleConnection = () => {
  console.log( 'sup' );
  run( `/usr/local/bin/blueutil --info ${ID}` ).then( ( output ) => {
    if ( output.includes( ', connected ' ) ) {
      run( `/usr/local/bin/blueutil --disconnect ${ID}` );
    } else {
      run( `/usr/local/bin/blueutil --connect ${ID}` );
    }
  } );
};

const render = ( { data } ) => (
  <li key="airpods" onClick={ () => { toggleConnection() } }>
    <i className={formatIcon( data )}></i>
  </li>
);

export default render;