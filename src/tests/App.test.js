jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {farm:2,
id:"42976064761",
isfamily:0,
isfriend:0,
isprimary:"0",
ispublic:1,
secret:"38be574628",
server:"1789",
title:"Snoqualmie Falls"}
 }))
}))

import Vue from 'vue'
import App from '../vue/app.vue'
import { shallow } from 'vue-test-utils'
import axios from 'axios' 

describe('App.test.js', () => {
	let cmp, vm
	
	beforeEach(() => {
		cmp = shallow(App, {})
		cmp.setData({url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157695078896702&user_id=8994820%40N07&format=json&nojsoncallback=1"})
		jest.resetModules()
		jest.clearAllMocks()
	})
	
	
	it('Calls axios.get', () => {
	  expect(axios.get).toBeCalledWith('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157695078896702&user_id=8994820%40N07&format=json&nojsoncallback=1')
	})	
	
	
	it('equals url to flickr url', () => {
		expect(cmp.vm.url).toEqual("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157695078896702&user_id=8994820%40N07&format=json&nojsoncallback=1")
	})



	it('has the expected html structure', () => {
		expect(cmp.element).toMatchSnapshot()
	})
})
