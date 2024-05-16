import { React } from "uebersicht"

const Folders = () => (
  <ul id="folders" className="folder">
    <li><i class="far fa-desktop"></i> Desktop</li>
    <li><i class="far fa-download"></i> Downloads</li>
    <li><i class="far fa-file-code"></i> Projects</li>
  </ul>
);

const Websites = () => (
  <ul id="websites" className="folder">
    <li><a href="https://www.notion.so/yurivictor/378e862f5f9a4ab98e79054309227bf6?v=64e4726019894834909402d144a8295d"><i class="fa fa-sticky-note"></i></a></li>
    <li><a href="https://mail.google.com/mail/u/1/#inbox"><i class="far fa-envelope"></i></a></li>
    <li><a href="https://calendar.google.com/calendar/u/0/r/week"><i class="far fa-calendar"></i></a></li>
    <li><a href="http://drive.google.com/drive/u/0/"><i class="fab fa-google-drive"></i></a></li>
  </ul>
);

const render = () => {
  const [showFolders, setShowFolders] = React.useState(false);
  const [showWebsites, setShowWebsites] = React.useState(false);
  const onClick = () => {
    setShowFolders( !showFolders );
  }
  const toggleWebsites = () => {
    setShowWebsites( !showWebsites );
  }

  return ( 
    <ul className="folders" key="folders">
      <li>
        <p onClick={onClick}><i className="far fa-folder"></i> Folders</p>
        { showFolders ? <Folders /> : null }
      </li>
      <li>
        <p onClick={toggleWebsites}><i className="far fa-bookmark"></i> Websites</p>
        { showWebsites ? <Websites /> : null }
      </li>
    </ul>
  )
};

export default render;