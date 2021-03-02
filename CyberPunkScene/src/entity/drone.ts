import { DroneComponent } from "../components/droneComponent"

import {DroneAfterBurners} from "./droneafterburner"

export class Drone extends Entity {

    static MODEL: string = "models/drone.gltf"

    gltfShape: GLTFShape
    direction: Vector3 = Vector3.Right()

    constructor(x: number, y: number, z: number, scale: number, rotation: number) {
        super()

        this.gltfShape = new GLTFShape(Drone.MODEL)
        this.addComponent(this.gltfShape)

        const clip = new AudioClip("sounds/droneSound.mp3")
        clip.volume = 10
        const source = new AudioSource(clip)
        source.volume = 10
        this.addComponent(source)
        source.loop = true
        source.playing = true

        let baseTransform = new Transform()
        baseTransform.position.x = x
        baseTransform.position.y = y
        baseTransform.position.z = z
        baseTransform.rotate(Vector3.Up(), rotation )
        baseTransform.scale.set(scale, scale, scale)
        this.addComponent(baseTransform)

        this.addComponent(new DroneComponent)

        let afterBurners:DroneAfterBurners = new DroneAfterBurners()

        afterBurners.setParent(this)


        engine.addEntity(this)
    }
}