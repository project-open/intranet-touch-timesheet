Ext.define('ProjectOpen.controller.About', {

	extend: 'Ext.app.Controller',

	config: {

		refs: {
			aboutContainer: 'aboutContainer'
		},

		control: {
			aboutList: {
				itemtap: 'onAboutItemTap',
				activate: 'onAboutListActivate'
			},
			videoList: {
				itemtap: 'onVideoTap'
			}
		}
	},

	onAboutListActivate: function(list) {
		list.deselectAll();
	},

	onAboutItemTap: function(list, idx) {
		this.getAboutContainer().push(ProjectOpen.app.config.aboutPages[idx]);
	},

	onVideoTap: function(list, idx, el, record) {
		Ext.Msg.confirm('External Link', 'Open in YouTube?', function(result){
            if (result == 'yes') {
                window.location = 'https://www.youtube.com/watch?v=' + record.get('id') + '&feature=player_embedded';
            }
        });
	}
});
