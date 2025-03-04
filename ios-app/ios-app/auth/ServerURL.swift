//
//  ServerURL.swift
//  ios-app
//
//  Created by Khoa on 2/28/25.
//

import SwiftUI

struct ServerURL: View {
    @State private var endpoint: String = ""
    var body: some View {
        Form{
            Section(header: Text("Server Endpoint")){
                TextField(text: $endpoint, prompt: Text("https://server.com")){
                }
            }
            Button(action: tryEndpoint){
                Text("Next")
            }
        }
    }
    
    func tryEndpoint(){
        return
    }
}

#Preview {
    ServerURL()
}
