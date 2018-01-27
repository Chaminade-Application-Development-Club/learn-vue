<template lang="pug">
    v-layout(row, wrap)
        v-flex.xs11.sm5
            v-menu(lazy,
                :close-on-content-click="false",
                v-model="menu",
                transition="scale-transition",
                offset-y,
                full-width,
                :nudge-right="40",
                max-width="290px",
                min-width="290px")

                v-text-field(slot="activator",
                    label="Date",
                    v-model="today",
                    prepend-icon="event",
                    readonly)
                v-date-picker(v-model="date",no-title,scrollable actions)
                    template(slot-scope="{ save, cancel }")
                        v-card-actions
                            v-spacer
                            v-btn(flat,color="primary",@click="cancel") Cancel
                            v-btn(flat,color="primary",@click="save") OK
</template>

<script>
import moment from 'moment'
export default {
  name: 'DayPicker',
  data () {
    return {
      date: null,
      menu: false
    }
  },
  created () {
  },
  mounted () {
    this.date = moment().format('YYYY-MM-DD')
  },
  methods: {
  },
  computed: {
    today: function () {
      return (this.date + ' ' + moment().format('HH:mm:ss'))
    }
  }
}
</script>