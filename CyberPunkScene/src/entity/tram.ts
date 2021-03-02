import { TramComponent } from "../components/tramComponent"


export class Tram extends Entity {

    static MODEL: string = "models/Tram.gltf"

    gltfShape: GLTFShape
    direction: Vector3 = Vector3.Right()

    constructor(x: number, y: number, z: number, scale: number, rotation: number) {
        super()

        this.gltfShape = new GLTFShape(Tram.MODEL)
        this.addComponent(this.gltfShape)

        let baseTransform = new Transform()
        baseTransform.position.x = x
        baseTransform.position.y = y
        baseTransform.position.z = z
        baseTransform.rotate(Vector3.Up(), rotation )
        baseTransform.scale.set(scale, scale, scale)
        this.addComponent(baseTransform)

        this.addComponent(new TramComponent)

        engine.addEntity(this)
    }
}