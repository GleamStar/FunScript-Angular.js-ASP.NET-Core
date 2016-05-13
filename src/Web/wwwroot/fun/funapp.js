var list_1_Zone__NilZone_, list_1_Zone__ConsZone_, list_1_CityViewModel__NilCityViewModel_, list_1_CityViewModel__ConsCityViewModel_, list_1_Car__NilCar_, list_1_Car__ConsCar_, list_1_CarViewModel__NilCarViewModel_, list_1_CarViewModel__ConsCarViewModel_, ViewModel___ctor$, UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, TupleInt32_Int32, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__ToArray$Int32_Int32, Seq__IterateIndexed$Int32_Int32, Seq__FromFactory$Int32_Int32, Seq__FoldIndexedAux$Unit__Int32_Unit__Int32, Seq__FoldIndexed$Int32__Unit_Int32_Unit_, Seq__Enumerator$Int32_Int32, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Program__main$, Program__GetCityItems$, Program__GetCarItems$, Option__IsSome$Int32_Int32, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Int32_Int32, MathJS__Round$, List__ToArray$CityViewModel_CityViewModel_, List__ToArray$CarViewModel_CarViewModel_, List__Reverse$Zone_Zone_, List__Reverse$CityViewModel_CityViewModel_, List__Reverse$Car_Car_, List__Reverse$CarViewModel_CarViewModel_, List__Map$String__CityViewModel_String_CityViewModel_, List__Map$CarType__CarViewModel_CarType__CarViewModel_, List__Length$CityViewModel_CityViewModel_, List__Length$CarViewModel_CarViewModel_, List__IterateIndexed$CityViewModel_CityViewModel_, List__IterateIndexed$CarViewModel_CarViewModel_, List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_, List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_, List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String, List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_, List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_, List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_, List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_, List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_, List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_, List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_, List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_, List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_, List__FoldIndexed$Zone__list_1_Zone_Zone__list_1_Zone_, List__FoldIndexed$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_, List__FoldIndexed$String__list_1_CityViewModel_String_list_1_CityViewModel_, List__FoldIndexed$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_, List__FoldIndexed$CityViewModel__Unit_CityViewModel__Unit_, List__FoldIndexed$CityViewModel__Int32_CityViewModel__Int32, List__FoldIndexed$Car__list_1_Car_Car__list_1_Car_, List__FoldIndexed$Car__list_1_CarViewModel_Car__list_1_CarViewModel_, List__FoldIndexed$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_, List__FoldIndexed$CarViewModel__Unit_CarViewModel__Unit_, List__FoldIndexed$CarViewModel__Int32_CarViewModel__Int32, List__FoldIndexed$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_, List__Fold$Zone__list_1_Zone_Zone__list_1_Zone_, List__Fold$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_, List__Fold$String__list_1_CityViewModel_String_list_1_CityViewModel_, List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_, List__Fold$CityViewModel__Int32_CityViewModel__Int32, List__Fold$Car__list_1_Car_Car__list_1_Car_, List__Fold$Car__list_1_CarViewModel_Car__list_1_CarViewModel_, List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_, List__Fold$CarViewModel__Int32_CarViewModel__Int32, List__Fold$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_, List__Collect$Zone__CityViewModel_Zone__CityViewModel_, List__Collect$Car__CarViewModel_Car__CarViewModel_, List__Append$CityViewModel_CityViewModel_, List__Append$CarViewModel_CarViewModel_, Data__zones, Data__scopeuse, Data__cars, CreateEnumerable_1_Int32___ctor$Int32, CityViewModel___ctor$, CarViewModel___ctor$, Array__ZeroCreate$Int32_Int32, Array__ZeroCreate$CityViewModel_CityViewModel_, Array__ZeroCreate$CarViewModel_CarViewModel_;
Array__ZeroCreate$CarViewModel_CarViewModel_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$CityViewModel_CityViewModel_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Int32_Int32 = (function(size)
{
    return new Array(size);;
});
CarViewModel___ctor$ = (function(GroupName,Name,Coefficient)
{
    var __this = this;
    __this.GroupName = GroupName;
    __this.Name = Name;
    __this.Coefficient = Coefficient;
});
CityViewModel___ctor$ = (function(Name,Zone,Coefficient)
{
    var __this = this;
    __this.Name = Name;
    __this.Zone = Zone;
    __this.Coefficient = Coefficient;
});
CreateEnumerable_1_Int32___ctor$Int32 = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
List__Append$CarViewModel_CarViewModel_ = (function(xs,ys)
{
    return List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_CarViewModel__ConsCarViewModel_(x, acc));
      });
    }), ys, List__Reverse$CarViewModel_CarViewModel_(xs));
});
List__Append$CityViewModel_CityViewModel_ = (function(xs,ys)
{
    return List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_CityViewModel__ConsCityViewModel_(x, acc));
      });
    }), ys, List__Reverse$CityViewModel_CityViewModel_(xs));
});
List__Collect$Car__CarViewModel_Car__CarViewModel_ = (function(f,xs)
{
    return List__Fold$Car__list_1_CarViewModel_Car__list_1_CarViewModel_((function(acc)
    {
      return (function(x)
      {
        return List__Append$CarViewModel_CarViewModel_(f(x), acc);
      });
    }), (new list_1_CarViewModel__NilCarViewModel_()), List__Reverse$Car_Car_(xs));
});
List__Collect$Zone__CityViewModel_Zone__CityViewModel_ = (function(f,xs)
{
    return List__Fold$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_((function(acc)
    {
      return (function(x)
      {
        return List__Append$CityViewModel_CityViewModel_(f(x), acc);
      });
    }), (new list_1_CityViewModel__NilCityViewModel_()), List__Reverse$Zone_Zone_(xs));
});
List__Fold$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexed$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$CarViewModel__Int32_CarViewModel__Int32 = (function(f,seed,xs)
{
    return List__FoldIndexed$CarViewModel__Int32_CarViewModel__Int32((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexed$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$Car__list_1_CarViewModel_Car__list_1_CarViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Car__list_1_CarViewModel_Car__list_1_CarViewModel_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$Car__list_1_Car_Car__list_1_Car_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Car__list_1_Car_Car__list_1_Car_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$CityViewModel__Int32_CityViewModel__Int32 = (function(f,seed,xs)
{
    return List__FoldIndexed$CityViewModel__Int32_CityViewModel__Int32((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexed$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$String__list_1_CityViewModel_String_list_1_CityViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexed$String__list_1_CityViewModel_String_list_1_CityViewModel_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$Zone__list_1_Zone_Zone__list_1_Zone_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Zone__list_1_Zone_Zone__list_1_Zone_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__FoldIndexed$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_(f, 0, seed, xs);
});
List__FoldIndexed$CarViewModel__Int32_CarViewModel__Int32 = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_(f, 0, seed, xs);
});
List__FoldIndexed$CarViewModel__Unit_CarViewModel__Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_(f, 0, seed, xs);
});
List__FoldIndexed$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_(f, 0, seed, xs);
});
List__FoldIndexed$Car__list_1_CarViewModel_Car__list_1_CarViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_(f, 0, seed, xs);
});
List__FoldIndexed$Car__list_1_Car_Car__list_1_Car_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_(f, 0, seed, xs);
});
List__FoldIndexed$CityViewModel__Int32_CityViewModel__Int32 = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_(f, 0, seed, xs);
});
List__FoldIndexed$CityViewModel__Unit_CityViewModel__Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_(f, 0, seed, xs);
});
List__FoldIndexed$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_(f, 0, seed, xs);
});
List__FoldIndexed$String__list_1_CityViewModel_String_list_1_CityViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String(f, 0, seed, xs);
});
List__FoldIndexed$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_(f, 0, seed, xs);
});
List__FoldIndexed$Zone__list_1_Zone_Zone__list_1_Zone_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_(f, 0, seed, xs);
});
List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__IterateIndexed$CarViewModel_CarViewModel_ = (function(f,xs)
{
    var _484;
    return List__FoldIndexed$CarViewModel__Unit_CarViewModel__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _484, xs);
});
List__IterateIndexed$CityViewModel_CityViewModel_ = (function(f,xs)
{
    var _229;
    return List__FoldIndexed$CityViewModel__Unit_CityViewModel__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _229, xs);
});
List__Length$CarViewModel_CarViewModel_ = (function(xs)
{
    return List__Fold$CarViewModel__Int32_CarViewModel__Int32((function(acc)
    {
      return (function(_arg1)
      {
        return (acc + 1);
      });
    }), 0, xs);
});
List__Length$CityViewModel_CityViewModel_ = (function(xs)
{
    return List__Fold$CityViewModel__Int32_CityViewModel__Int32((function(acc)
    {
      return (function(_arg1)
      {
        return (acc + 1);
      });
    }), 0, xs);
});
List__Map$CarType__CarViewModel_CarType__CarViewModel_ = (function(f,xs)
{
    return List__Reverse$CarViewModel_CarViewModel_(List__Fold$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_CarViewModel__ConsCarViewModel_(f(x), acc));
      });
    }), (new list_1_CarViewModel__NilCarViewModel_()), xs));
});
List__Map$String__CityViewModel_String_CityViewModel_ = (function(f,xs)
{
    return List__Reverse$CityViewModel_CityViewModel_(List__Fold$String__list_1_CityViewModel_String_list_1_CityViewModel_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_CityViewModel__ConsCityViewModel_(f(x), acc));
      });
    }), (new list_1_CityViewModel__NilCityViewModel_()), xs));
});
List__Reverse$CarViewModel_CarViewModel_ = (function(xs)
{
    return List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_CarViewModel__ConsCarViewModel_(x, acc));
      });
    }), (new list_1_CarViewModel__NilCarViewModel_()), xs);
});
List__Reverse$Car_Car_ = (function(xs)
{
    return List__Fold$Car__list_1_Car_Car__list_1_Car_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_Car__ConsCar_(x, acc));
      });
    }), (new list_1_Car__NilCar_()), xs);
});
List__Reverse$CityViewModel_CityViewModel_ = (function(xs)
{
    return List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_CityViewModel__ConsCityViewModel_(x, acc));
      });
    }), (new list_1_CityViewModel__NilCityViewModel_()), xs);
});
List__Reverse$Zone_Zone_ = (function(xs)
{
    return List__Fold$Zone__list_1_Zone_Zone__list_1_Zone_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_Zone__ConsZone_(x, acc));
      });
    }), (new list_1_Zone__NilZone_()), xs);
});
List__ToArray$CarViewModel_CarViewModel_ = (function(xs)
{
    var size = List__Length$CarViewModel_CarViewModel_(xs);
    var ys = Array__ZeroCreate$CarViewModel_CarViewModel_(size);
    List__IterateIndexed$CarViewModel_CarViewModel_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
List__ToArray$CityViewModel_CityViewModel_ = (function(xs)
{
    var size = List__Length$CityViewModel_CityViewModel_(xs);
    var ys = Array__ZeroCreate$CityViewModel_CityViewModel_(size);
    List__IterateIndexed$CityViewModel_CityViewModel_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
MathJS__Round$ = (function(x)
{
    return Math.round(x);;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Program__GetCarItems$ = (function(cars)
{
    return List__ToArray$CarViewModel_CarViewModel_(List__Collect$Car__CarViewModel_Car__CarViewModel_((function(car)
    {
      return List__Map$CarType__CarViewModel_CarType__CarViewModel_((function(viewCar)
      {
        return (new CarViewModel___ctor$(car.GroupName, viewCar.Name, viewCar.Coefficient));
      }), car.Type);
    }), cars));
});
Program__GetCityItems$ = (function(zones)
{
    return List__ToArray$CityViewModel_CityViewModel_(List__Collect$Zone__CityViewModel_Zone__CityViewModel_((function(zone)
    {
      return List__Map$String__CityViewModel_String_CityViewModel_((function(city)
      {
        return (new CityViewModel___ctor$(city, zone.Name, zone.Coefficient));
      }), zone.Cities);
    }), zones));
});
Program__main$ = (function(unitVar0)
{
    var model = (new ViewModel___ctor$(Program__GetCityItems$(Data__zones), Program__GetCarItems$(Data__cars), Data__scopeuse, (Seq__ToArray$Int32_Int32(Range__oneStep$Int32_Int32(1950, 2016)).reverse())));
    var app = ((window.angular).module("App", []));
    var ignored0 = (app.controller("OptionCtrl", ["$scope", (function(scope)
    {
      scope["data"] = model;
      return scope["calculation"] = (function(_unitVar0)
      {
        var copyOfStruct = MathJS__Round$(((((180.000000 * 1.500000) * scope["selected"]["scopeuse"]["Coefficient"]) * scope["selected"]["city"]["Coefficient"]) * scope["selected"]["scopeuse"]["Coefficient"]));
        return copyOfStruct.toString();
      });
    })]));
});
Range__customStep$Int32__Int32_Int32_Int32 = (function(first,stepping,last)
{
    var zero = 0;
    return Seq__Unfold$Int32__Int32_Int32_Int32((function(x)
    {
      if ((((stepping > zero) && (x <= last)) || ((stepping < zero) && (x >= last)))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), first);
});
Range__oneStep$Int32_Int32 = (function(first,last)
{
    return Range__customStep$Int32__Int32_Int32_Int32(first, 1, last);
});
Seq__Enumerator$Int32_Int32 = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__FoldIndexed$Int32__Unit_Int32_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Int32_Unit__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexedAux$Unit__Int32_Unit__Int32 = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$Int32_Int32 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _602;
        return __.factory(_602);
      })(impl, unitVar1);
    })};
});
Seq__IterateIndexed$Int32_Int32 = (function(f,xs)
{
    var _619;
    return Seq__FoldIndexed$Int32__Unit_Int32_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _619, xs);
});
Seq__ToArray$Int32_Int32 = (function(xs)
{
    var ys = Array__ZeroCreate$Int32_Int32(0);
    Seq__IterateIndexed$Int32_Int32((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__Unfold$Int32__Int32_Int32_Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _580;
            return next(_580);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
TupleInt32_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
ViewModel___ctor$ = (function(city,typecar,scopeuse,years)
{
    var __this = this;
    __this.city = city;
    __this.typecar = typecar;
    __this.scopeuse = scopeuse;
    __this.years = years;
});
list_1_CarViewModel__ConsCarViewModel_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_CarViewModel__NilCarViewModel_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_Car__ConsCar_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Car__NilCar_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_CityViewModel__ConsCityViewModel_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_CityViewModel__NilCityViewModel_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_Zone__ConsZone_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Zone__NilZone_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
Program__main$()