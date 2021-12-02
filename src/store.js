import { readable, writable } from 'svelte/store';
import { onAuthStateChanged, getAuth } from 'firebase/auth'

export const hasFetchedUser = writable(false)
export const user = writable({}) // {} means not logged in, cannot be null

export const currentTool = writable({
    type: 'pencil',
    color: 'white',
    lineWidth: 3
})

export const recordState = writable('pre_record') // mid_record and post_record

export const dailyMicStream = writable(null)