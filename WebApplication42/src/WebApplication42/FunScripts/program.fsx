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
    

[<ReflectedDefinition>]
module Program =
    
    open Angular
    // For convenience, we'll be using main() as the program entry point
    type Model = {
       city: string array ;
       typecar: string array ;
       crash: string array ;
       years: int array 
    }
    type Selected ={
       city: string  ;
       typecar: string  ;
       crash: string  ;
       years: int  
    }
    let main() =                  
                  let (model:Model) = {
                       city = [|"Киев"; "Одесса"; "Днепропетровск"; "Львов"|] ;
                       typecar=[|"Легковые"; "Прицепы"; "Автобусы"; "Mото"|];
                       crash= [|"Нет"; "1 год"; "2 года"; "3 года"|];
                       years= [|1950..2016|].reverse()
                  }
                  let app = Globals.angular._module("App", [||])
                  app.controller("OptionCtrl",[|"$scope":>obj;(fun (scope: ng.IScope) ->                 
                   scope?data <- model
                   scope?selected <-{
                       city = "Одесса";
                       typecar = "Легковые" ;
                       crash ="Нет";
                       years = 2016
                   }
                         
                   
                   ):>obj|])|> ignore
                  ()
                                                         

// This will compile the code to JS and copy the html file and the generated script to the parent directory
open System.IO
let dir = __SOURCE_DIRECTORY__
// External libraries can provide additional components to FunScript compiler
// In most of the tutorials we'll be using components from FunScript.HTML extensions
let components = FunScript.HTML.Components.getHTMLComponents()
let code = FunScript.Compiler.Compiler.Compile(<@ Program.main() @>, noReturn=true, components=components)
File.WriteAllText(Path.Combine(dir, "../wwwroot/fun/funapp.js"), code)
