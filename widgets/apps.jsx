const render = ( { data } ) => {
  const apps = [
    { 'name': 'Finder', 'icon': 'fa fa-ghost' },
    { 'name': 'Safari', 'icon': 'fab fa-safari' },
    { 'name': 'Figma', 'icon': 'fab fa-figma' },
    { 'name': 'Adobe Photoshop', 'icon': 'fa fa-palette' },
    { 'name': 'Electron', 'icon': 'fa fa-code' },
    { 'name': 'Slack', 'icon': 'fab fa-slack' },
    { 'name': 'Messages', 'icon': 'fa fa-comments' },
    { 'name': 'Music', 'icon': 'fab fa-itunes' },
  ];
  const spacers = [ 0 ];
  return (
    <ul className="apps">
      { apps.map( ( app, index ) =>
        <li className={ `app ${ spacers.includes( index ) ? 'margin-right' : null } ${ data.running.includes( app.name ) ? 'running' : null } ${ data.notifications.includes( app.name ) ? 'notification' : null }`} key={app.name}> <i className={`${app.icon}`}></i></li>
      ) }
    </ul>
  );
};


export default render;