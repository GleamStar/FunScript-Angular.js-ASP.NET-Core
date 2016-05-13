//open System
//open System.IO
//let pathToPackage package =
//    let packagesFolder = Path.Combine(System.Environment.GetFolderPath(System.Environment.SpecialFolder.UserProfile), @".dnx\packages\")
//    Path.Combine(packagesFolder, package)
//
//let referncedFolders =
//    [ "lib"
//      pathToPackage @"FunScript.TypeScript.Binding.angular\1.1.0.37\lib\net40\" ]
//
//#r "EnvDTE"
//#r "EnvDTE80"
//#r "VSLangProj"
//
//let appObj = System.Runtime.InteropServices.Marshal.
//               GetActiveObject("VisualStudio.DTE") :?> EnvDTE80.DTE2
//let solnDir = Path.GetDirectoryName(appObj.Solution.FileName)
//let cfg = appObj.Solution.SolutionBuild.ActiveConfiguration.Name
//
////#r libraryDLL  // illegal, since #r takes a string literal, but...
//let props = appObj.Properties("F# Tools", "F# Interactive")
//let cla = props.Item("FsiCommandLineArgs")
//cla.Value <- sprintf "--optimize -I:\"%s\"" (String.concat "\" \"" referncedFolders)
//
//appObj.ExecuteCommand("View.F#Interactive", "")
//appObj.ExecuteCommand("OtherContextMenus.FSIConsoleContext.ResetSession", "")


#I @"C:\Users\Alexey\.dnx\packages\FunScript\1.1.94\lib\net40"
#I @"C:\Users\Alexey\.dnx\packages\FunScript.TypeScript.Binding.lib\1.1.0.37\lib\net40"
#I @"C:\Users\Alexey\.dnx\packages\FunScript.TypeScript.Binding.jquery\1.1.0.37\lib\net40"
#I @"C:\Users\Alexey\.dnx\packages\FunScript.TypeScript.Binding.angular\1.1.0.37\lib\net40\"
#r "FunScript.dll"
#r "FunScript.Interop.dll"
#r "FunScript.TypeScript.Binding.lib.dll"
#r "FunScript.TypeScript.Binding.jquery.dll"
#r "FunScript.TypeScript.Binding.angular.dll"
#load "types.fs"
#load "data.fs"
// You must always mark the code you want to compile to JavaScript
// with the ReflectedDefinition attribute. This will ask the F# compiler
// to create the expression tree that FunScript will read and compile to JS.
// Alternatively, you can use the FunScript.JSAttribute alias.
open FunScript.TypeScript
open FunScript
open MobileInsurance
open MobileInsurance.Data
[<JS>]
module Angular =
    [<JSEmitInline("{0}[{1}] = {2}")>]
    let (?<-) obj name value = ()

    [<JSEmitInline("{0}[{1}]")>]
    let (?) (v : obj) name : 'T = unbox (obj())

    type ng.IScope with
        member self.``$watch`` (watchExpression) = self.Dollarwatch(watchExpression : string)

[<ReflectedDefinition>]
module Program =
    open Angular
    open System
    open FunScript.TypeScript

    // For convenience, we'll be using main() as the program entry point

    let GetCityItems(zones : Zone list) =
        zones
        |> List.collect (fun zone ->
               zone.Cities |> List.map (fun city ->
                                  { Name = city
                                    Zone = zone.Name
                                    Coefficient = zone.Coefficient }))
        |> Array.ofList

    let GetCarItems(cars : Car list) =
        cars
        |> List.collect (fun car ->
               car.Type |> List.map (fun viewCar ->
                               { GroupName = car.GroupName
                                 Name = viewCar.Name
                                 Coefficient = viewCar.Coefficient }))
        |> Array.ofList

    let Culc a b c = 180. * a * b * c

    let main() =
        let (model : ViewModel) =
            { city = GetCityItems zones
              typecar = GetCarItems cars
              scopeuse = scopeuse
              years = [| 1950..2016 |].reverse() }

        let app = Globals.angular._module ("App", [||])

        app.controller
            ("OptionCtrl",
             [| "$scope" :> obj

                (fun (scope : ng.IScope) ->
                scope?data <- model
                scope?calculation <- fun () -> //try
                    Math.Round(180. * 1.5 * scope?selected?scopeuse?Coefficient * scope?selected?city?Coefficient
                               * scope?selected?scopeuse?Coefficient).ToString())
                                                                                  :> obj |])
        |> ignore
        ()

// This will compile the code to JS and copy the html file and the generated script to the parent directory
open System.IO

let dir = __SOURCE_DIRECTORY__
// External libraries can provide additional components to FunScript compiler
// In most of the tutorials we'll be using components from FunScript.HTML extensions

let code = FunScript.Compiler.Compiler.Compile(<@ Program.main() @>, noReturn=true)
File.WriteAllText(Path.Combine(dir, "../wwwroot/fun/funapp.js"), code)
