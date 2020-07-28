import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  _player;

  private subjet = new BehaviorSubject(this._player);
  constructor(private http: HttpClient) {  }

  getPlayerInfoAsObservable(): Observable<any> {
    return this.subjet.asObservable();
  }

  getAlgo(playerName: string) {
    return this.http.get<any>('https://stripe-calculator.herokuapp.com/api/Stripe/playerInfo?playerName=' + playerName);
  }

  async getProfileData(playerName: string) {
    this._player = await this.http.get<any>('https://stripe-calculator.herokuapp.com/api/Stripe/playerInfo?playerName=' + playerName)
    .toPromise();
    /*this._player = this.getMockedData();*/
    this.subjet.next(this._player);
  }

  getMockedData() {
    const data = JSON.parse(
      `{
        "name": "Thanadin",
        "realm": "Icecrown",
        "online": false,
        "level": "80",
        "faction": "Alliance",
        "gender": "Male",
        "race": "Human",
        "racemask": 1,
        "class": "Paladin",
        "classmask": 2,
        "honorablekills": "136",
        "guild": "BlizzarNetCuba",
        "achievementpoints": "2660",
        "equipment": [
          {
            "name": "Broken Ram Skull Helm",
            "item": "49986",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_helmet_158.jpg",
            "rel": "item=49986&gems=3637:3537:0",
            "slot": 0
          },
          {
            "name": "Fossilized Ammonite Choker",
            "item": "50310",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_misc_shell_04.jpg",
            "rel": "item=50310",
            "slot": 1
          },
          {
            "name": "Lightsworn Shoulderguards",
            "item": "50860",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_shoulder_117.jpg",
            "rel": "item=50860&ench=3811&gems=3536:0:0",
            "slot": 2
          },
          {
            "name": "Sentinel's Winter Cloak",
            "item": "50466",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_misc_cape_13.jpg",
            "rel": "item=50466&ench=3294&gems=3575:0:0",
            "slot": 3
          },
          {
            "name": "Ghoul Commander's Cuirass",
            "item": "51917",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_chest_plate_26.jpg",
            "rel": "item=51917&ench=3832&gems=3575:3532:3532",
            "slot": 4
          },
          {
            "name": "Precious's Ribbon",
            "item": "52019",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_misc_ribbon_01.jpg",
            "rel": "item=52019",
            "slot": 5
          },
          {
            "name": "Bracers of Dark Reckoning",
            "item": "49960",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_bracer_42.jpg",
            "rel": "item=49960&ench=3850&gems=3575:0:0",
            "slot": 7
          },
          {
            "name": "Veincrusher Gauntlets",
            "item": "51556",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_gauntlets_86.jpg",
            "rel": "item=51556&ench=3253&gems=3536:3532:0",
            "slot": 8
          },
          {
            "name": "Ironrope Belt of Ymirjar",
            "item": "51831",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_belt_63.jpg",
            "rel": "item=51831&gems=3532:3532:3293",
            "slot": 9
          },
          {
            "name": "Pillars of Might",
            "item": "49904",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_pants_plate_32.jpg",
            "rel": "item=49904&ench=3822&gems=3536:3575:3293",
            "slot": 10
          },
          {
            "name": "Boots of Kingly Upheaval",
            "item": "49907",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_boots_plate_12.jpg",
            "rel": "item=49907&ench=1075&gems=3551:3532:0",
            "slot": 11
          },
          {
            "name": "Ashen Band of Endless Courage",
            "item": "50404",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_jewelry_ring_84.jpg",
            "rel": "item=50404&gems=3551:0:0",
            "slot": 12
          },
          {
            "name": "Harbinger's Bone Band",
            "item": "50447",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_jewelry_ring_84.jpg",
            "rel": "item=50447&gems=3575:0:0",
            "slot": 13
          },
          {
            "name": "Corroded Skeleton Key",
            "item": "50356",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_misc_key_15.jpg",
            "rel": "item=50356",
            "slot": 14
          },
          {
            "name": "Glyph of Indomitability",
            "item": "47735",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_spiritshard_01.jpg",
            "rel": "item=47735",
            "slot": 15
          },
          {
            "name": "Bonebreaker Scepter",
            "item": "51937",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_mace_117.jpg",
            "rel": "item=51937&ench=3869&gems=3575:0:0",
            "slot": 16
          },
          {
            "name": "Neverending Winter",
            "item": "51909",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_shield_73.jpg",
            "rel": "item=51909&ench=1952&gems=3532:0:0",
            "slot": 17
          },
          {
            "name": "Libram of Defiance",
            "item": "47664",
            "transmog": "",
            "href": "http://localhost:3000/assets/inv_relics_libramofhope.jpg",
            "rel": "item=47664",
            "slot": 18
          }
        ],
        "talents": [
          {
            "tree": "Protection",
            "points": [
              5,
              55,
              11
            ]
          },
          {
            "tree": "Holy",
            "points": [
              51,
              5,
              15
            ]
          }
        ],
        "professions": [
          {
            "name": "Mining",
            "skill": "450"
          },
          {
            "name": "Jewelcrafting",
            "skill": "450"
          }
        ],
        "secondaryProfessions": [
          {
            "name": "Cooking",
            "skill": "450"
          },
          {
            "name": "Fishing",
            "skill": "450"
          }
        ],
        "pvpteams": [
          {
            "type": "2v2",
            "name": "arra",
            "rating": "240",
            "rank": "100+"
          }
        ],
        "dungeons": {
          "classic": [
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/spell_shadow_summonfelguard.jpg",
              "title": "Ragefire Chasm"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_mutanus_the_devourer.jpg",
              "title": "Wailing Caverns"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_charlgarazorflank.jpg",
              "title": "Razorfen Kraul"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_amnennar_the_coldbringer.jpg",
              "title": "Razorfen Downs"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_chiefukorzsandscalp.jpg",
              "title": "Zul'Farrak"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_princesstheradras.jpg",
              "title": "Maraudon"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_emperordagranthaurissan.jpg",
              "title": "Blackrock Depths"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/spell_holy_senseundead.jpg",
              "title": "Scholomance"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/spell_deathknight_armyofthedead.jpg",
              "title": "Stratholme"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_edwinvancleef.jpg",
              "title": "Deadmines"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_archmagearugal.jpg",
              "title": "Shadowfang Keep"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_bazil_akumai.jpg",
              "title": "Blackfathom Deeps"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_bazil_thredd.jpg",
              "title": "Stormwind Stockade"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_mekgineer_thermaplugg-.jpg",
              "title": "Gnomeregan"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/inv_helmet_52.jpg",
              "title": "Scarlet Monastery"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_archaedas.jpg",
              "title": "Uldaman"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_shadeoferanikus.jpg",
              "title": "Sunken Temple"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_overlord_wyrmthalak.jpg",
              "title": "Lower Blackrock Spire"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_generaldrakkisath.jpg",
              "title": "Upper Blackrock Spire"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/ability_warrior_decisivestrike.jpg",
              "title": "King of Dire Maul"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_hakkar.jpg",
              "title": "Zul'Gurub"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_ossiriantheunscarred.jpg",
              "title": "Ruins of Ahn'Qiraj"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_ragnaros.jpg",
              "title": "Molten Core"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_nefarion.jpg",
              "title": "Blackwing Lair"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_cthun.jpg",
              "title": "Temple of Ahn'Qiraj"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/ability_mount_drake_red.jpg",
              "title": "Leeeeeeeeeeeeeroy!"
            }
          ],
          "burnning": [
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_omartheunscarred_01.jpg",
              "title": "Hellfire Ramparts"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_kelidanthebreaker.jpg",
              "title": "The Blood Furnace"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_nexus_prince_shaffar.jpg",
              "title": "Mana-Tombs"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_exarch_maladaar.jpg",
              "title": "Auchenai Crypts"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_talonkingikiss.jpg",
              "title": "Sethekk Halls"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_warlord_kalithresh.jpg",
              "title": "The Steamvault"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_boss_talonkingikiss.jpg",
              "title": "Heroic: Sethekk Halls"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_quagmirran.jpg",
              "title": "The Slave Pens"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_theblackstalker.jpg",
              "title": "Underbog"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_epochhunter.jpg",
              "title": "The Escape From Durnholde"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_murmur.jpg",
              "title": "Shadow Labyrinth"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_aeonus_01.jpg",
              "title": "Opening of the Dark Portal"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_kargathbladefist_01.jpg",
              "title": "The Shattered Halls"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_pathaleonthecalculator.jpg",
              "title": "The Mechanar"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_warpsplinter.jpg",
              "title": "The Botanica"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_harbinger_skyriss.jpg",
              "title": "The Arcatraz"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_kael'thassunstrider_01.jpg",
              "title": "Magister's Terrace"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_omartheunscarred_01.jpg",
              "title": "Heroic: Hellfire Ramparts"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_kelidanthebreaker.jpg",
              "title": "Heroic: The Blood Furnace"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_quagmirran.jpg",
              "title": "Heroic: The Slave Pens"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_theblackstalker.jpg",
              "title": "Heroic: Underbog"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_nexus_prince_shaffar.jpg",
              "title": "Heroic: Mana-Tombs"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_exarch_maladaar.jpg",
              "title": "Heroic: Auchenai Crypts"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_epochhunter.jpg",
              "title": "Heroic: The Escape From Durnholde"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_murmur.jpg",
              "title": "Heroic: Shadow Labyrinth"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_aeonus_01.jpg",
              "title": "Heroic: Opening of the Dark Portal"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_warlord_kalithresh.jpg",
              "title": "Heroic: The Steamvault"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_kargathbladefist_01.jpg",
              "title": "Heroic: The Shattered Halls"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_pathaleonthecalculator.jpg",
              "title": "Heroic: The Mechanar"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_warpsplinter.jpg",
              "title": "Heroic: The Botanica"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_harbinger_skyriss.jpg",
              "title": "Heroic: The Arcatraz"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_kael'thassunstrider_01.jpg",
              "title": "Heroic: Magister's Terrace"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_princemalchezaar_02.jpg",
              "title": "Karazhan"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_zuljin.jpg",
              "title": "Zul'Aman"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_gruulthedragonkiller.jpg",
              "title": "Gruul's Lair"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_magtheridon.jpg",
              "title": "Magtheridon's Lair"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_ladyvashj.jpg",
              "title": "Serpentshrine Cavern"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_character_bloodelf_male.jpg",
              "title": "Tempest Keep"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_archimonde-.jpg",
              "title": "The Battle for Mount Hyjal"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_illidan.jpg",
              "title": "The Black Temple"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_boss_kiljaedan.jpg",
              "title": "Sunwell Plateau"
            }
          ],
          "lk": [
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_utgardekeep_normal.jpg",
              "title": "Utgarde Keep"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_nexus70_normal.jpg",
              "title": "The Nexus"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_azjoluppercity_normal.jpg",
              "title": "Azjol-Nerub"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_azjollowercity_normal.jpg",
              "title": "Ahn'kahet: The Old Kingdom"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_drak'tharon_normal.jpg",
              "title": "Drak'Tharon Keep"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_theviolethold_normal.jpg",
              "title": "The Violet Hold"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_gundrak_normal.jpg",
              "title": "Gundrak"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_ulduar80_normal.jpg",
              "title": "Halls of Lightning"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_nexus80_normal.jpg",
              "title": "The Oculus"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_utgardepinnacle_normal.jpg",
              "title": "Utgarde Pinnacle"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_cotstratholme_normal.jpg",
              "title": "The Culling of Stratholme"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_icecrown_forgeofsouls.jpg",
              "title": "The Forge of Souls"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_icecrown_pitofsaron.jpg",
              "title": "The Pit of Saron"
            },
            {
              "complete": true,
              "icon": "http://localhost:3000/assets/achievement_dungeon_icecrown_hallsofreflection.jpg",
              "title": "The Halls of Reflection"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/achievement_dungeon_ulduar77_normal.jpg",
              "title": "Halls of Stone"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/inv_spear_05.jpg",
              "title": "Trial of the Champion"
            },
            {
              "complete": false,
              "icon": "http://localhost:3000/assets/inv_spear_05.jpg",
              "title": "Trial of the Champion"
            }
          ]
        },
        "stats": {
          "Melee": {
            "Damage": " 853 - 1108",
            "Power": " 4168",
            "Speed": " 0",
            "Hit rating": " 9.91%",
            "Critical": " 11.8%"
          },
          "Attributes": {
            "Strength": " 1974",
            "Agility": " 132",
            "Intellect": " 168",
            "Stamina": " 4131",
            "Spirit": " 203",
            "Expertise": " 16"
          },
          "Ranged": {
            "Damage": " 18 - 19",
            "Power": " 122",
            "Speed": " 0",
            "Hit rating": " 9.91%",
            "Critical": " 0%"
          },
          "Defense": {
            "Armor": " 32849",
            "Dodge": " 29.13%",
            "Parry": " 23.25%",
            "Block": " 14.6%",
            "Resilience": " 0"
          },
          "Spell": {
            "Power": " 0",
            "Healing": " 0",
            "Haste": " 0%",
            "Hit rating": " 12.39%",
            "Critical": " 0%"
          },
          "Resistances": {
            "Arcane": " 0",
            "Fire": " 0",
            "Nature": " 0",
            "Frost": " 0",
            "Shadow": " 0"
          }
        }
      }`
    );
    return data;
  }

}
