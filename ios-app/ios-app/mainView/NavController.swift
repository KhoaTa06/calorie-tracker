//
//  NavController.swift
//  ios-app
//
//  Created by Khoa on 2/28/25.
//

import SwiftUI

struct NavController: View {
    var body: some View {
        TabView{
            Tab("Dash", systemImage: "house"){
                Dashboard()
            }
            
            Tab("Exercise", systemImage: "figure.run"){
                Exercise()
            }
            
            Tab("Food", systemImage: "fork.knife"){
                Food()
            }
            
            Tab("Setting", systemImage: "gear"){
                Setting()
            }
        }
        .tabViewStyle(.automatic)
    }
}

#Preview {
    NavController()
}
