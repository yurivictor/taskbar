const formatIcon = ( { data } ) => {
  if ( data.includes( '200 OK' ) === false ) {
    return 'fa fa-bug red';
  } else {
    return 'fa fa-wifi'
  }
};

const render = ( { data } ) => (
  <li key="internet">
    <i className={formatIcon( { data } )}></i>
  </li>
);

export default render;