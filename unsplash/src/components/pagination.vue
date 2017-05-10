<template lang="pug">
  nav#pagination.pagination.is-centered
    a.pagination-previous( @click="onChangePage(Back)", v-show="isBack()" ) Previous
    a.pagination-next( @click="onChangePage(Forward)", v-show="isForward()" ) Next Page
    ul.pagination-list
      li( v-if="hasFirst" ): a.pagination-link( @click="onChangePage(1)" ) {{ 1 }}
      li( v-if="hasFirst" ): span.pagination-ellipsis &hellip;
      li( v-for="page in pages" )
        a.pagination-link( :class="{ 'is-current': isActive(page) }", @click="onChangePage(page)" ) {{ page }}
      li( v-if="hasLast" ): span.pagination-ellipsis &hellip;
      li( v-if="hasLast" ): a.pagination-link( @click="onChangePage(totalPages)" ) {{ totalPages }}
</template>

<script>
  export default {
    name: 'pagination',
    props: {
      currPage: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 0
      },
      perPage: {
        type: Number,
        default: 9
      },
      pageRange: {
        type: Number,
        default: 2
      }
    },
    computed: {
      hasFirst () {
        return this.rangeStart !== 1
      },
      hasLast () {
        return this.rangeEnd !== this.totalPages
      },
      pages () {
        let pages = []
        for (let i = this.rangeStart; i <= this.rangeEnd; i += 1) {
          pages.push(i)
        }
        return pages
      },
      rangeStart () {
        const start = this.currPage - this.pageRange
        return start > 0 ? start : 1
      },
      rangeEnd () {
        const end = this.currPage + this.pageRange
        return end < this.totalPages ? end : this.totalPages
      },
      totalPages () {
        return Math.ceil(this.total / this.perPage)
      },
      Back () {
        const currNumber = this.currPage - 1
        return currNumber
      },
      Forward () {
        const currNumber = this.currPage + 1
        return currNumber
      }
    },
    methods: {
      isActive (value) {
        return value === this.currPage
      },
      onChangePage (value) {
        this.$emit('pageChanged', value)
      },
      isBack () {
        return this.Back > 0
      },
      isForward () {
        return this.Forward < this.totalPages
      }
    }
  }
</script>
