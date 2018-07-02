module.exports.loop = function () {

  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName];
    const harvesters = room.find(FIND_MY_CREEPS)
      .filter((s) => s.memory["role"] === "harvester");
    if (harvesters.length < 1) {
      console.log("spawn adam! " + harvesters.length);
      const spawns = room.find(FIND_MY_SPAWNS);
      if (spawns.length > 0) {
        spawns[0].spawnCreep([WORK, MOVE, CARRY], "adam", {memory: { "role": "harvester" }});
      }
    } else {
      console.log("go harvest!");
      for(const harvester of harvesters) {
        const source = harvester.pos.findClosestByPath(FIND_SOURCES);
        console.log(source);
        const ret = harvester.harvest(source);
        if(ret == ERR_NOT_IN_RANGE) {
          harvester.moveTo(source);
        }
      }
    }
  }
}