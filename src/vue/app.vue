<template lang="pug">
    div.owl-carousel.owl-theme
      div(v-for="picture in pictures" :key="picture.index")
          img(:src="'https://farm' + picture.farm + '.staticflickr.com/' + picture.server + '/' + picture.id + '_' + picture.secret + '_z.jpg'" :alt="picture.title")
          span.caption {{picture.title}}    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


export default {
  name: 'App', 
  data () {
    return {
      pictures: []    
    }
  },
  mounted() {
	const vm = this;
	let url = `https://api.flickr.com/services/rest/
					?method=flickr.photosets.getPhotos
					&api_key=0c3f8d32a28de8434240115b85a28499
					&photoset_id=72157695078896702
					&user_id=8994820%40N07
					&format=json&nojsoncallback=1`
	axios.get(url)
			.then((res) => {
				vm.pictures = res.data.photoset.photo;
				Vue.nextTick(function(){
					$('.owl-carousel').owlCarousel({
						loop: true,
						center: true,
						items: 1,
						nav: true,
						margin: 10,
						dots: false,
						responsive:{
							600:{
								items:3
							}
						}
					});
				}.bind(vm));
			})
		} 
	}
</script>
