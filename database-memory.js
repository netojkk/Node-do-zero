import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()
    
    list() {
        //entries serve assim como o value, mas ele separa o id do objeto dos videos em 2 arrays dentro do array principal
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const IdVideo = videoArray[0]
            const dadosVideo = videoArray[1]

            return {
                //esses 3 pontos são o spreadOperator
                id,
                ...data
            }
        })

    }

    create(video){
        const idVideo = randomUUID()


        this.#videos.set(idVideo, video)
    }
    update(id, video){
        this.#videos.set(id, video)
    }
    delete(id){
        this.#videos.delete(id)
    }
}