import Vue from 'vue'
import App from '../vue/app.vue'
import { shallow } from 'vue-test-utils'
import axios from 'axios'
import MockAdapter from "axios-mock-adapter";

describe('App.test.js', () => {
	let cmp, vm
	const mock = new MockAdapter(axios);
	
	beforeEach(() => {
		cmp = shallow(App, {})
		cmp.setData({url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157695078896702&user_id=8994820%40N07&format=json&nojsoncallback=1"})
		jest.resetModules()
		jest.clearAllMocks()
	})
	
it("should be called once", () => { 
	let mockAdapter = new MockAdapter(axios);
	mockAdapter.onGet('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157695078896702&user_id=8994820%40N07&format=json&nojsoncallback=1').reply(200, {
       data: {
         pictures: [{farm: '2', server: '1789', id: '42976064761', secret: '38be574628', title: 'Snoqualmie Falls' }]
       }
     });
     let response = App.mounted();
     setTimeout(() => {
			expect(response.pictures[0]).to.be.equal({farm: '2', server: '1789', id: '42976064761', secret: '38be574628', title: 'Snoqualmie Falls' });
		});
});

	
	
	it('equals url to flickr url', () => {
		expect(cmp.vm.url).toEqual("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157695078896702&user_id=8994820%40N07&format=json&nojsoncallback=1")
	})



	it('has the expected html structure', () => {
		expect(cmp.element).toMatchSnapshot()
	})
})
