<template>
  <div
    class="
      bg-neutral-cyan-light-grayish-1
      min-h-screen min-w-full
      py-20
      flex flex-col
      items-center
      font-mono
    "
  >
    <!-- logo -->
    <div class="mb-10">
      <img src="../../public/images/logo.svg" />
    </div>

    <!-- calc -->
    <div
      class="
        mobile:max-w-lg
        mobile:w-full
        desktop:max-w-4xl
        bg-neutral-white
        p-10
        rounded-2xl
      "
    >
      <div class="grid mobile:grid-cols-1 desktop:grid-cols-2 gap-8">
        <!-- left -->
        <div class="text-neutral-cyan-dark-grayish-1 font-bold p-4">
          <!-- form -->
          <div class="flex flex-col mb-10">
            <span class="mb-2">Bill</span>
            <div class="calc-input">
              <span><img src="../../images/icon-dollar.svg" /></span>
              <input
                class="person-input input"
                type="number"
                dir="rtl"
                v-model.number="bill"
                min="0"
              />
            </div>
          </div>

          <!-- % tip -->
          <div class="flex flex-col mb-10">
            <span class="mb-4">Select Tip %</span>
            <div
              class="
                grid
                gap-4
                mobile:grid-rows-3 mobile:grid-cols-2
                desktop:grid-rows-2 desktop:grid-cols-3
              "
            >
              <button
                @click="addTip(5)"
                class="btn"
                :class="{ active: checkTip(5) }"
              >
                5%
              </button>
              <button
                @click="addTip(10)"
                class="btn"
                :class="{ active: checkTip(10) }"
              >
                10%
              </button>
              <button
                @click="addTip(15)"
                class="btn"
                :class="{ active: checkTip(15) }"
              >
                15%
              </button>
              <button
                @click="addTip(25)"
                class="btn"
                :class="{ active: checkTip(25) }"
              >
                25%
              </button>
              <button
                @click="addTip(50)"
                class="btn"
                :class="{ active: checkTip(50) }"
              >
                50%
              </button>

              <input
                class="input-tip input"
                type="number"
                dir="rtl"
                placeholder="Custom"
                min="0"
                v-model.number="tip"
              />
            </div>
          </div>

          <!-- num people -->
          <div class="flex flex-col">
            <span class="mb-2">Number of People</span>
            <div class="calc-input">
              <span><img src="../../images/icon-person.svg" /></span>
              <input
                class="person-input input"
                type="number"
                dir="rtl"
                v-model.number="numPeople"
                min="1"
              />
            </div>
          </div>
        </div>

        <!-- right -->
        <div
          class="
            bg-neutral-cyan-dark-grayish-1
            w-full
            rounded-2xl
            py-14
            px-10
            flex flex-col
            justify-between
            content-between
          "
        >
          <div class="flex flex-col w-full mb-8">
            <div class="flex justify-between w-full mb-4">
              <div class="text-neutral-white flex flex-col w-full">
                <div class="text-sm">Tip Amount</div>
                <div class="text-xs text-neutral-cyan-dark-grayish-2">
                  / person
                </div>
              </div>
              <div class="text-neutral-cyan-dark-grayish-2 text-5xl font-bold">
                ${{ tipAmount.perPerson.toFixed(2) }}
              </div>
            </div>

            <div class="flex justify-between w-full">
              <div class="text-neutral-white flex flex-col w-full">
                <div class="text-sm">Total</div>
                <div class="text-xs text-neutral-cyan-dark-grayish-2">
                  / person
                </div>
              </div>
              <div class="text-neutral-cyan-dark-grayish-2 text-5xl font-bold">
                 ${{ tipAmount.total.toFixed(2) }}
              </div>
            </div>
          </div>

          <!-- reset -->
          <button @click="reset" class="btn-reset">RESET</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const numPeople = ref(1);
const bill = ref(0);
const tip = ref(null);

const tipAmount = computed(() => {
  if (bill.value > 0) {
      const total = (bill.value * tip.value) / 100;
    return {
      total: total,
      perPerson: total / numPeople.value,
    };
  }
  return {
    total: 0,
    perPerson: 0,
  };
});

const addTip = (num) => {
  tip.value = num;
};
const reset = () => {
  bill.value = 0;
  tip.value = null;
  numPeople.value = 1;
};
const checkTip = (num) => {
  return num == tip.value;
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.btn {
  @apply rounded-md
                  bg-neutral-cyan-very-dark
                  text-neutral-white
                  p-2
                  font-bold
                  text-xl
                  hover:bg-neutral-cyan-dark-grayish-2
                  hover:text-neutral-cyan-very-dark;
}

.btn.active {
  @apply rounded-md
                  bg-neutral-cyan-light-grayish-1
                  text-neutral-cyan-dark-grayish-1;
}

.input-tip {
  @apply rounded-md
                  bg-neutral-cyan-light-grayish-1
                  text-neutral-cyan-dark-grayish-1
                  border-0
                  p-2
                  font-bold
                  text-xl
                  hover:text-neutral-cyan-very-dark;
}

.calc-input {
  @apply w-full
                h-12
                p-4
                bg-neutral-cyan-light-grayish-2
                flex
                justify-between items-center
                rounded-md;
}

.input {
  @apply focus:outline-none focus:ring-0;
}

.person-input {
  @apply w-full
                  border-0
                  focus:outline-none
                  bg-transparent
                  font-bold
                  text-3xl
                  bg-none;
}

.btn-reset {
  @apply w-full
              bg-neutral-cyan-dark-grayish-2
              text-neutral-cyan-very-dark
              p-3
              rounded-md
              font-bold
              text-xl hover:bg-neutral-cyan-light-grayish-1;
}
</style>