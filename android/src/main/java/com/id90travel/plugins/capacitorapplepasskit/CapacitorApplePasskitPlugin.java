package com.id90travel.plugins.capacitorapplepasskit;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorApplePasskit")
public class CapacitorApplePasskitPlugin extends Plugin {

    private CapacitorApplePasskit implementation = new CapacitorApplePasskit();

    @PluginMethod
    public void addToWallet(PluginCall call) {
        String value = call.getString("base64");
        JSObject ret = new JSObject();
        ret.put("base64", implementation.addToWallet("Method not implemented on android."));
        call.resolve(ret);
    }

    @PluginMethod
    public void isWalletAppAvailable(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("", implementation.isWalletAppAvailable("Method not implemented on android."));
        call.resolve(ret);
    }
}