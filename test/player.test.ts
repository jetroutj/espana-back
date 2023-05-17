import {connectDBForTesting,disconnectDBForTesting} from "../src/db/test/connect";
import playerModel ,{PLayerInterface} from "../src/db/models/player";
import {createPlayer} from "../controller/player.controller"

describe("personModel Testing", () => {
    beforeAll(async () => {
      await connectDBForTesting();
    });
  
    afterAll(async () => {
      await playerModel.collection.drop();
      await disconnectDBForTesting();
    });

    test("personModel Create Test", async () => {
        const player: PLayerInterface = {
          name: 'Jetro Daniel',
          lastName: "Onofre Callela",
          age: 25,
          address: "Av Valdepeñas 8600",
          gender: "H",
          job: "dsf",
        };
        const objectPLayer = new playerModel({ ...player });
        const createdPlayer = await objectPLayer.save();
        expect(createdPlayer).toBeDefined();
    })

    test("Probando createPlayer", async()=>{
        let res = await createPlayer();
        expect(res).toBe(400);
    })


})