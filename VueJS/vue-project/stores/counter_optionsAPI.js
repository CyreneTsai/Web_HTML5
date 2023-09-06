import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state(){
        return {
            count: 0,
            name: 'Peter',
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment(){
            this.count++
        },
    },
})
