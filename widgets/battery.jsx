const getLevel = ( str ) => {
  const regex = /([0-9])+?%/gm;
  const levelRegex = str.match( regex );
  return levelRegex[0];
};

const getIcon = ( data ) => {
  if ( data.includes( ' charging' ) ) {
    return 'fas fa-charging-station';
  }
  const levelRegex = getLevel( data );
  const level = levelRegex.slice( 0, -1 );
  if ( level > 80 ) { return "far fa-battery-full"; }
  if ( level > 60 ) { return "far fa-battery-three-quarters"; }
  if ( level > 40 ) { return "far fa-battery-half"; }
  if ( level > 10 ) { return "far fa-battery-quarter"; }
  return "far fa-battery-empty";
};

const render = ( { data } ) => (
  <li key="battery">
    <i className={ `far fa-${ getIcon( data ) }` }></i> {getLevel(data)}
  </li>    
);

export default render;