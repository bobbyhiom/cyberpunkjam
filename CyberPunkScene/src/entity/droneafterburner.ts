import { DroneBurnerComponent } from "../components/droneBurnerComponent"

export class DroneAfterBurners extends Entity {

    static MODEL: string = "models/droneafterburners.gltf"

    gltfShape: GLTFShape
    direction: Vector3 = Vector3.Right()

    constructor() {
        super()

        this.gltfShape = new GLTFShape(DroneAfterBurners.MODEL)
        this.addComponent(this.gltfShape)

        this.addComponent(new Transform())

        this.addComponent(new DroneBurnerComponent)

        engine.addEntity(this)
    }
}