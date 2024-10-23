import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()
    
    list() {
        return this.#videos.values()

    }

    create(video){
        //Criando um id unico universal para cada video criado, com a ajuda do randomUUID (biblioteca)
        const idVideo = randomUUID


        this.#videos.set(idVideo, video)
    }
    update(id, video){
        this.#videos.set(id, video)
    }
    create(id){
        this.#videos.delete(id)
    }
}