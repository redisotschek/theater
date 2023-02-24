<template>
  <time datetime="2014-09-20" class="icon">
    <strong class="pa-1">September</strong>
    <span>20</span>
    <em>Saturday</em>
  </time>
</template>

<script>
export default {
  name: "CalendarPage",
  props: {
    date: {
      type: String,
      required: true,
    }
  },
  computed: {
    datetime() {
      return new Date(this.date);
    },
    day() {
      return this.datetime.getDate();
    },
  }
}
</script>

<style lang="scss" scoped>
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
