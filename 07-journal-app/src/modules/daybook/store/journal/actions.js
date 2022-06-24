
//Actions son acciones asincronas para llamar mutación
// export const myAction = async ({commit}) =>{

import journalApi from "@/api/journalApi"

    
// }

export const loadEntries = async ({commit}) =>{
    const {data} = await journalApi.get('/entries.json')
    if( !data){
        commit('setEntries', [])
        return
    } 
    const entries = []
    for (let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntry = async ({commit}, entry) => {                //entry debe de ser un parametro

    const {date, picture, text} = entry
    const dataToSave = {date, picture, text}

    const resp=await journalApi.put(`/entries/${entry.id}.json`,dataToSave)
    dataToSave.id = entry.id
    //Extraer solo lo que se necesita  //-id

    //await jounrlaApi.put(PATH .json, dataToSave)

    //Commit de una mutation -> updateEntry
    commit('updateEntry',{...dataToSave})

}

export const createEntry = async ({commit}, entry) => {
    //dataToSave
    const {date,picture, text} = entry
    const dataToSave = {date,picture, text}

    const {data} = await journalApi.post(`entries.json`,dataToSave)
    //cons {data} = await journalApi.post(PATH.json, dataToSave)

    dataToSave.id = data.name
    commit('addEntry', dataToSave)
    //data = {"name": "MarijsKGESa-SGsef"}

    return data.name
}

export const deleteEntry = async ({commit},id)=>{

    //Await jorunalApi.delete(path)
    await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry',id)

    return id

}