import express = require("express");
import { Router } from "express";
import { Player } from "../models/player";

var app: Router = express();

interface ITennisplayer {
  id: number;
  name: string;
  nationality: string;
  age: number;
  ranking: number;
}

const tennisPlayers: ITennisplayer[] = [
  {
    id: 1,
    name: "Novak Djokovic",
    nationality: "Serbian",
    age: 36,
    ranking: 1,
  },
  {
    id: 2,
    name: "Carlos Alcaraz",
    nationality: "Spanish",
    age: 20,
    ranking: 2,
  },
  {
    id: 3,
    name: "Iga Swiatek",
    nationality: "Polish",
    age: 22,
    ranking: 1,
  },
  {
    id: 4,
    name: "Aryna Sabalenka",
    nationality: "Belarusian",
    age: 25,
    ranking: 2,
  },
  {
    id: 5,
    name: "Rafael Nadal",
    nationality: "Spanish",
    age: 37,
    ranking: 14,
  },
  {
    id: 6,
    name: "Dominic Thiem",
    nationality: "Austria",
    age: 31,
    ranking: 144,
  },
];

// zeigt nur die Spieler an
app.get("/", (req, res) => {
  async function createSpieler(): Promise<string> {
    const spieler = new Player({
      name: "Sepp Hierzer",
      nationality: "Styrian",
      age: 23,
      ranking: 233,
    });
    const result = await spieler.save();
    return "create Spieler" + result;
  }

  const result = createSpieler();
  res.send(result);
});

// reine neue Route zum Test
app.get("/params", (req, res) => {
  res.send("params");
});

// localhost:3000/tennisPlayers/2
// zeige den Tennisplayer mit id 2
app.get("/params1/:id", (req, res) => {
  console.log("params", req.query.id);
  const id = parseInt(req.params.id);

  const foundPlayer = tennisPlayers.find((player) => player.id === id);
  if (foundPlayer) res.send(foundPlayer);
  else res.status(404).send("Not found");
});

// Params Nationalität
// mehrere können da sein,  daher filter

app.get("/params3/:nationality", (req, res) => {
  console.log("params3", req.params.nationality);
  let nationality = req.params.nationality;

  const foundPlayer = tennisPlayers.filter((player) => {
    return player.nationality == nationality;
  });
  if (foundPlayer) {
    res.send(foundPlayer);
  } else {
    res.status(404).send("not found");
  }
});

// zwei Params Parameter zusammen

app.get("/params2/:nationality/:name", (req, res) => {
  console.log("params2", req.params.nationality);
  const nationality = req.params.nationality;
  console.log("params2", req.params.name);
  const name = req.params.name;

  const foundPlayer = tennisPlayers.find(
    (player) =>
      player.name.includes(name) && player.nationality.includes(nationality),
  );

  if (foundPlayer) res.send(foundPlayer);
  else res.status(404).send("Not found");
});

/* query String (kommt ohne dem :
daher wird in der Abfrage ein ? eingegeben
http://localhost:3000/tennisplayers/filterAge?minage=23
 */

app.get("/filterAge", (req, res) => {
  console.log("query string", req.query);
  let minage: number = parseInt(req.query.minage);
  if (minage) {
    console.log("minage", minage);
    let filteredPlayers = tennisPlayers.filter((player: ITennisplayer) => {
      return player.age > minage;
    });
    console.log("filtered", filteredPlayers);
    return res.send(filteredPlayers);
  }

  res.send(tennisPlayers);
});

// http://localhost:3000/tennisplayers/filterAge?minage=23&ranking=30
app.get("/filterAgeAndRanking", (req, res) => {
  console.log("query string", req.query);
  // spreading des query auf die Paramter !!
  const { name, nationality, age, ranking } = req.query;
  console.log(
    `name = ${name}, age=${age}, ranking=${ranking}, nationality=${nationality}`,
  );

  const filteredPlayers = tennisPlayers.filter((player: ITennisplayer) => {
    return player.age > parseInt(age) && player.ranking > parseInt(ranking);

    return res.send(filteredPlayers);
  });

  res.send(tennisPlayers);
});

// Daten kommen als String
// werden von Middleware in JSON umgewandelt
// Aufruf über Postman App möglich
app.post("/s1", (req, res) => {
  const data = req.body;
  console.log("POST ", data);
  res.send(data);
});
// Daten werden wie im Interface definiert eingegeben
// Daten kommen als JSON und können mit dem Spread Operator übernommen werden
// localhost:3000/tennisplayers/s2

app.post("/s2", (req, res) => {
  const data = req.body;
  const { name, nationality, age, ranking } = req.body;
  console.log(`POST Data name:${name}`);
  if (name && age && nationality && ranking) {
    const maxId =
      Math.max(
        ...tennisPlayers.map((player) => {
          return player.id;
        }),
      ) + 1;

    const newPlayer: ITennisplayer = {
      id: maxId,
      name: name,
      nationality: nationality,
      age: age,
      ranking: ranking,
    };
    tennisPlayers.push(newPlayer);
    return res.send(newPlayer);
  }

  res.status(404).send("Fehler");
});

app.get("/db", async (req, res) => {
  async function createSpieler() {
    const spieler = new Player({
      name: "Sepp Hierzer",
      nationality: "Styrian",
      age: 23,
      ranking: 233,
    });
    const res = await spieler.save();
    console.log(res);
  }
  await createSpieler();

  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error("Fehler beim Abrufen der Spieler");
    res.status(500).json({ message: "Fehler beim Abrufen der Spieler" });
  }
});

app.post("/dbs2", async (req, res) => {
  try {
    const data = req.body;
    const { name, nationality, age, ranking } = req.body;
    console.log(`POST Data name:${name}`);

    if (name && age && nationality && ranking) {
      const newPlayer = new Player({ name, nationality, age, ranking });
      await newPlayer.save();
      return res.status(201).json(newPlayer);
    }
  } catch (error) {
    console.error("Fehler beim Hinzufügen");
    res.status(500).json({ message: "Fehler beim hinzufügen" });
  }
});

module.exports = app;
