var list_1_Zone__NilZone_,list_1_Zone__ConsZone_,list_1_CityViewModel__NilCityViewModel_,list_1_CityViewModel__ConsCityViewModel_,list_1_Car__NilCar_,list_1_Car__ConsCar_,list_1_CarViewModel__NilCarViewModel_,list_1_CarViewModel__ConsCarViewModel_,ViewModel___ctor$,UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32,TupleInt32_Int32,Seq__Unfold$Int32__Int32_Int32_Int32,Seq__ToArray$Int32_Int32,Seq__IterateIndexed$Int32_Int32,Seq__FromFactory$Int32_Int32,Seq__FoldIndexedAux$Unit__Int32_Unit__Int32,Seq__FoldIndexed$Int32__Unit_Int32_Unit_,Seq__Enumerator$Int32_Int32,Range__oneStep$Int32_Int32,Range__customStep$Int32__Int32_Int32_Int32,Program__main$,Program__GetCityItems$,Program__GetCarItems$,Option__IsSome$Int32_Int32,Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_,Option__GetValue$Int32_Int32,MathJS__Round$,List__ToArray$CityViewModel_CityViewModel_,List__ToArray$CarViewModel_CarViewModel_,List__Reverse$Zone_Zone_,List__Reverse$CityViewModel_CityViewModel_,List__Reverse$Car_Car_,List__Reverse$CarViewModel_CarViewModel_,List__Map$String__CityViewModel_String_CityViewModel_,List__Map$CarType__CarViewModel_CarType__CarViewModel_,List__Length$CityViewModel_CityViewModel_,List__Length$CarViewModel_CarViewModel_,List__IterateIndexed$CityViewModel_CityViewModel_,List__IterateIndexed$CarViewModel_CarViewModel_,List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_,List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_,List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String,List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_,List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_,List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_,List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_,List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_,List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_,List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_,List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_,List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_,List__FoldIndexed$Zone__list_1_Zone_Zone__list_1_Zone_,List__FoldIndexed$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_,List__FoldIndexed$String__list_1_CityViewModel_String_list_1_CityViewModel_,List__FoldIndexed$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_,List__FoldIndexed$CityViewModel__Unit_CityViewModel__Unit_,List__FoldIndexed$CityViewModel__Int32_CityViewModel__Int32,List__FoldIndexed$Car__list_1_Car_Car__list_1_Car_,List__FoldIndexed$Car__list_1_CarViewModel_Car__list_1_CarViewModel_,List__FoldIndexed$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_,List__FoldIndexed$CarViewModel__Unit_CarViewModel__Unit_,List__FoldIndexed$CarViewModel__Int32_CarViewModel__Int32,List__FoldIndexed$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_,List__Fold$Zone__list_1_Zone_Zone__list_1_Zone_,List__Fold$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_,List__Fold$String__list_1_CityViewModel_String_list_1_CityViewModel_,List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_,List__Fold$CityViewModel__Int32_CityViewModel__Int32,List__Fold$Car__list_1_Car_Car__list_1_Car_,List__Fold$Car__list_1_CarViewModel_Car__list_1_CarViewModel_,List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_,List__Fold$CarViewModel__Int32_CarViewModel__Int32,List__Fold$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_,List__Collect$Zone__CityViewModel_Zone__CityViewModel_,List__Collect$Car__CarViewModel_Car__CarViewModel_,List__Append$CityViewModel_CityViewModel_,List__Append$CarViewModel_CarViewModel_,Data__zones,Data__scopeuse,Data__cars,CreateEnumerable_1_Int32___ctor$Int32,CityViewModel___ctor$,CarViewModel___ctor$,Array__ZeroCreate$Int32_Int32,Array__ZeroCreate$CityViewModel_CityViewModel_,Array__ZeroCreate$CarViewModel_CarViewModel_;Array__ZeroCreate$CarViewModel_CarViewModel_=function(_){return new Array(_)},Array__ZeroCreate$CityViewModel_CityViewModel_=function(_){return new Array(_)},Array__ZeroCreate$Int32_Int32=function(_){return new Array(_)},CarViewModel___ctor$=function(_,e,t){var i=this;i.GroupName=_,i.Name=e,i.Coefficient=t},CityViewModel___ctor$=function(_,e,t){var i=this;i.Name=_,i.Zone=e,i.Coefficient=t},CreateEnumerable_1_Int32___ctor$Int32=function(_){var e=this;e.factory=_},List__Append$CarViewModel_CarViewModel_=function(_,e){return List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_(function(_){return function(e){return new list_1_CarViewModel__ConsCarViewModel_(e,_)}},e,List__Reverse$CarViewModel_CarViewModel_(_))},List__Append$CityViewModel_CityViewModel_=function(_,e){return List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_(function(_){return function(e){return new list_1_CityViewModel__ConsCityViewModel_(e,_)}},e,List__Reverse$CityViewModel_CityViewModel_(_))},List__Collect$Car__CarViewModel_Car__CarViewModel_=function(_,e){return List__Fold$Car__list_1_CarViewModel_Car__list_1_CarViewModel_(function(e){return function(t){return List__Append$CarViewModel_CarViewModel_(_(t),e)}},new list_1_CarViewModel__NilCarViewModel_,List__Reverse$Car_Car_(e))},List__Collect$Zone__CityViewModel_Zone__CityViewModel_=function(_,e){return List__Fold$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_(function(e){return function(t){return List__Append$CityViewModel_CityViewModel_(_(t),e)}},new list_1_CityViewModel__NilCityViewModel_,List__Reverse$Zone_Zone_(e))},List__Fold$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_=function(_,e,t){return List__FoldIndexed$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$CarViewModel__Int32_CarViewModel__Int32=function(_,e,t){return List__FoldIndexed$CarViewModel__Int32_CarViewModel__Int32(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_=function(_,e,t){return List__FoldIndexed$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$Car__list_1_CarViewModel_Car__list_1_CarViewModel_=function(_,e,t){return List__FoldIndexed$Car__list_1_CarViewModel_Car__list_1_CarViewModel_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$Car__list_1_Car_Car__list_1_Car_=function(_,e,t){return List__FoldIndexed$Car__list_1_Car_Car__list_1_Car_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$CityViewModel__Int32_CityViewModel__Int32=function(_,e,t){return List__FoldIndexed$CityViewModel__Int32_CityViewModel__Int32(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_=function(_,e,t){return List__FoldIndexed$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$String__list_1_CityViewModel_String_list_1_CityViewModel_=function(_,e,t){return List__FoldIndexed$String__list_1_CityViewModel_String_list_1_CityViewModel_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_=function(_,e,t){return List__FoldIndexed$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__Fold$Zone__list_1_Zone_Zone__list_1_Zone_=function(_,e,t){return List__FoldIndexed$Zone__list_1_Zone_Zone__list_1_Zone_(function(e){return function(e){return function(t){return _(e)(t)}}},e,t)},List__FoldIndexed$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_=function(_,e,t){return List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_(_,0,e,t)},List__FoldIndexed$CarViewModel__Int32_CarViewModel__Int32=function(_,e,t){return List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_(_,0,e,t)},List__FoldIndexed$CarViewModel__Unit_CarViewModel__Unit_=function(_,e,t){return List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_(_,0,e,t)},List__FoldIndexed$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_=function(_,e,t){return List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_(_,0,e,t)},List__FoldIndexed$Car__list_1_CarViewModel_Car__list_1_CarViewModel_=function(_,e,t){return List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_(_,0,e,t)},List__FoldIndexed$Car__list_1_Car_Car__list_1_Car_=function(_,e,t){return List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_(_,0,e,t)},List__FoldIndexed$CityViewModel__Int32_CityViewModel__Int32=function(_,e,t){return List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_(_,0,e,t)},List__FoldIndexed$CityViewModel__Unit_CityViewModel__Unit_=function(_,e,t){return List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_(_,0,e,t)},List__FoldIndexed$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_=function(_,e,t){return List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_(_,0,e,t)},List__FoldIndexed$String__list_1_CityViewModel_String_list_1_CityViewModel_=function(_,e,t){return List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String(_,0,e,t)},List__FoldIndexed$Zone__list_1_CityViewModel_Zone__list_1_CityViewModel_=function(_,e,t){return List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_(_,0,e,t)},List__FoldIndexed$Zone__list_1_Zone_Zone__list_1_Zone_=function(_,e,t){return List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_(_,0,e,t)},List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$Int32__CarViewModel_Int32_CarViewModel_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$Int32__CityViewModel_Int32_CityViewModel_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$Unit__CarViewModel_Unit__CarViewModel_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$Unit__CityViewModel_Unit__CityViewModel_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_CarViewModel__CarType_list_1_CarViewModel__CarType_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_CarViewModel__CarViewModel_list_1_CarViewModel__CarViewModel_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_CarViewModel__Car_list_1_CarViewModel__Car_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_Car__Car_list_1_Car__Car_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_CityViewModel__CityViewModel_list_1_CityViewModel__CityViewModel_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_CityViewModel__String_list_1_CityViewModel__String(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_CityViewModel__Zone_list_1_CityViewModel__Zone_(_,e+1,_(e)(t)(o),n)}return t},List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_=function(_,e,t,i){if(1==i.Tag){var n=i.Item2,o=i.Item1;return List__FoldIndexedAux$list_1_Zone__Zone_list_1_Zone__Zone_(_,e+1,_(e)(t)(o),n)}return t},List__IterateIndexed$CarViewModel_CarViewModel_=function(_,e){var t;return List__FoldIndexed$CarViewModel__Unit_CarViewModel__Unit_(function(e){return function(t){return function(t){return _(e)(t)}}},t,e)},List__IterateIndexed$CityViewModel_CityViewModel_=function(_,e){var t;return List__FoldIndexed$CityViewModel__Unit_CityViewModel__Unit_(function(e){return function(t){return function(t){return _(e)(t)}}},t,e)},List__Length$CarViewModel_CarViewModel_=function(_){return List__Fold$CarViewModel__Int32_CarViewModel__Int32(function(_){return function(e){return _+1}},0,_)},List__Length$CityViewModel_CityViewModel_=function(_){return List__Fold$CityViewModel__Int32_CityViewModel__Int32(function(_){return function(e){return _+1}},0,_)},List__Map$CarType__CarViewModel_CarType__CarViewModel_=function(_,e){return List__Reverse$CarViewModel_CarViewModel_(List__Fold$CarType__list_1_CarViewModel_CarType__list_1_CarViewModel_(function(e){return function(t){return new list_1_CarViewModel__ConsCarViewModel_(_(t),e)}},new list_1_CarViewModel__NilCarViewModel_,e))},List__Map$String__CityViewModel_String_CityViewModel_=function(_,e){return List__Reverse$CityViewModel_CityViewModel_(List__Fold$String__list_1_CityViewModel_String_list_1_CityViewModel_(function(e){return function(t){return new list_1_CityViewModel__ConsCityViewModel_(_(t),e)}},new list_1_CityViewModel__NilCityViewModel_,e))},List__Reverse$CarViewModel_CarViewModel_=function(_){return List__Fold$CarViewModel__list_1_CarViewModel_CarViewModel__list_1_CarViewModel_(function(_){return function(e){return new list_1_CarViewModel__ConsCarViewModel_(e,_)}},new list_1_CarViewModel__NilCarViewModel_,_)},List__Reverse$Car_Car_=function(_){return List__Fold$Car__list_1_Car_Car__list_1_Car_(function(_){return function(e){return new list_1_Car__ConsCar_(e,_)}},new list_1_Car__NilCar_,_)},List__Reverse$CityViewModel_CityViewModel_=function(_){return List__Fold$CityViewModel__list_1_CityViewModel_CityViewModel__list_1_CityViewModel_(function(_){return function(e){return new list_1_CityViewModel__ConsCityViewModel_(e,_)}},new list_1_CityViewModel__NilCityViewModel_,_)},List__Reverse$Zone_Zone_=function(_){return List__Fold$Zone__list_1_Zone_Zone__list_1_Zone_(function(_){return function(e){return new list_1_Zone__ConsZone_(e,_)}},new list_1_Zone__NilZone_,_)},List__ToArray$CarViewModel_CarViewModel_=function(_){var e=List__Length$CarViewModel_CarViewModel_(_),t=Array__ZeroCreate$CarViewModel_CarViewModel_(e);return List__IterateIndexed$CarViewModel_CarViewModel_(function(_){return function(e){return t[_]=e,null}},_),t},List__ToArray$CityViewModel_CityViewModel_=function(_){var e=List__Length$CityViewModel_CityViewModel_(_),t=Array__ZeroCreate$CityViewModel_CityViewModel_(e);return List__IterateIndexed$CityViewModel_CityViewModel_(function(_){return function(e){return t[_]=e,null}},_),t},MathJS__Round$=function(_){return Math.round(_)},Option__GetValue$Int32_Int32=function(_){return _.Value},Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_=function(_){return _.Value},Option__IsSome$Int32_Int32=function(_){return 1==_.Tag&&!0},Program__GetCarItems$=function(_){return List__ToArray$CarViewModel_CarViewModel_(List__Collect$Car__CarViewModel_Car__CarViewModel_(function(_){return List__Map$CarType__CarViewModel_CarType__CarViewModel_(function(e){return new CarViewModel___ctor$(_.GroupName,e.Name,e.Coefficient)},_.Type)},_))},Program__GetCityItems$=function(_){return List__ToArray$CityViewModel_CityViewModel_(List__Collect$Zone__CityViewModel_Zone__CityViewModel_(function(_){return List__Map$String__CityViewModel_String_CityViewModel_(function(e){return new CityViewModel___ctor$(e,_.Name,_.Coefficient)},_.Cities)},_))},Program__main$=function(_){var e=new ViewModel___ctor$(Program__GetCityItems$(Data__zones),Program__GetCarItems$(Data__cars),Data__scopeuse,Seq__ToArray$Int32_Int32(Range__oneStep$Int32_Int32(1950,2016)).reverse()),t=window.angular.module("App",[]);t.controller("OptionCtrl",["$scope",function(_){return _.data=e,_.calculation=function(e){var t=MathJS__Round$(270*_.selected.scopeuse.Coefficient*_.selected.city.Coefficient*_.selected.scopeuse.Coefficient);return t.toString()}}])},Range__customStep$Int32__Int32_Int32_Int32=function(_,e,t){var i=0;return Seq__Unfold$Int32__Int32_Int32_Int32(function(_){return e>i&&t>=_||i>e&&_>=t?{Tag:1,Value:new TupleInt32_Int32(_,_+e)}:{Tag:0}},_)},Range__oneStep$Int32_Int32=function(_,e){return Range__customStep$Int32__Int32_Int32_Int32(_,1,e)},Seq__Enumerator$Int32_Int32=function(_){return _.GetEnumerator()},Seq__FoldIndexed$Int32__Unit_Int32_Unit_=function(_,e,t){return Seq__FoldIndexedAux$Unit__Int32_Unit__Int32(_,e,Seq__Enumerator$Int32_Int32(t))},Seq__FoldIndexedAux$Unit__Int32_Unit__Int32=function(_,e,t){for(var i={contents:0},n={contents:e};t.MoveNext();)n.contents=_(i.contents)(n.contents)(t.get_Current()),i.contents=i.contents+1;return n.contents},Seq__FromFactory$Int32_Int32=function(_){var e;return e=new CreateEnumerable_1_Int32___ctor$Int32(_),{GetEnumerator:function(_){return function(_,e){var t;return _.factory(t)}(e,_)}}},Seq__IterateIndexed$Int32_Int32=function(_,e){var t;return Seq__FoldIndexed$Int32__Unit_Int32_Unit_(function(e){return function(t){return function(t){return _(e)(t)}}},t,e)},Seq__ToArray$Int32_Int32=function(_){var e=Array__ZeroCreate$Int32_Int32(0);return Seq__IterateIndexed$Int32_Int32(function(_){return function(t){return e[_]=t,null}},_),e},Seq__Unfold$Int32__Int32_Int32_Int32=function(_,e){return Seq__FromFactory$Int32_Int32(function(t){var i;return i=new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(e,_),{get_Current:function(_){return function(_,e){return _.current}(i,_)},Dispose:function(_){return function(_,e){}(i,_)},MoveNext:function(_){return function(_,e){var t=function(e){var t=Option__GetValue$Int32_Int32(_.acc),i=_.unfold(t);if(1==i.Tag){var n=Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(i).Items[0],o=Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(i).Items[1];return _.acc={Tag:1,Value:o},_.current=n,!0}return _.acc={Tag:0},_.current=null,!1};return Option__IsSome$Int32_Int32(_.acc)&&function(){var _;return t(_)}()}(i,_)},Reset:function(_){return function(_,e){_.acc={Tag:1,Value:_.seed},_.current=null}(i,_)}}})},TupleInt32_Int32=function(_,e){var t=this;t.Items=[_,e]},UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32=function(_,e){var t=this;t.seed=_,t.unfold=e,t.acc={Tag:1,Value:t.seed},t.current=null},ViewModel___ctor$=function(_,e,t,i){var n=this;n.city=_,n.typecar=e,n.scopeuse=t,n.years=i},list_1_CarViewModel__ConsCarViewModel_=function(_,e){var t=this;t.Tag=1,t._CaseName="Cons",t.Item1=_,t.Item2=e},list_1_CarViewModel__NilCarViewModel_=function(){var _=this;_.Tag=0,_._CaseName="Nil"},list_1_Car__ConsCar_=function(_,e){var t=this;t.Tag=1,t._CaseName="Cons",t.Item1=_,t.Item2=e},list_1_Car__NilCar_=function(){var _=this;_.Tag=0,_._CaseName="Nil"},list_1_CityViewModel__ConsCityViewModel_=function(_,e){var t=this;t.Tag=1,t._CaseName="Cons",t.Item1=_,t.Item2=e},list_1_CityViewModel__NilCityViewModel_=function(){var _=this;_.Tag=0,_._CaseName="Nil"},list_1_Zone__ConsZone_=function(_,e){var t=this;t.Tag=1,t._CaseName="Cons",t.Item1=_,t.Item2=e},list_1_Zone__NilZone_=function(){var _=this;_.Tag=0,_._CaseName="Nil"},Program__main$();