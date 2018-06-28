module.exports.loop = function () {

  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName];
    const harvesters = room.find(FIND_MY_CREEPS)
      .filter((s) => s.memory["role"] === "harvester");
    if (harvesters.length < 1) {
      const spawns = room.find(FIND_MY_SPAWNS);
      if (spawns.length > 0) {
        spawns[0].spawnCreep([WORK, MOVE, CARRY], "adam", { "role": "harvester" });
      }
    }
  }
}