<template lang="pug">
  #primo.primo
      nav.panel
        p.panel-heading.primo__caption VK API - Vue.js App
        .panel-block
          p.control.primo__control
            a.button.primo__button.is-info.is-outlined( @click="getFriends()" ) get friends
      .box.primo__box( v-for="friend in friends" )
        article.media
          figure.media-left.primo__figure
            p.image.is-96x96
              img.primo__photo( :src="friend.photo_100", :alt="friend.id" )
          .media-content
            .content
              .primo__wrapper
                div.primo__primary
                  | #[strong {{ friend.first_name }} {{ friend.last_name }}]
                div.primo__secondary
                  span.primo__online( :class="{ 'is-online': friend.online, 'is-offline': !friend.online }" ) {{ isOnline(friend.online) }}
                div.primo__tertiary
                  a.button.is-primary.is-outlined.primo__button write message
</template>

<script>
  const token = '095b52caf14f7fa6919adc0dafb146b29a204c73952551da0a9d40ed0e3f72b4e6b735fcf57b08476b5f7'
  const method = 'friends.search'

  export default {
    name: 'primo',
    data () {
      return {
        friends: []
      }
    },
    methods: {
      getFriends () {
        this.$http.jsonp(this.getURL(method, { count: 10, fields: 'photo_100,online' }))
          .then(response => { return response.json() })
          .then(data => {
            this.friends = data.response.items
          })
      },
      isOnline (value) {
        return value ? 'Online' : 'Offline'
      },
      params (obj) {
        return Object.keys(obj).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')
      },
      getURL (method, params) {
        if (!method) throw new Error('Enter method')
        params = params || {}
        params['access_token'] = token
        return 'https://api.vk.com/method/' + method + '?' + this.params(params) + '&v=5.52'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .primo {

    & .image .primo__photo {
      border-radius: 50%;
    }

    & .primo__primary {
      margin-bottom: .2rem;
    }

    & .primo__secondary {
      margin-bottom: .4rem;
    }

    & .primo__online {
      margin-top: 1rem;
    }

    & .primo__button {
      text-transform: capitalize;
    }

    & .is-online {
      color: green;
    }

    & .is-offline {
      color: red;
    }

    & .primo__control {
      text-align: center;
    }

    & .primo__caption {
      text-align: center;
    }

    & .primo__box {
      background-color: #f5f5f5;
    }
  }
</style>
