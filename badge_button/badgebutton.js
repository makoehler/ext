Ext.onReady(function(){

    Ext.define('BadgeButton', {
        extend: 'Ext.button.Button',
        alias: 'widget.badgebutton',
        
        config:{
        	badgeText:null,
	        renderTpl : [
               '<em id="{id}-btnWrap" <tpl if="splitCls">class="{splitCls}"</tpl>>',
               '        ',
                '        <tpl if="badgeText">',
                '            <span id="{id}-btnbadge" class="{baseCls}-badgeCls" reference="badgeElement"> ',
                '                {badgeText}',
                '            </span>',
                '        </tpl>',
                '        ',
                '    <button id="{id}-btnEl" type="{type}" class="{baseCls}" hidefocus="true" role="button" autocomplete="off" <tpl if="tabIndex"> tabIndex="{tabIndex}" </tpl> <tpl if="disabled"> disabled="disabled" </tpl>>',
                
                '        <span id="{id}-btnInnerEl" class="{baseCls}-inner" style="{innerSpanStyle}">{text}</span>',
                '        <span id="{id}-btnIconEl" class="{baseCls}-icon {iconCls}" <tpl if="iconUrl"> style="background-image:url({iconUrl})"></tpl></span>',
                '    </button>',
                '</em>',
                '<tpl if="closable">',
                '    <a id="{id}-closeEl" href="#" class="{baseCls}-close-btn" title="{closeText}"></a>',
                '</tpl>'
            ]
	    },
    
    	childEls:['btnbadge'],
    
    	constructor: function( config ){
	        var me = this;
	        //console.log( me.config );
	        Ext.apply(this.config, config);
	        this.callParent(arguments);
	        //console.log( me.config );
	    },
    
    	getTemplateArgs: function() {
	        var me = this,
            	persistentPadding = me.getPersistentPadding(),
            	innerSpanStyle = '';
        
	        if (Math.max.apply(Math, persistentPadding) > 0) {
	                innerSpanStyle = 'margin:' + Ext.Array.map(persistentPadding, function(pad) {
	                return -pad + 'px';
	            }).join(' ');
	        }
        
	        return {
	            href : me.getHref(),
	            disabled : me.disabled,
	            hrefTarget: me.hrefTarget,
	            type : me.type,
	            btnCls : me.getBtnCls() +' has-badge',
	            splitCls : me.getSplitCls(),
	            iconUrl : me.icon,
	            iconCls : me.iconCls,
	            text : me.text || ' ',
	            badgeText:me.badgeText || undefined,
	            tabIndex : me.tabIndex,
	            innerSpanStyle: innerSpanStyle
	        };
	    },
    
    	setBadgeText:function(text) {
	        var me = this;
        
	        if( Ext.isEmpty( text)){
	            text = undefined;
	            me.btnbadge.addCls('hide-badge');
	        }else{
	            me.btnbadge.removeCls('hide-badge');
	        }
        
	        me.badgeText = text;
        
	        if (me.rendered) {
	            me.btnbadge.update(text );
	        }
	        return me;
	    }
    });
})