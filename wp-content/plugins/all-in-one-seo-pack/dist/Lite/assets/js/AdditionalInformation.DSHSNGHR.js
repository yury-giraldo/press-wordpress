import{a as k,u as C,h as O,o as T}from"./links.BdfvOpfI.js";import"./default-i18n.Bd0Z306Z.js";import{x as l,c as d,C as n,m as p,o as m,a as o,D as _,t as r,d as c,H as P}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as R}from"./_plugin-vue_export-helper.BN1snXvA.js";import{u as x,W as L}from"./Wizard.IK5EtNlL.js";import{M as U}from"./MaxCounts.DHV7qSQX.js";import{B as A}from"./Phone.DzmCIyx3.js";import{B}from"./RadioToggle.BLVmJ7Zx.js";import{C as M}from"./ImageUploader.C6Cwe3Rr.js";import{C as D}from"./SocialProfiles.IcM-YzR_.js";import{W as J,a as E,b as H}from"./Header.C8Nn99xd.js";import{W as Y}from"./CloseAndExit.PLtHwQVu.js";import{_ as G}from"./Steps.Dl3mq070.js";import"./helpers.pkmhnyB1.js";import"./addons.C79zowsK.js";import"./upperFirst.Wa3gt1AT.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.C-weURPh.js";import"./preload-helper.M0ZNWaht.js";import"./Caret.iRBf3wcH.js";import"./Img.C6u5nam7.js";import"./index.BQgiQQKQ.js";import"./Plus.DrDYrwHh.js";import"./Checkbox.D2dfpbIi.js";import"./Checkmark.pCOnqh_g.js";import"./Textarea.BgYpy-yd.js";import"./SettingsRow.DQldd-1Z.js";import"./Row.CzuhYwfs.js";import"./Twitter.BZyxMZgm.js";import"./Logo.DoVR4qom.js";import"./Index.BT4iixVo.js";const j={setup(){const{strings:a}=x();return{optionsStore:k(),rootStore:C(),setupWizardStore:O(),composableStrings:a}},components:{BasePhone:A,BaseRadioToggle:B,CoreImageUploader:M,CoreSocialProfiles:D,WizardBody:J,WizardCloseAndExit:Y,WizardContainer:E,WizardHeader:H,WizardSteps:G},mixins:[U,L],data(){return{showOtherSocialNetworks:!1,loaded:!1,loading:!1,stage:"additional-information",strings:T(this.composableStrings,{additionalSiteInformation:this.$t.__("Additional Site Information",this.$td),personOrOrganization:this.$t.__("Person or Organization",this.$td),choosePerson:this.$t.__("Choose a Person",this.$td),person:this.$t.__("Person",this.$td),organization:this.$t.__("Organization",this.$td),personOrOrganizationDescription:this.$t.__("Choose whether the site represents a person or an organization.",this.$td),name:this.$t.__("Name",this.$td),organizationName:this.$t.__("Organization Name",this.$td),phone:this.$t.__("Phone Number",this.$td),chooseContactType:this.$t.__("Choose a Contact Type",this.$td),contactType:this.$t.__("Contact Type",this.$td),contactTypeDescription:this.$t.__("Select which team or department the phone number belongs to.",this.$td),logo:this.$t.__("Logo",this.$td),defaultSocialShareImage:this.$t.__("Default Social Share Image",this.$td),yourSocialProfiles:this.$t.__("Your Social Profiles",this.$td),showMore:this.$t.__("Show more",this.$td)})}},watch:{"optionsStore.options.social.profiles":{deep:!0,handler(a){this.setupWizardStore.additionalInformation.social.profiles=a}}},computed:{users(){return[{label:this.$t.__("Manually Enter Person",this.$td),value:"manual"}].concat(this.rootStore.aioseo.users.map(a=>({label:`${a.displayName} (${a.email})`,gravatar:a.gravatar,value:a.id})))}},methods:{getPersonOptions(a){return this.users.find(e=>e.value===a)},getContactTypeOptions(a){return this.$constants.CONTACT_TYPES.find(e=>e.value===a)},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("additionalInformation").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})},showHideOtherSocialNetworks(){this.showOtherSocialNetworks=!this.showOtherSocialNetworks}},mounted(){this.$nextTick(()=>{const a=JSON.parse(JSON.stringify(this.optionsStore.options.searchAppearance)),e=JSON.parse(JSON.stringify(this.optionsStore.options.social));this.setupWizardStore.additionalInformation.social.profiles=JSON.parse(JSON.stringify(e.profiles)),this.setupWizardStore.additionalInformation.socialShareImage=e.facebook.general.defaultImagePosts,this.setupWizardStore.additionalInformation.siteRepresents=a.global.schema.siteRepresents,this.setupWizardStore.additionalInformation.person=a.global.schema.person,this.setupWizardStore.additionalInformation.organizationName=a.global.schema.organizationName,this.setupWizardStore.additionalInformation.organizationLogo=a.global.schema.organizationLogo,this.setupWizardStore.additionalInformation.personName=a.global.schema.personName,this.setupWizardStore.additionalInformation.personLogo=a.global.schema.personLogo,this.setupWizardStore.additionalInformation.phone=a.global.schema.phone,this.setupWizardStore.additionalInformation.contactType=a.global.schema.contactType,this.setupWizardStore.additionalInformation.contactTypeManual=a.global.schema.contactTypeManual,this.loaded=!0})}},q={class:"aioseo-wizard-additional-information"},F={class:"header"},K={class:"person-or-organization aioseo-settings-row no-border no-margin"},Q={class:"settings-name"},X={class:"name small-margin"},Z={class:"aioseo-description"},$={key:0,class:"aioseo-settings-row no-border no-margin"},oo={class:"settings-name"},to={class:"name small-margin"},eo={class:"person-label"},io={key:0,class:"person-avatar"},ao=["src"],so={class:"person-name"},no={class:"person-label"},ro={key:0,class:"person-avatar"},lo=["src"],mo={class:"person-name"},co={key:1,class:"schema-graph-name aioseo-settings-row no-border no-margin"},po={class:"settings-name"},ho={class:"name small-margin"},_o={key:2,class:"schema-graph-name aioseo-settings-row no-border no-margin"},go={class:"settings-name"},uo={class:"name small-margin"},fo={key:3,class:"schema-graph-phone aioseo-settings-row no-border no-margin"},zo={class:"settings-name"},So={class:"name small-margin"},vo={key:4,class:"schema-graph-contact-type aioseo-settings-row no-border no-margin"},Wo={class:"settings-name"},Io={class:"name small-margin"},yo={class:"aioseo-description"},bo={key:5,class:"schema-graph-contact-type-manual aioseo-settings-row no-border no-margin"},wo={class:"settings-name"},No={class:"name small-margin"},Vo={key:6,class:"schema-graph-image aioseo-settings-row no-border no-margin"},ko={class:"settings-name"},Co={class:"name small-margin"},Oo={key:7,class:"schema-graph-image aioseo-settings-row no-border no-margin"},To={class:"settings-name"},Po={class:"name small-margin"},Ro={class:"schema-graph-image aioseo-settings-row"},xo={class:"settings-name"},Lo={class:"name small-margin"},Uo={class:"header social"},Ao={class:"go-back"},Bo=o("div",{class:"spacer"},null,-1);function Mo(a,e,Do,t,s,h){const S=l("wizard-header"),v=l("wizard-steps"),W=l("base-radio-toggle"),f=l("base-select"),g=l("base-input"),I=l("base-phone"),u=l("core-image-uploader"),y=l("core-social-profiles"),z=l("router-link"),b=l("base-button"),w=l("wizard-body"),N=l("wizard-close-and-exit"),V=l("wizard-container");return m(),d("div",q,[n(S),n(V,null,{default:p(()=>[n(w,null,{footer:p(()=>[o("div",Ao,[n(z,{to:t.setupWizardStore.getPrevLink,class:"no-underline"},{default:p(()=>[_("←")]),_:1},8,["to"]),_("   "),n(z,{to:t.setupWizardStore.getPrevLink},{default:p(()=>[_(r(s.strings.goBack),1)]),_:1},8,["to"])]),Bo,n(b,{type:"blue",loading:s.loading,onClick:h.saveAndContinue},{default:p(()=>[_(r(s.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:p(()=>[n(v),o("div",F,r(s.strings.additionalSiteInformation),1),o("div",K,[o("div",Q,[o("div",X,r(s.strings.personOrOrganization),1)]),n(W,{modelValue:t.setupWizardStore.additionalInformation.siteRepresents,"onUpdate:modelValue":e[0]||(e[0]=i=>t.setupWizardStore.additionalInformation.siteRepresents=i),name:"siteRepresents",options:[{label:s.strings.person,value:"person"},{label:s.strings.organization,value:"organization"}]},null,8,["modelValue","options"]),o("div",Z,r(s.strings.personOrOrganizationDescription),1)]),t.setupWizardStore.additionalInformation.siteRepresents==="person"?(m(),d("div",$,[o("div",oo,[o("div",to,r(s.strings.choosePerson),1)]),n(f,{class:"person-chooser",options:h.users,modelValue:h.getPersonOptions(t.setupWizardStore.additionalInformation.person),"onUpdate:modelValue":e[1]||(e[1]=i=>t.setupWizardStore.additionalInformation.person=i.value)},{singleLabel:p(({option:i})=>[o("div",eo,[i.gravatar?(m(),d("div",io,[o("img",{alt:"User Gravatar",src:i.gravatar},null,8,ao)])):c("",!0),o("div",so,r(i.label),1)])]),option:p(({option:i})=>[o("div",no,[i.gravatar?(m(),d("div",ro,[o("img",{alt:"User Gravatar",src:i.gravatar},null,8,lo)])):c("",!0),o("div",mo,r(i.label),1)])]),_:1},8,["options","modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",co,[o("div",po,[o("div",ho,r(s.strings.organizationName),1)]),n(g,{size:"medium",modelValue:t.setupWizardStore.additionalInformation.organizationName,"onUpdate:modelValue":e[2]||(e[2]=i=>t.setupWizardStore.additionalInformation.organizationName=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents!=="organization"&&t.setupWizardStore.additionalInformation.person==="manual"?(m(),d("div",_o,[o("div",go,[o("div",uo,r(s.strings.name),1)]),n(g,{size:"medium",modelValue:t.setupWizardStore.additionalInformation.personName,"onUpdate:modelValue":e[3]||(e[3]=i=>t.setupWizardStore.additionalInformation.personName=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",fo,[o("div",zo,[o("div",So,r(s.strings.phone),1)]),n(I,{modelValue:t.setupWizardStore.additionalInformation.phone,"onUpdate:modelValue":e[4]||(e[4]=i=>t.setupWizardStore.additionalInformation.phone=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",vo,[o("div",Wo,[o("div",Io,r(s.strings.contactType),1)]),n(f,{size:"medium",options:a.$constants.CONTACT_TYPES,placeholder:s.strings.chooseContactType,modelValue:h.getContactTypeOptions(t.setupWizardStore.additionalInformation.contactType),"onUpdate:modelValue":e[5]||(e[5]=i=>t.setupWizardStore.additionalInformation.contactType=i.value)},null,8,["options","placeholder","modelValue"]),o("div",yo,r(s.strings.contactTypeDescription),1)])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"&&t.setupWizardStore.additionalInformation.contactType==="manual"?(m(),d("div",bo,[o("div",wo,[o("div",No,r(s.strings.contactType),1)]),n(g,{size:"medium",modelValue:t.setupWizardStore.additionalInformation.contactTypeManual,"onUpdate:modelValue":e[6]||(e[6]=i=>t.setupWizardStore.additionalInformation.contactTypeManual=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",Vo,[o("div",ko,[o("div",Co,r(s.strings.logo),1)]),n(u,{modelValue:t.setupWizardStore.additionalInformation.organizationLogo,"onUpdate:modelValue":e[7]||(e[7]=i=>t.setupWizardStore.additionalInformation.organizationLogo=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents!=="organization"&&t.setupWizardStore.additionalInformation.person==="manual"?(m(),d("div",Oo,[o("div",To,[o("div",Po,r(s.strings.logo),1)]),n(u,{modelValue:t.setupWizardStore.additionalInformation.personLogo,"onUpdate:modelValue":e[8]||(e[8]=i=>t.setupWizardStore.additionalInformation.personLogo=i)},null,8,["modelValue"])])):c("",!0),o("div",Ro,[o("div",xo,[o("div",Lo,r(s.strings.defaultSocialShareImage),1)]),n(u,{modelValue:t.setupWizardStore.additionalInformation.socialShareImage,"onUpdate:modelValue":e[9]||(e[9]=i=>t.setupWizardStore.additionalInformation.socialShareImage=i)},null,8,["modelValue"])]),o("div",Uo,r(s.strings.yourSocialProfiles),1),s.loaded?(m(),d("div",{key:8,class:P(["social-profiles",{"show-more":s.showOtherSocialNetworks}])},[n(y,{leftSize:"4",rightSize:"8",sameUsernameWidth:"4",hideAdditionalProfiles:""}),o("a",{class:"show-more-link aioseo-col col-md-offset-4",onClick:e[10]||(e[10]=(...i)=>h.showHideOtherSocialNetworks&&h.showHideOtherSocialNetworks(...i))},r(s.strings.showMore),1)],2)):c("",!0)]),_:1}),n(N)]),_:1})])}const zt=R(j,[["render",Mo]]);export{zt as default};
