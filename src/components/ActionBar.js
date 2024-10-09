import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faFileCode, faCog, faFileArchive, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const ActionBar = ({ service }) => {
  const actions = [
    { 
      name: 'Weblogic', 
      icon: faServer, 
      url: service ? `/weblogic/${service.id}` : '#',
      disabled: !service || !service.weblogicUrl
    },
    { 
      name: 'Swagger', 
      icon: faFileCode, 
      url: service ? `/swagger/${service.id}` : '#',
      disabled: !service || !service.swaggerUrl
    },
    { 
      name: 'Properties', 
      icon: faCog, 
      url: service ? `/properties/${service.id}` : '#',
      disabled: !service || !service.hasProperties
    },
    { 
      name: 'EAR', 
      icon: faFileArchive, 
      url: service ? `/ear/${service.id}` : '#',
      disabled: !service || !service.earUrl
    },
    { 
      name: 'Logs', 
      icon: faClipboardList, 
      url: service ? `/logs/${service.id}` : '#',
      disabled: !service || !service.hasLogs
    }
  ];

  return (
    <div className="action-bar">
      {actions.map((action, index) => (
        <a 
          key={index}
          href={action.url} 
          className={`action-button ${action.disabled ? 'disabled' : ''}`}
          onClick={(e) => action.disabled && e.preventDefault()}
        >
          <FontAwesomeIcon icon={action.icon} /> {action.name}
        </a>
      ))}
    </div>
  );
};

export default ActionBar;