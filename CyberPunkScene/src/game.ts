import { Drone } from "./entity/drone"
import { Tram } from "./entity/tram"
import {Scene} from "./entity/scene"
import { DroneSystem } from "./systems/droneSystem"
import { DroneBurnerSystem } from "./systems/droneBurnerSystem"
import { TramSystem } from "./systems/tramSystem"

new Scene(32,0,32,1,0)
new Drone(32,3,32,0.25,0)
new Tram(32,0,32,1,0)

new Drone(8,3,45,0.25,0)

engine.addSystem(new DroneSystem)
engine.addSystem(new TramSystem)
engine.addSystem(new DroneBurnerSystem)