<template>
  <div>
    <div v-if="!plain" class="text-center calendar-page">
      <time :datetime="date" class="icon mb-2">
        <strong class="pa-1">{{$t('months.'+day.month)}}</strong>
        <span>{{day.day}}</span>
        <em>{{$t('dates.'+day.weekday)}}</em>
      </time>
      <strong v-if="showTime">{{time}}</strong>
    </div>
    <div v-else>
      {{$t('dates.'+day.weekday)}}, <strong>{{day.day}} {{$t('months.'+day.month)}}</strong>, <span v-if="showTime">{{time}}<span v-if="length">-{{endTime}}</span></span>
    </div>
  </div>
</template>

<script>
import {months, weekDays} from "@/models";
export default {
  name: "CalendarPage",
  props: {
    date: {
      type: String,
      required: true,
    },
    showTime: {
      type: Boolean,
      default: true,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    datetime() {
      return new Date(this.date);
    },
    day() {
      return {
        day: this.datetime.getDate(),
        month: months[this.datetime.getMonth()],
        weekday: weekDays[this.datetime.getDay()]
      }
    },
    time() {
      return this.datetime.getHours() + ':' + this.datetime.getMinutes();
    },
    endTime() {
      let [hours, minutes] = (''+this.length).split('.');
      hours = this.datetime.getHours() + parseInt(hours);
      if (minutes === undefined) {
        minutes = '00';
      } else {
        if (minutes.length === 1) {
          minutes = minutes + '0';
        }
        minutes = this.datetime.getMinutes() + parseInt(minutes);
      }
      if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
      }
      if (hours >= 24) {
        hours -= 24;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (hours < 10) {
        hours = '0' + hours;
      }
      return hours + ':' + minutes;
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-page {
  width: 4em;
}
time.icon {
  font-size: 1em; /* change icon size */
  display: block;
  position: relative;
  width: 4em;
  height: 4em;
  background-color: #fff;
  border-radius: 0.6em;
  box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
  overflow: hidden;

  & * {
    display: block;
    width: 100%;
    font-size: 1em;
    font-weight: bold;
    font-style: normal;
    text-align: center;
  }

  & strong {
    font-size: 0.7em;
    color: #fff;
    background-color: #fd9f1b;
    border-bottom: 1px dashed #f37302;
    box-shadow: 0 2px 0 #fd9f1b;
  }

  & em {
    font-size: 0.6em;
    color: #fd9f1b;
  }

  & span {
    font-size: 1em;
    letter-spacing: -0.05em;
    color: #2f2f2f;
  }
}
</style>
