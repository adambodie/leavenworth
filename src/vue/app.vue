<template lang="pug">
    slick.carousel-class(ref="slick" :options="slickOptions")
      div(v-for="photo in photos" :key="photo.index")
        div
          img(:src="photo.title")
</template>

<script>
import Slick from 'vue-slick'
export default {
  name: 'App',
  components: { Slick },
  data () {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
      },
      photos: [
        { title: '../images/test-image1.JPG', name: 'Leavenworth' },
        { title: '../images/test-image2.JPG', name: 'Leavenworth' },
        { title: '../images/test-image1.JPG', name: 'Leavenworth' },
        { title: '../images/test-image4.JPG', name: 'Leavenworth' },
        { title: '../images/test-image5.JPG', name: 'Leavenworth' },
      ]
    }
  }
}
</script>
