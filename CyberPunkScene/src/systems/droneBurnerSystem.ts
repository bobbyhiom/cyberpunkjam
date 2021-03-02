import { DroneBurnerComponent } from "../components/droneBurnerComponent";

export class DroneBurnerSystem implements ISystem {
    private droneGroup: ComponentGroup = engine.getComponentGroup(DroneBurnerComponent)
    time: number = 0

    update(dt: number): void {
        this.time +=dt
        for (let entity of this.droneGroup.entities) {
            
           // Resize
           let transform = entity.getComponent(Transform)

       

           transform.scale = new Vector3(
            1,
            Math.sin(this.time*40)/30+ 1,
            1)

        }
    }
}