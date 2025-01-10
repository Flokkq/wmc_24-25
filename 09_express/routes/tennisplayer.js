"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var player_1 = require("../models/player");
var app = express();
var tennisPlayers = [
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
app.get("/", function (req, res) {
    function createSpieler() {
        return __awaiter(this, void 0, void 0, function () {
            var spieler, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spieler = new player_1.Player({
                            name: "Sepp Hierzer",
                            nationality: "Styrian",
                            age: 23,
                            ranking: 233,
                        });
                        return [4 /*yield*/, spieler.save()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, "create Spieler" + result];
                }
            });
        });
    }
    var result = createSpieler();
    res.send(result);
});
// reine neue Route zum Test
app.get("/params", function (req, res) {
    res.send("params");
});
// localhost:3000/tennisPlayers/2
// zeige den Tennisplayer mit id 2
app.get("/params1/:id", function (req, res) {
    console.log("params", req.query.id);
    var id = parseInt(req.params.id);
    var foundPlayer = tennisPlayers.find(function (player) { return player.id === id; });
    if (foundPlayer)
        res.send(foundPlayer);
    else
        res.status(404).send("Not found");
});
// Params Nationalität
// mehrere können da sein,  daher filter
app.get("/params3/:nationality", function (req, res) {
    console.log("params3", req.params.nationality);
    var nationality = req.params.nationality;
    var foundPlayer = tennisPlayers.filter(function (player) {
        return player.nationality == nationality;
    });
    if (foundPlayer) {
        res.send(foundPlayer);
    }
    else {
        res.status(404).send("not found");
    }
});
// zwei Params Parameter zusammen
app.get("/params2/:nationality/:name", function (req, res) {
    console.log("params2", req.params.nationality);
    var nationality = req.params.nationality;
    console.log("params2", req.params.name);
    var name = req.params.name;
    var foundPlayer = tennisPlayers.find(function (player) {
        return player.name.includes(name) && player.nationality.includes(nationality);
    });
    if (foundPlayer)
        res.send(foundPlayer);
    else
        res.status(404).send("Not found");
});
/* query String (kommt ohne dem :
daher wird in der Abfrage ein ? eingegeben
http://localhost:3000/tennisplayers/filterAge?minage=23
 */
app.get("/filterAge", function (req, res) {
    console.log("query string", req.query);
    var minage = parseInt(req.query.minage);
    if (minage) {
        console.log("minage", minage);
        var filteredPlayers = tennisPlayers.filter(function (player) {
            return player.age > minage;
        });
        console.log("filtered", filteredPlayers);
        return res.send(filteredPlayers);
    }
    res.send(tennisPlayers);
});
// http://localhost:3000/tennisplayers/filterAge?minage=23&ranking=30
app.get("/filterAgeAndRanking", function (req, res) {
    console.log("query string", req.query);
    // spreading des query auf die Paramter !!
    var _a = req.query, name = _a.name, nationality = _a.nationality, age = _a.age, ranking = _a.ranking;
    console.log("name = ".concat(name, ", age=").concat(age, ", ranking=").concat(ranking, ", nationality=").concat(nationality));
    var filteredPlayers = tennisPlayers.filter(function (player) {
        return player.age > parseInt(age) && player.ranking > parseInt(ranking);
        return res.send(filteredPlayers);
    });
    res.send(tennisPlayers);
});
// Daten kommen als String
// werden von Middleware in JSON umgewandelt
// Aufruf über Postman App möglich
app.post("/s1", function (req, res) {
    var data = req.body;
    console.log("POST ", data);
    res.send(data);
});
// Daten werden wie im Interface definiert eingegeben
// Daten kommen als JSON und können mit dem Spread Operator übernommen werden
// localhost:3000/tennisplayers/s2
app.post("/s2", function (req, res) {
    var data = req.body;
    var _a = req.body, name = _a.name, nationality = _a.nationality, age = _a.age, ranking = _a.ranking;
    console.log("POST Data name:".concat(name));
    if (name && age && nationality && ranking) {
        var maxId = Math.max.apply(Math, tennisPlayers.map(function (player) {
            return player.id;
        })) + 1;
        var newPlayer = {
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
app.get("/db", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    function createSpieler() {
        return __awaiter(this, void 0, void 0, function () {
            var spieler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spieler = new player_1.Player({
                            name: "Sepp Hierzer",
                            nationality: "Styrian",
                            age: 23,
                            ranking: 233,
                        });
                        return [4 /*yield*/, spieler.save()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    }
    var players, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, createSpieler()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, player_1.Player.find()];
            case 3:
                players = _a.sent();
                res.json(players);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error("Fehler beim Abrufen der Spieler");
                res.status(500).json({ message: "Fehler beim Abrufen der Spieler" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.post("/dbs2", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, _a, name_1, nationality, age, ranking, newPlayer, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                data = req.body;
                _a = req.body, name_1 = _a.name, nationality = _a.nationality, age = _a.age, ranking = _a.ranking;
                console.log("POST Data name:".concat(name_1));
                if (!(name_1 && age && nationality && ranking)) return [3 /*break*/, 2];
                newPlayer = new player_1.Player({ name: name_1, nationality: nationality, age: age, ranking: ranking });
                return [4 /*yield*/, newPlayer.save()];
            case 1:
                _b.sent();
                return [2 /*return*/, res.status(201).json(newPlayer)];
            case 2: return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error("Fehler beim Hinzufügen");
                res.status(500).json({ message: "Fehler beim hinzufügen" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
module.exports = app;
