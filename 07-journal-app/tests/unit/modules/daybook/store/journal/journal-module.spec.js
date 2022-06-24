
import { createStore} from 'vuex'
import journal from '@/modules/daybook/store/journal' 
import { journalState } from '../../../../mock-data/test-journal-state'


const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: {...initialState}
            }
        }
    })

describe ('Vuex- Pruebas en el Jorunal Module', ()=>{

    //Básicas ==========================================

    test('este es el eestado inicial, debe de tener este state',()=>{

        const store = createVuexStore(journalState)
        const {isLoading, entries} = store.state.journal

        expect (isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)

    })

    //Mutations ==========================================
    test('Mutation: setEntries',()=>{
        const store = createVuexStore({isLoading: true, entries: []})

        store.commit('journal/setEntries', journalState.entries)

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.entries.isLoading).toBeFalsy()

    })

    test('Mutation: updateEntry',()=>{

        //Create store con entries

        const store = createVuexStore(journalState)

        //updateEntry
        const updateEntry = {
            id: "-N5H2wq9F6G2tpFcl1PC",
            date: 1656012903671,
            text: "Estos meses tengo mucho por aprender"
        }

        //commit de la mutation
        store.commit('journal/updateEntry', updateEntry)

        const storeEntries = store.state.journal.entries
        //expects
        expect(storeEntries.length).toBe(2)
        expect(
            storeEntries.find(e=> e.id === updateEntry.id)
        ).toEqual(updateEntry)


    })

    test('Mutation: AddEntry deleteEntry',()=>{
        //AddEntry
        const store = createVuexStore(journalState)

        const addEntry = {
            id: 'ABC-123',
            text: 'Hola mundo'
        }

        store.commit('journal/addEntry', addEntry)

        const stateEntries = store.state.journal.entries
        expect(stateEntries.length).toBe(3)
        //entrada con el id ABC-123 exista
        expect(stateEntries.find(e=> e.id=== 'ABC-123').id).toBeTruthy()


        //DeleteEntry, 'ABC-123'
        store.commit('journal/deleteEntry','ABC-123')
        //Expects
        //Entradas deben de ser 2
        //Entrada con elid ABC-123 no debe de existir
        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.entries.find(e=> e.id === 'ABC-123')).toBeFalsy()
    })

    //Getters ==========================================
    test('Getters: getEntries By termin getEntriesByID',()=>{
        const store = createVuexStore(journalState)
        const [entry1, entry2] = journalState.entries

        expect(store.getters['journal/getEntriesByTerm']('').length).toBe(2)
        expect(store.getters['journal/getEntriesByTerm']('segunda').length).toBe(1)

        expect(store.getters['journal/getEntriesByTerm']('segunda')).toEqual([entry2])
        // store.commit('journal/setEntries', journalState.entries)

        // expect(store.state.journal.entries.length).toBe(2)
        // expect(store.state.journal.entries.isLoading).toBeFalsy()

        expect(store.getters['journal/getEntryById']('-N5H2wq9F6G2tpFcl1PC')).toEqual(entry1)

    })

    //Actions ==========================================
    test('Actions: loadEntries',async ()=>{

        const store = createVuexStore({isLoading: true, entries: []})

        await store.dispatch('journal/loadEntries')

        expect(store.state.journal.entries.length).toBe(4)
        //expect(store.state.journal.entries.isLoading).toBeFalsy()

    })

    test('Actions: updateEntry',async ()=>{

        const store = createVuexStore({isLoading: true, entries: []})

        const updateEntry = {
            id: "-N5H2wq9F6G2tpFcl1PC",
            date: 1656012903671,
            picture: 'https://res.cloudinary.com/dkw8rk60n/image/upload/v1656018695/wsavulzmuv3d9xv3tu23.jpg',
            text: "Estos meses tengo mucho por aprender",
            otroCampo: true,
            otroMas: {a:1}
        }

        await store.dispatch('journal/loadEntries', updateEntry)

        expect(store.state.journal.entries.length).toBe(4)
        //expect(store.state.journal.entries.isLoading).toBeFalsy()
        expect(
            store.state.journal.entries.find(e => e.id === updateEntry.id)
        ).toEqual({
            id: "-N5H2wq9F6G2tpFcl1PC",
            date: 1656012903671,
            picture: 'https://res.cloudinary.com/dkw8rk60n/image/upload/v1656018695/wsavulzmuv3d9xv3tu23.jpg',
            text: "Estos meses tengo mucho por aprender",
        })

    })

    test('actions: createEntry deleteEntry', async()=>{
        //createStore
        const store = createVuexStore(journalState)

        //newEntry = {date: 1564845, text: 'Nueva entrada desde las pruebas'}
        const newEntry = {date: 1564845, text: 'Nueva entrada desde las pruebas'}

        //dispatch de la acción createEntry
        //obtener el id de la nueva entrada
        const id = await store.dispatch('journal/createEntry', newEntry)

        //el ID debe de ser string
        expect (typeof id).toBe('string');

        //la nueva entrada debe de existir en el state.journal.entries....
        expect(
            store.state.journal.entries.find(e => e.id === id)
        ).toBeTruthy()


        //#segunda parte
        //dispatch deleteEntry
        await store.dispatch('journal/deleteEntry', id)
        //la nueva entrada No debe de existir en el state.journal.entries...
        expect(
            store.state.journal.entries.find(e => e.id === id)
        ).toBeFalsy()
        

    })

})