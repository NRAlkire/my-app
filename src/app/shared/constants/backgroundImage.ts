export class BackgroundImage {
    id: number;
    source: string;

    // constructor(data: BackgroundImage) {
    //     Object.keys(data).forEach((image: string) :void => {
    //         this[image] = data[image];
    //     })
    // }

    // constructor({id, source}: {id: number, source: string}) {
    //     this.id = id;
    //     this.source = source;
    // }

    constructor(data: BackgroundImage) {
        this.id = data.id;
        this.source = data.source;
    }
}

export const BackgroundImages: BackgroundImage = {
    "id": 0,
    "source": "./assets/mobile_backgrounds/astronaut_mowing.jpeg"
}