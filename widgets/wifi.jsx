const formatIcon = ( status ) => {
  if ( status.includes( 'none' ) === true ) {
    return 'fa fa-bug red';
  } else {
    return 'fa fa-wifi'
  }
};

const formatData = ( data ) => {
  if ( data.includes( 'none' ) === true ) {
    return '';
  } else {
    return data;
  }
};

const render = ( { data } ) => {
  const status = data[0];
  const network = data[1];
  return (
    <li key="internet">
      <i className={formatIcon(status)}></i>  { formatData(network)}
    </li>
  );
}

export default render;