import{a as le,k as Ee,l as Fe,q as we}from"./chunk-JSQJEXI7.js";import{Da as se,Fa as F,Ia as De,Ja as B,Ka as f,La as p,N as T,Na as U,P as M,Pa as Ae,Q as te,R as j,T as v,Ua as w,V as be,Va as ae,W as ne,Wa as c,Xa as l,Ya as S,Za as C,a as d,b as h,ba as ie,bb as u,cb as Me,db as I,ea as re,ia as E,j as ve,m as ye,ma as oe,mb as x,nb as m,r as Ce,x as Ve,ya as y,za as a}from"./chunk-FZNSYI4V.js";var Re=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(a(se),a(oe))};static \u0275dir=f({type:n})}return n})(),Te=(()=>{class n extends Re{static \u0275fac=(()=>{let t;return function(r){return(t||(t=re(n)))(r||n)}})();static \u0275dir=f({type:n,features:[p]})}return n})(),he=new v("");var ct={provide:he,useExisting:M(()=>K),multi:!0};function ht(){let n=le()?le().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ft=new v(""),K=(()=>{class n extends Re{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!ht())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(a(se),a(oe),a(ft,8))};static \u0275dir=f({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&C("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[I([ct]),p]})}return n})();function g(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function je(n){return n!=null&&typeof n.length=="number"}var Be=new v(""),Ue=new v(""),pt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,D=class{static min(e){return mt(e)}static max(e){return gt(e)}static required(e){return _t(e)}static requiredTrue(e){return vt(e)}static email(e){return yt(e)}static minLength(e){return Ct(e)}static maxLength(e){return Vt(e)}static pattern(e){return bt(e)}static nullValidator(e){return He(e)}static compose(e){return Ze(e)}static composeAsync(e){return Xe(e)}};function mt(n){return e=>{if(g(e.value)||g(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function gt(n){return e=>{if(g(e.value)||g(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function _t(n){return g(n.value)?{required:!0}:null}function vt(n){return n.value===!0?null:{required:!0}}function yt(n){return g(n.value)||pt.test(n.value)?null:{email:!0}}function Ct(n){return e=>g(e.value)||!je(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function Vt(n){return e=>je(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function bt(n){if(!n)return He;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(g(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function He(n){return null}function Le(n){return n!=null}function $e(n){return Ae(n)?ye(n):n}function We(n){let e={};return n.forEach(t=>{e=t!=null?d(d({},e),t):e}),Object.keys(e).length===0?null:e}function qe(n,e){return e.map(t=>t(n))}function Dt(n){return!n.validate}function ze(n){return n.map(e=>Dt(e)?e:t=>e.validate(t))}function Ze(n){if(!n)return null;let e=n.filter(Le);return e.length==0?null:function(t){return We(qe(t,e))}}function Ye(n){return n!=null?Ze(ze(n)):null}function Xe(n){if(!n)return null;let e=n.filter(Le);return e.length==0?null:function(t){let i=qe(t,e).map($e);return Ve(i).pipe(Ce(We))}}function Ke(n){return n!=null?Xe(ze(n)):null}function Se(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Je(n){return n._rawValidators}function Qe(n){return n._rawAsyncValidators}function ue(n){return n?Array.isArray(n)?n:[n]:[]}function L(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ie(n,e){let t=ue(e);return ue(n).forEach(r=>{L(t,r)||t.push(r)}),t}function xe(n,e){return ue(e).filter(t=>!L(n,t))}var $=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},A=class extends ${name;get formDirective(){return null}get path(){return null}},G=class extends ${_parent=null;name=null;valueAccessor=null},W=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},At={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},gn=h(d({},At),{"[class.ng-submitted]":"isSubmitted"}),et=(()=>{class n extends W{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(G,2))};static \u0275dir=f({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[p]})}return n})(),tt=(()=>{class n extends W{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(A,10))};static \u0275dir=f({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[p]})}return n})();var N="VALID",H="INVALID",V="PENDING",O="DISABLED",_=class{},q=class extends _{value;source;constructor(e,t){super(),this.value=e,this.source=t}},P=class extends _{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},k=class extends _{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},b=class extends _{status;source;constructor(e,t){super(),this.status=e,this.source=t}},de=class extends _{source;constructor(e){super(),this.source=e}},ce=class extends _{source;constructor(e){super(),this.source=e}};function nt(n){return(J(n)?n.validators:n)||null}function Mt(n){return Array.isArray(n)?Ye(n):n||null}function it(n,e){return(J(e)?e.asyncValidators:n)||null}function Et(n){return Array.isArray(n)?Ke(n):n||null}function J(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ft(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new T(1e3,"");if(!i[t])throw new T(1001,"")}function wt(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new T(1002,"")})}var z=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(e){m(()=>this.statusReactive.set(e))}_status=x(()=>this.statusReactive());statusReactive=F(void 0);get valid(){return this.status===N}get invalid(){return this.status===H}get pending(){return this.status==V}get disabled(){return this.status===O}get enabled(){return this.status!==O}errors;get pristine(){return m(this.pristineReactive)}set pristine(e){m(()=>this.pristineReactive.set(e))}_pristine=x(()=>this.pristineReactive());pristineReactive=F(!0);get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(e){m(()=>this.touchedReactive.set(e))}_touched=x(()=>this.touchedReactive());touchedReactive=F(!1);get untouched(){return!this.touched}_events=new ve;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ie(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return L(this._rawValidators,e)}hasAsyncValidator(e){return L(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(d({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new k(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new k(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(d({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new P(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new P(!0,i))}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(d({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(h(d({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new q(this.value,i)),this._events.next(new b(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=N,this._forEachChild(i=>{i.enable(h(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===V)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new q(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(d({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=$e(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(H)?H:N}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new P(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new k(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){J(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Et(this._rawAsyncValidators)}},Z=class extends z{constructor(e,t,i){super(nt(t),it(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){wt(this,!0,e),Object.keys(e).forEach(i=>{Ft(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var fe=new v("CallSetDisabledState",{providedIn:"root",factory:()=>Q}),Q="always";function St(n,e){return[...e.path,n]}function Ne(n,e,t=Q){pe(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),xt(n,e),Ot(n,e),Nt(n,e),It(n,e)}function Oe(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),X(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Y(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function It(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function pe(n,e){let t=Je(n);e.validator!==null?n.setValidators(Se(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Qe(n);e.asyncValidator!==null?n.setAsyncValidators(Se(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Y(e._rawValidators,r),Y(e._rawAsyncValidators,r)}function X(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=Je(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Qe(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Y(e._rawValidators,i),Y(e._rawAsyncValidators,i),t}function xt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&rt(n,e)})}function Nt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&rt(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function rt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ot(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Pt(n,e){n==null,pe(n,e)}function kt(n,e){return X(n,e)}function Gt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Rt(n){return Object.getPrototypeOf(n.constructor)===Te}function Tt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function jt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===K?t=o:Rt(o)?i=o:r=o}),r||i||t||null}function Bt(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Pe(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function ke(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var R=class extends z{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(nt(t),it(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),J(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ut=n=>n instanceof R;var ot=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=f({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),Ht={provide:he,useExisting:M(()=>me),multi:!0},me=(()=>{class n extends Te{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=re(n)))(r||n)}})();static \u0275dir=f({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&C("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[I([Ht]),p]})}return n})();var st=new v("");var Lt={provide:A,useExisting:M(()=>ge)},ge=(()=>{class n extends A{callSetDisabledState;get submitted(){return m(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=x(()=>this._submittedReactive());_submittedReactive=F(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new E;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(X(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return Ne(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Oe(t.control||null,t,!1),Bt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),Tt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new de(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ce(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(Oe(i||null,t),Ut(r)&&(Ne(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Pt(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&kt(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){pe(this.form,this),this._oldForm&&X(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(a(Be,10),a(Ue,10),a(fe,8))};static \u0275dir=f({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&C("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[I([Lt]),p,ie]})}return n})();var $t={provide:G,useExisting:M(()=>_e)},_e=(()=>{class n extends G{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new E;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=jt(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Gt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return St(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(a(A,13),a(Be,10),a(Ue,10),a(he,10),a(st,8))};static \u0275dir=f({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[I([$t]),p,ie]})}return n})();var at=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=B({type:n});static \u0275inj=j({})}return n})();var lt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:fe,useValue:t.callSetDisabledState??Q}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=B({type:n});static \u0275inj=j({imports:[at]})}return n})(),ut=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:st,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:fe,useValue:t.callSetDisabledState??Q}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=B({type:n});static \u0275inj=j({imports:[at]})}return n})();var ee=class n{constructor(e){this.http=e}baseServerURL="http://localhost:3000/ContactData";postData(e){return this.http.post(this.baseServerURL,e)}static \u0275fac=function(t){return new(t||n)(be(we))};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})};function qt(n,e){n&1&&(c(0,"small"),u(1,"Fill The Field First"),l())}function zt(n,e){n&1&&(c(0,"small"),u(1,"Fill The Field First"),l())}function Zt(n,e){n&1&&(c(0,"small"),u(1,"Fill The Field First"),l())}var dt=class n{gmail1="sv8144906@gmail.com";gmail2="talk2ritiksharma@gmail.com";service=ne(ee);contactform=new Z({name:new R("",D.required),phonemumber:new R("",D.required),message:new R("",D.required)});submitted=!1;Contactus(e){this.submitted=!0,this.service.postData(e).subscribe(t=>{this.contactform.valid?(alert("Data Saved Successfully"),console.log(t),this.submitted=!1,this.contactform.reset()):(alert("Please Fill All The Fields"),this.submitted=!0)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=De({type:n,selectors:[["app-contact"]],decls:38,vars:6,consts:[[1,"text-gray-600","body-font","relative"],[1,"container","px-5","py-24","mx-auto"],[1,"flex","flex-col","text-center","w-full","mb-12"],[1,"sm:text-3xl","text-2xl","font-medium","title-font","mb-4","text-gray-900"],[1,"lg:w-2/3","mx-auto","leading-relaxed","text-base"],[3,"formGroup"],[1,"lg:w-1/2","md:w-2/3","mx-auto"],[1,"flex","flex-wrap","-m-2"],[1,"p-2","w-1/2"],[1,"relative"],["for","name",1,"leading-7","text-sm","text-gray-600"],["type","text","placeholder","Enter Your Name","id","name","name","name","formControlName","name",1,"w-full","bg-gray-100","bg-opacity-50","rounded","border","border-gray-300","focus:border-red-500","focus:bg-white","focus:ring-2","focus:ring-red-200","text-base","outline-none","text-gray-700","py-1","px-3","leading-8","transition-colors","duration-200","ease-in-out"],[4,"ngIf"],["for","number",1,"leading-7","text-sm","text-gray-600"],["type","number","placeholder","Enter Your Phone Number","id","number","name","number","formControlName","phonemumber",1,"w-full","bg-gray-100","bg-opacity-50","rounded","border","border-gray-300","focus:border-red-500","focus:bg-white","focus:ring-2","focus:ring-red-200","text-base","outline-none","text-gray-700","py-1","px-3","leading-8","transition-colors","duration-200","ease-in-out"],[1,"p-2","w-full"],["for","message",1,"leading-7","text-sm","text-gray-600"],["id","message","placeholder","We\u2019re excited to hear from you! Drop us a message and we\u2019ll get back to you ASAP.","name","message","formControlName","message",1,"w-full","bg-gray-100","bg-opacity-50","rounded","border","border-gray-300","focus:border-red-500","focus:bg-white","focus:ring-2","focus:ring-red-200","h-32","text-base","outline-none","text-gray-700","py-1","px-3","resize-none","leading-6","transition-colors","duration-200","ease-in-out"],[1,"flex","mx-auto","text-white","bg-red-500","border-0","py-2","px-8","focus:outline-none","hover:bg-red-600","rounded","text-lg",3,"click"],[1,"p-2","w-full","pt-8","mt-8","border-t","border-gray-200","text-center"],[1,"text-red-500"],[1,"leading-normal","my-5"]],template:function(t,i){if(t&1&&(c(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),u(4,"Contact Us"),l(),c(5,"p",4),u(6,"Have a question or want to collaborate? Reach out to us today!"),l()(),c(7,"form",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"label",10),u(13,"Name"),l(),S(14,"input",11),l(),U(15,qt,2,0,"small",12),l(),c(16,"div",8)(17,"div",9)(18,"label",13),u(19,"Phone Number"),l(),S(20,"input",14),U(21,zt,2,0,"small",12),l()(),c(22,"div",15)(23,"div",9)(24,"label",16),u(25,"Message"),l(),S(26,"textarea",17),U(27,Zt,2,0,"small",12),l()(),c(28,"div",15)(29,"button",18),C("click",function(){return i.Contactus(i.contactform.value)}),u(30,"Contact"),l()(),c(31,"div",19)(32,"p",20),u(33),l(),c(34,"p",21),u(35,"Chandigarh. "),S(36,"br"),u(37," Sahibzada AjitSingh Nagar"),l()()()()()()()),t&2){let r,o,s;y(7),w("formGroup",i.contactform),y(8),w("ngIf",i.submitted&&((r=i.contactform.get("name"))==null||r.errors==null?null:r.errors.required)),y(6),w("ngIf",i.submitted&&((o=i.contactform.get("phonemumber"))==null||o.errors==null?null:o.errors.required)),y(6),w("ngIf",i.submitted&&((s=i.contactform.get("message"))==null||s.errors==null?null:s.errors.required)),y(6),Me("",i.gmail1,", ",i.gmail2,"")}},dependencies:[lt,ot,K,me,et,tt,Fe,Ee,ut,ge,_e],encapsulation:2})};export{dt as ContactComponent};
