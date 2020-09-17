# vrp_jobcenter

██╗░░░██╗░█████╗░██████╗░░██████╗░██╗░░░██╗██╗████████╗███████╗
██║░░░██║██╔══██╗██╔══██╗██╔════╝░██║░░░██║██║╚══██╔══╝╚════██║
╚██╗░██╔╝███████║██████╔╝██║░░██╗░██║░░░██║██║░░░██║░░░░░███╔═╝
░╚████╔╝░██╔══██║██╔══██╗██║░░╚██╗██║░░░██║██║░░░██║░░░██╔══╝░░
░░╚██╔╝░░██║░░██║██║░░██║╚██████╔╝╚██████╔╝██║░░░██║░░░███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░░╚═════╝░╚═╝░░░╚═╝░░░╚══════╝
Made to vRPex by Varguitz#6151

1. Cualquiera puede descargar el código fuente de forma gratuita y utilizarlo.

2. Cualquiera puede modificar o editar la fuente y redistribuirla gratis.

3. Sin embargo, está prohibido vender la fuente a terceros con fines comerciales..



<img src="https://github.com/fivem-realw/vrp_rw_userlist/blob/master/screenshots/logo.png?raw=true"></img>

<h3>Fix para vRP 0.5</h3>

(Borra el contenido y pega en vrp_jobcenter/server/main.lua)

```lua
local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP", "vrp_jobcenter")

RegisterServerEvent("vrp_jobcenter:selectJob")
AddEventHandler("vrp_jobcenter:selectJob", function(group)
    local user_id = vRP.getUserId({source})
    vRP.addUserGroup({user_id,group})
    TriggerClientEvent("vrp_jobcenter:notification", source, Config.Language.SelectedJob .. " " .. group)
end)
```
