/**
 * Main navigation view for map tab.
 */
Ext.define('Denkmap.view.map.NavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mapnavigationview',

    requires: [
        'Ext.ux.LeafletMap',
        'Ext.Button'
    ],

    config: {
        title: 'Map',
        iconCls: 'map',
        url: 'map',
        id: 'mapNavigationView',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'DenkMap'
        },
        {
            // Ext.ux.LeafletMap Component
            id: 'leafletmap',
            xtype: 'leafletmap',
            useCurrentLocation: true,
            enableOwnPositionMarker: true,
            autoMapCenter: false,
            mapOptions: {
                zoom: Denkmap.util.Config.getLeafletMap().zoom
            },
            tileLayerUrl: Denkmap.util.Config.getLeafletMap().getTileLayerUrl(window.L.Browser.retina),
            tileLayerOptions: {
                apikey: Denkmap.util.Config.getLeafletMap().apiKey,
                styleId: Denkmap.util.Config.getLeafletMap().styleId,
                attribution: Denkmap.util.Config.getLeafletMap().tileLayerAttribution,
                detectRetina: true
            }
        }],

        defaultBackButtonText: 'Back',

        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    cls: 'mapCenterButton',
                    iconCls: 'locate',
                    iconMask: true,
                    align: 'left'
                },
                {
                    cls: 'mapLoadingIcon',
                    icon : './resources/images/transparent_loader.gif',
                    align: 'right',
                    hidden: true

                }
            ]
        }
    }
});