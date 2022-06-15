// config ref
var g_dictionary;

// Get ready to receive the response from TOP
window.parent.Common.Gateway.on ( 'internalcommand', ( data ) => {
  console.log(data)

    if ( data.command === 'getConfig' ) {
        config = data.data;
    }
} );

// Send custom config request to TOP
window.parent.Common.Gateway.sendInfo ( { getConfig: true } );
