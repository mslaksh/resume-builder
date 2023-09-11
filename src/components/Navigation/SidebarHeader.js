import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

function ToolbarHeader() {
  return (
    <div
      style={{
        paddingRight: 20,
        paddingTop: 0,
        textAlign: 'center',
        marginBottom: 10,
      }}
    >
      <h1
        style={{
          fontFamily: 'Cutive Mono, monospace',
          fontWeight: 100,
          marginBottom: 0,
          textAlign: 'center',
        }}
      >
        <span role="img" aria-label="curly page emoji">📃 </span>
        Resume Builder
      </h1>
      <em
        style={{
          fontFamily: 'Cutive Mono, monospace',
          fontWeight: 100,
        }}
      >
        Shanthosh Lakshman
      </em>
      <Header as="h2">
        <Icon name="code" style={{ fontSize: 24, position: 'relative', bottom: 7 }} />
        Tools
      </Header>
    </div>
  );
}

export default ToolbarHeader;
