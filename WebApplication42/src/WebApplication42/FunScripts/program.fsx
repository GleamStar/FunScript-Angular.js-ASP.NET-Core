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
    type ng.IScope with
            member self.``$watch``(watchExpression) =
                self.Dollarwatch(watchExpression: string)


[<ReflectedDefinition>]
module Program =
    
    open Angular
    open System
    open FunScript.TypeScript

    // For convenience, we'll be using main() as the program entry point
    
                    
   
    type Selected ={
       city: string  ;
       typecar: string  ;
       crash: string  ;
       years: int  
    }
    type tem = {
        templateUrl:string
    }
    type IGroup<'T> =
        interface
        abstract member Name : string 
        abstract member Coefficient : float 
        abstract member Items:'T list
        end
    type CarViewModel ={
        GroupName:string;
        Name:string;
        Coefficient: float;
    }
    type CityViewModel = {
        Name :string;
        Zone : string;
        Coefficient : float 
    }
    type ViewScopeUse = {
      Name : string;
      Coefficient: float;
    }
     type ViewModel = {
       city: CityViewModel array ;
       typecar: CarViewModel array ;
       scopeuse: ViewScopeUse array ;
       years: int array 
    }
     type SelectedModel = {
       city: CityViewModel  ;
       typecar: CarViewModel  ;
       scopeuse: ViewScopeUse  ;
       years: int  
    }
    type City = string 
    type Zone = {
      Name:string
      Coefficient: float
      Cities : City list
    } 
    type CarType = {
      Coefficient: float;
      Name: string
    }
    type Car = {
       GroupName:string;
       Type:CarType list
    }
   
    let zones = [{Name="Зона1";Coefficient=4.8;Cities=["Киев"]};
                 {Name="Зона2";Coefficient=2.5;Cities=["Босприсполь" ;"Боярка"; "Бровары";"Васильков";"Вышгород";"Вешневое";"Ирпень"]};
                 {Name="Зона3";Coefficient=3.4;Cities=["Одесса";"Харьков"]};
                 {Name="Зона4";Coefficient=2.8;Cities=["Днепропетровск";"Донецк";"Запорожье"; "Кривой Рог"; "Львов"]};
                 {Name="Зона5";Coefficient=2.2;Cities=["Алчевськ";"Бердянськ";"Біла Церква";"Вінниця";"Дніпродзержинськ";"Горлівка";"Євпаторія";"Житомир";"Івано-Франківськ";"Кам’янець-Подільский";"Керч";"Кіровоград";"Краматорськ";"Кременчук";"Лисичанськ";"Луганськ";"Луцьк";"Макіївка";"Маріуполь";"Мелітополь";"Миколаїв";"Нікополь";"Павлоград";"Полтава";"Рівне";"Севастополь";"Сєверодонецьк";"Сімферополь";"Слов’янськ";"Суми";"Тернопіль";"Ужгород";"Херсон";"Хмельницький";"Черкаси";"Чернівці";"Чернігів"]};
                 {Name="Зона6";Coefficient=1.5;Cities=["Другие населенные пункты Украины"]};
                 {Name="Зона7";Coefficient=3.;Cities=["За пределами Украины"]};
                ]
    let cars = [
        {GroupName ="Мотоцикли та моторолери";Type = [{Coefficient=0.38;Name="до 300 кубічних сантиметрів"};{Coefficient=0.68;Name="від 300 кубічних сантиметрів"}]};
        {GroupName ="Легковий автомобіль";Type = [{Coefficient=1.;Name="до 1600 кубічних сантиметрів"};{Coefficient=1.18;Name="2001 - 3000 кубічних сантиметрів"};{Coefficient=1.82;Name="більше 3000 кубічних сантиметрів"}]};
        {GroupName ="Вантажні автомобілі";Type = [{Coefficient=2.;Name="до 2 тонн (включно)"};{Coefficient=2.18;Name="понад 2 тонни"}]};
        {GroupName ="Автобуси";Type=[{Coefficient=2.55;Name="до 20 чоловік (включно)"};{Coefficient=3.;Name="понад 20 чоловік"}]};
        {GroupName="Причепи";Type=[{Coefficient=0.5;Name="до вантажних автомобілів"};{Coefficient=0.34;Name="до легкових автомобілівв"}]}
    ]
    let (scopeuse:ViewScopeUse array) =[|{Name="Личный автомобиль";Coefficient=1.;};{Name="Использую как такси";Coefficient=1.4;};{Name="Работаю водителем";Coefficient=1.3;};{Name="Работаю в такси";Coefficient=1.5;}|]

    let GetCityItems (zones:Zone list) =
      zones 
      |> List.collect(fun zone ->
        zone.Cities 
        |> List.map(fun city -> {Name = city;Zone=zone.Name;Coefficient =zone.Coefficient}))
      |> Array.ofList

    let GetCarItems (cars : Car list)=
       cars
       |> List.collect(fun car ->
           car.Type
           |> List.map(fun viewCar ->{GroupName = car.GroupName;Name = viewCar.Name;Coefficient = viewCar.Coefficient}))
       |> Array.ofList
    let Culc a b c = 180. * a *b *c ;     
    let main() =                  
                  let (model:ViewModel) = {
                       city = GetCityItems zones ;
                       typecar= GetCarItems cars
                       scopeuse = scopeuse;
                       years= [|1950..2016|].reverse()
                  }
                  let app = Globals.angular._module("App", [||])
                
                 // let a = {templateUrl = "htmlpage.html"}:>obj
                 //app.directive("fdff",[|a|])|> ignore

                  app.controller("OptionCtrl",[|"$scope":>obj;(fun (scope: ng.IScope) ->                 
                   scope?data <- model
                   scope?calculation <- fun () -> try  
                                                      Math.Round(180.*1.5* scope?selected?scopeuse?Coefficient * scope?selected?city?Coefficient *scope?selected?scopeuse?Coefficient).ToString()
                                                  with | _  -> "Enter valid data"                                              
                   scope?selected <-{
                      city = {Name="Киев";Zone="Зона1";Coefficient=4.8}
                      typecar = {GroupName ="Легковий автомобіль";Coefficient=1.;Name="до 1600 кубічних сантиметрів"} 
                      scopeuse = {Name="Личный автомобиль";Coefficient=1.;} 
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
