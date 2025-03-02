//
//  LoginView.swift
//  ios-app
//
//  Created by Khoa on 2/28/25.
//

import SwiftUI

struct LoginView: View {
    @State private var email: String = "";
    @State private var password: String = "";
    
    var body: some View {
        Text("WELCOME BACK")
            .font(.system(size: 32, weight: .bold, design: .default))
        Form{
            Section(header: Text("Email")){
                TextField(text: $email, prompt: Text("Enter your email")){
                    Text("Email")
                }
            }
            Section(header: Text("Password")){
                SecureField(text: $password, prompt: Text("Enter your password")){
                    Text("Password")
                }
            }
            Button(action: submitSignin){
                Text("SIGN IN").multilineTextAlignment(.center)
            }
        }
        
    }
    
    func submitSignin(){
        return
    }
}

#Preview {
    LoginView()
}
