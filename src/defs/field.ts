var entity_props = [
    "accumulate",
    "accuracy",
    "accuracystationarymod",
    "allowdeath",
    "anglelerprate",
    "angles",
    "angles",
    "angles",
    "angles",
    "anim_pose",
    "animscript",
    "archivetime",
    "attackeraccuracy",
    "bottomarc",
    "bravery",
    "bulletsinclip",
    "chainfallback",
    "chainnode",
    "classname",
    "convergencetime",
    "count",
    "coveridleselecttime",
    "cursorhint",
    "damagedir",
    "damagelocation",
    "damagetaken",
    "damageyaw",
    "deaths",
    "defaultsightlatency",
    "desiredangle",
    "disablearrivals",
    "disableexits",
    "dmg",
    "dontavoidplayer",
    "dontshootwhilemoving",
    "drawoncompass",
    "dropweapon",
    "enemy",
    "favoriteenemy",
    "finished_spawning",
    "fixednode",
    "followmax",
    "followmin",
    "fovcosine",
    "goalradius",
    "grenade",
    "grenadeammo",
    "grenadeawareness",
    "grenadeweapon",
    "groundtype",
    "group",
    "groupname",
    "hatmodel",
    "headicon",
    "headiconteam",
    "health",
    "hintstring",
    "ignoreme",
    "interval",
    "lastscriptstate",
    "leftarc",
    "light",
    "lookahead",
    "lookforward",
    "lookright",
    "lookup",
    "maxhealth",
    "maxsightdistsqrd",
    "members",
    "model",
    "modelscale",
    "name",
    "node",
    "offnoise",
    "origin",
    "pacifist",
    "pacifistwait",
    "pers",
    "personality_type",
    "personalspace",
    "proneok",
    "rambochance",
    "rightarc",
    "scalespeed",
    "scariness",
    "score",
    "scriptstate",
    "secondaryweapon",
    "sessionstate",
    "sessionteam",
    "spectatorclient",
    "speed",
    "statechangereason",
    "statusicon",
    "suppressionwait",
    "takedamage",
    "team",
    "teamname",
    "threatbias",
    "threshold",
    "toparc",
    "type",
    "useable",
    "visibilitythreshold",
    "voice",
    "walkdist",
    "weapon",
    "weaponinfo"];

var keys_text = [
    "ambience_inner",
    "ambience_outer",
    "ambient",
    "angles",
    "count",
    "delay",
    "destructible_type",
    "dontdrawoncompass",
    "dontdropweapon",
    "export",
    "fixednodesaferadius",
    "groupname",
    "height",
    "name",
    "origin",
    "radius",
    "script_accel",
    "script_accel_fraction",
    "script_accumulate",
    "script_aigroup",
    "script_airspeed",
    "script_allowdeath",
    "script_angles",
    "script_anglevehicle",
    "script_animation",
    "script_area",
    "script_assaultnode",
    "script_attackmetype",
    "script_attackPattern",
    "script_attackspeed",
    "script_autosave",
    "script_autosavename",
    "script_avoidplayer",
    "script_avoidvehicles",
    "script_badplace",
    "script_balcony",
    "script_battlechatter",
    "script_bctrigger",
    "script_bg_offset",
    "script_bombmode_dual",
    "script_bombmode_original",
    "script_bombmode_single",
    "script_breach_id",
    "script_bulletshield",
    "script_burst",
    "script_burst_max",
    "script_burst_min",
    "script_chance",
    "script_cheap",
    "script_cleartargetyaw",
    "script_cobratarget",
    "script_color_allies",
    "script_color_axis",
    "script_crashtype",
    "script_crashtypeoverride",
    "script_damage",
    "script_death",
    "script_death_max",
    "script_death_min",
    "script_deathchain",
    "script_deathflag",
    "script_deathroll",
    "script_decel",
    "script_decel_fraction",
    "script_delay",
    "script_delay_goto_goalmax",
    "script_delay_goto_goalmin",
    "script_delay_max",
    "script_delay_min",
    "script_delayed_playerseek",
    "script_delete",
    "script_deleteai",
    "script_destructable_area",
    "script_disconnectpaths",
    "script_displaceable",
    "script_dont_link_turret",
    "script_dontshootwhilemoving",
    "script_dot",
    "script_drone",
    "script_dronelag",
    "script_drones_max",
    "script_drones_min",
    "script_droneStartMove",
    "script_earthquake",
    "script_emptyspawner",
    "script_ender",
    "script_engage",
    "script_engageDelay",
    "script_explode",
    "script_exploder",
    "script_fallback",
    "script_fallback_group",
    "script_falldirection",
    "script_fightdist",
    "script_firefx",
    "script_firefxdelay",
    "script_firefxsound",
    "script_firefxtimeout",
    "script_fireondrones",
    "script_fixednode",
    "script_flag",
    "script_flag_false",
    "script_flag_set",
    "script_flag_true",
    "script_flag_wait",
    "script_flakaicount",
    "script_flashbangs",
    "script_followmax",
    "script_followmin",
    "script_followmode",
    "script_forcecolor",
    "script_forcegoal",
    "script_forcegrenade",
    "script_forcespawn",
    "script_forceyaw",
    "script_friendname",
    "script_fxcommand",
    "script_fxid",
    "script_fxstart",
    "script_fxstop",
    "script_gameobjectname",
    "script_gametype_ctf",
    "script_gametype_dm",
    "script_gametype_hq",
    "script_gametype_sd",
    "script_gametype_tdm",
    "script_gatetrigger",
    "script_ghettotag",
    "script_goalvolume",
    "script_goalyaw",
    "script_grenades",
    "script_grenadespeed",
    "script_growl",
    "script_health",
    "script_hidden",
    "script_hint",
    "script_hoverwait",
    "script_ignore_suppression",
    "script_ignoreme",
    "script_immunetoflash",
    "script_increment",
    "script_index",
    "script_keepdriver",
    "script_killspawner",
    "script_killspawner_group",
    "script_label",
    "script_landmark",
    "script_layer",
    "script_light_toggle",
    "script_linkName",
    "script_linkTo",
    "script_location",
    "script_longdeath",
    "script_looping",
    "script_mapsize_08",
    "script_mapsize_16",
    "script_mapsize_32",
    "script_mapsize_64",
    "script_maxdist",
    "script_maxspawn",
    "script_mg42auto",
    "script_mg_angle",
    "script_mgturret",
    "script_minspec_hooks_level",
    "script_minspec_level",
    "script_mortargroup",
    "script_moveoverride",
    "script_nodestate",
    "script_noenemyinfo",
    "script_nofriendlywave",
    "script_nohealth",
    "script_nomg",
    "script_noteworthy",
    "script_nowall",
    "script_objective",
    "script_objective_active",
    "script_objective_inactive",
    "script_offradius",
    "script_offtime",
    "script_pacifist",
    "script_parameters",
    "script_patroller",
    "script_personality",
    "script_physics",
    "script_physicsjolt",
    "script_pilottalk",
    "script_plane",
    "script_playerconeradius",
    "script_playerseek",
    "script_prefab_exploder",
    "script_presound",
    "script_radius",
    "script_random_killspawner",
    "script_randomspawn",
    "script_repeat",
    "script_requires_player",
    "script_reuse",
    "script_reuse_max",
    "script_reuse_min",
    "script_seekgoal",
    "script_shotcount",
    "script_sightrange",
    "script_skilloverride",
    "script_smokegroup",
    "script_sound",
    "script_spawn_here",
    "script_squad",
    "script_squadname",
    "script_stack",
    "script_stance",
    "script_start",
    "script_startinghealth",
    "script_startingposition",
    "script_stealth_dontseek",
    "script_stopnode",
    "script_stoptoshoot",
    "script_suppression",
    "script_tankgroup",
    "script_targetoffset_z",
    "script_targettype",
    "script_team",
    "script_threatbiasgroup",
    "script_threshold",
    "script_timeout",
    "script_timer",
    "script_trace",
    "script_trigger_group",
    "script_triggered_playerseek",
    "script_triggername",
    "script_turningdir",
    "script_turret",
    "script_turret_ambush",
    "script_turret_share",
    "script_turretmg",
    "script_unload",
    "script_unloaddelay",
    "script_unloadmgguy",
    "script_usemg42",
    "script_vehicle_lights_off",
    "script_vehicle_lights_on",
    "script_vehicle_selfremove",
    "script_vehicleaianim",
    "script_vehicledetour",
    "script_vehicledetourgroup",
    "script_vehicledetourtype",
    "script_vehiclegroup",
    "script_vehicleGroupDelete",
    "script_vehiclenodegroup",
    "script_vehicleride",
    "script_VehicleSpawngroup",
    "script_VehicleStartMove",
    "script_vehicletriggergroup",
    "script_vehiclewalk",
    "script_wait",
    "script_wait_add",
    "script_wait_max",
    "script_wait_min",
    "script_wheeldirection",
    "script_wingman",
    "script_wtf",
    "script_yawspeed",
    "spawner_id",
    "spawnflags",
    "speed",
    "squadnum",
    "target",
    "targetname",
    "vehicletype",
    "weaponinfo",
];

export var fields = Array.from(new Set(entity_props.concat(keys_text)));
