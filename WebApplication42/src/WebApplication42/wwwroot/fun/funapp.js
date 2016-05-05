var UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, TupleInt32_Int32, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__ToArray$Int32_Int32, Seq__IterateIndexed$Int32_Int32, Seq__FromFactory$Int32_Int32, Seq__FoldIndexedAux$Unit__Int32_Unit__Int32, Seq__FoldIndexed$Int32__Unit_Int32_Unit_, Seq__Enumerator$Int32_Int32, Selected_3__ctor$, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Program_6_main$, Option__IsSome$Int32_Int32, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Int32_Int32, Model_6__ctor$, GenericConstants__Zero$Int32_Int32, GenericConstants__One$Int32_Int32, CreateEnumerable_1_Int32___ctor$Int32, Array__ZeroCreate$Int32_Int32;
  Array__ZeroCreate$Int32_Int32 = (function(size)
  {
    return new Array(size);;
  });
  CreateEnumerable_1_Int32___ctor$Int32 = (function(factory)
  {
    var __this = this;
    __this.factory = factory;
  });
  GenericConstants__One$Int32_Int32 = (function()
  {
    return 1;;
  });
  GenericConstants__Zero$Int32_Int32 = (function()
  {
    return 0;;
  });
  Model_6__ctor$ = (function(city,typecar,crash,years)
  {
    var __this = this;
    __this.city = city;
    __this.typecar = typecar;
    __this.crash = crash;
    __this.years = years;
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
  Program_6_main$ = (function(unitVar0)
  {
    var model = (new Model_6__ctor$(["Киев", "Одесса", "Днепропетровск", "Львов"], ["Легковые", "Прицепы", "Автобусы", "Mото"], ["Нет", "1 год", "2 года", "3 года"], (Seq__ToArray$Int32_Int32(Range__oneStep$Int32_Int32(1950, 2016)).reverse())));
    var app = ((window.angular).module("App", []));
    (function(value)
    {
      var ignored0 = value;
    })((app.controller("OptionCtrl", ["$scope", (function(scope)
    {
      scope["data"] = model;
      return scope["selected"] = (new Selected_3__ctor$("Одесса", "Легковые", "Нет", 2016));
    })])));
  });
  Range__customStep$Int32__Int32_Int32_Int32 = (function(first,stepping,last)
  {
    var zero = GenericConstants__Zero$Int32_Int32();
    var f = (function(x)
    {
      if ((((stepping > zero) && (x <= last)) || ((stepping < zero) && (x >= last)))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    return (function(seed)
    {
      return Seq__Unfold$Int32__Int32_Int32_Int32(f, seed);
    })(first);
  });
  Range__oneStep$Int32_Int32 = (function(first,last)
  {
    return Range__customStep$Int32__Int32_Int32_Int32(first, GenericConstants__One$Int32_Int32(), last);
  });
  Selected_3__ctor$ = (function(city,typecar,crash,years)
  {
    var __this = this;
    __this.city = city;
    __this.typecar = typecar;
    __this.crash = crash;
    __this.years = years;
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
        var _110;
        return __.factory(_110);
      })(impl, unitVar1);
    })};
  });
  Seq__IterateIndexed$Int32_Int32 = (function(f,xs)
  {
    var _130;
    return Seq__FoldIndexed$Int32__Unit_Int32_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _130, xs);
  });
  Seq__ToArray$Int32_Int32 = (function(xs)
  {
    var ys = Array__ZeroCreate$Int32_Int32(0);
    var f = (function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    });
    (function(_xs)
    {
      return Seq__IterateIndexed$Int32_Int32(f, _xs);
    })(xs);
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
            var _88;
            return next(_88);
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
    __this.Items = [Item0, Item1];
  });
  UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function(seed,unfold)
  {
    var __this = this;
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
  });
  Program_6_main$()