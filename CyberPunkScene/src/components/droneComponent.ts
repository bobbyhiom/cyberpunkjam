@Component("droneComponent")
export class DroneComponent {
    angles:Vector3 = Vector3.Zero()
    anglesvelocity = Vector3.Zero()
    springForce = 10
    springDampening = 3

  constructor() {
    
  }
}