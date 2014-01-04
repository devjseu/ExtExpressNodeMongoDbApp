Ext.define('DevJS.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',

    items: [
        {
            region: 'north',
            margins: 5,
            height: 50,
            xtype: 'container'
        },
        {
            title: 'West / Zachodni',
            region: 'west',
            margins: '0 5 0 5',
            flex: .2,
            collapsible: true,
            split: true,
            titleCollapse: true
        },
        {
            title: 'Center / Srodkowy',
            region: 'center',
            layout:'fit',
            items: [
                {
                    title: '',
                    xtype: 'usersList'
                }
            ]
        },
        {
            title: 'East / Wschodni',
            region: 'east',
            margins: '0 5 0 5',
            width: 200,
            collapsible: true,
            collapsed: true,
            items: [
            ]
        },
        {
            title: 'South / Południowy',
            region: 'south',
            margins: '0 5 5 5',
            flex: .1,
            split: true
        }
    ]
});
