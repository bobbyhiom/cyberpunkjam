import { DroneComponent } from "../components/droneComponent";

export class DroneSystem implements ISystem {
    private droneGroup: ComponentGroup = engine.getComponentGroup(DroneComponent)
    time: number = 0

    update(dt: number): void {
        for (let entity of this.droneGroup.entities) {
            
            // Track the player


            const transform = entity.getComponent(Transform)
            const component = entity.getComponent(DroneComponent)
            let diff = Camera.instance.position.subtract(transform.position)
            let flatDiff = diff.clone()
            flatDiff.y = 0
            let targetAngles = new Vector3(
                Math.atan2(-diff.y,flatDiff.length()) * RAD2DEG,
                Math.atan2(diff.x,diff.z) * RAD2DEG,
                0
            )

            let angleDiff = targetAngles.subtract(component.angles)
            while(angleDiff.x > 180){
                angleDiff.x-=360
            }
            while(angleDiff.x < -180){
                angleDiff.x+=360
            }
            while(angleDiff.y > 180){
                angleDiff.y-=360
            }
            while(angleDiff.y < -180){
                angleDiff.y+=360
            }
            while(angleDiff.z > 180){
                angleDiff.z-=360
            }
            while(angleDiff.z < -180){
                angleDiff.z+=360
            }

            let acc = angleDiff.scale(component.springForce*dt)
            let dcc = component.anglesvelocity.scale(component.springDampening*dt)

            component.anglesvelocity.addInPlace(acc).subtractInPlace(dcc)
            component.angles.addInPlace(component.anglesvelocity.scale(dt))

            transform.rotation = Quaternion.Euler(0,component.angles.y,0).multiply(Quaternion.Euler(component.angles.x,0,component.angles.z))

          //  entity.getComponent(Transform).rotation = originalRotation.subtract(newRotation.scaleInPlace(dt))

            // track time
            this.time += dt

            // Hover
            transform.position.y = transform.position.y + Math.sin(this.time * 2 ) * 0.004
            transform.rotation = Quaternion.Euler(Math.sin(this.time * 2 + 1) * -5, 0, 0).multiply(transform.rotation)
        }
    }
}