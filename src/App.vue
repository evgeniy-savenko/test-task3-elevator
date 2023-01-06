<script setup>
import {onMounted} from 'vue';
import {useElevatorStore} from './stores/elevator';

const elevatorStore = useElevatorStore();
onMounted(() => {
  if (localStorage.getItem('elevCallNow')) {
    elevatorStore.elevCallNow = localStorage.getItem('elevCallNow');
  } else {
    localStorage.setItem('elevCallNow', JSON.stringify(elevatorStore.elevCallNow));
  }
  if (JSON.parse(localStorage.getItem('elevCallAll')).length != 0) {
    elevatorStore.elevCallAll = this.calls.concat(
      JSON.parse(localStorage.getItem('elevCallAll'))
    );
  } else {
    elevatorStore.elevCallAll.length = 0;
  }
  elevatorStore.moveElevator();
});
</script>

<template>
  <div class="floors__section">
    <div class="elevator__wrapper">
      <div id="elevator" class="elevator" @transitionend="elevatorStore.stopElevator()">
        <h4 class="elevator__lvl">{{ elevatorStore.elevCallNow }}</h4>
      </div>
      <div
        class="elevator__shaft"
        :class="{active: elevatorStore.elevCallNow === 5}"
      ></div>
      <div
        class="elevator__shaft"
        :class="{active: elevatorStore.elevCallNow === 4}"
      ></div>
      <div
        class="elevator__shaft"
        :class="{active: elevatorStore.elevCallNow === 3}"
      ></div>
      <div
        class="elevator__shaft"
        :class="{active: elevatorStore.elevCallNow === 2}"
      ></div>
      <div
        class="elevator__shaft"
        :class="{active: elevatorStore.elevCallNow === 1}"
      ></div>
    </div>
    <div class="floor__wrapper">
      <div class="floor">
        <button id="elev5" @click="elevatorStore.onClickCallElevator(5)">
          Call elevator
        </button>
      </div>
      <div class="floor">
        <button id="elev4" @click="elevatorStore.onClickCallElevator(4)">
          Call elevator
        </button>
      </div>
      <div class="floor">
        <button id="elev3" @click="elevatorStore.onClickCallElevator(3)">
          Call elevator
        </button>
      </div>
      <div class="floor">
        <button id="elev2" @click="elevatorStore.onClickCallElevator(2)">
          Call elevator
        </button>
      </div>
      <div class="floor">
        <button id="elev1" @click="elevatorStore.onClickCallElevator(1)">
          Call elevator
        </button>
      </div>
    </div>
  </div>
</template>
