import { TramComponent } from "../components/tramComponent";

export class TramSystem implements ISystem {
    private droneGroup: ComponentGroup = engine.getComponentGroup(TramComponent)
    time: number = 0

    update(dt: number): void {
        for (let entity of this.droneGroup.entities) {

            // track time
            this.time += dt

            // Hover
            const transform = entity.getComponent(Transform)
            transform.position.y = entity.getComponent(Transform).position.y + Math.sin(this.time * 2 ) * 0.01

        }
    }
}