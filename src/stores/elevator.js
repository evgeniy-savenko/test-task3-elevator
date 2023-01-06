import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useElevatorStore = defineStore('elevator', () => {
  const elevCallNow = ref(1);
  const elevCallAll = ref([]);

  const onClickCallElevator = (floor) => {
    if (elevCallAll.value.length > 0) {
      for (let i = 0; i < elevCallAll.value.length; i++) {
        if (floor == elevCallAll.value[i]) {
          return;
        }
      }
    }
    elevCallAll.value.push(floor);
    setTimeout(setCalls, 3000);
  };

  const setCalls = () => {
    document.getElementById(`elev${elevCallNow.value}`).style.borderColor = 'black';
    if (elevCallAll.value.length > 0) {
      elevCallNow.value = elevCallAll.value[0];
      localStorage.setItem('elevCallNow', elevCallNow.value);
      moveElevator();
    }
  };

  const moveElevator = () => {
    let options = {
      5: '608px',
      4: '456px',
      3: '304px',
      2: '152px',
      1: '0px',
    };
    document.getElementById('elevator').style.bottom = options[elevCallNow.value];
  };

  const stopElevator = () => {
    elevCallAll.value.shift();
    localStorage.setItem('elevCallAll', JSON.stringify(elevCallAll.value));
    document.getElementById(`elev${elevCallNow.value}`).style.borderColor = 'red';
    setTimeout(setCalls, 3000);
  };

  return {
    elevCallNow,
    elevCallAll,
    onClickCallElevator,
    setCalls,
    moveElevator,
    stopElevator,
  };
});
