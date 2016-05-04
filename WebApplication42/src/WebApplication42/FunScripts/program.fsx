#I "lib"
#r "FunScript.dll"
#r "FunScript.HTML.dll"
#r "FunScript.Interop.dll"
#r "FunScript.TypeScript.Binding.lib.dll"
#r @"C:\Users\Alexey\.dnx\packages\FunScript.TypeScript.Binding.angular\1.1.0.37\lib\net40\FunScript.TypeScript.Binding.angular.dll"
// You must always mark the code you want to compile to JavaScript
// with the ReflectedDefinition attribute. This will ask the F# compiler
// to create the expression tree that FunScript will read and compile to JS.
// Alternatively, you can use the FunScript.JSAttribute alias.
open FunScript.TypeScript
open FunScript

[<JS>]
module Angular =
    let [<JSEmitInline("{0}[{1}] = {2}")>] (?<-) obj name value = ()
    let [<JSEmitInline("{0}[{1}]")>] (?) (v: obj) name: 'T = unbox (obj())
    
    let module' name requires = Globals.angular._module(name, requires)
    let controller name (params': string list) (f: 'a -> unit) (module': ng.IModule) =
        let params' = (params' |> List.map box) @ [ box f ] |> List.toArray
        module'.controller(name, params')

    type ng.IScope with
        member self.``$watch``(watchExpression) =
            self.Dollarwatch(watchExpression: string)
        member self.sd = "f"

    type ng.IModule with
        member this.hello = "df"
    


[<ReflectedDefinition>]
module Program =
    
    open Angular
    // For convenience, we'll be using main() as the program entry point
    let main() =
        // Write to the console using the JS method
//         Globals.console.log("Hello JS!")
//
//         let appController =
//            Ng.controller "OptionCtrl" ["$scope"] <| fun (scope: ng.IScope) ->
//                scope?hello <- "hello"
//                scope?setHello <- fun () -> scope?hello <- "new value"
//                scope?getHello <- fun () -> Globals.alert(scope?hello) 
          
                   

                  let app = Globals.angular._module("App", [||])
                  app.controller("dsd",[|"$scope";fun (scope: ng.IScope) -> "":>Object|])|> ignore
                  ()
                  //app.controller("sd",new ng.IModule())
                    
                  

                
               
              //app.controller("OptionCtrl", fun (scope:ng.IScope)->
              //     scope?hello <- "hello"
              
           
               
    
        // Write to the web page
         


// This will compile the code to JS and copy the html file and the generated script to the parent directory
open System.IO
let dir = __SOURCE_DIRECTORY__
// External libraries can provide additional components to FunScript compiler
// In most of the tutorials we'll be using components from FunScript.HTML extensions
let components = FunScript.HTML.Components.getHTMLComponents()
let code = FunScript.Compiler.Compiler.Compile(<@ Program.main() @>, noReturn=true, components=components)
File.WriteAllText(Path.Combine(dir, "../wwwroot/fun/funapp.js"), code)
