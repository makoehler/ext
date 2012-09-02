Ext.define('MyApp.view.override.MyToolbar', {
    override: 'MyApp.view.MyToolbar',
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    text: 'Normal'
                },
                {
                    xtype: 'badgebutton',
                    text: 'Informacion',
                    badgeText: '5',
                    handler: function(){
                        
                        var badgeTextVal = this.badgeText;
                        this.setBadgeText( badgeTextVal );
                        
                        if ( Ext.isEmpty( badgeTextVal ) ) {
                            badgeTextVal = 0;
                        }
                        
                        badgeTextVal = parseInt(badgeTextVal,0) + 1;
                        this.setBadgeText( badgeTextVal );
                    }
                }
            ]
        });

        me.callParent(arguments);
    }
    
});