--[[
██╗░░░██╗░█████╗░██████╗░░██████╗░██╗░░░██╗██╗████████╗███████╗
██║░░░██║██╔══██╗██╔══██╗██╔════╝░██║░░░██║██║╚══██╔══╝╚════██║
╚██╗░██╔╝███████║██████╔╝██║░░██╗░██║░░░██║██║░░░██║░░░░░███╔═╝
░╚████╔╝░██╔══██║██╔══██╗██║░░╚██╗██║░░░██║██║░░░██║░░░██╔══╝░░
░░╚██╔╝░░██║░░██║██║░░██║╚██████╔╝╚██████╔╝██║░░░██║░░░███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░░╚═════╝░╚═╝░░░╚═╝░░░╚══════╝
Made to vRPex by Varguitz#6151]]
local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP", "vrp_jobcenter")

RegisterServerEvent("vrp_jobcenter:selectJob")
AddEventHandler("vrp_jobcenter:selectJob", function(group)
    local user_id = vRP.getUserId(source)
    vRP.addUserGroup(user_id,group)
    TriggerClientEvent("vrp_jobcenter:notification", source, Config.Language.SelectedJob .. " " .. group)
end)