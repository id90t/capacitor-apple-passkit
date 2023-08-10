import Foundation
import Capacitor
import PassKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorApplePasskitPlugin)
public class CapacitorApplePasskitPlugin: CAPPlugin {
	private let implementation = CapacitorApplePasskit()

	@objc func addToWallet(_ call: CAPPluginCall) {
		let data = call.getString("base64") ?? ""
		
		if let dataPass = Data(base64Encoded: data, options: .ignoreUnknownCharacters){
			if let pass = try? PKPass(data: dataPass){
				if(PKPassLibrary().containsPass(pass)) {
					call.resolve([ "status": "OK", "message": "The pass already exists!" ]);
					UIApplication.shared.open(pass.passURL! as URL);
				} else {
					if let vc = PKAddPassesViewController(pass: pass) {
						call.resolve([ "status": "OK", "message": "Adding the pass", "value": implementation.echo("Success") ]);
						self.bridge?.viewController?.present(vc, animated: true, completion: nil);
					}
				}
			} else {
				let error =
				"""
				{"status": "FAIL", "message": "PKPASS file is invalid"}
				"""
				call.reject(error);
			}
		} else {
			let error =
			"""
			{"status": "FAIL" ,"message": "Error with base64 data"}
			"""
			call.reject(error);
		}
	}

	@objc func isWalletAppAvailable(_ call: CAPPluginCall) {
		if (PKAddPassesViewController.canAddPasses()) {
			call.resolve(["status": "OK", "value": true])
		} else {
			call.resolve(["status": "OK", "value": false])
		}
	}
}
