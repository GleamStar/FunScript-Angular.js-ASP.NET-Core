namespace MobileInsurance  
    type Selected =
        { city : string
          typecar : string
          crash : string
          years : int }

    type CarViewModel =
        { GroupName : string
          Name : string
          Coefficient : float }

    type CityViewModel =
        { Name : string
          Zone : string
          Coefficient : float }

    type ViewScopeUse =
        { Name : string
          Coefficient : float }

    type ViewModel =
        { city : CityViewModel array
          typecar : CarViewModel array
          scopeuse : ViewScopeUse array
          years : int array }

    type SelectedModel =
        { city : CityViewModel
          typecar : CarViewModel
          scopeuse : ViewScopeUse
          years : int }

    type City = string

    type Zone =
        { Name : string
          Coefficient : float
          Cities : City list }

    type CarType =
        { Coefficient : float
          Name : string }

    type Car =
        { GroupName : string
          Type : CarType list }